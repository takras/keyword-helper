import { Keyword } from "@/types";

export const KeywordsL: Keyword[] = [
  {
    keyword: "latent_power",
    name: "Latent Power",
    activation: "",
    parents: ["l", "units"],
    tag: "Unit Keyword",
    range: "range_1",
    related_keywords: ["suppression", "immobilize_x"],
    descriptions: [
      {
        type: "text",
        content:
          "At the end of a unit with the Latent Power keyword’s activation, it may gain 1 suppression token to roll 1 red defense die. If it does, on {block_surge} e result, choose an enemy unit at {range_1} of this miniature. The chosen unit gains 2 suppression tokens and 2 immobilize tokens. On a blank result, remove 1 wound or 1 poison token from a friendly non-droid trooper unit at {range_1} of this miniature.",
      },
    ],
  },
  {
    keyword: "lethal",
    name: "Lethal X",
    activation: "",
    parents: ["l", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["attack", "aim"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit performs an attack with a weapon that has the Lethal X keyword in the attack pool, it can spend up to X Aim tokens during the Modify Attack Dice step. If it does, the attack pool gains Pierce 1 for each aim token spent. The attacking unit may not reroll dice with any aim tokens spent this way.",
      },
    ],
  },
  {
    keyword: "leader",
    name: "Leader",
    activation: "",
    parents: ["l"],
    tag: "Upgrade Keyword",
    related_keywords: ["unit", "miniature", "suffering_wounds"],
    descriptions: [
      {
        type: "text",
        content:
          "A miniature with the Leader keyword is treated as a unit’s unit leader for all rules purposes.",
      },
      {
        type: "text",
        content:
          "If a miniature with the Leader keyword and a wound threshold of 2 is defeated while in a unit with a wound threshold of 1, replace one of the remaining miniatures in that unit as normal, then assign the miniature with the Leader keyword one wound token.",
      },
      {
        type: "text",
        content:
          "Only one Upgrade Card with the Leader keyword can be equipped to each unit.",
      },
    ],
  },
  {
    keyword: "leaving_battlefield",
    name: "Leaving the Battlefield",
    parents: ["l"],
    related_keywords: ["activating_units", "move", "miniature", "battlefield"],
    descriptions: [
      {
        type: "text",
        content:
          "Units may not voluntarily end a movement with any of its miniature’s bases partially or fully outside the battlefield. A miniature may leave the battlefield temporarily if it ends its movement with its base fully inside the battlefield, such as when a unit with a notched base moves along the movement tool. If this is not possible, the miniature stops its movement when it contacts the edge of the battlefield, then it loses any remaining actions and may not perform any free actions.",
      },
    ],
  },
  {
    keyword: "line_of_sight",
    name: "Line of Sight",
    activation: "",
    parents: ["l"],
    tag: "LOS",
    related_keywords: [
      "attack",
      "base",
      "miniature",
      "terrain",
      "silhouettes",
      "vehicles",
      "troopers",
    ],
    summary:
      "Line of Sight (LOS) is used to see if one miniature can 'see' another miniature.",
    descriptions: [
      {
        type: "text",
        content:
          "Line of sight (LOS) is used to see if one miniature can “see” another miniature. A player determines LOS from the perspective of their miniatures.",
      },
      {
        type: "text",
        content:
          "This is done by creating a cylinder rising from the miniature’s base called a silhouette. A miniature’s silhouette includes the miniature’s base and the area above it up to the height of the silhouette.",
      },
      {
        type: "text",
        content:
          "When determining LOS between two miniatures, if an unobstructed straight imaginary line can be drawn from any part of one miniature’s silhouette to any part of the other miniature’s silhouette, those miniatures have LOS to each other.",
      },
      { type: "header", content: "Blocking LOS" },
      {
        type: "text",
        content:
          "Regardless of which silhouettes are used to determine LOS, several things may block LOS by preventing an imaginary straight line from being drawn between the silhouettes of the two miniatures:",
      },
      {
        type: "structured_list",
        content: [
          "The silhouettes of miniatures in vehicle units block LOS.",
          "Terrain that the players have determined blocks LOS.",
          "The silhouettes of miniatures in trooper units and all their subtypes <strong>do not</strong> block LOS.",
        ],
      },
      { type: "header", content: "Terrain Blocking LOS" },
      {
        type: "text",
        content:
          "Terrain can block LOS between miniatures by preventing an unobstructed imaginary straight line from being drawn between their silhouettes. This usually is due to the terrain’s size or shape creating a barrier between the two silhouettes. Additionally, some terrain also blocks LOS due to its nature of being concealing or obscuring—an example of this would be a billowing smokestack, a foggy marsh, or a burning ruin. Terrain like this should be identified by the players before the game begins.",
      },
      {
        type: "example",
        content: [
          {
            type: "header",
            content: "Example: Drawing Line of Sight and Blocking LOS",
          },
          {
            type: "illustration",
            content: "examples/line-of-sight.png",
            align: "center",
            altText:
              "Situation on tabletop with lines drawn to illustrate Line of Sight.",
          },
          {
            type: "text",
            content:
              "The Battle Droids can draw LOS to the Clone Troopers because they can draw an imaginary straight line from their unit leader’s silhouette to at least 1 of the Clone Trooper’s silhouettes.",
          },
          {
            type: "text",
            content:
              "The Battle Droids can draw LOS to Clone Commander Cody because the silhouette of the Clone Troopers does not block LOS.",
          },
          {
            type: "text",
            content:
              "The Battle Droids do not have LOS to Obi-Wan Kenobi, because the building blocks an unobstructed straight imaginary line from their unit leader’s silhouette to any part of his silhouette.",
          },
        ],
      },
    ],
  },
  {
    keyword: "loadout",
    name: "Loadout",
    activation: "",
    parents: ["l", "units"],
    tag: "Unit Keyword",
    related_keywords: ["army_building", "upgrade_card", "counterpart"],
    descriptions: [
      {
        type: "text",
        content:
          "During Army Building, when a player includes a unit with the Loadout keyword in their army, for each Upgrade Card equipped to that unit, they may choose another eligible Upgrade Card of the same type with an equal or lesser point cost and set it aside. During Setup, a unit with the Loadout keyword may swap any number of its equipped Upgrade Cards with the matching set-aside Upgrade Cards one for one.",
      },
      {
        type: "text",
        content:
          "When swapping Upgrade Cards, a unit cannot have two or more upgrades with the same name equipped at the same time. If two or more units with the Loadout keyword are in the same army, keep their respective set-aside Upgrade Cards separate. Each unit can swap Upgrade Cards only with their own set- aside cards; they cannot share set-aside Upgrade Cards.",
      },
      {
        type: "text",
        content:
          "A Counterpart Card that is added to a unit with the Loadout keyword also benefits from the Loadout ability.",
      },
    ],
  },
  {
    keyword: "long_shot",
    name: "Long Shot",
    activation: "",
    parents: ["l", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["attack", "aim", "range"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with a weapon with the Long Shot keyword performs an attack, before choosing an enemy unit to attack during the Declare Defenders step, it may spend an aim token to increase the maximum range of that weapon by one until the end of that attack sequence. The attacking unit may not reroll dice with any aim tokens spent in this way. Only one aim token may be spent in this way per attack sequence.",
      },
    ],
  },

  {
    keyword: "low_profile",
    name: "Low Profile",
    activation: "",
    parents: ["l", "units"],
    tag: "Unit Keyword",
    related_keywords: ["cover"],
    descriptions: [
      {
        type: "text",
        content:
          "While defending against a ranged attack, if a unit with the Low Profile keyword would roll one or more defense dice during the Roll Cover Pool step, it rolls one fewer defense die and instead adds an additional {block} result to the cover pool after rolling.",
      },
    ],
  },
];
