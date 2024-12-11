import classNames from "classnames";
import globalStyles from "../helper.module.css";
import styles from "../scoreboard.module.css";
import { useState } from "react";

export const RoundSquare = ({
  activeRound,
  round,
}: {
  activeRound: number;
  round: number;
}) => {
  return (
    <div
      className={classNames(
        styles.square,
        round === activeRound ? styles.active : undefined
      )}
    >
      {activeRound}
    </div>
  );
};

interface TrackerProps {
  currentRound: number;
  nextRound: () => void;
  gameOver: boolean;
}

export const RoundTracker = ({
  currentRound,
  nextRound,
  gameOver,
}: TrackerProps) => {
  const [disableRoundButton, setDisableRoundButton] = useState(false);

  return (
    <div className={styles.roundTrackerContainer}>
      <div className={styles.roundProgress}>
        <div className={styles.progress} id="progress">
          {" "}
        </div>
        <RoundSquare round={currentRound} activeRound={1} />
        <RoundSquare round={currentRound} activeRound={2} />
        <RoundSquare round={currentRound} activeRound={3} />
        <RoundSquare round={currentRound} activeRound={4} />
        <RoundSquare round={currentRound} activeRound={5} />
      </div>
      <button
        disabled={disableRoundButton}
        className={classNames(globalStyles.button, styles.nextRound)}
        onClick={() => {
          nextRound();
          setDisableRoundButton(true);
          window.scrollTo(0, 0);
          setTimeout(() => {
            setDisableRoundButton(false);
          }, 1000);
        }}
      >
        {gameOver ? "Game Over" : "Next round"}
      </button>
    </div>
  );
};
