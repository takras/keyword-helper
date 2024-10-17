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
import { Card, Players } from "./scoreboard/types";
import { BringThemToHeel } from "./scoreboard/secondary-bring-them-to-heel";
import { MarkedTargets } from "./scoreboard/secondary-marked-targets";
import { ReconMission } from "./scoreboard/secondary-recon-mission";
import { DestroyEnemyBase } from "./scoreboard/secondary-destroy-base";
import { SurfaceScan } from "./scoreboard/secondary-surface-scan";
import { SweepAndClear } from "./scoreboard/secondary-sweep-and-clear";

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
    isReady,
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
    setSecondaryGoals(storage.secondaryObjectiveRewards);
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

  function scoreSecondary({
    player,
    index,
    undo,
  }: {
    player: Players;
    index?: number;
    undo?: boolean;
  }) {
    if (secondaryObjective?.id === CARDS.MARKED_TARGETS && index === 0) {
      const diff = undo ? -1 : +1;
      setSecondaryPoints((current) => {
        const newScore = current[player][0] + diff;
        return { ...current, [player]: [newScore] };
      });

      if (player === "blue") {
        setBluePoints((current) => current + diff);
      }
      if (player === "red") {
        setRedPoints((current) => current + diff);
      }
      return;
    }

    const scoreIndex = index ?? round - 1;
    const pointValue = undo
      ? -secondaryGoals[scoreIndex]
      : secondaryGoals[scoreIndex];

    setSecondaryPoints((current) => {
      const playerCurrent = current[player];
      playerCurrent[scoreIndex] = undo ? 0 : pointValue;
      const newCurrent = {
        ...current,
        [player]: playerCurrent,
      };
      return newCurrent;
    });
    if (player === "blue") {
      setBluePoints((current) =>
        current + pointValue < 0 ? 0 : current + pointValue
      );
    }
    if (player === "red") {
      setRedPoints((current) =>
        current + pointValue < 0 ? 0 : current + pointValue
      );
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

  function pointTracker() {
    const rounds = new Array(13).fill(0);
    const players: Players[] = ["blue", "red"];
    return (
      <div className={styles.bigPointTrackerContainer}>
        {players.map((player) => {
          const token = player === "blue" ? <BlueToken /> : <RedToken />;
          const playerPoints = player === "blue" ? bluePoints : redPoints;
          return (
            <div key={player} className={styles.pointTracker}>
              <button
                className={classNames(
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
        return (
          <BringThemToHeel
            scoreSecondary={scoreSecondary}
            secondaryObjective={secondaryObjective}
            secondaryPoints={secondaryPoints}
          />
        );
      case CARDS.DESTROY_ENEMY_BASE:
        return (
          <DestroyEnemyBase
            scoreSecondary={scoreSecondary}
            secondaryObjective={secondaryObjective}
            secondaryPoints={secondaryPoints}
          />
        );
      case CARDS.MARKED_TARGETS:
        return (
          <MarkedTargets
            scoreSecondary={scoreSecondary}
            secondaryObjective={secondaryObjective}
            secondaryPoints={secondaryPoints}
            round={round}
          />
        );
      case CARDS.RECON_MISSION:
        return (
          <ReconMission
            scoreSecondary={scoreSecondary}
            secondaryObjective={secondaryObjective}
            secondaryPoints={secondaryPoints}
            round={round}
          />
        );
      case CARDS.SURFACE_SCAN:
        return (
          <SurfaceScan
            scoreSecondary={scoreSecondary}
            secondaryObjective={secondaryObjective}
            secondaryPoints={secondaryPoints}
            round={round}
          />
        );
      case CARDS.SWEEP_AND_CLEAR:
        return (
          <SweepAndClear
            scoreSecondary={scoreSecondary}
            secondaryObjective={secondaryObjective}
            secondaryPoints={secondaryPoints}
          />
        );
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
          Points:{" "}
          <span className={styles.pointOverflowContainer}>
            {bluePoints > 12 && <span>Blue: {bluePoints}</span>}
            {bluePoints > 12 && redPoints > 12 && " – "}
            {redPoints > 12 && <span>Red: {redPoints}</span>}
          </span>
        </h1>{" "}
        {pointTracker()}
        <h1 className={globalStyles.header2}>Objectives:</h1>
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
