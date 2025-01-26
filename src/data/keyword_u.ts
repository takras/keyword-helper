import { Keyword } from "@/types";

export const KeywordsU: Keyword[] = [
  {
    keyword: "uncanny_luck_x",
    name: "Uncanny Luck X",
    parents: ["u", "units"],
    related_keywords: ["attack", "dice", "keywords"],
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
    related_keywords: ["cover", "repair_x"],
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
    printedDescription:
      "When this unit performs a move, it does not reduce its maximum speed for moving out of, into, or through difficult terrain.",
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
      "wookiee_trooper",
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
    keyword: "unit_cards",
    name: "Unit Cards",
    parents: ["u", "units", "concepts"],
    related_keywords: [
      "army_building",
      "apply_dodge_cover",
      "attack",
      "upgrade_card",
      "dice",
      "unit",
      "courage",
      "keywords",
      "miniature",
      "weapons",
      "measurement",
      "wounds",
      "upgrade_card",
      "faction",
      "ranks",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "Unit Cards show the special rules and stats of a unit. Every unit in an army has its own Unit Card, an example of which is shown below.",
      },
      {
        type: "illustration",
        content: "examples/unit-card-1.png",
        align: "center",
        altText: "Luke Skywalker unit card with numbers on them as legends.",
      },
      {
        type: "illustration",
        content: "examples/unit-card-2.png",
        align: "center",
        altText:
          "Luke Skywalker unit cards backside with numbers on them as legends.",
      },
      {
        type: "structured_list_numbered",
        content: [
          "<strong>Name:</strong> The unit’s name.",
          "<strong>Subtitle:</strong> The unit’s subtitle, if it has one. Rules may reference a unit by its subtitle.",
          "<strong>Faction:</strong> The unit’s faction.",
          "<strong>Unit Rank:</strong> The unit’s rank. ",
          "<strong>Points Value:</strong> The unit’s point cost. Points are used in Army Building.",
          "<strong>Number of Miniatures:</strong> The number of miniatures in the unit.",
          "<strong>Unit Type:</strong> The unit’s type.",
          "<strong>Upgrade Bar:</strong> The types of upgrades, if any, that are available to the unit.",
          "<strong>Unit Keywords:</strong> The unit’s keywords. Each unit keyword provides special rules and abilities to the unit.",
          "<strong>Wound Threshold:</strong> The unit’s wound threshold. This is the maximum number of wound tokens each miniature in the unit can have before they are defeated.",
          "<strong>Courage Value:</strong> The unit’s courage value.",
          "<strong>Speed:</strong> The unit’s speed. A unit's speed indicates the longest movement tool the unit may use while moving.",
          "<strong>Weapons:</strong> The unit’s weapons. ",
          "<strong>Defense:</strong> The type of defense die the unit rolls when defending against attacks.",
          "<strong>Surge Chart:</strong> The unit’s surge chart.",
        ],
      },
    ],
  },
  {
    keyword: "unique",
    name: "Unique and Limited",
    parents: ["u", "units", "concepts"],
    related_keywords: ["army_building", "upgrade_card", "unit", "miniature"],
    descriptions: [
      {
        type: "text",
        content:
          "Some units and upgrades represent specific characters, weapons, or equipment. Unique or limited cards are identified by a number of bullets (•) in front of their name. Unique cards have one bullet, and limited cards have more than one bullet. The number of bullets indicates the maximum number of unique and limited cards a player can field that share the same name. This restriction also applies across card types. For example, if a name has two bullets in front of it, the player could field two units with that name, two upgrades with that name, one Unit Card and one upgrade with that name, etc.",
      },
      {
        type: "illustration",
        content: "examples/unique.png",
        align: "center",
        altText: "Cutouts of General Veers unit card and Echo upgrade card.",
      },
      {
        type: "header",
        content:
          "Defeating Upgrade Card Miniatures and Discarding Upgrade Cards",
      },
      {
        type: "text",
        content:
          "When all miniatures added by an Upgrade Card is defeated, the unit it was added to can no longer use or benefit from any rules on the Upgrade Card, with the exception of additional upgrade icons granted to the unit.",
      },
      {
        type: "text",
        content:
          "If an Upgrade Card that adds a miniature to a unit is discarded, but the miniatures are not defeated, the miniatures are not removed, but the unit can no longer use or benefit from any rules on the discarded Upgrade Card.",
      },
      { type: "header", content: "Dual-Sided Upgrade Cards" },
      {
        type: "text",
        content:
          "Some Upgrade Cards are dual-sided. When building an army, only count the points cost on one of the sides of the card. When a unit with a dual-sided Upgrade Card equipped deploys, the unit’s controlling player decides which side is faceup. Only the rules on the faceup side of the card can be used.",
      },
      {
        type: "illustration",
        content: "examples/upgrade-dual-sided.png",
        align: "center",
        altText: "Both sides of a single upgrade card shown.",
      },
      { type: "header", content: "Force Upgrade Cards" },
      {
        type: "text",
        content:
          "If a unit has a {upgrade_force} Upgrade Card equipped, measure the range of any effects on the card from the unit’s unit leader.",
      },
    ],
  },
  {
    keyword: "unstoppable",
    name: "Unstoppable",
    parents: ["u", "units"],
    related_keywords: ["activation_phase", "command_phase"],
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the Unstoppable keyword is eligible to activate during the Activation Phase while it has one or fewer order tokens. This unit may never have more than one faceup order token. While this unit is not defeated, when creating its order pool, its controlling player adds an additional order token corresponding to this unit’s rank to their order pool.",
      },
    ],
  },
  {
    keyword: "upgrade_card",
    name: "Upgrade Cards",
    parents: ["u", "concepts"],
    related_keywords: ["army_building", "weapons", "miniature"],
    descriptions: [
      {
        type: "text",
        content:
          "Upgrade Cards contain additional rules that can be equipped by units during Army Building. Upgrades vary between additional miniatures, weapons, equipment, or even special training or programming.",
      },
      {
        type: "text",
        content:
          "The types of upgrades available for a the unit’s upgrade bar.",
      },
      {
        type: "text",
        content: "The types of upgrades are as follows:",
      },
      {
        type: "structured_list",
        content: [
          "{upgrade_heavy} Heavy Weapon",
          "{upgrade_personnel} Personnel",
          "{upgrade_force} Force",
          "{upgrade_command} Command",
          "{upgrade_hardpoint} Hardpoint",
          "{upgrade_gear} Gear",
          "{upgrade_grenades} Grenades",
          "{upgrade_programming} Programming",
          "{upgrade_comms} Comms",
          "{upgrade_pilot} Pilot",
          "{upgrade_training} Training",
          "{upgrade_generator} Generator",
          "{upgrade_armament} Armament",
          "{upgrade_crew} Crew",
          "{upgrade_ordnance} Ordnance",
          "{upgrade_squad_leader} Squad Leader",
        ],
      },
      {
        type: "text",
        content:
          "For each icon on the unit’s upgrade bar, the unit may equip one Upgrade Card with a matching icon. Points listed on the Upgrade Card are counted towards an army’s points total. A unit may not equip the same Upgrade Card twice. Some Upgrade Cards have restrictions on which units may equip them. Any restrictions for an Upgrade Card are listed on the card.",
      },
      {
        type: "text",
        content:
          "Cards with the {upgrade_squad_leader}, {upgrade_heavy}, or {upgrade_personnel} icons add a miniature armed with the weapon shown on the Upgrade Card to the unit in addition to any weapons on the Unit Card. Only the miniature added to the unit by the Upgrade Card may use the weapon on the Upgrade Card.",
      },
      {
        type: "text",
        content:
          "Cards with the {upgrade_armament}, {upgrade_pilot}, {upgrade_generator}, {upgrade_ordnance}, {upgrade_gear}, {upgrade_grenades}, or {upgrade_hardpoint} icons add an additional weapon, as shown on the Upgrade Card. Any miniature in a unit with an {upgrade_armament}, {upgrade_pilot}, {upgrade_generator}, {upgrade_ordnance}, or {upgrade_hardpoint} Upgrade Card equipped may use the weapon on the Upgrade Card. Only one miniature may use the weapon on a {upgrade_grenades} Upgrade Card per attack sequence.",
      },
    ],
  },
];
