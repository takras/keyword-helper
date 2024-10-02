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
