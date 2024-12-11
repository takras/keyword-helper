import Image from "next/image";
import { Card } from "./types";

import globalStyles from "../helper.module.css";
import styles from "../scoreboard.module.css";
import classNames from "classnames";
import { useState } from "react";

const LENGTH = 1008 / 2.52;
const WIDTH = 705 / 2.52;
const MIMIMIZED = 34;

export const BlueToken = () => {
  return (
    <Image
      src={`/images/objectives/blue-token.png`}
      height={40}
      width={40}
      alt="Blue token"
    />
  );
};

export const RedToken = () => {
  return (
    <Image
      src={`/images/objectives/red-token.png`}
      height={40}
      width={40}
      alt="Red token"
    />
  );
};

export const BattleCard = ({ card }: { card?: Card }) => {
  const isSecondary = card?.id.startsWith("SECONDARY");
  const [isMinimized, setIsMinimized] = useState(false);

  let canBeMinimized = true;
  if (isSecondary) {
    canBeMinimized = false;
  }

  return (
    <div>
      <Image
        className={classNames(
          styles.card,
          isMinimized ? styles.minimizeCard : undefined
        )}
        src={`/images/objectives/${card?.image}`}
        height={LENGTH}
        width={WIDTH}
        alt={card?.id.toString() ?? ""}
        priority={true}
        onClick={() =>
          setIsMinimized((current) => (canBeMinimized ? !current : false))
        }
      />
    </div>
  );
};

export const MapCard = ({
  card,
  className,
}: {
  className?: string;
  card?: Card;
}) => {
  if (!card) {
    return null;
  }
  return (
    <div className={className}>
      <Image
        src={`/images/objectives/${card.mapImage}`}
        height={WIDTH}
        width={LENGTH}
        alt={card?.id.toString() || ""}
      />
    </div>
  );
};

const AdvantageCard = ({
  card,
  player,
}: {
  card: Card;
  player: "blue" | "red";
}) => {
  return (
    <div className={classNames(styles.advantageCard, styles[player])}>
      <h3
        className={classNames(
          globalStyles.header3,
          globalStyles.advantageHeader
        )}
      >
        {player} player
      </h3>
      <BattleCard card={card!} />
    </div>
  );
};

export const AdvantageCards = ({
  redAdvantage,
  blueAdvantage,
}: {
  redAdvantage?: Card;
  blueAdvantage?: Card;
}) => {
  const [isShowAdvantage, setIsShowAdvantage] = useState(true);
  if (!redAdvantage || !blueAdvantage) {
    return null;
  }
  return (
    <>
      <h2
        className={globalStyles.header2}
        onClick={() => {
          setIsShowAdvantage((current) => !current);
        }}
      >
        Advantage Cards:
      </h2>
      {isShowAdvantage && (
        <div className={styles.advantageCardContainer}>
          <AdvantageCard card={blueAdvantage} player="blue" />
          <AdvantageCard card={redAdvantage} player="red" />
        </div>
      )}
    </>
  );
};
