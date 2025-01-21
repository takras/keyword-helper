import { Keyword } from "@/types";

export const KeywordsR: Keyword[] = [
  {
    keyword: "ram_x",
    name: "Ram",
    parents: ["r", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["notched_bases", "attack", "move", "keywords"],
    descriptions: [
      {
        type: "text",
        content:
          "While a unit performs an attack using an attack pool that includes a weapon with the Ram X keyword, during the Modify Attack Dice step, it may change X results to {hit_critical} results if it meets either of the following conditions:",
      },
      {
        type: "structured_list",
        content: [
          "The unit leader has a notched base and the unit performed at least one full standard move at its maximum speed during the same activation as an attack using Ram X.",
          "The unit leader has a small base and the unit performed at least one move during the same activation as an attack using Ram X.",
        ],
      },
    ],
  },
  {
    keyword: "range",
    name: "Range",
    parents: ["r", "concepts"],
    related_keywords: ["measurement", "at_range"],
    descriptions: [
      {
        type: "reference",
        referenced_keyword: "measurement",
      },
    ],
  },
  {
    keyword: "ranks",
    name: "Ranks",
    parents: ["r", "concepts"],
    related_keywords: ["unit", "army_building"],
    descriptions: [
      {
        type: "text",
        content:
          "Each unit in Star Wars: Legion has a rank. When building an army, a player is restricted on the number of units of each rank they may include as follows:",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander} <strong>Commander:</strong> Each army must include one to two commander units.",
          "  {rank_operative}   <strong>Operative:</strong> Each army may include up to two operative units.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include three to six corps units.",
          "{rank_specialist} <strong>Special Forces:</strong> Each army may include up to three special forces units.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to three support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to two heavy units.",
        ],
      },
    ],
  },
  {
    keyword: "ready_x",
    name: "Ready X",
    parents: ["r"],
    related_keywords: ["standby", "aim", "keywords"],
    descriptions: [
      {
        type: "text",
        content:
          "After a unit with the Ready X keyword performs a standby action, it gains X aim tokens.",
      },
    ],
  },
  {
    keyword: "recharge_x",
    name: "Recharge X",
    parents: ["r"],
    related_keywords: ["shielded_x", "keywords"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with the Recharge X keyword recovers, it may flip up to X inactive shield tokens from their inactive side to their active side.",
      },
    ],
  },
  {
    keyword: "reconfigure",
    name: "Reconfigure",
    parents: ["r"],
    related_keywords: ["upgrade_card", "recover", "exhaust"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit equipped with an Upgrade Card with the Reconfigure keyword recovers or performs a recover action, the player that controls that unit may flip that Upgrade Card to a different side in addition to any other effects of that recover.",
      },
      {
        type: "text",
        content:
          "If an Upgrade Card has the exhaust icon, using the Reconfigure ability does not cause that Upgrade Card to be exhausted.",
      },
    ],
  },
  {
    keyword: "reinforcements",
    name: "Reinforcements",
    parents: ["r"],
    related_keywords: ["move"],
    descriptions: [
      {
        type: "text",
        content:
          "At the start of the End Phase of the first round of a game, a Unit with the Reinforcements keyword may perform a free speed-1 move.",
      },
    ],
  },
  {
    keyword: "regenerate",
    name: "Regenerate X",
    parents: ["r"],
    related_keywords: ["wounds"],
    descriptions: [
      {
        type: "text",
        content:
          "At the end of a unit’s activation, if it has the Regenerate X keyword, it rolls one white defense die for each wound token it has, up to X. For each {block} or {block_surge} result, it removes one wound token.",
      },
    ],
  },

  {
    keyword: "recover",
    name: "Recover",
    activation: "",
    parents: ["r"],
    tag: "",
    related_keywords: [
      "actions",
      "exhaust",
      "recharge_x",
      "reconfigure",
      "suppression",
      "upgrade_card",
      "courage",
    ],
    summary:
      "The unit removes any number of suppression tokens and readies any exhausted Upgrade Cards.",
    descriptions: [
      {
        type: "text",
        content:
          "A unit that performs a recover action removes any number of suppression tokens from the unit and readies any number of the unit’s exhausted Upgrade Cards.",
      },
      {
        type: "text",
        content:
          "When a unit recovers, it readies all of its exhausted cards. When a card is readied, turn it 90° to the left so it is in its original orientation. The card is no longer exhausted.",
      },
      {
        type: "callout",
        callout_keyword: "panic_commander",
      },
      {
        type: "callout",
        callout_keyword: "null_courage",
      },
    ],
  },

  {
    keyword: "rally",
    name: "Rallying",
    summary:
      "Each time a unit activates, it has a chance to rally and remove suppression tokens.",
    parents: ["r"],
    related_keywords: [
      "suppression",
      "panic",
      "dice",
      "actions",
      "activating_units",
      "recover",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "Each time a unit activates, it has a chance to rally and remove suppression tokens. To rally a unit, its controlling player rolls one white defense die for each suppression token the unit has. Then its controlling player removes one suppression token for each {block} or {block_surge} result rolled.",
      },
      {
        type: "text",
        content:
          "After rallying, if a unit begins its Perform Actions step while suppressed, it performs one fewer action during its Perform Actions step.",
      },
      {
        type: "text",
        content:
          "If a unit begins its Perform Actions step while panicked, it cannot perform any actions or free actions. Then, if a unit did not perform any actions or free actions due to panic, at the end of the unit’s activation, it removes suppression tokens equal to its courage value.",
      },
      {
        type: "example",
        content: [
          { type: "header", content: "Example: Suppressed and Panicked" },
          {
            type: "text",
            content:
              "On Ryan’s turn, he chooses to activate a Rebel Trooper unit with 2 suppression tokens. After resolving any effects at the start of the Rebel Trooper unit’s activation, he performs the unit’s Rally step and rolls 2 white defense dice, 1 for each suppression token. Unfortunately, he rolls 2 blanks and does not remove any suppression tokens from the unit.",
          },
          {
            type: "text",
            content:
              "Because the Rebel Troopers have a courage value of 1 and have a number of suppression tokens equal to or greater than their courage value, they are still suppressed and must perform 1 fewer action during the Perform Actions step of their activation.",
          },
          {
            type: "text",
            content:
              "Additionally, because the Rebel Troopers have suppression equal to or greater than double their courage value, they are still panicked as well as suppressed. Therefore, they perform no actions or free actions, and at the end of their activation, they remove suppression tokens equal to their courage value.",
          },
        ],
      },
    ],
  },

  {
    keyword: "reliable_x",
    name: "Reliable X",
    parents: ["r"],
    related_keywords: ["apply_dodge_cover", "activation_phase", "keywords"],
    descriptions: [
      {
        type: "text",
        content:
          "At the start of the Activation Phase, a unit with the Reliable X keyword gains X surge tokens.",
      },
    ],
  },
  {
    keyword: "relentless",
    name: "Relentless",
    parents: ["r"],
    related_keywords: ["attack", "free_card_action"],
    descriptions: [
      {
        type: "text",
        content:
          "After a unit that has the Relentless keyword performs a move action during its activation, it may perform a free attack action.",
      },
    ],
  },
  {
    keyword: "repair_x",
    name: "Repair X",
    parents: ["r"],
    related_keywords: [
      "card_action",
      "ion_x",
      "wounds",
      "resiliency",
      "keywords",
    ],
    range: "range_1",
    descriptions: [
      {
        type: "text",
        content:
          "When a unit uses the Repair X: Capacity Y card action, choose a friendly droid trooper or vehicle unit at {range_1} and LOS and place one wound token on the card that has the Repair X: Capacity Y keyword. Remove a total of up to X wound, ion, and/or vehicle damage tokens from the chosen unit or restore up to X miniatures to that unit. This ability cannot be used if the card that has the Repair X: Capacity Y keyword has a number of wound tokens on it equal to or exceeding Y.",
      },
      {
        type: "text",
        content:
          "Wound tokens on cards are not considered to be on units and do not count toward a unit’s wound threshold, nor can they be removed by abilities that remove wound tokens from units.",
      },
      {
        type: "text",
        content:
          "If a unit has multiple Repair X: Capacity Y abilities, treat each keyword as a separate ability.",
      },
      {
        type: "text",
        content:
          "Additionally, each action is considered unique, and a unit that has access to more than one can use each ability once during its activation. This applies even if the unit has access to two identical abilities from different sources.",
      },
    ],
  },
  {
    keyword: "reposition",
    name: "Reposition",
    parents: ["r"],
    related_keywords: ["move", "pivot"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with the Reposition keyword performs a standard move, it may perform a pivot either before or after performing that standard move.",
      },
    ],
  },

  {
    keyword: "repulsor_vehicle",
    name: "Repulsor Vehicles",
    parents: ["r"],
    related_keywords: [
      "unit",
      "notched_bases",
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
          "Repulsor vehicles have notched bases.",
          "Repulsor vehicles can pivot.",
          "Repulsor vehicles cannot perform the standby action or gain or spend standby tokens.",
          "Repulsor vehicles can end a move with part of their base partially overlapping terrain.",
          "Repulsor vehicles may move onto or through impassable terrain and may place the movement tool overlapping impassable terrain when doing so.",
          "A repulsor vehicle may not end a move or be placed in a position where the miniature would be physically unstable or fall over, or cause the angle of the miniature’s base to be greater than 45°.",
          "Repulsor vehicles can be in melee but cannot be engaged.",
          "Repulsor vehicles do not block LOS, do not obscure miniatures, and do not provide cover.",
          "When a repulsor vehicle is defending against a ranged attack, during the Apply Dodge and Cover step, it cannot be obscured and cannot have cover as a result of being obscured.",
        ],
      },
    ],
  },
  {
    keyword: "restore",
    name: "Restore",
    parents: ["r"],
    related_keywords: ["repair_x", "treat_x"],
    descriptions: [
      {
        type: "text",
        content:
          "Some abilities, such as the {keyword:Treat} and {keyword:Repair} keywords or certain card effects, allow a player to restore miniatures to friendly units. To restore a miniature to a unit, that unit must have had one or more miniatures defeated that round. Choose a miniature that was defeated during the current round and place that miniature on the battlefield in cohesion with its unit leader. Then, give that miniature a number of wound tokens equal to one less than the wound threshold indicated on its Upgrade Card or Unit Card.",
      },
    ],
  },

  {
    keyword: "resolve_setup_effecs",
    name: "Resolve Setup Effects",
    parents: ["r"],
    related_keywords: ["setup", "prepared_positions"],
    descriptions: [
      {
        type: "text",
        content:
          "Starting with the blue player, players resolve any abilities and effects that occur during Setup.",
      },
      {
        type: "reference",
        referenced_keyword: "bounty",
        showOnlySummary: true,
      },
      {
        type: "reference",
        referenced_keyword: "cache",
        showOnlySummary: true,
      },
      {
        type: "reference",
        referenced_keyword: "covert_ops",
        showOnlySummary: true,
      },
      {
        type: "reference",
        referenced_keyword: "complete_the_mission",
        showOnlySummary: true,
      },
      {
        type: "reference",
        referenced_keyword: "flawed",
        showOnlySummary: true,
      },
      {
        type: "reference",
        referenced_keyword: "field_commander",
        showOnlySummary: true,
      },
      {
        type: "reference",
        referenced_keyword: "hunted",
        showOnlySummary: true,
      },
      {
        type: "reference",
        referenced_keyword: "loadout",
        showOnlySummary: true,
      },
      {
        type: "reference",
        referenced_keyword: "scouting_party_x",
        showOnlySummary: true,
      },
      {
        type: "reference",
        referenced_keyword: "transport",
        showOnlySummary: true,
      },
    ],
  },

  {
    keyword: "retinue",
    name: "Retinue",
    parents: ["r"],
    range: "range_2",
    related_keywords: ["aim", "dodge", "backup"],
    summary:
      "At the start of the Activation Phase, if a unit with the Retinue keyword is at {range_2} of another friendly unit or type of unit specified by the Retinue keyword, it gains either one aim or one dodge token.",
    descriptions: [
      {
        type: "text",
        content:
          "At the start of the Activation Phase, if a unit with the Retinue keyword is at {range_2} of another friendly unit or type of unit specified by the Retinue keyword, it gains either one aim or one dodge token.",
      },
      {
        type: "text",
        content:
          "Additionally, a unit with the Retinue keyword ignores the {rank_corps} rank requirement to provide backup to the specified unit.",
      },
    ],
  },

  {
    keyword: "roll_attack_dice",
    name: "Roll Attack Dice",
    parents: ["r"],
    related_keywords: ["attack", "dice", "apply_dodge_cover", "aim"],
    summary: "The attacking player rolls the dice in the attack pool.",
    descriptions: [
      {
        type: "text",
        content:
          "The attacking player chooses an attack pool and resolves the following steps in order:",
      },
      {
        type: "structured_list_numbered",
        content: [
          "<strong>Roll Dice:</strong> The attacking player rolls the dice in the attack pool.",
          "<strong>Reroll Dice:</strong> The attacking player can resolve any abilities or spend any aim tokens that allow the attacking unit to reroll attack dice. A unit may spend any number of aim tokens while it is attacking to reroll up to two different attack dice for each aim token spent. If a unit has multiple aim tokens, that unit can choose to spend each aim token after determining the results of any previous rerolls granted by aim tokens. A unit may reroll the same die multiple times by spending multiple aim tokens, but each die may only be rerolled once per aim token.",
          "<strong>Convert Attack Surges:</strong> The attacking player changes any {hit_surge} results to the result indicated on the Unit Card. Additonally, the attacking player may spend any number of surge tokens on the attacking unit to convert one {hit_surge} result to {hit} a result for every surge token spent. If no result is indicated, turn the die to a blank result.",
        ],
      },
      {
        type: "example",
        content: [
          { type: "header", content: "Example: Roll Attack Dice" },

          {
            type: "text",
            content:
              "Simone has an attacking unit of Snowtroopers with an attack pool that consists of 5 white dice. She rolls the dice and gets 1 {hit_critical}, 1 {hit}, 1 {hit_surge}, and 2 blank results. Having rolled the dice, Simone then resolves any abilities that let her reroll dice. ",
          },
          {
            type: "text",
            content:
              "The Snowtroopers do not have any reroll abilities, but they do have an aim token. Simone chooses to use the aim token to reroll up to 2 dice of her choice. Both dice must be rerolled at the same time; she cannot reroll 1 and then reroll it again with the same aim token.",
          },
          {
            type: "text",
            content:
              "imone chooses to reroll both blank dice, getting 1 {hit_surge} and 1 blank result, bringing the final dice results to 1 {hit_critical}, 1 {hit}, 2 {hit_surge}, and 1 blank result.",
          },
          {
            type: "text",
            content:
              "Next, she converts attack surges. Since the Snowtroopers have {hit_surge}:{hit} on the surge chart on their Unit Card, Simone changes the 2 {hit_surge} results to {hit} results. If the Snowtroopers did not have {hit_surge}:{hit}, she would have turned the {hit_surge} results to blank results instead. The final dice results for the attack are therefore 1 {hit_critical}, 3 {hit}, and 1 blank result.",
          },
        ],
      },
    ],
  },

  {
    keyword: "resiliency",
    name: "Resiliency",
    parents: ["r"],
    related_keywords: [
      "vehicles",
      "ground_vehicles",
      "repulsor_vehicle",
      "resiliency",
      "tokens",
    ],
    summary:
      "Vehicles do not have a courage value. Instead most, but not all, have a resilience value. A vehicle that does not have a resilience value has a “-” on their Unit Card where the resilience value should be.",
    descriptions: [
      {
        type: "text",
        content:
          "Vehicles do not have a courage value. Instead most, but not all, have a resilience value. A vehicle that does not have a resilience value has a “-” on their Unit Card where the resilience value should be.",
      },
      {
        type: "illustration",
        content: "tokens/damage.png",
        align: "right",
        altText: "An oblong hexagon shape with an orange cog inside.",
        width: 80,
      },
      {
        type: "text",
        content:
          "When a vehicle with a resilience value has a number of wounds equal to or more than its resilience value, after the effect causing this is resolved, the vehicle gains a vehicle damage token.",
      },
      {
        type: "text",
        content:
          "When a player activates a vehicle unit with a vehicle damage token, roll a white defense die. On a blank result that vehicle performs one fewer action during its activation.",
      },
      {
        type: "text",
        content:
          "A vehicle can only have one vehicle damage token at a time and can only gain a vehicle damage token in this way once per game.",
      },
      {
        type: "example",
        content: [
          { type: "header", content: "Example: Vehicle Damage" },
          {
            type: "text",
            content:
              "Nicholas’ AAT Tank has already suffered 3 wounds and suffers 3 more from an attack. After the attack is resolved, Nicholas’ AAT Tank gains a vehicle damage token.",
          },
          {
            type: "text",
            content:
              "Because a vehicle can only ever gain a vehicle damage token when it has damage equal to its resilience once per game, if Nicholas removes the vehicle damage token from his AAT Tank and it suffers further wounds, he does not gain another vehicle damage token.",
          },
        ],
      },
    ],
  },

  {
    keyword: "reverse",
    name: "Reverse",
    parents: ["r"],
    related_keywords: [
      "notch_based_movement",
      "notched_bases",
      "vehicles",
      "ground_vehicles",
      "repulsor_vehicle",
      "emplacement_trooper",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "Some miniatures on notched bases can reverse. Only certain unit types may reverse.",
      },
      {
        type: "text",
        content:
          "When a unit performs a move action, it may choose to reverse instead of making another movement. When performing a reverse, follow the normal rules for moving with a notched base with the following exceptions:",
      },
      {
        type: "structured_list",
        content: [
          "When performing a partial reverse, instead of placing the movement tool wholly in the front notch of the unit leader’s base at the start of a move, place the movement tool wholly in the rear notch.",
          "When performing a full reverse, instead of placing the movement tool in the front notch of the unit leader’s base, place it in the rear notch. Then place the front notch of the unit leader’s base on the other end of the movement tool.",
          "While reversing, a unit reduces its speed by 1 to a minimum of 1.",
        ],
      },
    ],
  },
  {
    keyword: "ruthless",
    name: "Ruthless",
    parents: ["r"],
    range: "range_2",
    related_keywords: ["wounds", "free_card_action"],
    summary:
      "When another friendly m trooper unit at {range_2} and in LOS that has a faceup order token activates, it may suffer 1 wound to perform 1 free action.",
    descriptions: [
      {
        type: "text",
        content:
          "When another friendly m trooper unit at {range_2} and in LOS that has a faceup order token activates, it may suffer 1 wound to perform 1 free action.",
      },
    ],
  },
];
