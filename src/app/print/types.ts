interface Card extends BaseCard {
  amount: number;
  id: number;
}

type Affiliation =
  | "black_sun"
  | "ewoks"
  | "maul_loyalists"
  | "pyke_syndicate"
  | "raiders"
  | "rogue";

interface BaseCard {
  faction: "GAR" | "CIS" | "REBEL" | "EMPIRE" | "MERCENARY";
  name: string;
  filename: string;
  affiliation?: Affiliation;
}
