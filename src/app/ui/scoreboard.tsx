import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SelectHTMLAttributes, useEffect, useRef, useState } from "react";
import Image from "next/image";

import globalStyles from "./helper.module.css";
import styles from "./scoreboard.module.css";
import classNames from "classnames";

type Card = {
  id: string;
  image: string;
  name: string;
  type: "primary" | "secondary" | "advantage";
  mapImage?: string;
  scoring?: number[];
};

type SecondaryPoints = {
  red: number[];
  blue: number[];
};

const INTERCEPT_SIGNALS = "PRIMAY_INTERCEPT_SIGNALS";
const BUNKER_ASSAULT = "PRIMARY_BUNKER_ASSAULT";
const CLOSE_THE_POCKET = "PRIMARY_CLOSE_THE_POCKET";
const BREAKTHROUGH = "PRIMARY_BREAKTHROUGH";
const RECOVER_THE_RESEARCH = "PRIMARY_RECOVER_THE_RESEARCH";
const SHIFTING_PRIORITIES = "PRIMARY_SHIFTING_PRIORITIES";

const BRING_THEM_TO_HEEL = "SECONDARY_BRING_THEM_TO_HEEL";
const DESTROY_ENEMY_BASE = "SECONDARY_DESTROY_ENEMY_BASE";
const MARKED_TARGETS = "SECONDARY_MARKED_TARGETS";
const RECON_MISSION = "SECONDARY_RECON_MISSION";
const SURFACE_SCAN = "SECONDARY_SURFACE_SCAN";
const SWEEP_AND_CLEAR = "SECONDARY_SWEEP_AND_CLEAR";

const ADVANCED_INTEL = "ADVANTAGE_ADVANCED INTEL";
const CUNNING_DEPLOYMENY = "ADVANTAGE_CUNNING_DEPLOYMENY";
const FORTIFIED_POSITIONS = "ADVANTAGE_FORTIFIED_POSITIONS";
const GARRISON = "ADVANTAGE_GARRISON";
const ORDNANCE = "ADVANTAGE_ORDNANCE";
const STRAFING_RUN = "ADVANTAGE_STRAFING_RUN";

const primaryCards: Card[] = [
  {
    id: INTERCEPT_SIGNALS,
    name: "Intercept Signals",
    image: "primary-intercept-signals.png",
    mapImage: "map-intercept-signals.png",
    type: "primary",
  },
  {
    id: BUNKER_ASSAULT,
    name: "Bunker Assault",
    image: "primary-bunker-assault.png",
    mapImage: "map-bunker-assault.png",
    type: "primary",
  },
  {
    id: CLOSE_THE_POCKET,
    name: "Close the Pocket",
    image: "primary-close-the-pocket.png",
    mapImage: "map-close-the-pocket.png",
    type: "primary",
  },
  {
    id: BREAKTHROUGH,
    name: "Breakthrough",
    image: "primary-breakthrough",
    mapImage: "map-breakthrough.png",
    type: "primary",
  },
  {
    id: RECOVER_THE_RESEARCH,
    name: "Recover the Research",
    image: "primary-recover-the-research.png",
    mapImage: "map-recover-the-research.png",
    type: "primary",
  },
  {
    id: SHIFTING_PRIORITIES,
    name: "Shifting Priorities",
    image: "primary-shifting-priorities.png",
    mapImage: "map-shifting-priorities.png",
    type: "primary",
  },
];

const secondaryCards: Card[] = [
  {
    id: BRING_THEM_TO_HEEL,
    name: "Bring Them to Heel",
    image: "secondary-bring-them-to-heel.png",
    type: "secondary",
    scoring: [1, 1, 1, 1, 2, 2],
  },
  {
    id: DESTROY_ENEMY_BASE,
    name: "Destroy Enemy Base",
    image: "secondary-destroy-enemy-base.png",
    type: "secondary",
    scoring: [4],
  },
  {
    id: MARKED_TARGETS,
    name: "Marked Targets",
    image: "secondary-marked-targets.png",
    type: "secondary",
    scoring: [1, 1, 1, 1],
  },
  {
    id: RECON_MISSION,
    name: "Recon Mission",
    image: "secondary-recon-mission.png",
    type: "secondary",
    scoring: [1, 1, 1, 1],
  },
  {
    id: SURFACE_SCAN,
    name: "Surface Scan",
    image: "secondary-surface-scan.png",
    type: "secondary",
    scoring: [1, 1, 1, 1, 2],
  },
  {
    id: SWEEP_AND_CLEAR,
    name: "Sweep and Clear",
    image: "secondary-sweep-and-clear.png",
    type: "secondary",
    scoring: [1, 1, 1, 2],
  },
];

