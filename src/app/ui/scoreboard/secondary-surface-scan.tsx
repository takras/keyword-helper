import classNames from "classnames";
import { BattleCard, BlueToken, RedToken } from "./images";
import { SecondaryObjectiveControl } from "./types";
import globalStyles from "../helper.module.css";
import styles from "../scoreboard.module.css";

export const SurfaceScan = ({
  scoreSecondary,
  secondaryObjective,
  secondaryPoints,
  round,
}: SecondaryObjectiveControl) => {
  if (!round) {
    console.warn("No Round set for SurfaceScan");
    return null;
  }
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
};
