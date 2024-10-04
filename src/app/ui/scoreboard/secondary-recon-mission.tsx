import classNames from "classnames";
import { BattleCard, BlueToken, RedToken } from "./images";
import { SecondaryObjectiveControl } from "./types";
import globalStyles from "../helper.module.css";
import styles from "../scoreboard.module.css";

export const ReconMission = ({
  scoreSecondary,
  secondaryObjective,
  secondaryPoints,
  round,
}: SecondaryObjectiveControl) => {
  if (!round) {
    console.warn("No Round set for ReconMission");
    return null;
  }

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
};
