import { useEffect, useState } from "react";

import globalStyles from "./helper.module.css";
import styles from "./scoreboard.module.css";
import classNames from "classnames";
import {
  advantageCards,
  primaryCards,
  secondaryCards,
  CARDS,
} from "./scoreboard/cards";
import {
  AdvantageCards,
  BattleCard,
  BlueToken,
  RedToken,
} from "./scoreboard/images";
import { RoundTracker } from "./scoreboard/common";
import { Card } from "./scoreboard/types";

type SecondaryPoints = {
  red: number[];
  blue: number[];
};

interface Storage {
  bluePoints: number;
  redPoints: number;
  round: number;
  secondaryObjectiveRewards: number[];
  secondaryObjectivesScored: {
    blue: number[];
    red: number[];
  };
  selectedBlueAdvantage: string;
  selectedPrimary: string;
  selectedRedAdvantage: string;
  selectedSecondary: string;
}

export const Scoreboard = () => {
  const [primaryObjective, setPrimaryObjective] = useState<Card>();
  const [secondaryObjective, setSecondaryObjective] = useState<Card>();
  const [blueAdvantage, setBlueAdvantage] = useState<Card>();
  const [redAdvantage, setRedAdvantage] = useState<Card>();
  const [round, setRound] = useState(0);
  const [disableRoundButton, setDisableRoundButton] = useState(false);

  const [bluePoints, setBluePoints] = useState(0);
  const [redPoints, setRedPoints] = useState(0);
  const [secondaryPoints, setSecondaryPoints] = useState<SecondaryPoints>({
    blue: [],
    red: [],
  });
  const [secondaryGoals, setSecondaryGoals] = useState<number[]>([]);

  const [reset, setReset] = useState(false);
  const isReady =
    primaryObjective && secondaryObjective && blueAdvantage && redAdvantage;

  useEffect(() => {
    const storage = {
      selectedPrimary: primaryObjective?.id,
      selectedSecondary: secondaryObjective?.id,
      selectedBlueAdvantage: blueAdvantage?.id,
      selectedRedAdvantage: redAdvantage?.id,
      bluePoints: bluePoints,
      redPoints: redPoints,
      secondaryObjectiveRewards: secondaryObjective?.scoring,
      secondaryObjectivesScored: secondaryPoints,
      round: round,
    };

    if (isReady) {
      window.localStorage.setItem("savedState", JSON.stringify(storage));
    }

    if (reset) {
      window.localStorage.removeItem("savedState");
      setPrimaryObjective(undefined);
      setSecondaryObjective(undefined);
      setBlueAdvantage(undefined);
      setRedAdvantage(undefined);
      setRound(0);
      setRedPoints(0);
      setBluePoints(0);
      setSecondaryPoints({ blue: [], red: [] });
      setReset(false);
    }
  }, [
    blueAdvantage,
    primaryObjective,
    redAdvantage,
    secondaryObjective,
    reset,
    secondaryPoints,
    round,
    redPoints,
    bluePoints,
  ]);

  useEffect(() => {
    const state = window.localStorage.getItem("savedState");

    if (!state) {
      return;
    }
    const storage = JSON.parse(state) as Storage;

    setPrimaryObjective(
      primaryCards.find((card) => card.id === storage.selectedPrimary)
    );
    setSecondaryObjective(
      secondaryCards.find((card) => card.id === storage.selectedSecondary)
    );
    setSecondaryPoints(storage.secondaryObjectivesScored);
    setBlueAdvantage(
      advantageCards.find((card) => card.id === storage.selectedBlueAdvantage)
    );
    setRedAdvantage(
      advantageCards.find((card) => card.id === storage.selectedRedAdvantage)
    );
    setRound(storage.round);
    setRedPoints(storage.redPoints);
    setBluePoints(storage.bluePoints);
  }, []);

  function gtmSelection(selection: string) {
    window.dataLayer?.push({
      event: "selectionMade",
      selectedElement: selection,
    });
  }

  function startRound() {
    setRound(1);
    setSecondaryGoals(secondaryObjective?.scoring!);
    setSecondaryPoints({
      blue: new Array(secondaryObjective?.scoring?.length).fill(0),
      red: new Array(secondaryObjective?.scoring?.length).fill(0),
    });
  }

  function scoreSecondary(player: "red" | "blue", index?: number) {
    if (secondaryObjective?.id === CARDS.MARKED_TARGETS && index === 0) {
      setSecondaryPoints((current) => {
        const newScore = current[player][0] + 1;
        return { ...current, [player]: [newScore] };
      });

      if (player === "blue") {
        setBluePoints((current) => current + 1);
      }
      if (player === "red") {
        setRedPoints((current) => current + 1);
      }
      return;
    }

    const scoreIndex = index ?? round - 1;
    const pointValue = secondaryGoals[scoreIndex];
    setSecondaryPoints((current) => {
      const playerCurrent = current[player];
      playerCurrent[scoreIndex] = pointValue;
      const newCurrent = {
        ...current,
        [player]: playerCurrent,
      };
      return newCurrent;
    });
    if (player === "blue") {
      setBluePoints((current) => current + pointValue);
    }
    if (player === "red") {
      setRedPoints((current) => current + pointValue);
    }
  }

  function reduceBluePoint() {
    setBluePoints((current) => (current - 1 < 0 ? 0 : current - 1));
  }
  function reduceRedPoint() {
    setRedPoints((current) => (current - 1 < 0 ? 0 : current - 1));
  }

  function selectScreen() {
    return (
      <div className={styles.instructions}>
        <h3>
          Caution! This is a BETA version. Please provide feedback if encounter
          problems or have suggestions.
        </h3>
        <p>
          When the mission has been built, use this app to keep track of the
          scores.
        </p>
        <p>
          Select your Primary, Secondary, both Advantages and which side the
          blue player is at, and click Go!
        </p>
        <p>
          <strong>Note:</strong> This app should save state, unless your browser
          blocks access to its storage. To find out, make all selections below
          and refresh the page. It should bring up the selected parameters.
        </p>
        <div className={styles.selection}>
          <button
            className={globalStyles.button}
            onClick={() => {
              if (confirm("Are you sure? This will reset everything!")) {
                setReset(true);
              }
            }}
          >
            Start Over
          </button>
          <select
            name="primary"
            className={styles.select}
            value={!primaryObjective ? 0 : primaryObjective.id}
            onChange={(e) => {
              gtmSelection(e.currentTarget.value);
              setPrimaryObjective(
                primaryCards.find((card) => card.id === e.currentTarget.value)
              );
            }}
          >
            <option value={0}>Choose Primary Objective</option>
            {primaryCards.map((card) => {
              return (
                <option value={card.id} key={card.id}>
                  {card.name}
                </option>
              );
            })}
          </select>
          <select
            name="secondary"
            className={styles.select}
            value={!secondaryObjective ? 0 : secondaryObjective.id}
            onChange={(e) => {
              gtmSelection(e.currentTarget.value);
              setSecondaryObjective(
                secondaryCards.find((card) => card.id === e.currentTarget.value)
              );
            }}
          >
            <option value={0}>Choose Secondary Objective</option>
            {secondaryCards.map((card) => {
              return (
                <option value={card.id} key={card.id}>
                  {card.name}
                </option>
              );
            })}
          </select>
          <select
            name="blue"
            className={styles.select}
            value={!blueAdvantage ? 0 : blueAdvantage.id}
            onChange={(e) => {
              gtmSelection(e.currentTarget.value);
              setBlueAdvantage(
                advantageCards.find((card) => card.id === e.currentTarget.value)
              );
            }}
          >
            <option value={0}>Choose Blue Player Advantage</option>
            {advantageCards.map((card) => {
              return (
                <option value={card.id} key={card.id}>
                  {card.name}
                </option>
              );
            })}
          </select>
          <select
            name="red"
            className={styles.select}
            value={!redAdvantage ? 0 : redAdvantage.id}
            onChange={(e) => {
              gtmSelection(e.currentTarget.value);
              setRedAdvantage(
                advantageCards.find((card) => card.id === e.currentTarget.value)
              );
            }}
          >
            <option value="">Choose Red Player Advantage</option>
            {advantageCards.map((card) => {
              return (
                <option value={card.id} key={card.id}>
                  {card.name}
                </option>
              );
            })}
          </select>
          {isReady && (
            <button className={globalStyles.button} onClick={startRound}>
              Go!
            </button>
          )}
        </div>
      </div>
    );
  }

  function bringThemToHeel() {
    return (
      <div className={styles.secondaryObjectiveContainer}>
        <div className={styles.objectiveCard}>
          <BattleCard card={secondaryObjective} />
          {secondaryPoints.blue[4] !== 0 && (
            <div className={styles.bluePanic}>
              <BlueToken />
            </div>
          )}
          {secondaryPoints.blue[5] !== 0 && (
            <div className={styles.blueSuppression}>
              <BlueToken />
            </div>
          )}
          {secondaryPoints.red[4] !== 0 && (
            <div className={styles.redPanic}>
              <RedToken />
            </div>
          )}
          {secondaryPoints.red[5] !== 0 && (
            <div className={styles.redSuppression}>
              <RedToken />
            </div>
          )}
        </div>
        <div className={styles.secondaryObjectiveButtons}>
          <div className={styles.secondaryPlayerContainer}>
            <h3 className={globalStyles.header3}>Blue Player:</h3>
            <button
              className={classNames(
                globalStyles.button,
                styles.blueButton,
                styles.objectiveButton
              )}
              disabled={secondaryPoints.blue[4] !== 0}
              onClick={() => {
                scoreSecondary("blue", 4);
              }}
            >
              Enemy unit panicked
            </button>
            <button
              className={classNames(
                globalStyles.button,
                styles.blueButton,
                styles.objectiveButton
              )}
              disabled={secondaryPoints.blue[5] !== 0}
              onClick={() => {
                scoreSecondary("blue", 5);
              }}
            >
              All enemy units suppressed
            </button>
          </div>
          <div className={styles.secondaryPlayerContainer}>
            <h3 className={globalStyles.header3}>Red Player:</h3>
            <button
              className={classNames(
                globalStyles.button,
                styles.redButton,
                styles.objectiveButton
              )}
              disabled={secondaryPoints.red[4] !== 0}
              onClick={() => {
                scoreSecondary("red", 4);
              }}
            >
              Enemy unit panicked
            </button>

            <button
              className={classNames(
                globalStyles.button,
                styles.redButton,
                styles.objectiveButton
              )}
              disabled={secondaryPoints.red[5] !== 0}
              onClick={() => {
                scoreSecondary("red", 5);
              }}
            >
              All enemy units suppressed
            </button>
          </div>
        </div>
      </div>
    );
  }

  function destroyEnemyBase() {
    return (
      <div className={styles.secondaryObjectiveContainer}>
        <div className={styles.objectiveCard}>
          <BattleCard card={secondaryObjective} />

          {secondaryPoints.blue[0] !== 0 && (
            <div className={styles.blueDestroyGoal}>
              <BlueToken />
            </div>
          )}
          {secondaryPoints.red[0] !== 0 && (
            <div className={styles.redDestroyGoal}>
              <RedToken />
            </div>
          )}
        </div>
        <div className={styles.secondaryObjectiveButtons}>
          <div className={styles.secondaryPlayerContainer}>
            <h3 className={globalStyles.header3}>Blue Player:</h3>
            <button
              className={classNames(
                globalStyles.button,
                styles.blueButton,
                styles.objectiveButton
              )}
              disabled={secondaryPoints.blue[0] !== 0}
              onClick={() => {
                scoreSecondary("blue", 0);
              }}
            >
              <div className={styles.objectiveChecked}>
                {secondaryPoints.blue[0] !== 0 && <BlueToken />}
                Destroyed enemy base
              </div>
            </button>
            <h3 className={globalStyles.header3}>Red Player:</h3>
            <button
              className={classNames(
                globalStyles.button,
                styles.redButton,
                styles.objectiveButton
              )}
              disabled={secondaryPoints.red[0] !== 0}
              onClick={() => {
                scoreSecondary("red", 0);
              }}
            >
              <div className={styles.objectiveChecked}>
                {secondaryPoints.red[0] !== 0 && <RedToken />}
                Destroyed enemy base
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  function surfaceScan() {
    const disabled = round <= 1;
    return (
      <div className={styles.secondaryObjectiveContainer}>
        <div className={styles.objectiveCard}>
          <BattleCard card={secondaryObjective} />
        </div>
        <div className={styles.secondaryObjectiveButtons}>
          <div className={styles.secondaryPlayerContainer}>
            <h3 className={globalStyles.header3}>Blue Player:</h3>
            <button
              className={classNames(
                globalStyles.button,
                styles.blueButton,
                styles.objectiveButton
              )}
              disabled={disabled || secondaryPoints.blue[round - 2] !== 0}
              onClick={() => {
                scoreSecondary("blue", round - 2);
              }}
            >
              <div className={styles.objectiveChecked}>
                {round !== 1 && secondaryPoints.blue[round - 2] !== 0 && (
                  <BlueToken />
                )}
                Score Surface Scan this round
              </div>
            </button>
            <button
              className={classNames(
                globalStyles.button,
                styles.blueButton,
                styles.objectiveButton
              )}
              disabled={secondaryPoints.blue[4] !== 0}
              onClick={() => {
                scoreSecondary("blue", 4);
              }}
            >
              <div className={styles.objectiveChecked}>
                {secondaryPoints.blue[4] !== 0 && <BlueToken />}
                Score contested enemy Scanner
              </div>
            </button>
            <h3 className={globalStyles.header3}>Red Player:</h3>
            <button
              className={classNames(
                globalStyles.button,
                styles.redButton,
                styles.objectiveButton
              )}
              disabled={disabled || secondaryPoints.red[round - 2] !== 0}
              onClick={() => {
                scoreSecondary("red", round - 2);
              }}
            >
              <div className={styles.objectiveChecked}>
                {round !== 1 && secondaryPoints.red[round - 2] !== 0 && (
                  <RedToken />
                )}
                Score Surface Scan this round
              </div>
            </button>
            <button
              className={classNames(
                globalStyles.button,
                styles.redButton,
                styles.objectiveButton
              )}
              disabled={secondaryPoints.red[4] !== 0}
              onClick={() => {
                scoreSecondary("red", 4);
              }}
            >
              <div className={styles.objectiveChecked}>
                {secondaryPoints.red[4] !== 0 && <RedToken />}
                Score contested enemy Scanner
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  function sweepAndClear() {
    return (
      <div className={styles.secondaryObjectiveContainer}>
        <div className={styles.objectiveCard}>
          <BattleCard card={secondaryObjective} />

          {secondaryPoints.blue[0] !== 0 && (
            <div className={styles.blueAny}>
              <BlueToken />
            </div>
          )}
          {secondaryPoints.blue[1] !== 0 && (
            <div className={styles.blueFriendly}>
              <BlueToken />
            </div>
          )}
          {secondaryPoints.blue[2] !== 0 && (
            <div className={styles.blueContested}>
              <BlueToken />
            </div>
          )}
          {secondaryPoints.blue[3] !== 0 && (
            <div className={styles.blueEnemy}>
              <BlueToken />
            </div>
          )}
          {secondaryPoints.red[0] !== 0 && (
            <div className={styles.redAny}>
              <RedToken />
            </div>
          )}
          {secondaryPoints.red[1] !== 0 && (
            <div className={styles.redFriendly}>
              <RedToken />
            </div>
          )}
          {secondaryPoints.red[2] !== 0 && (
            <div className={styles.redContested}>
              <RedToken />
            </div>
          )}
          {secondaryPoints.red[3] !== 0 && (
            <div className={styles.redEnemy}>
              <RedToken />
            </div>
          )}
        </div>
        <div
          className={classNames(
            styles.secondaryObjectiveButtons,
            styles.secondaryObjectiveTiled
          )}
        >
          <div className={styles.secondaryPlayerContainer}>
            <h3 className={globalStyles.header3}>Blue Player:</h3>
            <button
              className={classNames(
                globalStyles.button,
                styles.blueButton,
                styles.objectiveButton,
                styles.smallerButton
              )}
              disabled={secondaryPoints.blue[0] !== 0}
              onClick={() => {
                scoreSecondary("blue", 0);
              }}
            >
              Any
            </button>
            <button
              className={classNames(
                globalStyles.button,
                styles.blueButton,
                styles.objectiveButton,
                styles.smallerButton
              )}
              disabled={secondaryPoints.blue[1] !== 0}
              onClick={() => {
                scoreSecondary("blue", 1);
              }}
            >
              Friendly
            </button>
            <button
              className={classNames(
                globalStyles.button,
                styles.blueButton,
                styles.objectiveButton,
                styles.smallerButton
              )}
              disabled={secondaryPoints.blue[2] !== 0}
              onClick={() => {
                scoreSecondary("blue", 2);
              }}
            >
              Contested
            </button>
            <button
              className={classNames(
                globalStyles.button,
                styles.blueButton,
                styles.objectiveButton,
                styles.smallerButton
              )}
              disabled={secondaryPoints.blue[3] !== 0}
              onClick={() => {
                scoreSecondary("blue", 3);
              }}
            >
              Enemy
            </button>
          </div>
          <div className={styles.secondaryPlayerContainer}>
            <h3 className={globalStyles.header3}>Red Player:</h3>
            <button
              className={classNames(
                globalStyles.button,
                styles.redButton,
                styles.objectiveButton
              )}
              disabled={secondaryPoints.red[0] !== 0}
              onClick={() => {
                scoreSecondary("red", 0);
              }}
            >
              Any
            </button>
            <button
              className={classNames(
                globalStyles.button,
                styles.redButton,
                styles.objectiveButton
              )}
              disabled={secondaryPoints.red[1] !== 0}
              onClick={() => {
                scoreSecondary("red", 1);
              }}
            >
              Friendly
            </button>
            <button
              className={classNames(
                globalStyles.button,
                styles.redButton,
                styles.objectiveButton
              )}
              disabled={secondaryPoints.red[2] !== 0}
              onClick={() => {
                scoreSecondary("red", 2);
              }}
            >
              Contested
            </button>
            <button
              className={classNames(
                globalStyles.button,
                styles.redButton,
                styles.objectiveButton
              )}
              disabled={secondaryPoints.red[3] !== 0}
              onClick={() => {
                scoreSecondary("red", 3);
              }}
            >
              Enemy
            </button>
          </div>
        </div>
      </div>
    );
  }

  function reconMission() {
    return (
      <div className={styles.secondaryObjectiveContainer}>
        <div className={styles.objectiveCard}>
          <BattleCard card={secondaryObjective} />
        </div>
        <div className={styles.secondaryObjectiveButtons}>
          <div className={styles.secondaryPlayerContainer}>
            <h3 className={globalStyles.header3}>Blue Player:</h3>
            <button
              className={classNames(
                globalStyles.button,
                styles.blueButton,
                styles.objectiveButton
              )}
              disabled={secondaryPoints.blue[round - 1] !== 0}
              onClick={() => {
                scoreSecondary("blue", round - 1);
              }}
            >
              <div className={styles.objectiveChecked}>
                {secondaryPoints.blue[round - 1] !== 0 && <BlueToken />}
                Score Recon Misson this round
              </div>
            </button>
            <h3 className={globalStyles.header3}>Red Player:</h3>
            <button
              className={classNames(
                globalStyles.button,
                styles.redButton,
                styles.objectiveButton
              )}
              disabled={secondaryPoints.red[round - 1] !== 0}
              onClick={() => {
                scoreSecondary("red", round - 1);
              }}
            >
              <div className={styles.objectiveChecked}>
                {secondaryPoints.red[round - 1] !== 0 && <RedToken />}
                Score Recon Misson this round
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  function markedTargets() {
    const blueSecondaryPoints = secondaryPoints.blue[0];
    const redSecondaryPoints = secondaryPoints.red[0];

    return (
      <div className={styles.secondaryObjectiveContainer}>
        <div className={styles.objectiveCard}>
          <BattleCard card={secondaryObjective} />

          {blueSecondaryPoints >= 1 && (
            <div className={styles.blueMarked1}>
              <BlueToken />
            </div>
          )}
          {blueSecondaryPoints >= 2 && (
            <div className={styles.blueMarked2}>
              <BlueToken />
            </div>
          )}
          {blueSecondaryPoints >= 3 && (
            <div className={styles.blueMarked3}>
              <BlueToken />
            </div>
          )}
          {blueSecondaryPoints >= 4 && (
            <div className={styles.blueMarked4}>
              <BlueToken />
            </div>
          )}

          {redSecondaryPoints >= 1 && (
            <div className={styles.redMarked1}>
              <RedToken />
            </div>
          )}
          {redSecondaryPoints >= 2 && (
            <div className={styles.redMarked2}>
              <RedToken />
            </div>
          )}
          {redSecondaryPoints >= 3 && (
            <div className={styles.redMarked3}>
              <RedToken />
            </div>
          )}
          {redSecondaryPoints >= 4 && (
            <div className={styles.redMarked4}>
              <RedToken />
            </div>
          )}
        </div>
        <div className={styles.secondaryObjectiveButtons}>
          <div className={styles.secondaryPlayerContainer}>
            <h3 className={globalStyles.header3}>Blue Player:</h3>
            <button
              className={classNames(
                globalStyles.button,
                styles.blueButton,
                styles.objectiveButton
              )}
              disabled={blueSecondaryPoints >= 4}
              onClick={() => {
                scoreSecondary("blue", 0);
              }}
            >
              <div className={styles.bunkerChecked}>Killed marked target</div>
            </button>
            <h3 className={globalStyles.header3}>Red Player:</h3>
            <button
              className={classNames(
                globalStyles.button,
                styles.redButton,
                styles.objectiveButton
              )}
              disabled={redSecondaryPoints >= 4}
              onClick={() => {
                scoreSecondary("red", 0);
              }}
            >
              <div className={styles.bunkerChecked}>Killed marked target</div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  function pointTracker() {
    const rounds = new Array(13).fill(0);
    const players = ["blue", "red"];
    return (
      <div className={styles.bigPointTrackerContainer}>
        {players.map((player) => {
          const token = player === "blue" ? <BlueToken /> : <RedToken />;
          const playerPoints = player === "blue" ? bluePoints : redPoints;
          return (
            <div key={player} className={styles.pointTracker}>
              <button
                className={classNames(
                  globalStyles.button,
                  player === "blue" ? styles.blueButton : styles.redButton
                )}
                onClick={() => {
                  if (player === "blue") {
                    reduceBluePoint();
                    return;
                  }
                  reduceRedPoint();
                }}
              >
                -
              </button>
              {rounds.map((_counter, i) => (
                <div
                  className={classNames(styles.pointSpace, styles[player])}
                  key={player + i}
                >
                  {playerPoints === i || (playerPoints > 12 && i + 1 == 13)
                    ? token
                    : i}
                </div>
              ))}
              <div
                className={classNames(
                  styles.smallScreenPointSpace,
                  styles[player]
                )}
              >
                {playerPoints}
              </div>
              <button
                className={classNames(
                  globalStyles.button,
                  player === "blue" ? styles.blueButton : styles.redButton
                )}
                onClick={() => {
                  if (player === "blue") {
                    setBluePoints((current) => current + 1);
                    return;
                  }
                  setRedPoints((current) => current + 1);
                }}
              >
                +
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  function showSecondaryGoal() {
    switch (secondaryObjective?.id) {
      case CARDS.BRING_THEM_TO_HEEL:
        return bringThemToHeel();
      case CARDS.DESTROY_ENEMY_BASE:
        return destroyEnemyBase();
      case CARDS.MARKED_TARGETS:
        return markedTargets();
      case CARDS.RECON_MISSION:
        return reconMission();
      case CARDS.SURFACE_SCAN:
        return surfaceScan();
      case CARDS.SWEEP_AND_CLEAR:
        return sweepAndClear();
      default:
        return null;
    }
  }

  function scoreBoard() {
    return (
      <div className={styles.scoreBoard}>
        <h1 className={globalStyles.header2}>Round:</h1>{" "}
        <RoundTracker currentRound={round} />
        <h1
          className={classNames(
            globalStyles.header2,
            styles.pointHeader,
            globalStyles.advantageHeader
          )}
        >
          Points:
          <span className={styles.pointOverflowContainer}>
            {bluePoints > 12 && <span>Blue: {bluePoints}</span>}
            {bluePoints > 12 && redPoints > 12 && " – "}
            {redPoints > 12 && <span>Red: {redPoints}</span>}
          </span>
        </h1>{" "}
        {pointTracker()}
        <div className={styles.objectiveCards}>
          <BattleCard card={primaryObjective} />
          {showSecondaryGoal()}
        </div>
        <AdvantageCards
          blueAdvantage={blueAdvantage}
          redAdvantage={redAdvantage}
        />
        <div className={styles.controlButtons}>
          <button
            className={classNames(globalStyles.button, styles.warning)}
            onClick={() => {
              if (confirm("Are you sure? This will reset everything!")) {
                setReset(true);
              }
            }}
          >
            Start Over
          </button>
          <button
            disabled={
              disableRoundButton ||
              round >= 5 ||
              redPoints >= 12 ||
              bluePoints >= 12
            }
            className={globalStyles.button}
            onClick={() => {
              setRound((current) => current + 1);
              setDisableRoundButton(true);
              window.scrollTo(0, 0);
              setTimeout(() => {
                setDisableRoundButton(false);
              }, 1000);
            }}
          >
            {round >= 5 || redPoints >= 12 || bluePoints >= 12
              ? "Game Over"
              : "Next round"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {round === 0 ? selectScreen() : scoreBoard()}
    </div>
  );
};
