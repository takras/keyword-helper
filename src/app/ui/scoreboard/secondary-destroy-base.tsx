import classNames from "classnames";
import { BattleCard, BlueToken, RedToken } from "./images";
import { SecondaryObjectiveControl } from "./types";
import globalStyles from "../helper.module.css";
import styles from "../scoreboard.module.css";

export const DestroyEnemyBase = ({
  scoreSecondary,
  secondaryObjective,
  secondaryPoints,
}: SecondaryObjectiveControl) => {
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
};
