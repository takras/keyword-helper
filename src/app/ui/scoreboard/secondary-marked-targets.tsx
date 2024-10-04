import classNames from "classnames";
import { BattleCard, BlueToken, RedToken } from "./images";
import { Players, SecondaryObjectiveControl } from "./types";
import globalStyles from "../helper.module.css";
import styles from "../scoreboard.module.css";

export const MarkedTargets = ({
  scoreSecondary,
  secondaryObjective,
  secondaryPoints,
}: SecondaryObjectiveControl) => {
  const blueSecondaryPoints = secondaryPoints.blue[0];
  const redSecondaryPoints = secondaryPoints.red[0];
  const pointList = [1, 2, 3, 4];

  function tokens(player: Players) {
    const playerPoints =
      player === "blue" ? secondaryPoints.blue[0] : secondaryPoints.red[0];

    return pointList.map((point) => {
      const style = styles[`${player}Marked${point}`];
      if (playerPoints >= point) {
        return (
          <div
            key={player + point + playerPoints}
            className={style}
            onClick={() => scoreSecondary({ player, index: 0, undo: true })}
          >
            {player === "blue" ? <BlueToken /> : <RedToken />}
          </div>
        );
      }
      return null;
    });
  }

  return (
    <div className={styles.secondaryObjectiveContainer}>
      <div className={styles.objectiveCard}>
        <BattleCard card={secondaryObjective} />

        {tokens("blue")}
        {tokens("red")}
      </div>
      <div className={styles.secondaryObjectiveButtons}>
        <div className={styles.secondaryPlayerContainer}>
          <h3 className={globalStyles.header3}>Blue Player:</h3>
          <button
            className={classNames(styles.blueButton, styles.objectiveButton)}
            disabled={blueSecondaryPoints >= 4}
            onClick={() => {
              scoreSecondary({ player: "blue", index: 0 });
            }}
          >
            <div className={styles.bunkerChecked}>Killed marked target</div>
          </button>
          <h3 className={globalStyles.header3}>Red Player:</h3>
          <button
            className={classNames(styles.redButton, styles.objectiveButton)}
            disabled={redSecondaryPoints >= 4}
            onClick={() => {
              scoreSecondary({ player: "red", index: 0 });
            }}
          >
            <div className={styles.bunkerChecked}>Killed marked target</div>
          </button>
        </div>
      </div>
    </div>
  );
};
