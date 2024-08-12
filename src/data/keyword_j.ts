import { Keyword } from "@/types";

export const KeywordsJ: Keyword[] = [
  {
    keyword: "jarkai_mastery",
    name: "Jar'Kai Mastery",
    activation: "",
    parents: ["j", "units"],
    tag: "Unit Keyword",
    related_keywords: ["melee", "attack", "dodge"],
    descriptions: [
      {
        type: "text",
        content:
          "While performing a melee attack, after converting attack surges during the Convert Attack Surges step, a unit with the Jar'Kai Mastery keyword may spend any number of dodge tokens. For each dodge token spent in this way, change a blank result to a hit {hit} result, a hit {hit} result to a critical {hit_critical} result, or spend two dodge tokens to change a blank result to a critical {hit_critical} result.",
      },
    ],
  },
  {
    keyword: "jedi_hunter",
    name: "Jedi Hunter",
    activation: "",
    parents: ["j", "units"],
    tag: "Unit Keyword",
    related_keywords: ["keywords", "upgrade_card", "attack"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with the Jedi Hunter keyword attacks a unit with a {upgrade_force} upgrade icon on its upgrade bar, it gains {hit_surge}:{hit_critical}.",
      },
    ],
  },
  {
    keyword: "jump_x",
    name: "Jump X",
    activation: "",
    parents: ["j", "units"],
    tag: "Unit Keyword",
    related_keywords: ["move", "terrain", "keywords"],
    descriptions: [
      {
        type: "text",
        content:
          "A unit that has the Jump X keyword can perform the Jump X card action any time it could perform a move action. The unit performs a move action as normal and can ignore or end its movement on top of terrain that is height X or lower. While performing a move with the Jump X action, a unit ignores the effects of difficult terrain and other miniatures with a height equal to or lower than X. When making a move with the Jump X action, a unit may place the movement template overlapping impassable terrain but may not end its move overlapping it. When a unit performs the Jump X action, measure height from that unit’s starting position.",
      },
    ],
  },
  {
    keyword: "juyo_mastery",
    name: "Juyo Mastery",
    activation: "",
    parents: ["j", "units"],
    tag: "Unit Keyword",
    related_keywords: ["wounds", "move"],
    descriptions: [
      {
        type: "text",
        content:
          "While a unit with the Juyo Mastery keyword has one or more wound tokens, it can perform one additional action during its activation. A unit with Juyo Mastery may only perform two move actions during its activation, including free actions.",
      },
    ],
  },
];
