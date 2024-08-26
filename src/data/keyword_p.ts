import { Keyword } from "@/types";

export const KeywordsP: Keyword[] = [
  {
    keyword: "panic",
    name: "Panic",
    parents: ["p", "concepts"],
    related_keywords: [
      "objective",
      "rally",
      "panic_commander",
      "droid_trooper",
      "compel",
      "dauntless",
      "field_commander",
    ],
    descriptions: [
      {
        type: "text",
        content: "Used to track units that are panicked.",
      },
      { type: "reference", referenced_keyword: "panic_commander" },
      { type: "reference", referenced_keyword: "suppression" },
      { type: "reference", referenced_keyword: "contesting_objectives" },
      { type: "reference", referenced_keyword: "rally" },
    ],
  },
  {
    keyword: "panic_commander",
    name: "Commander and Panic Check",
    parents: ["c"],
    related_keywords: [
      "suppression",
      "activating_units",
      "courage",
      "recover",
      "rally",
    ],
    descriptions: [
      {
        type: "illustration",
        altText: "Oblong 6-sided token with an arrowhead inside",
        width: "80",
        align: "right",
        content: "tokens/panic.png",
      },
      {
        type: "text",
        content:
          "When a unit checks to see if it is panicked, instead of using its own courage value, it may use the courage value of a friendly {rank_commander} unit at {range_3}. For example, a unit with 3 suppression tokens and courage value 1 would not be panicked if it chooses to use the courage value of a friendly {rank_commander} at {range_3} that has a courage value of 2 or greater.",
      },
    ],
  },
  {
    keyword: "pass",
    name: "Pass Pool",
    parents: ["p"],
    related_keywords: ["command_phase", "activation_phase"],
    descriptions: [
      {
        type: "illustration",
        altText: "Circular with dots in the middle.",
        width: "120",
        align: "right",
        content: "tokens/advantage.png",
      },
      {
        type: "text",
        content:
          "After creating the order pool, each player counts the number of undefeated units they control. The player with fewer undefeated units adds a number of advantage tokens to their pass pool equal to 1 fewer than the difference in those counts. Once players have created their pass pools, if any, the Command Phase is over, and the Activation Phase begins.",
      },
      {
        type: "example",
        initiallyExpanded: true,
        content: [
          {
            type: "header",
            content: "Example: Create the Pass Pool",
          },
          {
            type: "text",
            content:
              "Nick has 8 undefeated units and Ben has 12. The difference between the counts is 4. 1 fewer than that is 3, so Nick adds 3 advantage tokens to his pass pool.",
          },
        ],
      },
    ],
  },
  {
    keyword: "permanent",
    name: "Permanent",
    parents: ["n"],
    related_keywords: ["command_cards"],
    descriptions: [
      {
        type: "text",
        content:
          "Some Command Cards have the Permanent keyword. Unlike ordinary Command Cards, these cards are not discarded from play during the End Phase and their effects persist as long as they are in play.",
      },
    ],
  },
  {
    keyword: "pierce_x",
    name: "Pierce X",
    parents: ["p", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["weapons", "attack", "guardian_x", "keywords"],
    descriptions: [
      {
        type: "text",
        content:
          "If an attacking unit attacks with a weapon with the Pierce X keyword it may cancel up to X {block} results during the Modify Defense Dice step.",
      },
      {
        type: "text",
        content:
          "The Pierce X keyword can be used to cancel {block} results on defense dice rolled by a unit using the {keyword:Guardian X} keyword. When doing so, treat canceled {block} results as blank results. After using the Pierce X keyword in this way, any unused Pierce X value can still be used to cancel {block} results rolled by the defending unit.",
      },
      {
        type: "example",
        content: [
          {
            type: "header",
            content: "Example: Pierce X",
          },
          {
            type: "text",
            content:
              "For example, a unit with Pierce 3 attacks an enemy unit, and another enemy unit uses {keyword:Guardian 2} to cancel 2 hit {hit} results. After converting defense surge {block_surge} results, the unit using {keyword:Guardian} has rolled 2 block {block} results. The attacking unit uses Pierce to cancel the 2 block {block} results and the unit using {keyword:Guardian} suffers 2 wounds.",
          },
          {
            type: "text",
            content:
              "Now the defending unit rolls defense dice and the attacking unit may cancel 1 more block {block} result rolled by the defending unit since only 2 of its original Pierce 3 have been used so far.",
          },
        ],
      },
    ],
  },

  {
    keyword: "pivot",
    name: "Pivot",
    parents: ["p"],
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
          "Some miniatures that have notched bases can pivot. If a unit can pivot, it is noted in the rules for its unit type.",
      },
      {
        type: "text",
        content:
          "When a unit that can pivot performs a move action, it may choose to pivot instead of performing another movement.",
      },
      {
        type: "text",
        content:
          "To pivot, rotate the unit leader’s base up to 90° to the left or right, keeping the center of the base in the same place. If a unit contains multiple miniatures, each miniature in the unit must pivot so that the directional orientation of its base is the same as the unit leader’s.",
      },
    ],
  },

  {
    keyword: "plodding",
    name: "Plodding",
    parents: ["p"],
    related_keywords: ["move"],
    descriptions: [
      {
        type: "text",
        content:
          "During its activation, a unit with the Plodding keyword can only perform one move action.",
      },
    ],
  },
  {
    keyword: "poison_x",
    name: "Poison X",
    activation: "",
    parents: ["weapons", "p", "keywords"],
    tag: "Weapon Keyword",
    related_keywords: ["wounds", "tokens", "troopers", "droid_trooper"],
    descriptions: [
      {
        type: "illustration",
        align: "right",
        altText: "Poison token",
        content: "tokens/poison.png",
        width: "80",
      },
      {
        type: "text",
        content:
          "A non-droid trooper unit that suffers wounds caused by an attack pool that included a weapon with the Poison X keyword gains X poison tokens.",
      },
      {
        type: "text",
        content:
          "At the end of a unit’s activation, it suffers one wound for each poison token it has, then removes all of its poison tokens.",
      },
    ],
  },

  {
    keyword: "precise_x",
    name: "Precise X",
    parents: ["p"],
    related_keywords: ["aim", "keywords"],
    descriptions: [
      {
        type: "text",
        content:
          "When an attacking unit that has the Precise X keyword spends an aim token during the Reroll Attack Dice step, it can reroll up to X additional attack dice per aim token spent.",
      },
    ],
  },

  {
    keyword: "primitive",
    name: "Primitive",
    parents: ["p", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["armor"],
    descriptions: [
      {
        type: "text",
        content:
          "During the Modify Attack Dice step, after resolving any instances of the Impact X keyword, if the defending unit has the Armor or Armor X keyword, a unit whose attack pool includes a weapon that has the Primitive keyword must modify all critical {hit_critical} results to {hit} a results for that attack.",
      },
    ],
  },

  {
    keyword: "prepared_positions",
    name: "Prepared Positions",
    parents: ["p"],
    related_keywords: ["deploy", "setup", "dodge"],
    descriptions: [
      {
        type: "text",
        content:
          "During the Deploy in Prepared Positions step of setup, a unit with the Prepared Position keyword may deploy by placing the unit leader of that unit within friendly territory. Then the remaining miniatures in that unit are placed in cohesion with their unit leader and within friendly territory. That unit then gains 1 dodge token. Miniatures cannot overlap impassable terrain when they are placed using Prepared Position.",
      },
    ],
  },

  {
    keyword: "programmed",
    name: "Programmed",
    parents: ["p"],
    related_keywords: ["army_building", "upgrade_card"],
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the Programmed keyword must equip at least one {upgrade_programming} Upgrade Card during Army Building.",
      },
    ],
  },

  {
    keyword: "promote",
    name: "Promote",
    parents: ["p"],
    related_keywords: ["miniature", "unit", "field_commander", "command_phase"],
    descriptions: [
      {
        type: "text",
        content:
          "If all of a player’s {rank_commander} units are defeated, and they do not control a unit with the {keyword:Field Commander} keyword with a commander token, starting with the player with priority, players must promote a trooper unit to change its rank and become {rank_commander} unit. ",
      },
      {
        type: "text",
        content:
          "The unit’s original order token is discarded and is replaced by a {rank_commander} order token. The unit counts as a {rank_commander} unit for all trooper unit. If a player has no trooper units to promote and does not control a unit with the Field Commander keyword with a commander token, then they no longer have a {rank_commander} unit and cannot play Command Cards.",
      },
      {
        type: "example",
        content: [
          { type: "header", content: "Example: Promote" },
          {
            type: "text",
            content:
              "Earlier in the round, the last {rank_commander} unit in Josh’s army was defeated. At the Update Order Pool and Promote step of the End Phase, he must choose a trooper unit to become a {rank_commander}. The unit’s original order token is discarded, and he replaces it with a {rank_commander} order token. The promoted unit counts as a {rank_commander} for all rules purposes. If Josh doesn’t have any trooper units to promote, then he no longer has a {rank_commander} and cannot play Command Cards for the rest of the game.",
          },
        ],
      },
    ],
  },

  {
    keyword: "pulling_the_strings",
    name: "Pulling the Strings",
    parents: ["p"],
    range: "range_2",
    related_keywords: ["free_card_action", "attack"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit uses the Pulling the Strings card action, choose another friendly trooper unit at {range_2}. The chosen unit may perform a free attack action or a free move action.",
      },
    ],
  },
];
