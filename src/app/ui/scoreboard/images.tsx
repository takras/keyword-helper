import Image from "next/image";
import { Card } from "./cards";

const LENGTH = 1008 / 2.52;
const WIDTH = 705 / 2.52;

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
  if (!card) {
    return;
  }
  return (
    <Image
      src={`/images/objectives/${card?.image}`}
      height={LENGTH}
      width={WIDTH}
      alt={card?.id.toString() || ""}
      priority={true}
    />
  );
};

function PrimaryGoalCard({ card }: { card: Card }) {
  return (
    <Image
      src={`/images/objectives/${card?.image}`}
      height={LENGTH}
      width={WIDTH}
      alt={card?.id.toString() || ""}
      priority={true}
    />
  );
}
