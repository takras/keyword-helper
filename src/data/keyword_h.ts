import { Keyword } from "@/types";

export const KeywordsH: Keyword[] = [
  {
    keyword: "heavy_weapon_team",
    name: "Heavy Weapon Team",
    activation: "",
    parents: ["h", "units"],
    tag: "Unit Keyword",
    related_keywords: ["upgrade_card"],
    printedDescription: "You must equip a Heave Upgrade Card in army building.",
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the Heavy Weapon Team keyword must equip a {upgrade_heavy} Upgrade Card. The miniature added to the unit with this Upgrade Card becomes the unit leader.",
      },
    ],
  },
  {
    keyword: "high_velocity",
    name: "High Velocity",
    tag: "Weapon Keyword",
    parents: ["h", "weapons"],
    related_keywords: ["attack", "dodge", "apply_dodge_cover"],
    printedDescription:
      "While defending against an attack where all weapons have High Velocity, the defending unit cannot spend dodge tokens during the Apply Dodge and Cover step of that attack.",
    descriptions: [
      {
        type: "text",
        content:
          "While defending against an attack in which weapons with the High Velocity weapon keyword are the only weapons in an attack pool, the defending unit cannot spend dodge tokens during the Apply Dodge and Cover step.",
      },
    ],
  },
  {
    keyword: "hold_the_line",
    name: "Hold the Line",
    tag: "Unit Keyword",
    parents: ["h", "units"],
    related_keywords: ["attack", "engaged", "melee"],
    descriptions: [
      {
        type: "text",
        content:
          "While a unit with Hold the Line keyword is engaged, it gains {hit_surge}:{hit} and {block_surge}:{block}.",
      },
    ],
  },
  {
    keyword: "hover_x",
    name: "Hover: Ground/Air X",
    activation: "",
    parents: ["h", "units"],
    tag: "Unit Keyword",
    related_keywords: [
      "standby",
      "ground_vehicles",
      "line_of_sight",
      "repulsor_vehicle",
      "terrain",
      "move",
      "keywords",
    ],
    printedDescription:
      "You can perform the standby action and reverse. Hover: Ground blocks LOS. Hover: Air ignores height X terrain while moving.",
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the Hover: Ground or Hover: Air X keyword can perform standby actions during the Perform Actions step and can gain and spend standby tokens. A unit with the Hover: Ground or Hover: Air X keyword can reverse.",
      },
      {
        type: "text",
        content:
          "A unit with the Hover: Ground keyword is treated as a ground vehicle by other units for all LOS purposes. For all other game effects, the unit is still treated as a repulsor vehicle.",
      },
      {
        type: "text",
        content:
          "A unit with the Hover: Air X keyword ignores terrain of height X or lower while moving and may end a movement overlapping such terrain.",
      },
      { type: "reference", referenced_keyword: "strafe" },
    ],
  },
  {
    keyword: "hunted",
    name: "Hunted",
    activation: "",
    parents: ["h", "units"],
    tag: "Unit Keyword",
    related_keywords: ["setup", "bounty"],
    descriptions: [
      {
        type: "text",
        content:
          "During Setup, if one or more enemy units have the Bounty keyword, each unit with the Hunted keyword gains a bounty token.",
      },
    ],
  },
];
