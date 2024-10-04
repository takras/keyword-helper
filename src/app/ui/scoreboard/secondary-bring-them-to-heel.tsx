import classNames from "classnames";
import { BattleCard, BlueToken, RedToken } from "./images";
import { SecondaryObjectiveControl } from "./types";
import globalStyles from "../helper.module.css";
import styles from "../scoreboard.module.css";

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
          <div
            className={styles.bluePanic}
            onClick={() =>
              scoreSecondary({ player: "blue", index: 4, undo: true })
            }
          >
            <BlueToken />
          </div>
        )}
        {secondaryPoints.blue[5] !== 0 && (
          <div
            className={styles.blueSuppression}
            onClick={() =>
              scoreSecondary({ player: "blue", index: 5, undo: true })
            }
          >
            <BlueToken />
          </div>
        )}
        {secondaryPoints.red[4] !== 0 && (
          <div
            className={styles.redPanic}
            onClick={() =>
              scoreSecondary({ player: "red", index: 4, undo: true })
            }
          >
            <RedToken />
          </div>
        )}
        {secondaryPoints.red[5] !== 0 && (
          <div
            className={styles.redSuppression}
            onClick={() =>
              scoreSecondary({ player: "red", index: 5, undo: true })
            }
          >
            <RedToken />
          </div>
        )}
      </div>
      <div className={styles.secondaryObjectiveButtons}>
        <div className={styles.secondaryPlayerContainer}>
          <h3 className={globalStyles.header3}>Blue Player:</h3>
          <button
            className={classNames(styles.blueButton, styles.objectiveButton)}
            disabled={secondaryPoints.blue[4] !== 0}
            onClick={() => {
              scoreSecondary({ player: "blue", index: 4 });
            }}
          >
            Enemy unit panicked
          </button>
          <button
            className={classNames(styles.blueButton, styles.objectiveButton)}
            disabled={secondaryPoints.blue[5] !== 0}
            onClick={() => {
              scoreSecondary({ player: "blue", index: 5 });
            }}
          >
            All enemy units suppressed
          </button>
        </div>
        <div className={styles.secondaryPlayerContainer}>
          <h3 className={globalStyles.header3}>Red Player:</h3>
          <button
            className={classNames(styles.redButton, styles.objectiveButton)}
            disabled={secondaryPoints.red[4] !== 0}
            onClick={() => {
              scoreSecondary({ player: "red", index: 4 });
            }}
          >
            Enemy unit panicked
          </button>

          <button
            className={classNames(styles.redButton, styles.objectiveButton)}
            disabled={secondaryPoints.red[5] !== 0}
            onClick={() => {
              scoreSecondary({ player: "red", index: 5 });
            }}
          >
            All enemy units suppressed
          </button>
        </div>
      </div>
    </div>
  );
};
