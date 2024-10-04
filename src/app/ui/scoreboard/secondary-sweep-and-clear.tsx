import classNames from "classnames";
import { BattleCard, BlueToken, RedToken } from "./images";
import { Players, SecondaryObjectiveControl } from "./types";
import globalStyles from "../helper.module.css";
import styles from "../scoreboard.module.css";

type Territory = "Any" | "Friendly" | "Contested" | "Enemy";
interface TerritoryButton {
  player: Players;
  buttons: {
    0: Territory;
    1: Territory;
    2: Territory;
    3: Territory;
  };
}

export const SweepAndClear = ({
  scoreSecondary,
  secondaryObjective,
  secondaryPoints,
}: SecondaryObjectiveControl) => {
  const TerritoryTokens = ({ player, buttons }: TerritoryButton) => {
    return Object.entries(buttons).map((button) => {
      const [id, name] = button;
      if (secondaryPoints[player][parseInt(id)] !== 0) {
        return (
          <div key={id} className={styles[`${player}${name}`]}>
            {player === "blue" ? <BlueToken /> : <RedToken />}
          </div>
        );
      }
    });
  };

  return (
    <div className={styles.secondaryObjectiveContainer}>
      <div className={styles.objectiveCard}>
        <TerritoryTokens
          player="blue"
          buttons={{ 0: "Any", 1: "Friendly", 2: "Contested", 3: "Enemy" }}
        />
        <TerritoryTokens
          player="red"
          buttons={{ 0: "Any", 1: "Friendly", 2: "Contested", 3: "Enemy" }}
        />
        <BattleCard card={secondaryObjective} />
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
              styles.smallerButton,
              secondaryPoints.blue[0] !== 0 ? styles.disabledButton : undefined
            )}
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
              styles.smallerButton,
              secondaryPoints.blue[1] !== 0 ? styles.disabledButton : undefined
            )}
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
              styles.smallerButton,
              secondaryPoints.blue[2] !== 0 ? styles.disabledButton : undefined
            )}
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
              styles.smallerButton,
              secondaryPoints.blue[3] !== 0 ? styles.disabledButton : undefined
            )}
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
};
