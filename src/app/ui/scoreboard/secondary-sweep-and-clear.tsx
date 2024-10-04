import classNames from "classnames";
import { BattleCard, BlueToken, RedToken } from "./images";
import { Players, SecondaryObjectiveControl } from "./types";
import globalStyles from "../helper.module.css";
import styles from "../scoreboard.module.css";

type Territory = "Any" | "Friendly" | "Contested" | "Enemy";
type Territories = {
  0: Territory;
  1: Territory;
  2: Territory;
  3: Territory;
};

const scoringTypes: Territories = {
  0: "Any",
  1: "Friendly",
  2: "Contested",
  3: "Enemy",
};

export const SweepAndClear = ({
  scoreSecondary,
  secondaryObjective,
  secondaryPoints,
}: SecondaryObjectiveControl) => {
  const TerritoryTokens = ({ player }: { player: Players }) => {
    return Object.entries(scoringTypes).map((button) => {
      const [id, name] = button;
      if (secondaryPoints[player][parseInt(id)] !== 0) {
        return (
          <div
            key={id}
            className={styles[`${player}${name}`]}
            onClick={() =>
              scoreSecondary({ player, index: parseInt(id), undo: true })
            }
          >
            {player === "blue" ? <BlueToken /> : <RedToken />}
          </div>
        );
      }
    });
  };

  const TerritoryButtons = ({ player }: { player: Players }) => {
    return Object.entries(scoringTypes).map((button) => {
      const [id, name] = button;
      const isDisabled = secondaryPoints[player][parseInt(id)] !== 0;
      return (
        <button
          key={id}
          className={classNames(
            styles[`${player}Button`],
            styles.objectiveButton,
            styles.smallerButton,
            isDisabled ? styles.disabledButton : undefined
          )}
          onClick={() => {
            scoreSecondary({ player, index: parseInt(id), undo: isDisabled });
          }}
        >
          {name}
        </button>
      );
    });
  };

  return (
    <div className={styles.secondaryObjectiveContainer}>
      <div className={styles.objectiveCard}>
        <TerritoryTokens player="blue" />
        <TerritoryTokens player="red" />
        <BattleCard card={secondaryObjective} />
      </div>
      <div
        className={classNames(
          styles.secondaryObjectiveButtons,
          styles.secondaryObjectiveTiled
        )}
      >
        <div className={styles.secondaryPlayerContainer}>
          <h3
            className={classNames(
              globalStyles.header3,
              styles.headerNoTopMargin
            )}
          >
            Blue Player:
          </h3>
          <TerritoryButtons player="blue" />
        </div>
        <div className={styles.secondaryPlayerContainer}>
          <h3 className={globalStyles.header3}>Red Player:</h3>
          <TerritoryButtons player="red" />
        </div>
      </div>
    </div>
  );
};
