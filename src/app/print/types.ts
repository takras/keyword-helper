interface Card extends BaseCard {
  amount: number;
  id: number;
}

interface BaseCard {
  faction: "GAR" | "CIS" | "REBEL" | "EMPIRE" | "MERCENARY";
  name: string;
  filename: string;
}
