import { Keyword } from "@/types";

export const KeywordsU: Keyword[] = [
  {
    keyword: "uncanny_luck_x",
    name: "Uncanny Luck X",
    parents: ["u", "units"],
    related_keywords: ["attack", "dice"],
    descriptions: [
      {
        type: "text",
        content:
          "While a unit with the Uncanny Luck X keyword is defending against an attack, it may reroll up to X of its defense dice during the Reroll Defense Dice step. Any dice rerolled with the Uncanny Luck X keyword must be rerolled at the same time, and each die cannot be rerolled more than once.",
      },
    ],
  },
  {
    keyword: "unconcerned",
    name: "Unconcerned",
    parents: ["u", "units"],
    related_keywords: ["cover", "repair"],
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the Unconcerned keyword cannot benefit from cover, and miniatures in the unit cannot be repaired or restored.",
      },
    ],
  },
  {
    keyword: "undeployed_units",
    name: "Undeployed Units",
    parents: ["u", "concepts"],
    related_keywords: ["deploy", "line_of_sight", "battlefield"],
    descriptions: [
      {
        type: "text",
        content:
          "If a unit is not on the battlefield because it has not yet deployed this game, it is undeployed. An undeployed unit is within any distance and in LOS of each friendly undeployed unit and is beyond any distance and not in LOS of each enemy unit and each unit on the battlefield.",
      },
    ],
  },
  {
    keyword: "unhindered",
    name: "Unhindered",
    parents: ["u", "units"],
    related_keywords: ["move", "terrain"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit that has the Unhindered keyword performs a move, it does not reduce its maximum speed for moving out of, into, or through difficult terrain.",
      },
    ],
  },
  {
    keyword: "unit",
    name: "Unit Types",
    parents: ["u", "unit_types"],
    related_keywords: [
      "clone_trooper",
      "creature_trooper",
      "troopers",
      "droid_trooper",
      "emplacement_trooper",
      "woookie_trooper",
      "vehicles",
      "resiliency",
      "repulsor_vehicle",
      "ground_vehicles",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "Each unit in <i>Star Wars</i>: Legion has a unit type indicated on their Unit Card. All units are either troopers or vehicles, and each type has a number of subtypes with their own special rules.",
      },
      { type: "reference", referenced_keyword: "troopers" },
      { type: "reference", referenced_keyword: "vehicles" },
    ],
  },
  {
    keyword: "unstoppable",
    name: "Unstoppable",
    parents: ["u", "units"],
    related_keywords: ["activation_phase", "order_pool"],
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the Unstoppable keyword is eligible to activate during the Activation Phase while it has one or fewer facedown order tokens. This unit may never have more than one faceup order token. While this unit is not defeated, when creating its order pool, its controlling player adds an additional order token corresponding to this unit’s rank to their order pool.",
      },
    ],
  },
];
