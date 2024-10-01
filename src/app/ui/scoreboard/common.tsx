import classNames from "classnames";
import styles from "../scoreboard.module.css";

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

export const RoundTracker = ({ currentRound }: { currentRound: number }) => {
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
    </div>
  );
};
