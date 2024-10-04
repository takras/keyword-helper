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
  const blueScoredRound = secondaryPoints.blue[round - 2] !== 0;
  const redScoredRound = secondaryPoints.red[round - 2] !== 0;
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
              styles.blueButton,
              styles.objectiveButton,
              disabled || blueScoredRound ? styles.disabledButton : undefined
            )}
            onClick={() => {
              if (disabled) {
                return;
              }
              scoreSecondary({
                player: "blue",
                index: round - 2,
                undo: blueScoredRound,
              });
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
              styles.blueButton,
              styles.objectiveButton,
              secondaryPoints.blue[4] !== 0 ? styles.disabledButton : undefined
            )}
            onClick={() => {
              scoreSecondary({
                player: "blue",
                index: 4,
                undo: secondaryPoints.blue[4] !== 0,
              });
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
              styles.redButton,
              styles.objectiveButton,
              disabled || redScoredRound ? styles.disabledButton : undefined
            )}
            onClick={() => {
              if (disabled) {
                return;
              }
              scoreSecondary({
                player: "red",
                index: round - 2,
                undo: redScoredRound,
              });
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
              styles.redButton,
              styles.objectiveButton,
              secondaryPoints.red[4] !== 0 ? styles.disabledButton : undefined
            )}
            onClick={() => {
              scoreSecondary({
                player: "red",
                index: 4,
                undo: secondaryPoints.red[4] !== 0,
              });
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
