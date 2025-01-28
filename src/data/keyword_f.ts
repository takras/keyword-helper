import { Keyword } from "@/types";

export const KeywordsF: Keyword[] = [
  {
    keyword: "faction",
    name: "Factions",
    activation: "",
    parents: ["f", "concepts"],
    related_keywords: ["army_building", "command_cards"],
    descriptions: [
      {
        type: "text",
        content:
          "Units in <i>Star Wars</i>: Legion are grouped together in factions: the Galactic Empire (Empire), the Rebel Alliance (Rebel), the Separatist Alliance (Separatist), and the Galactic Republic (Republic). A unit’s faction is shown by the faction icon printed in the top left corner of its Unit Card. All units in an army must share the same faction, unless otherwise specified by a special rule.",
      },
      {
        type: "text",
        content:
          "Occasionally a rule references the Light Side or the Dark Side. The Rebel Alliance and the Galactic Republic are the Light Side, and the Galactic Empire and the Separatist Alliance are the Dark Side. Armies not built using these factions state whether they are part of the Light Side or the Dark Side in their rules text.",
      },
    ],
  },
  {
    keyword: "field_commander",
    name: "Field Commander",
    activation: "",
    parents: ["f", "units"],
    tag: "Unit Keyword",
    related_keywords: [
      "army_building",
      "setup",
      "command_cards",
      "panic",
      "courage",
      "tokens",
    ],
    printedDescription:
      "You are considered a {rank_commander} for order and card purposes, but do not use a {rank_commander} token. Other friendly units at {range_3} may treat their courage value as 2 when checking for panic.",
    descriptions: [
      {
        type: "illustration",
        content: "tokens/commander.png",
        align: "right",
        width: 80,
        altText: "Pentagon shaped with a commander rank icon inside.",
      },
      {
        type: "text",
        content:
          "During Army Building, an army that includes a unit with the Field Commander keyword may ignore the minimum {rank_commander} rank requirement. If a player’s army contains no {rank_commander} units during Setup but does contain a unit with the Field Commander keyword, that unit gains a commander token. When a player reveals a non-{rank_commander} or {rank_operative} specific Command Card, they may nominate a friendly unit with the Field Commander keyword to be commander and issue orders. A unit with the Field Commander keyword is not a {rank_commander} and only counts as one for the purposes of issuing orders with a Command Card during the Command Phase.",
      },
      {
        type: "text",
        content:
          "Additionally, if a friendly unit is at {range_3} of the unit with the commander token and both units share the same faction or affiliation, that friendly unit may treat their courage value as 2 when checking for panic.",
      },
    ],
  },
  {
    keyword: "fire_support",
    name: "Fire Support",
    activation: "",
    parents: ["f", "units"],
    tag: "Unit Keyword",
    related_keywords: ["issue_order", "standby"],
    descriptions: [
      {
        type: "text",
        content:
          "After a unit with the Fire Support keyword is issued an order, it gains a standby token.",
      },
    ],
  },
  {
    keyword: "fitting_on_terrain",
    name: "Fitting on Terrain",
    parents: ["f", "concepts"],
    related_keywords: [
      "terrain_cover",
      "terrain_height",
      "terrain_height",
      "terrain",
      "terrain_movement",
      "obstacle_terrain",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "When a trooper miniature’s base is overlapping a piece of obstacle terrain, it must be completely overlapping that terrain. Trooper miniatures cannot end a movement or be placed in a way that would cause their base to only partially overlap a piece of obstacle terrain and may not have any part of part of its base hanging off the terrain. Trooper miniatures cannot be deployed in a way where any part of their base is only partially overlapping a piece of obstacle terrain.",
      },
      {
        type: "example",
        content: [
          {
            type: "header",
            content: "Example: Fitting on Terrain",
          },
          {
            type: "illustration",
            content: "examples/fitting-on-terrain.png",
            align: "center",
            altText: "Miniatures placed on terrain illegally and legally",
          },
          {
            type: "text",
            content:
              "When placing miniatures on obstacle terrain, a miniature’s base must completely overlap the terrain. Because the 2 Clone Troopers are hanging off the balcony and only partially overlapping the piece of obstacle terrain, they cannot be placed there and must be placed in such a way that their bases completely overlap the obstacle terrain like the other 2 Clone Troopers.",
          },
        ],
      },
    ],
  },
  {
    keyword: "fixed",
    name: "Fixed: Front/Rear",
    parents: ["f", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["attack", "miniature"],
    printedDescription:
      "To add a weapon to an attack, the defending unit must have at least 1 miniatures base partially inside the specified firing arc.",
    descriptions: [
      {
        type: "text",
        content:
          "To add a weapon that has the Fixed: Front or Fixed: Rear keyword to an attack pool, the defending unit must have at least one of its miniature’s bases partially inside the specified firing arc of the attacking miniature.",
      },
    ],
  },
  {
    keyword: "flawed",
    name: "Flawed",
    activation: "",
    parents: ["f", "units"],
    tag: "Unit Keyword",
    related_keywords: ["setup", "command_cards"],
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the Flawed keyword has a corresponding Flaw Card that must be added to an opponent’s command hand during Setup. The unit the Flaw Card belongs to is indicated in the             top right corner of the Flaw Card. An opponent may play a Flaw Card from their command hand when permitted by the rules on the Flaw Card. If both players have a Flaw Card in their command hand, at the start of each phase the player with priority must decide first whether to play a Flaw Card or not. If neither player has priority, then the blue player decides first. Any played Flaw Cards are discarded at the start of the End Phase and their effects end.",
      },
      {
        type: "text",
        content:
          "Flaw Cards are not Command Cards and are not affected by rules that affect Command Cards.",
      },
    ],
  },
  {
    keyword: "flexible_response_x",
    name: "Flexible Response X",
    activation: "",
    parents: ["f", "units"],
    tag: "Unit Keyword",
    related_keywords: ["upgrade_card", "army_building", "keywords"],
    printedDescription: "Must equip X Heavy Upgrade cards.",
    descriptions: [
      {
        type: "text",
        content:
          "During Army Building, a unit with the Flexible Response keyword must equip X {upgrade_heavy} upgrades.",
      },
    ],
  },
  {
    keyword: "form_attack_pools",
    parents: ["f"],
    name: "Form Attack Pools",
    activation: "",
    related_keywords: ["attack", "dice", "miniature", "line_of_sight"],
    descriptions: [
      {
        type: "text",
        content:
          "The attack pool consists of all the attack dice the attacking unit rolls against the defending unit. To form the attack pool, the attacking player performs the following steps:",
      },
      {
        type: "structured_list_numbered",
        content: [
          "<strong>Determine Eligible Miniatures:</strong> A miniature in the attacking unit is eligible to add dice to the attack pool if that miniature has LOS to any miniature in the defending unit.",
          "<strong>Choose Weapons and Gather Dice:</strong> For each eligible miniature, the attacking player may choose up to one weapon available to the miniature to add to the attack pool, along with any weapon keywords that weapon may have.",
        ],
      },
      {
        type: "structured_list",
        content: [
          "A miniature must meet any requirements to choose a weapon.",
          "A miniature may only add a weapon to an attack pool once throughout the entire attack sequence.",
          "Weapons provided by a {upgrade_squad_leader}, {upgrade_heavy}, or {upgrade_personnel} upgrade or Command Card can only be used by the miniature indicated on the card.",
          "A weapon cannot be chosen if the defending unit is at a range less than the weapon’s minimum range or greater than the weapon’s maximum range, as measured from the attacking unit leader to the closest miniature in the defending unit.",
          "A ranged weapon cannot be chosen if the defending unit is in melee with the attacking unit.",
          "An attack pool cannot contain both melee and ranged weapons.",
          "An attack pool can consist of different weapons.",
          "All weapons with an identical name must go in the same attack pool and cannot be split among multiple attack pools.",
          "An attack pool must consist of at least one weapon.",
        ],
      },
      {
        type: "text",
        content:
          "After the attacking player is done forming the attack pool, they gather all the dice for that attack pool and place them on the battlefield next to the defending unit.",
      },
      {
        type: "example",
        content: [
          { type: "header", content: "Example: Forming Attack Pools" },
          {
            type: "illustration",
            content: "examples/forming-attack-pool.png",
            align: "center",
            altText: "A droid unit at range 3 of Clone troopers.",
          },
          {
            type: "text",
            content:
              "Summer has declared an attack with her unit of Battle Droids and ensured that the defending unit of Clone Troopers are in range and LOS. Next, Summer determines eligible miniatures by checking LOS from each individual Battle Droid in the unit. A miniature is eligible to contribute dice to an attack pool if it has LOS to any miniature in the defending unit. Summer determines that all but 1 of Battle Droids are eligible miniatures. Then, for each eligible miniature, Summer chooses 1 of the weapons available to the unit for that miniature to contribute to the attack pool. A miniature must meet all requirements, if any, to choose a particular weapon. Finally, Summer cannot choose any weapons if the Clone Troopers would be closer than the weapon’s minimum range or beyond the weapon’s maximum range.",
          },
          {
            type: "text",
            content:
              "Since the Clone Troopers are at {range_2} and Summer has 4 eligible Battle Droids, she decides to add 4 {range_1}–{range_3} blaster rifles to the attack pool. She gathers the dice for these weapons and places them together on the battlefield next to the defending unit.",
          },
        ],
      },
    ],
  },
  {
    keyword: "free_card_action",
    name: "Free Card Action",
    activation: "",
    parents: ["f"],
    summary:
      "{action_free} The unit performs an action listed on its Unit Card or one of its Upgrade Cards. Free card actions do not cost the unit any actions to perform. Free card actions have this symbol {action_free}. A unit may perform more than one free card action, as long as they are different. A unit may only perform free actions during their Perform Actions step and may only perform each instance of a free action once per activation. Free actions do not allow a unit to perform a non-move action more than once during its activation.",
    related_keywords: [
      "actions",
      "activating_units",
      "card_action",
      "exhaust",
      "keywords",
      "upgrade_card",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "<strong>Free Card Action {action_free}:</strong> The unit performs an action listed on its Unit Card, one of its Upgrade Cards, a Command Card, or a Battle Card. Free card actions do not cost the unit any actions to perform. Free card actions have this symbol {action_free}. A unit may perform more than one free card action, as long as they are different. A unit may only perform free actions during its Perform Actions step and may only perform each instance of a free action once per activation. Free actions do not allow a unit to perform a non-move action more than once during its activation.",
      },
    ],
  },

  {
    keyword: "full_pivot",
    name: "Full Pivot",
    activation: "",
    parents: ["f", "units"],
    tag: "Unit Keyword",
    related_keywords: ["pivot"],
    printedDescription: "When you perform a pivot, you may pivot up to 360°.",
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with the Full Pivot keyword performs a pivot, it may pivot up to 360°.",
      },
    ],
  },
];
