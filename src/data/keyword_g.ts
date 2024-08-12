import { Keyword } from "@/types";

export const KeywordsG: Keyword[] = [
  {
    keyword: "game_effects",
    name: "Game Effects",
    activation: "",
    parents: ["g", "concepts"],
    related_keywords: ["keywords", "abilities", "card_effects"],
    descriptions: [
      {
        type: "text",
        content:
          "Game effect refers to any instance, occurrence, or trigger of any rule, card text or effect, unit ability, keyword, or other special rule.",
      },
    ],
  },
  {
    keyword: "generator_x",
    name: "Generator X",
    activation: "",
    parents: ["g", "units"],
    tag: "Unit Keyword",
    related_keywords: ["pivot", "shielded_x", "end_phase", "keywords"],
    descriptions: [
      {
        type: "text",
        content:
          "During the End Phase, a unit with the Generator X keyword may flip up to X inactive shield tokens to their active side.",
      },
    ],
  },

  {
    keyword: "golden_rule_terrain",
    name: "Golden Rule of Terrain",
    activation: "",
    parents: ["g", "units"],
    related_keywords: ["terrain", "setup"],
    descriptions: [
      {
        type: "text",
        content:
          "Ultimately, the type of terrain and the rules used are up to the players and should be discussed before the game begins.",
      },
    ],
  },
  {
    keyword: "graffiti_tokens",
    name: "Graffiti Tokens",
    activation: "",
    parents: ["g"],
    range: "range_2",
    related_keywords: ["tokens", "card_action", "rally"],
    descriptions: [
      {
        type: "illustration",
        content: "tokens/graffiti.png",
        align: "right",
        altText: "Colorful round tokens.",
        width: "120",
      },
      {
        type: "text",
        content:
          "A graffiti token represents a striking image or symbol painted onto the terrain of the battlefield. Graffiti tokens affect a unit’s morale. Graffiti tokens have two sides. Players should place the graffiti token flat on a surface so that the side that corresponds to their player color is faceup.",
      },
      {
        type: "text",
        content:
          "During the Rally step of a unit’s activation, it may roll one additional die if it has LOS to and is at {range_2} of a graffiti token placed by a friendly miniature. It must roll one fewer die, to a minimum of 1, if it has LOS and is at {range_2} of a graffiti token placed by an enemy miniature.",
      },
      {
        type: "text",
        content:
          "Graffiti tokens remain in play until the end of the game. Units may move through and end a movement overlapping graffiti tokens.",
      },
    ],
  },
  {
    keyword: "ground_vehicles",
    name: "Ground Vehicles",
    parents: ["g"],
    related_keywords: [
      "unit",
      "notched_bases",
      "reverse",
      "pivot",
      "terrain",
      "cover",
      "line_of_sight",
      "resiliency",
      "silhouettes",
      "melee",
      "engaged",
      "vehicles",
    ],
    descriptions: [
      {
        type: "structured_list",
        content: [
          "Ground vehicles have notched bases.",
          "Ground vehicles can pivot and reverse.",
          "Ground vehicles can end a move with some part of their base partially overlapping terrain.",
          "A ground vehicle may not end a move or be placed in a position where the miniature would be physically unstable or fall over, or cause the angle of the miniature’s base to be greater than 45°.",
          "Ground vehicles can be in melee but cannot be engaged.",
          "Ground vehicles block LOS as if they were a piece of area terrain consisting of the volume of their silhouette.",
          "When determining the number of obscured miniatures and determining cover during an attack sequence, treat ground vehicles as a piece of area terrain consisting of the volume of their silhouette that provides heavy cover.",
          "When a ground vehicle is defending against a ranged attack, during the Apply Dodge and Cover step, it cannot be obscured and cannot have cover as a result of being obscured.",
        ],
      },
    ],
  },
  {
    keyword: "guardian_x",
    name: "Guardian X",
    activation: "",
    parents: ["g", "units"],
    tag: "Unit Keyword",
    related_keywords: [
      "line_of_sight",
      "attack",
      "wounds",
      "suppression",
      "courage",
      "pierce_x",
      "backup",
      "weapons",
      "apply_dodge_cover",
      "keywords",
    ],
    range: "range_1",
    descriptions: [
      {
        type: "text",
        content:
          "While a friendly trooper unit at {range_1} and in LOS of a unit that has the Guardian X keyword is defending against a ranged attack, it may cancel up to X hit {hit} results during the Modify Attack Dice step of the attack sequence. For each hit {hit} result canceled in this way, the unit with the Guardian X keyword rolls a defense die matching the one on its Unit Card. After converting any defense surge {block_surge} results according to its surge chart or by using surge tokens, the unit with the Guardian X keyword suffers one wound for each blank result. A defending unit that has the Guardian X keyword used on it gains a suppression token as normal.",
      },
      {
        type: "text",
        content:
          "A unit cannot use Guardian X if the defending unit also has the Guardian X keyword. If multiple friendly units can use the Guardian X keyword during an attack, the player who controls those units declares which unit is using the Guardian X keyword and resolves their ability before choosing whether to declare that another unit is using the Guardian X keyword.",
      },
      {
        type: "text",
        content:
          "A unit cannot use Guardian X if it has a number of suppression tokens equal to or greater than its courage.",
      },
      {
        type: "text",
        content:
          "The {keyword:Pierce X} keyword can be used to cancel block {block} results on defense dice rolled by a unit using Guardian X; treat canceled block {block} results as blank results. After using {keyword:Pierce X} in this way, any unused {keyword:Pierce X} value can still be used to cancel block {block} results rolled by the defending unit.",
      },
      {
        type: "text",
        content:
          "Additionally, a unit with the Guardian X keyword cannot benefit from backup and ignores the {rank_corps} rank requirement to provide backup.",
      },
    ],
  },
  {
    keyword: "guidance",
    name: "Guidance",
    activation: "",
    parents: ["g", "units"],
    tag: "Unit Keyword",
    related_keywords: ["actions", "free_card_action"],
    range: "range_2",
    descriptions: [
      {
        type: "text",
        content:
          "When a unit uses the Guidance card action, choose another friendly unit of the specified unit type at {range_2}. The chosen unit performs a free non-attack action.",
      },
    ],
  },
  {
    keyword: "gunslinger",
    name: "Gunslinger",
    activation: "",
    parents: ["g", "units"],
    tag: "Unit Keyword",
    related_keywords: ["attack", "weapons"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with the Gunslinger keyword reaches the Declare Additional Defender step, it may declare an additional defender and create an attack pool consisting solely of a ranged weapon that has already been contributed to another attack pool. The Gunslinger keyword can only be used once per attack sequence.",
      },
    ],
  },
];
