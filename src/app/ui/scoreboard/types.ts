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

export type ScoreSecondaryObjective = {
  player: Players;
  index?: number;
  undo?: boolean;
};

export interface SecondaryObjectiveControl {
  secondaryObjective: Card;
  secondaryPoints: SecondaryPoints;
  scoreSecondary: (score: ScoreSecondaryObjective) => void;
  round?: number;
}
