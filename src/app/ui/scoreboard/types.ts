export type Card = {
  id: string;
  image: string;
  name: string;
  type: "primary" | "secondary" | "advantage";
  mapImage?: string;
  scoring?: number[];
};

export type SecondaryPoints = {
  red: number[];
  blue: number[];
};

export type Players = "blue" | "red";

export interface SecondaryObjectiveControl {
  secondaryObjective: Card;
  secondaryPoints: SecondaryPoints;
  scoreSecondary: (player: Players, index?: number) => void;
  round?: number;
}