const advantageCards: Card[] = [
  {
    id: ADVANCED_INTEL,
    name: "Advanced Intel",
    image: "advantage-advanced-intel.png",
    type: "advantage",
  },
  {
    id: CUNNING_DEPLOYMENY,
    name: "Cunning Deployment",
    image: "advantage-cunning-deployment.png",
    type: "advantage",
  },
  {
    id: FORTIFIED_POSITIONS,
    name: "Fortified Positions",
    image: "advantage-fortified-positions.png",
    type: "advantage",
  },
  {
    id: GARRISON,
    name: "Garrison",
    image: "advantage-garrison.png",
    type: "advantage",
  },
  {
    id: ORDNANCE,
    name: "Ordnance",
    image: "advantage-ordnance.png",
    type: "advantage",
  },
  {
    id: STRAFING_RUN,
    name: "Strafing Run",
    image: "advantage-strafing-run.png",
    type: "advantage",
  },
];

const LENGTH = 1008 / 2.52;
const WIDTH = 705 / 2.52;

export const Scoreboard = () => {
  const [primaryObjective, setPrimaryObjective] = useState<Card>();
  const [secondaryObjective, setSecondaryObjective] = useState<Card>();
  const [blueAdvantage, setBlueAdvantage] = useState<Card>();
  const [redAdvantage, setRedAdvantage] = useState<Card>();
  const [round, setRound] = useState(0);

  const [bluePoints, setBluePoints] = useState(0);
  const [redPoints, setRedPoints] = useState(0);
  const [secondaryPoints, setSecondaryPoints] = useState<SecondaryPoints>({
    blue: [],
    red: [],
  });
  const [secondaryGoals, setSecondaryGoals] = useState<number[]>([]);

  const [isShowAdvantage, setIsShowAdvantage] = useState(true);

  const blueAdvantageRef = useRef<HTMLSelectElement>(null);

  const [reset, setReset] = useState(false);
  const isReady =
    primaryObjective && secondaryObjective && blueAdvantage && redAdvantage;

  useEffect(() => {
    if (primaryObjective) {
      window.localStorage.setItem("primary", primaryObjective.id.toString());
    }
    if (secondaryObjective) {
      window.localStorage.setItem(
        "secondary",
        secondaryObjective.id.toString()
      );
    }
    if (blueAdvantage) {
      window.localStorage.setItem("blue", blueAdvantage.id.toString());
    }
    if (bluePoints) {
      window.localStorage.setItem("bluePoints", bluePoints.toString());
    }
    if (redAdvantage) {
      window.localStorage.setItem("red", redAdvantage.id.toString());
    }
    if (redPoints) {
      window.localStorage.setItem("redPoints", redPoints.toString());
    }

    window.localStorage.setItem(
      "scoredSecondary",
      JSON.stringify(secondaryPoints)
    );

    if (round > 0) {
      window.localStorage.setItem("round", round.toString());
    }

    if (reset) {
      window.localStorage.removeItem("primary");
      window.localStorage.removeItem("secondary");
      window.localStorage.removeItem("blue");
      window.localStorage.removeItem("red");
      window.localStorage.removeItem("redPoints");
      window.localStorage.removeItem("bluePoints");
      window.localStorage.removeItem("scoredSecondary");
      window.localStorage.removeItem("round");
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
    const primary = window.localStorage.getItem("primary");
    const secondary = window.localStorage.getItem("secondary");
    const blue = window.localStorage.getItem("blue");
    const red = window.localStorage.getItem("red");
    const round = window.localStorage.getItem("round");
    const scoredSecondary = window.localStorage.getItem("scoredSecondary");
    const bluePoints = window.localStorage.getItem("bluePoints");
    const redPoints = window.localStorage.getItem("redPoints");

    if (primary) {
      setPrimaryObjective(primaryCards.find((card) => card.id === primary));
    }
    if (secondary) {
      setSecondaryObjective(
        secondaryCards.find((card) => card.id === secondary)
      );
      const secondaryPoints =
        secondaryCards.find((card) => card.id === secondary)?.scoring || [];
      setSecondaryPoints({ blue: secondaryPoints, red: secondaryPoints });
    }
    if (blue) {
      setBlueAdvantage(advantageCards.find((card) => card.id === blue));
    }
    if (bluePoints) {
      setBluePoints(parseInt(bluePoints));
    }
    if (red) {
      setRedAdvantage(advantageCards.find((card) => card.id === red));
    }
    if (redPoints) {
      setRedPoints(parseInt(redPoints));
    }
    if (round) {
      setRound(parseInt(round));
    }
    if (scoredSecondary) {
      setSecondaryPoints(JSON.parse(scoredSecondary));
    }
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
    if (secondaryObjective?.id === DESTROY_ENEMY_BASE) {
      // TODO
      //return;
    }

    if (secondaryObjective?.id === MARKED_TARGETS) {
      setSecondaryPoints((current) => {
        const currentIndex = current[player].findIndex((score) => score === 0);
        if (currentIndex < 0) {
          return current;
        }
        current[player][currentIndex] = secondaryGoals[currentIndex];

        console.log(current, secondaryGoals);
        return current;
      });
      return;
    }

    // Bring Them To Heel
    // Destroy Enemy Base
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
      <>
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
          blocks access to its storage. To find out, just select a couple below,
          refresh the page, and see if it remembers them.
        </p>
        <div className={styles.selection}>
          <button
            className={globalStyles.button}
            onClick={() => {
              setReset(true);
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
      </>
    );
  }

  function blueToken() {
    return (
      <Image
        src={`/images/objectives/blue-token.png`}
        height={40}
        width={40}
        alt="Blue token"
      />
    );
  }
  function redToken() {
    return (
      <Image
        src={`/images/objectives/red-token.png`}
        height={40}
        width={40}
        alt="Red token"
      />
    );
  }

  function bringThemToHeel() {
    return (
      <div className={styles.secondaryObjectiveContainer}>
        <div className={styles.objectiveCard}>
          <Image
            src={`/images/objectives/${secondaryObjective!.image}`}
            height={LENGTH}
            width={WIDTH}
            alt={secondaryObjective!.id.toString()}
          />
          {secondaryPoints.blue[4] !== 0 && (
            <div className={styles.bluePanic}>{blueToken()}</div>
          )}
          {secondaryPoints.blue[5] !== 0 && (
            <div className={styles.blueSuppression}>{blueToken()}</div>
          )}
          {secondaryPoints.red[4] !== 0 && (
            <div className={styles.redPanic}>{redToken()}</div>
          )}
          {secondaryPoints.red[5] !== 0 && (
            <div className={styles.redSuppression}>{redToken()}</div>
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
          <Image
            src={`/images/objectives/${secondaryObjective!.image}`}
            height={LENGTH}
            width={WIDTH}
            alt={secondaryObjective!.id.toString()}
          />
          {secondaryPoints.blue[0] !== 0 && (
            <div className={styles.blueDestroyGoal}>{blueToken()}</div>
          )}
          {secondaryPoints.red[0] !== 0 && (
            <div className={styles.redDestroyGoal}>{redToken()}</div>
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
                {secondaryPoints.blue[0] !== 0 && blueToken()}
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
                {secondaryPoints.red[0] !== 0 && redToken()}
                Destroyed enemy base
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  function markedTargets() {
    const blueSecondaryPoints =
      secondaryPoints.blue.length > 0
        ? secondaryPoints.blue.reduce((sum, current) => (sum += current))
        : 0;
    const redSecondaryPoints =
      secondaryPoints.red.length > 0
        ? secondaryPoints.red.reduce((sum, current) => (sum += current))
        : 0;
    console.log(blueSecondaryPoints, redSecondaryPoints, secondaryPoints.blue);
    return (
      <div className={styles.secondaryObjectiveContainer}>
        <div className={styles.objectiveCard}>
          <Image
            src={`/images/objectives/${secondaryObjective!.image}`}
            height={LENGTH}
            width={WIDTH}
            alt={secondaryObjective!.id.toString()}
          />

          {blueSecondaryPoints >= 1 && (
            <div className={styles.blueMarked1}>{blueToken()}</div>
          )}
          {blueSecondaryPoints >= 2 && (
            <div className={styles.blueMarked2}>{blueToken()}</div>
          )}
          {blueSecondaryPoints >= 3 && (
            <div className={styles.blueMarked3}>{blueToken()}</div>
          )}
          {blueSecondaryPoints >= 4 && (
            <div className={styles.blueMarked4}>{blueToken()}</div>
          )}

          {blueSecondaryPoints >= 1 && (
            <div className={styles.redMarked1}>{redToken()}</div>
          )}
          {blueSecondaryPoints >= 1 && (
            <div className={styles.redMarked2}>{redToken()}</div>
          )}
          {blueSecondaryPoints >= 1 && (
            <div className={styles.redMarked3}>{redToken()}</div>
          )}
          {blueSecondaryPoints >= 1 && (
            <div className={styles.redMarked4}>{redToken()}</div>
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
                scoreSecondary("blue");
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
                scoreSecondary("red");
              }}
            >
              <div className={styles.bunkerChecked}>Killed marked target</div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  function roundSquare(roundNumber: number) {
    return (
      <div
        className={classNames(
          styles.square,
          round === roundNumber ? styles.active : undefined
        )}
      >
        {roundNumber}
      </div>
    );
  }

  function roundTracker() {
    return (
      <div className={styles.roundTrackerContainer}>
        <div className={styles.roundProgress}>
          <div className={styles.progress} id="progress">
            {" "}
          </div>
          {roundSquare(1)}
          {roundSquare(2)}
          {roundSquare(3)}
          {roundSquare(4)}
          {roundSquare(5)}
        </div>
      </div>
    );
  }

  function pointTracker() {
    const rounds = new Array(13).fill(0);
    const players = ["blue", "red"];
    return (
      <div className={styles.pointTrackerContainer}>
        {players.map((player) => {
          const token = player === "blue" ? blueToken() : redToken();
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
              {rounds.map((counter, i) => (
                <div
                  className={classNames(styles.pointSpace, styles[player])}
                  key={player + i}
                >
                  {playerPoints === i || (playerPoints > 12 && i + 1 == 13)
                    ? token
                    : i}
                </div>
              ))}
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

  function showPrimaryGoal() {
    return (
      <Image
        src={`/images/objectives/${primaryObjective?.image}`}
        height={LENGTH}
        width={WIDTH}
        alt={primaryObjective?.id.toString() || ""}
        priority={true}
      />
    );
  }

  function showSecondaryGoal() {
    switch (secondaryObjective?.id) {
      case BRING_THEM_TO_HEEL:
        return bringThemToHeel();
      case DESTROY_ENEMY_BASE:
        return destroyEnemyBase();
      case MARKED_TARGETS:
        return markedTargets();
      default:
        return null;
    }
  }

  function showAdvantage(player: "blue" | "red") {
    const card = player === "blue" ? blueAdvantage : redAdvantage;
    return (
      <div className={classNames(styles.advantageCard, styles[player])}>
        <h3 className={globalStyles.header3}>{player} player</h3>
        <Image
          src={`/images/objectives/${card?.image}`}
          height={LENGTH}
          width={WIDTH}
          alt={card?.id.toString() || ""}
          priority={true}
        />
      </div>
    );
  }

  function scoreBoard() {
    return (
      <div>
        <h1 className={globalStyles.header2}>Round:</h1> {roundTracker()}
        <h2
          className={globalStyles.header2}
          onClick={() => {
            setIsShowAdvantage((current) => !current);
          }}
        >
          Advantage Cards: (click to hide/show)
        </h2>
        {isShowAdvantage && (
          <div className={styles.advantageCardContainer}>
            {showAdvantage("blue")}
            {showAdvantage("red")}
          </div>
        )}
        <h1 className={globalStyles.header2}>Points:</h1> {pointTracker()}
        {bluePoints > 12 && <h3>Blue points: {bluePoints}</h3>}
        {redPoints > 12 && <h3>Red points: {redPoints}</h3>}
        <div className={styles.objectiveCards}>
          {showPrimaryGoal()}
          {showSecondaryGoal()}
        </div>
        <button
          className={globalStyles.button}
          onClick={() => {
            setReset(true);
          }}
        >
          Start Over
        </button>
        <button
          disabled={round >= 5 || redPoints >= 12 || bluePoints >= 12}
          className={globalStyles.button}
          onClick={() => {
            console.log(round);
            if (round === 1) {
              setIsShowAdvantage(false);
            }
            setRound((current) => current + 1);
          }}
        >
          Next round
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {round === 0 ? selectScreen() : scoreBoard()}
    </div>
  );
};
