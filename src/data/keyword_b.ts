import { Keyword } from "@/types";

export const KeywordsB: Keyword[] = [
  {
    keyword: "backup",
    name: "Backup",
    activation: "",
    range: "range_half",
    parents: ["b"],
    summary:
      "When a unit that is benefiting from backup is attacked by a ranged attack and the attacking unit’s unit leader is beyond {range_2} of it, it may cancel up to two {hit} results during the Modify Attack Dice step of the attack sequence.",
    related_keywords: [
      "attack",
      "line_of_sight",
      "troopers",
      "suppression",
      "guardian_x",
      "retinue",
      "entourage",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "When a friendly trooper unit with the {rank_commander} or {rank_operative} rank is defending against a ranged attack from an attacking unit whose unit leader is beyond {range_2}, the defending unit benefits from backup if it is at {range_half} and has LOS to the unit leader of a friendly unit that provides backup. A unit must meet the following requirements to provide backup",
      },
      {
        type: "structured_list",
        content: [
          "The unit has the {rank_corps} rank.",
          "The unit is a trooper unit.",
          "The unit does not have a number of suppression tokens equal to or greater than its courage.",
        ],
      },
      {
        type: "text",
        content:
          "A unit benefitting from backup may cancel up to two {hit} results during the Modify Attack Dice step of the attack sequence.",
      },
      {
        type: "clarification",
        content:
          "A unit with the {keyword:Guardian X} keyword cannot benefit from backup and ignores the {rank_corps} rank requirement to provide backup.",
        url: "https://forums.atomicmassgames.com/topic/15651-obi-wan-backup-and-guardian/#comment-64457",
      },
      {
        type: "header",
        inline: false,
        content: "Abilities that ignore the corps rank requirement:",
      },
      {
        type: "reference",
        referenced_keyword: "guardian_x",
        showOnlySummary: true,
      },
      {
        type: "reference",
        referenced_keyword: "retinue",
        showOnlySummary: true,
      },
      {
        type: "reference",
        referenced_keyword: "entourage",
        showOnlySummary: true,
      },
    ],
  },
  {
    keyword: "bane_tokens",
    name: "Bane Tokens",
    activation: "",
    parents: ["b"],
    range: "range_1",
    related_keywords: ["charge", "deploy", "battlefield", "tokens"],
    summary:
      "Cad Bane has a set of three unique Bane tokens that he can place on the battlefield. Bane tokens are double-sided, with a uniform back and three different images on the front, each linked to a unique effect.",
    descriptions: [
      {
        type: "text",
        content:
          "Cad Bane has a set of three unique Bane tokens that he can place on the battlefield. Bane tokens are double-sided, with a uniform back and three different images on the front, each linked to a unique effect.",
      },
      {
        type: "text",
        content:
          "Bane tokens must be placed facedown on the battlefield and cannot overlap objective or advantage tokens. Bane tokens are enemy effects. Each player may only have one copy of each different Bane token on the battlefield at the same time.",
      },
      {
        type: "text",
        content:
          "When an enemy miniature moves, deploys, or is placed at {range_1} of an enemy Bane token, if that miniature has LOS to the token, it is revealed. Miniatures can move through but not overlap Bane tokens. When a Bane token is revealed, it has one of the following effects:",
      },
      {
        type: "text",
        content:
          "<strong>Here I Am:</strong> If Cad Bane is not on the battlefield and is not defeated, his Here I Am token is replaced by his miniature. Then, Cad Bane issues himself an order.",
      },
      {
        type: "illustration",
        content: "tokens/cad-here-i-am.png",
        width: 100,
        height: 100,
        altText: "Bane token showing Cad Bane face",
        align: "center",
      },
      {
        type: "structured_list",
        content: [
          "If Cad Bane is on the battlefield, his Here I Am token is replaced by his miniature. Any tokens assigned to Cad Bane remain assigned to him.",
          "If Cad Bane is defeated, the token is removed.",
          "At the start of each round, starting with the blue player, a player may reveal a friendly Here I Am token and resolve it.",
        ],
      },
      {
        type: "text",
        content: "<strong>Smoke and Mirrors:</strong> The token is removed.",
      },
      {
        type: "illustration",
        content: "tokens/cad-smoke.png",
        width: 100,
        height: 100,
        altText: "Bane token showing blank inside.",
        align: "center",
      },
      {
        type: "text",
        content:
          "<strong>Kablamo!:</strong> The token detonates using the weapon profile on Cad Bane’s I Make the Rules Now Command Card, then the token is removed.",
      },
      {
        type: "illustration",
        content: "tokens/cad-kablamo.png",
        width: 100,
        height: 100,
        altText: "Bane token showing eplosion.",
        align: "center",
      },
    ],
  },
  {
    keyword: "barrage",
    name: "Barrage",
    activation: "",
    parents: ["b", "units"],
    tag: "Unit Keyword",
    related_keywords: ["attack", "arsenal_x"],
    summary:
      "If a unit has the Barrage keyword, it may make two attack actions instead of one if it does not use the Arsenal keyword during its activation.",
    descriptions: [
      {
        type: "text",
        content:
          "If a unit has the Barrage keyword, it may make two attack actions instead of one if it does not use the Arsenal keyword during its activation.",
      },
    ],
  },
  {
    keyword: "barricades",
    name: "Barricades",
    parents: ["b", "concepts"],
    summary:
      "Barricades are a specific type of scatter terrain found in some Star Wars: Legion Core Sets and in their own expansion pack. Barricades are open terrain and provide trooper units that are not creature troopers with heavy cover.",
    related_keywords: [
      "terrain_cover",
      "terrain_height",
      "terrain",
      "terrain_movement",
      "open_terrain",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "Barricades are a specific type of scatter terrain found in some Star Wars: Legion Core Sets and in their own expansion pack. Barricades are open terrain and provide trooper units that are not creature troopers with heavy cover.",
      },
      {
        type: "text",
        content:
          "Barricades cannot be placed overlapping objective or advantage tokens and cannot have objective or advantage tokens placed on them. A trooper miniature can never partially overlap a barricade at any time.",
      },
      {
        type: "illustration",
        content: "examples/barricades.png",
        align: "center",
        altText: "Three barricades on the battlefield",
        height: 408,
        width: 737,
      },
    ],
  },
  {
    keyword: "base",
    name: "Bases and Base Contact",
    parents: ["b", "concepts"],
    related_keywords: [
      "miniature",
      "troopers",
      "melee",
      "terrain",
      "fitting_on_terrain",
      "silhouettes",
    ],
    summary:
      "Each miniature in Star Wars: Legion is modeled on a base. A unit’s base depends on its unit type: troopers, clone troopers, droid troopers, and Wookiee troopers are on small bases. Everything else is on notched bases of various sizes.",
    descriptions: [
      {
        type: "text",
        content:
          "Each miniature in <i>Star Wars</i>: Legion is modeled on a base. A unit’s base depends on its unit type: troopers, clone troopers, droid troopers, and Wookiee troopers are on small bases. Everything else is on notched bases of various sizes.",
      },
      {
        type: "illustration",
        content: "examples/base.png",
        align: "center",
        altText: "One Clone trooper and one AT-RT on the battlefield.",
        width: 734,
        height: 404,
      },
      {
        type: "text",
        content:
          "Many rules in <i>Star Wars</i>: Legion use the term “base contact,” which means that the miniature's base must be touching whatever the rule is referencing. This includes another miniature’s base, a piece of terrain, or a token.",
      },
      {
        type: "text",
        content:
          "Miniatures cannot move into base contact with miniatures from enemy units unless the unit leader has a melee weapon ({range_melee}). If the unit leader does, the unit leader can perform a move into base contact with an enemy miniature to start a melee.",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "melee",
      },
      {
        type: "text",
        content:
          "Because an object can be placed on top of uneven terrain, there are situations in which another miniature cannot be placed into physical base contact with the object because of a difference in elevation between the two bases. In these situations, if the following two conditions are met, the miniature and object are treated as if they are in base contact: when viewed from above, there is no space between the miniature's base and the object, such that if they were not on differing elevations or were both flat on the battlefield, the miniature's base and the object would be touching, and the vertical distance between the miniature's base and the object is no greater than the height of either object's silhouette.",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "silhouettes",
      },
      {
        type: "illustration",
        content: "examples/base-contact.png",
        align: "center",
        altText:
          "One Clone trooper and one Droid trooper with bases physically touhcing.",
        height: 404,
        width: 734,
      },
    ],
  },
  {
    keyword: "battle_forces",
    name: "Battle Forces",
    parents: ["b", "appendix"],
    summary:
      "In Star Wars: Legion, Battle Forces represent groups of units that fought side by side in the Star Wars galaxy. These forces are themed around unique sub-groups and can range from a ragtag group of Mercenaries to the main invasion force of the Empire.",
    related_keywords: [
      "army_building",
      "affiliations",
      "mercenary",
      "mercenaries",
      "skirmishes",
      "ranks",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "In <i>Star Wars</i>: Legion, Battle Forces represent groups of units that fought side by side in the <i>Star Wars</i> galaxy. These forces are themed around unique sub-groups and can range from a ragtag group of Mercenaries to the main invasion force of the Empire.",
      },
      {
        type: "text",
        content:
          "Battle Forces provide players with an alternative way to build and field an army. Each Battle Force has its own list of specific units that it is allowed to field, its own rank requirements for both standard and skirmish armies, and its own special rules, which may affect how that Battle Force is built, set up, or plays.",
      },
      {
        type: "header",
        content: "Available Battle Forces",
      },

      {
        type: "header",
        content: "Galactic Republic",
      },
      {
        type: "reference",
        referenced_keyword: "bf_501st_legion",
        showOnlySummary: true,
      },
      {
        type: "reference",
        referenced_keyword: "bf_wookiee_defenders",
        showOnlySummary: true,
      },

      {
        type: "header",
        content: "Galactic Empire",
      },
      {
        type: "reference",
        referenced_keyword: "bf_blizzard_force",
        showOnlySummary: true,
      },
      {
        type: "reference",
        referenced_keyword: "bf_imperial_remnant",
        showOnlySummary: true,
      },
      {
        type: "reference",
        referenced_keyword: "bf_tempest_force",
        showOnlySummary: true,
      },

      {
        type: "header",
        content: "Rebel Alliance",
      },
      {
        type: "reference",
        referenced_keyword: "bf_bright_tree_village",
        showOnlySummary: true,
      },
      {
        type: "reference",
        referenced_keyword: "bf_echo_base_defenders",
        showOnlySummary: true,
      },

      {
        type: "header",
        content: "Separatist Alliance",
      },
      {
        type: "reference",
        referenced_keyword: "bf_experimental_droids",
        showOnlySummary: true,
      },

      {
        type: "reference",
        referenced_keyword: "bf_separatist_invasion",
        showOnlySummary: true,
      },

      {
        type: "header",
        content: "Mercenaries",
      },
      {
        type: "reference",
        referenced_keyword: "bf_shadow_collective",
        showOnlySummary: true,
      },
    ],
  },
  {
    keyword: "beam_x",
    name: "Beam X",
    related_keywords: [
      "range",
      "attack",
      "line_of_sight",
      "weapons",
      "gunslinger",
      "keywords",
    ],
    tag: "Weapon Keyword",
    range: "range_1",
    parents: ["b", "weapons"],
    summary:
      "During the Declare Additional Defender step, if a weapon with the Beam X keyword is in a unit’s attack pool, that unit may declare up to X additional attacks forming attack pools using only the weapon with the Beam X keyword, even though the weapon has already been added to an attack pool. These additional attacks do not generate further attacks.",
    descriptions: [
      {
        type: "text",
        content:
          "During the Declare Additional Defender step, if a weapon with the Beam X keyword is in a unit’s attack pool, that unit may declare up to X additional attacks forming attack pools using only the weapon with the Beam X keyword, even though the weapon has already been added to an attack pool. These additional attacks do not generate further attacks.",
      },
      {
        type: "text",
        content:
          "Each additional attack must be against a different defending unit that is at {range_1} of the last defending unit declared. These additional attacks must be in LOS of the attacking unit but may be beyond the maximum range of the weapon with the Beam X keyword.",
      },
      {
        type: "text",
        content:
          "Units may not use the Beam X and {keyword:Gunslinger} keywords during the same attack.",
      },
    ],
  },
  {
    keyword: "battle_cards",
    name: "Battle Cards",
    activation: "",
    parents: ["b", "concepts"],
    related_keywords: [
      "setup",
      "objective_cards",
      "map_cards",
      "secondary_objective_cards",
      "advantage_cards",
    ],
    summary:
      "Battle Cards form a Battle Deck and are used in Setup, where players work together to build the mission for that game. Battle Cards are divided into three categories: Objective Cards that have a paired Map Card (Red), Secondary Objective Cards (Yellow), and Advantage Cards (Green).",
    descriptions: [
      {
        type: "text",
        content:
          "Battle Cards form a Battle Deck and are used in Setup, where players work together to build the mission for that game. Battle Cards are divided into three categories: Objective Cards that have a paired Map Card (Red), Secondary Objective Cards (Yellow), and Advantage Cards (Green).",
      },
      { type: "reference", referenced_keyword: "objective_cards" },
      { type: "reference", referenced_keyword: "map_cards" },
      { type: "reference", referenced_keyword: "secondary_objective_cards" },
      { type: "reference", referenced_keyword: "advantage_cards" },
    ],
  },
  {
    keyword: "battlefield",
    name: "Battlefield",
    related_keywords: ["objects"],
    parents: ["b", "concepts"],
    summary:
      "Miniatures, tokens, and terrain are all objects. The table or surface being played on is the battlefield.",
    descriptions: [
      {
        type: "reference",
        referenced_keyword: "objects",
      },
    ],
  },
  {
    keyword: "beyond_range",
    name: "Beyond, At, and Within",
    parents: ["b", "concepts"],
    related_keywords: ["actions", "range", "measurement"],
    summary:
      "Some abilities require two objects to be at, within, or beyond a certain distance from each other.",
    descriptions: [
      {
        type: "reference",
        referenced_keyword: "at_range",
        hideHeader: true,
      },
    ],
  },
  {
    keyword: "blast",
    name: "Blast",
    related_keywords: ["apply_dodge_cover", "cover"],
    parents: ["b", "weapons"],
    tag: "Weapon Keyword",
    summary:
      "During the Apply Cover step, a defending unit cannot use light or heavy cover to cancel hit {hit} results produced by an attack pool that contains dice added by a weapon with the Blast keyword.",
    descriptions: [
      {
        type: "text",
        content:
          "During the Apply Cover step, a defending unit cannot use light or heavy cover to cancel hit {hit} results produced by an attack pool that contains dice added by a weapon with the Blast keyword.",
      },
    ],
  },

  {
    keyword: "block",
    name: "Block",
    activation: "",
    parents: ["b", "units"],
    tag: "Unit Keyword",
    related_keywords: ["attack", "dodge", "apply_dodge_cover", "dodge"],
    printedDescription:
      "If this unit spends any dodge tokens during the Apply Dodge and Cover step, it gains {block_surge}:{block}.",
    summary:
      "When a unit with the Block keyword is defending, if it spends any dodge tokens during the Apply Dodge and Cover step, it gains {block_surge}:{block}.",
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with the Block keyword is defending, if it spends any dodge tokens during the Apply Dodge and Cover step, it gains {block_surge}:{block}.",
      },
    ],
  },
  {
    keyword: "bolster_x",
    name: "Bolster X",
    activation: "",
    parents: ["b", "units"],
    tag: "Unit Keyword",
    related_keywords: ["actions", "apply_dodge_cover", "keywords"],
    range: "range_2",
    summary:
      "As a card action, a unit with the Bolster X keyword can choose up to X friendly units at {range_2} to each gain one surge token.",
    descriptions: [
      {
        type: "text",
        content:
          "As a card action, a unit with the Bolster X keyword can choose up to X friendly units at {range_2} to each gain one surge token.",
      },
    ],
  },
  {
    keyword: "building_a_command_hand",
    name: "Building a Command Hand",
    activation: "",
    parents: ["b", "concepts"],
    tag: "",
    summary:
      "Each player prepares a command hand of exactly seven Command Cards. A player must include two 1 pip cards, two 2 pip cards, and two 3 pip cards, with no duplicates. Additionally, players must always include the 4 pip card “Standing Orders.”",
    related_keywords: ["setup"],
    descriptions: [
      {
        type: "text",
        content:
          "Each player prepares a command hand of exactly seven Command Cards. A player must include two 1 pip cards, two 2 pip cards, and two 3 pip cards, with no duplicates. Additionally, players must always include the 4 pip card “Standing Orders.”",
      },
      {
        type: "text",
        content:
          "Some Command Cards require certain units. The required unit must be in a player’s army for these Command Cards to be included in a command hand. Occasionally, a Command Card requires a player to be fielding an army from a certain faction or Battle Force to be included in the command hand. These restrictions are printed on the Command Card.",
      },
      {
        type: "illustration",
        align: "center",
        altText: "Command Card: Call me Captain",
        content: "examples/building-command-deck.png",
        height: 365,
        width: 257,
      },
      { type: "callout", callout_keyword: "secret_information" },
    ],
  },
  {
    keyword: "building_a_battle_deck",
    name: "Building a Battle Deck",
    activation: "",
    parents: ["b", "concepts"],
    tag: "",
    summary:
      "Each player must prepare a Battle Deck of nine cards before the game begins, consisting of exactly three Objective Cards, three Secondary Objective Cards, and three Advantage Cards with no duplicates. A player must also prepare the three Map Cards that pair with the Objective Cards in their Battle Deck.",
    related_keywords: ["setup"],
    descriptions: [
      {
        type: "text",
        content:
          "Each player must prepare a Battle Deck of nine cards before the game begins, consisting of exactly three Objective Cards, three Secondary Objective Cards, and three Advantage Cards with no duplicates. A player must also prepare the three Map Cards that pair with the Objective Cards in their Battle Deck.",
      },
    ],
  },
  {
    keyword: "building_a_mission",
    name: "Building a Mission",
    activation: "",
    parents: ["b", "concepts"],
    related_keywords: ["setup", "determine_blue_player"],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "Now that the blue player is determined, it is time to build the mission. Place the game dashboard with the mission side face up near the table. Then each player separates their Battle Deck by type—Advantage, Objective, and Secondary Objective— and shuffles each of their three decks, placing them near the Mission Dashboard.",
      },
      {
        type: "illustration",
        content: "examples/building-mission.png",
        align: "center",
        altText: "Display of the new Mission Dashboard.",
        height: 599,
        width: 578,
      },
      {
        type: "text",
        content:
          "Place a token on the Mission Dashboard to indicate which player is the blue player. The blue player then chooses to reveal the top card of either their Objective Deck or Secondary Objective Deck, placing the revealed card in the designated space on the Mission Dashboard. Their opponent reveals the top card of either their Objective Deck or Secondary Objective Deck, whichever was not already placed, and places it on the designated space on the Mission Dashboard. Then each player reveals the top card of their Advantage Deck and places it on the designated space on their side of the dashboard.",
      },
      {
        type: "text",
        content:
          "Then, starting with the blue player, players alternate modifying the mission. A player can modify the mission in the following ways:",
      },
      {
        type: "structured_list",
        content: [
          "Reveal the top card of your Objective Deck, discard the current card on the objective space of the Mission Dashboard, and replace it with the newly revealed Objective Card.",
          "Reveal the top card of your Secondary Objective Deck, discard the current card on the secondary objective space of the Mission Dashboard, and replace it with the newly revealed Secondary Objective Card.",
          "Reveal the top card of your Advantage Deck, discard the current card on your advantage space on the Mission Dashboard, and replace it with the newly revealed Advantage Card.",
          "Your opponent reveals the top card of their Advantage Deck, discards the current card on their advantage space on the Mission Dashboard, and replaces it with the newly revealed Advantage Card.",
          "Move the token indicating the blue player to your side of the Dashboard. You are now the blue player.",
          "Pass. There is no effect.",
        ],
      },
      {
        type: "text",
        content:
          "After each player has modified the mission twice, the mission is built. Before the first round, the players set up the mission in the following order:",
      },
      {
        type: "structured_list_numbered",
        content: [
          "The blue player chooses one of the long edges of the battlefield as their side. The red player gets the opposite side. The player territory that shares an edge with a player’s side is that player’s friendly territory and the other player's territory is enemy territory.",
          "Follow any setup instructions on the Objective Card.",
          "Follow any setup instructions on the Secondary Objective Card.",
          "Starting with the blue player, each player follows any setup instructions on their Advantage Card.",
        ],
      },
      { type: "callout", callout_keyword: "empty_decks" },
    ],
  },
  {
    keyword: "bounty",
    name: "Bounty",
    activation: "",
    parents: ["b", "units"],
    tag: "Unit Keyword",
    related_keywords: ["setup", "unit", "attack"],
    summary:
      "During Setup, a unit with the Bounty keyword chooses an enemy {rank_operative} or {rank_commander} unit. The chosen unit gains a bounty token. After a friendly unit with the Bounty keyword defeats an enemy unit that has one or more bounty tokens with an attack or effect, the friendly unit’s controlling player scores 1 VP.",
    descriptions: [
      {
        type: "text",
        content:
          "During Setup, a unit with the Bounty keyword chooses an enemy {rank_operative} or {rank_commander} unit. The chosen unit gains a bounty token. After a friendly unit with the Bounty keyword defeats an enemy unit that has one or more bounty tokens with an attack or effect, the friendly unit’s controlling player scores 1 VP.",
      },
      {
        type: "clarification",
        content:
          "If the unit with the {keyword:Bounty} keyword defeats a unit with a {keyword:Bounty} token but is defeated during that attack as a result of some other effect, such as the {keyword:Deflect} keyword, the player will NOT score a VP, as the attacker is defeated during Convert Defense Surges step, prior to resolving the {keyword:Bounty} keyword.",
        url: "https://forums.atomicmassgames.com/topic/16273-bounty-and-deflect/",
      },
    ],
  },
];
