import classNames from "classnames";
import globalStyles from "../helper.module.css";
import styles from "../scoreboard.module.css";
import { BattleCard, BlueToken, RedToken } from "./images";
import { Card, Players, SecondaryPoints } from "./types";

interface SecondaryObjectiveControl {
  secondaryObjective: Card;
  secondaryPoints: SecondaryPoints;
  scoreSecondary: (player: Players, index?: number) => void;
}

export const BringThemToHeel = ({
  secondaryObjective,
  secondaryPoints,
  scoreSecondary,
}: SecondaryObjectiveControl) => {
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
};
