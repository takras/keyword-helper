import { CISCards } from "./cards/cis";
import { EmpireCards } from "./cards/empire";
import { GarCards } from "./cards/gar";
import { MercCards } from "./cards/mercenary";
import { RebelCards } from "./cards/rebels";
import { Card, CIS, EMPIRE, GAR, MERCENARY, REBEL } from "./types";

export const Factions = {
  [GAR]: "Galactic Republic",
  [CIS]: "Separatist Alliance",
  [REBEL]: "Rebel Alliance",
  [EMPIRE]: "Galactic Empire",
  [MERCENARY]: "Mercenaries",
};

export const cards: Card[] = GarCards.concat(CISCards)
  .concat(EmpireCards)
  .concat(RebelCards)
  .concat(MercCards)
  .toSorted((cardA, cardB) => cardA.name.localeCompare(cardB.name))
  .map((card, index) => {
    return {
      ...card,
      amount: 0,
      id: index,
    };
  });
