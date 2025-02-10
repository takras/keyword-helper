import { AvailableKeywords } from "@/types";

export interface Card extends BaseCard {
  amount: number;
  id: number;
}

export type Affiliation =
  | "black_sun"
  | "ewoks"
  | "maul_loyalists"
  | "pyke_syndicate"
  | "raiders"
  | "rogue";

export interface BaseCard {
  faction: "GAR" | "CIS" | "REBEL" | "EMPIRE" | "MERCENARY";
  name: string;
  filename: string;
  affiliation?: Affiliation;
  hiddenFromPrint: boolean;
  keywords: AvailableKeywords[];
  keywordsOnly?: boolean;
}

export const GAR = "GAR";
export const CIS = "CIS";
export const REBEL = "REBEL";
export const EMPIRE = "EMPIRE";
export const MERCENARY = "MERCENARY";
