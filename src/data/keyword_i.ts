import { Keyword } from "@/types";

export const KeywordsI: Keyword[] = [
  {
    keyword: "im_part_of_the_squad_too",
    name: "I'm Part of the Squad Too",
    activation: "",
    parents: ["i", "units"],
    tag: "Unit Keyword",
    related_keywords: ["objective"],
    range: "range_1",
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the I’m Part of the Squad Too keyword is contesting an objective token if its unit leader is at {range_1} of that token instead of {range_half}.",
      },
    ],
  },
  {
    keyword: "immune",
    name: "Immune: Keyword",
    activation: "",
    parents: ["i", "units"],
    tag: "Unit Keyword",
    related_keywords: [
      "pierce_x",
      "blast",
      "card_effects",
      "game_effects",
      "melee",
      "weapons",
      "melee_pierce",
    ],
    descriptions: [
      {
        type: "reference",
        referenced_keyword: "immune_blast",
      },
      {
        type: "reference",
        referenced_keyword: "immune_deflect",
      },
      {
        type: "reference",
        referenced_keyword: "immune_enemy_effects",
      },
      {
        type: "reference",
        referenced_keyword: "immune_melee",
      },
      {
        type: "reference",
        referenced_keyword: "immune_melee_pierce",
      },
      {
        type: "reference",
        referenced_keyword: "immune_pierce",
      },
      {
        type: "reference",
        referenced_keyword: "immune_range_1_weapons",
      },
    ],
  },
  {
    keyword: "immune_blast",
    name: "Immune: Blast",
    activation: "",
    parents: ["units"],
    tag: "Unit Keyword",
    related_keywords: ["immune", "blast"],
    printedDescription:
      "You ignore the Blast keyword effects from attacking units.",
    descriptions: [
      {
        type: "text",
        content:
          "While a unit with the Immune: Blast keyword is defending, the effects of the Blast keyword are ignored.",
      },
    ],
  },
  {
    keyword: "immune_enemy_effects",
    name: "Immune: Enemy Effects",
    activation: "",
    parents: ["units"],
    tag: "Unit Keyword",
    related_keywords: ["immune", "card_effects", "game_effects"],
    printedDescription:
      "You ignore the Enemy Effect keywords and cannot be targeted by an enemy card effect.",
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the Immune: Enemy Effects keyword ignores all enemy card effects and cannot be targeted by any enemy card effects.",
      },
    ],
  },
  {
    keyword: "immune_melee",
    name: "Immune: Melee",
    activation: "",
    parents: ["units"],
    tag: "Unit Keyword",
    related_keywords: ["immune", "melee"],
    printedDescription: "You cannot be engaged in melee.",
    descriptions: [
      {
        type: "text",
        content:
          "Enemy units cannot be placed in base contact with a unit that has the Immune: Melee keyword.",
      },
    ],
  },
  {
    keyword: "immune_melee_pierce",
    name: "Immune: Melee Pierce",
    activation: "",
    parents: ["units"],
    tag: "Unit Keyword",
    related_keywords: ["immune", "melee", "pierce_x"],
    printedDescription: "You ignore the effect of Melee Pierce.",
    descriptions: [
      {
        type: "text",
        content:
          "While a unit with the Immune: Melee Pierce keyword is defending against a melee attack, the attacker cannot use the {keyword:Pierce X} weapon keyword to cancel {block} results on defense dice during the Modify Defense Dice step.",
      },
      {
        type: "text",
        content:
          "While a unit with Immune: Melee Pierce is using the {keyword:Guardian X} keyword during a melee attack, the attacking unit cannot use the {keyword:Pierce X} keyword to cancel {block} results on defense dice rolled by that unit for the Guardian X keyword.",
      },
    ],
  },
  {
    keyword: "immune_pierce",
    name: "Immune: Pierce",
    activation: "",
    parents: ["units"],
    tag: "Unit Keyword",
    related_keywords: ["immune", "pierce_x"],
    printedDescription: "You ignore the effect of Pierce X.",
    descriptions: [
      {
        type: "text",
        content:
          "While a unit with the Immune: Pierce keyword is defending, the attacker cannot use the {keyword:Pierce X} weapon keyword to cancel d results on defense dice during the Modify Defense Dice step.",
      },
      {
        type: "text",
        content:
          "While a unit with Immune: Pierce is using the {keyword:Guardian X} keyword, the attacking unit cannot use the {keyword:Pierce X} keyword to cancel {block} results on defense dice rolled by that unit for the {keyword:Guardian X} keyword.",
      },
    ],
  },
  {
    keyword: "immune_range_1_weapons",
    name: "Immune: Range 1 Weapons",
    activation: "",
    parents: ["units"],
    tag: "Unit Keyword",
    related_keywords: ["immune", "weapons"],
    printedDescription:
      "Weapons with only {range_1} cannot be used to attack you.",
    descriptions: [
      {
        type: "text",
        content:
          "An attack pool that is assigned to a unit with the Immune: Range 1 Weapons keyword cannot contain weapons with a maximum range of {range_1}.",
      },
    ],
  },
  {
    keyword: "immobilize_x",
    name: "Immobilize X",
    parents: ["i", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["wounds", "move", "keywords"],
    descriptions: [
      {
        type: "illustration",
        align: "right",
        altText: "Immobilize token",
        content: "tokens/immobilize.png",
        width: 80,
      },
      {
        type: "text",
        content:
          "A unit that suffers one or more wounds after defending against an attack that includes a weapon with the Immobilize X weapon keyword gains X immobilize tokens.",
      },
      {
        type: "text",
        content:
          "A unit’s maximum speed is reduced by 1 for each immobilize token it has. A unit whose maximum speed is 0 and has at least one immobilize token cannot perform moves of any kind. At the end of a unit’s activation, it removes any immobilize tokens that it has.",
      },
      {
        type: "text",
        content:
          "When a unit performs a move, apply any effects that increase the unit’s maximum speed before applying any effects that reduce its maximum speed.",
      },
    ],
  },
  {
    keyword: "immune_deflect",
    name: "Immune: Deflect",
    activation: "",
    parents: ["weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["immune", "weapons"],
    descriptions: [
      {
        type: "text",
        content:
          "During an attack, if the attack pool contains weapons with the Immune: Deflect keyword, the attacking unit cannot suffer wounds from the {keyword:Deflect} keyword.",
      },
    ],
  },
  {
    keyword: "impact_x",
    name: "Impact X",
    activation: "",
    parents: ["weapons", "i"],
    tag: "Weapon Keyword",
    related_keywords: ["armor", "keywords"],
    printedDescription:
      "During attack, if the defender has Armor keyword, you can modify up to X {hit} results to {hit_crit} results during Modify Attack dice step.",
    descriptions: [
      {
        type: "text",
        content:
          "During the Modify Attack Dice step, if the defending unit has the {keyword:Armor} or {keyword:Armor X} keyword, a unit whose attack pool includes a weapon that has the Impact X keyword can modify up to X hit {hit} results to critical {hit_critical} results for that attack.",
      },
    ],
  },
  {
    keyword: "impassable_terrain",
    name: "Impassable Terrain",
    activation: "",
    parents: ["i", "concepts"],
    related_keywords: ["terrain", "move"],
    descriptions: [
      {
        type: "reference",
        referenced_keyword: "terrain_movement",
      },
    ],
  },
  {
    keyword: "impervious",
    name: "Impervious",
    activation: "",
    parents: ["i", "units"],
    tag: "Unit Keyword",
    related_keywords: ["attack", "pierce_x"],
    printedDescription:
      "While defending, if attacker is using Pierce X keyword, you roll X extra defend dice.",
    descriptions: [
      {
        type: "text",
        content:
          "While a unit with the Impervious keyword is defending, it rolls a number of extra defense dice during the Roll Defense Dice step equal to the total {keyword:Pierce X} value of weapons in the attack pool.",
      },
      {
        type: "text",
        content:
          "If a unit with Impervious also has the {keyword:Immune: Pierce} keyword, then it does not roll extra defense dice for the Impervious keyword when defending against an attack with the {keyword:Pierce X} keyword.",
      },
    ],
  },
  {
    keyword: "incognito",
    name: "Incognito",
    activation: "",
    parents: ["i", "units"],
    tag: "Unit Keyword",
    range: "range_1",
    related_keywords: ["attack", "objective", "backup"],
    descriptions: [
      {
        type: "illustration",
        align: "right",
        altText: "Round token with picture of a unit inside.",
        content: "tokens/incognito.png",
        width: 120,
      },
      {
        type: "text",
        content:
          "A unit with the Incognito keyword cannot be attacked by enemy units that are beyond {range_1} of it, cannot contest objectives, and cannot provide backup.",
      },
      {
        type: "text",
        content:
          "If a unit with the Incognito keyword ever performs an attack or defends against an attack, it loses all special rules of the Incognito keyword for the remainder of the game. Additionally, at the beginning of a unit with the Incognito keyword’s activation, it may choose to lose the special rules of the Incognito keyword for the remainder of the game.",
      },
    ],
  },
  {
    keyword: "inconspicious",
    name: "Inconspicious",
    activation: "",
    parents: ["i", "units"],
    tag: "Unit Keyword",
    range: "range_1",
    related_keywords: ["attack", "suppression", "rally"],
    printedDescription:
      "If you have at least one suppression token and an enemy unit performs an attack, it must target another unit, if able. When you rally, you may choose not to remove some suppression tokens.",
    descriptions: [
      {
        type: "text",
        content:
          "While a unit with the Inconspicuous keyword has at least one suppression token, when an enemy unit performs an attack, it must target another unit, if able. When a unit with the Inconspicuous keyword rallies, it may choose to not remove any number of suppression tokens, including zero.",
      },
    ],
  },
  {
    keyword: "independent_x",
    name: "Independent: Token X/Action",
    activation: "",
    parents: ["i", "units"],
    tag: "Unit Keyword",
    related_keywords: ["tokens", "free_card_action", "keywords"],
    descriptions: [
      {
        type: "text",
        content:
          "At the start of the Activation Phase, if a unit with the Independent keyword does not have an order token, that unit may gain X of the listed token(s) or perform the listed action as a free action.",
      },
    ],
  },
  {
    keyword: "indomitable",
    name: "Indomitable",
    activation: "",
    parents: ["i", "units"],
    tag: "Unit Keyword",
    related_keywords: ["rally"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit that has the Indomitable keyword performs its Rally step, it rolls red defense dice instead of white defense dice.",
      },
    ],
  },
  {
    keyword: "infiltrate",
    name: "Infiltrate",
    activation: "",
    parents: ["i", "units"],
    tag: "Unit Keyword",
    related_keywords: ["deploy"],
    printedDescription:
      "When you deploy, place your leader within friendly territory and place other miniatures in cohesion and within friendly territory.",
    descriptions: [
      {
        type: "text",
        content:
          "At the start of an undeployed unit with the Infiltrate keyword’s activation, it may deploy by placing the unit leader of that unit within friendly territory. Then the remaining miniatures in that unit are placed in cohesion with their unit leader and within friendly territory. Miniatures cannot overlap impassable terrain when they are placed using Infiltrate.",
      },
    ],
  },
  {
    keyword: "inspire_x",
    name: "Inspire X",
    activation: "",
    parents: ["i", "units"],
    tag: "Unit Keyword",
    related_keywords: ["actions", "keywords"],
    range: "range_2",
    printedDescription:
      "At the end of this units activation, remove up to X suppression tokens from other friendly units at {range_2}.",
    descriptions: [
      {
        type: "text",
        content:
          "At the end of a unit with the Inspire X keyword’s activation, remove up to X total suppression tokens from other friendly units at {range_2}.",
      },
    ],
  },
  {
    keyword: "interrogate",
    name: "Interrogate",
    activation: "",
    parents: ["i", "units"],
    tag: "Unit Keyword",
    related_keywords: ["command_phase", "command_cards", "cunning"],
    range: "range_1",
    descriptions: [
      {
        type: "text",
        content:
          "During the Command Phase, if a player reveals a Command Card that belongs to a unit at {range_1} of one or more enemy units with the Interrogate keyword and there would be a tie for priority, treat that Command Card as having one more pip.",
      },
    ],
  },
  {
    keyword: "ion_x",
    name: "Ion X",
    activation: "",
    parents: ["weapons", "i"],
    tag: "Weapon Keyword",
    related_keywords: ["vehicles", "droid_trooper", "shielded_x", "keywords"],
    descriptions: [
      {
        type: "illustration",
        align: "right",
        altText: "Ion token",
        content: "tokens/ion.png",
        width: 80,
      },
      {
        type: "text",
        content:
          "A vehicle or droid trooper unit that suffers wounds after defending against an attack that included a weapon with the Ion X keyword gains X ion tokens.",
      },
      {
        type: "text",
        content:
          "At the start of a unit’s activation, roll one white defense die for every ion token that unit has. If any blank results are rolled, that unit performs one fewer action during its activation. At the end of a unit’s activation, it removes any ion tokens that it has.",
      },
      {
        type: "text",
        content:
          "If an attack pool includes the Ion X keyword, at the start of the Modify Attack Dice step of the attack sequence, before any other effects, the defending unit must flip active shield tokens, if able, for each hit {hit} or critical {hit_critical} result in the attack roll, up to X.",
      },
    ],
  },
  {
    keyword: "issue_order",
    name: "Issue Orders and Nominate Commanders",
    parents: ["i", "concepts"],
    related_keywords: ["command_phase"],
    descriptions: [
      {
        type: "text",
        content:
          "After determining priority, players nominate commanders and issue orders to their units.",
      },
      {
        type: "text",
        content:
          "If the played Command Card corresponds to a specific unit, that unit must be nominated as the commander. Otherwise, players may nominate any one {rank_commander} unit to be their commander.",
      },
      {
        type: "text",
        content:
          "Once all players have nominated a commander, they issue orders to their units, starting with the player who has priority. The number of orders and the units they can be issued to is listed on each Command Card. For a commander to issue an order to a unit, the following must be true:",
      },
      {
        type: "structured_list",
        content: [
          "The unit cannot have already received an order during the current Command Phase.",
          "The unit must match the type (if any) listed on the Command Card.",
        ],
      },
      {
        type: "text",
        content:
          "When a unit is issued an order, take an order token that corresponds to the unit’s rank and place it faceup next to the unit. A commander must issue all the orders allowed by the Command Card, if able. If a commander cannot issue all the orders allowed by the Command Card, any excess orders are lost. Once both players have issued orders, they then proceed to create the order pool.",
      },
      {
        type: "example",
        content: [
          { type: "header", content: "Other Ways to Issue Orders" },
          {
            type: "text",
            content:
              "Some rules or abilities allow units to be issued orders from sources other than the nominated commander. These units do not have to follow the above criteria when they are issued orders in this way, instead following the rules of the effect granting that order. A unit cannot be issued more than one order each round.",
          },
        ],
      },
    ],
  },
];
