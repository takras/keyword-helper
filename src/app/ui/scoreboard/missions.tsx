import { Card, SecondaryPoints } from "./types";

interface Mission {
  secondaryObjective: Card;
  secondaryPoints: SecondaryPoints;
  scoreSecondary: (color: "blue" | "red", index: number) => void;
  round: number;
}
