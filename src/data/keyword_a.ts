import { Keyword } from "@/types";

export const KeywordsA: Keyword[] = [
  {
    keyword: "abilities_provide_move",
    name: "Abilities That Provide Moves",
    related_keywords: ["move", "command_cards"],
    parents: ["a"],
    descriptions: [
      {
        type: "text",
        content:
          "Some abilities provide standard moves, often of certain speeds. A move provided by an ability is not a move action unless specifically stated.",
      },
      {
        type: "illustration",
        align: "center",
        altText: "No Time for Sorrows Command Card",
        content: "examples/command-provide-move.png",
      },
    ],
  },
  {
    keyword: "abilities",
    name: "Game Overview",
    related_keywords: ["abilities_provide_move"],
    parents: ["g"],
    descriptions: [
      {
        type: "text",
        content:
          "In <i>Star Wars</i>: Legion, players build, paint, and command entire armies from the various factions of the Star Wars galaxy. Each of these characters is represented on the tabletop by a highly detailed hobby miniature. Before the game, players assemble and paint their miniatures to create an army of Star Wars characters that is truly their own. Each miniature brings with it a host of rules and abilities for players to use in order to complete their mission and achieve victory.",
      },
    ],
  },
  {
    keyword: "actions",
    name: "Action",
    parents: ["a"],
    activation: "action",
    summary: "",
    related_keywords: ["aim", "attack"],
    descriptions: [
      {
        type: "text",
        content:
          "During the Perform Actions step, a unit may perform up to 2 of the actions below. A unit may only perform each action once per activation, except for the Move action.",
      },
      {
        type: "keyword_list",
        content: [
          "aim",
          "attack",
          "card_action",
          "dodge",
          "free_card_action",
          "move",
          "recover",
          "standby",
        ],
      },
      {
        type: "example",
        content: [
          {
            type: "header",
            content: "Example: Card Actions and Free Actions",
          },
          {
            type: "illustration",
            content: "examples/lukejump1.png",
            altText:
              "Luke Skywalker unit card with the keyword Jump 1 highlighted.",
            align: "center",
          },
          {
            type: "text",
            content:
              "Luke Skywalker has the {action} {keyword:Jump 1} card action on his Unit Card. During his activation, he may spend 1 of his actions to perform the Jump action.",
          },
          {
            type: "illustration",
            content: "examples/lukeforcereflexes.png",
            altText:
              "Luke Skywalker unit card with Force Reflexes card tucked under.",
            align: "center",
          },
          {
            type: "text",
            content:
              "Luke Skywalker also has the Force Reflexes Upgrade Card equipped. Once per activation as a free action, he may exhaust the card to gain a dodge token. This is in addition to the two actions he is allowed per activation, but he may only perform the Force Reflexes free action when he would normally be allowed to perform an action. A unit may perform any number of different free actions during its activation.",
          },
        ],
      },
    ],
  },
  {
    keyword: "activation_phase",
    name: "Activation Phase",
    parents: ["a", "concepts", "cohesion"],
    related_keywords: [
      "command_phase",
      "pass",
      "rally",
      "actions",
      "card_effects",
      "game_effects",
      "abilities",
      "cohesion",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "During the Activation Phase, players activate their units and may perform actions with them.",
      },
      {
        type: "text",
        content:
          "Starting with the player who has priority, players take turns activating their units one at a time.",
      },
      {
        type: "example",
        initiallyExpanded: true,
        content: [
          {
            type: "header",
            content: "Parts of the Activation Phase",
          },
          {
            type: "structured_list_numbered",
            content: [
              "Resolve Abilities or Effects at Start of Activation Phase",
              "Choose a Unit to Activate or Pass",
              "Activate Unit",
              [
                "Resolve Any Abilities or Effects at the Start of a Unit's Activation",
                "Rallying",
                "Perform Actions",
                "Resolve Any Abilities or Effects at the End of a Unit's Activation",
              ],
              "Place Order Token",
              "Resolve Abilities or Effects at End of Activation Phase",
            ],
          },
        ],
      },
      { type: "header", content: "Choose a Unit to Activate or Pass" },
      {
        type: "text",
        content:
          "The active player chooses to either activate a friendly unit with a faceup order token or to draw an order token randomly from the order pool and activate a unit matching that order token’s rank that does not have an order token. Alternatively, a player may be able to pass. When a player passes, they do not activate a unit and their turn ends.",
      },
      {
        type: "text",
        content:
          "If a player draws an order token with a rank that does not have any corresponding undefeated friendly units that do not have an order token, remove that token from the game. Then that player may pass. If they do not pass and still have units to activate, they must choose to either activate a friendly unit with a faceup order token or to draw another order token randomly from the order pool.",
      },
      {
        type: "text",
        content:
          "If a player did not pass on their previous turn this round, they may spend an advantage token in their pass pool. If they do, they pass.",
      },
      {
        type: "text",
        content:
          "If a player does not have any units they can activate, they pass.",
      },
      { type: "callout", callout_keyword: "pass" },
      { type: "reference", referenced_keyword: "activating_units" },
      { type: "reference", referenced_keyword: "cohesion" },
      { type: "reference", referenced_keyword: "rally" },
    ],
  },
  {
    keyword: "activating_units",
    name: "Activating a Unit",
    parents: ["a"],
    related_keywords: ["rally", "actions", "command_phase"],
    summary:
      "When a unit is chosen to activate, it first attempts to rally, and then the unit may perform actions.",
    descriptions: [
      {
        type: "text",
        content:
          "When a unit is chosen to activate, it first attempts to rally, and then the unit may perform actions. After the unit has completed its actions, flip the unit’s faceup order token facedown or assign it the drawn order token facedown.",
      },
      {
        type: "example",
        initiallyExpanded: true,
        content: [
          { type: "header", content: "Part of a Unit's Activation" },
          {
            type: "structured_list_numbered",
            content: [
              "Resolve Any Abilities or Effects at the Start of a Unit's Activation",
              "Rallying",
              "Perform Actions",
              "Resolve Any Abilities or Effects at the End of a Unit's Activation",
              "Assign Order Token",
            ],
          },
        ],
      },
      { type: "reference", referenced_keyword: "cohesion" },
      { type: "reference", referenced_keyword: "rally" },
      {
        type: "keyword_list",
        content: [
          "aim",
          "attack",
          "card_action",
          "dodge",
          "free_card_action",
          "move",
          "recover",
          "standby",
        ],
      },
    ],
  },
  {
    keyword: "advantage_cards",
    name: "Advantage Cards",
    activation: "",
    parents: ["a", "concepts"],
    related_keywords: ["setup", "card_effects"],
    descriptions: [
      {
        type: "text",
        content:
          "Advantage Cards contain additional special rules a player with that advantage can use during a game.",
      },
      {
        type: "illustration",
        content: "examples/advantage-card.png",
        align: "center",
        altText: "Two advantage cards. Cunning Deployment and Garrison.",
      },
      {
        type: "structured_list_numbered",
        content: [
          "<strong>Card Title:</strong> The title of this advantage.",
          "<strong>Setup:</strong> Instructions for setting up this advantage.",
          "<strong>Special Rules:</strong> Special rules associated with this advantage.",
        ],
      },
    ],
  },
  {
    keyword: "agile_x",
    name: "Agile X",
    activation: "",
    parents: ["a", "units"],
    tag: "Unit Keyword",
    related_keywords: ["move", "dodge", "keywords"],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "The Agile X keyword allows a unit to gain a number of dodge tokens equal to X each time it performs a standard move as part of an action or free action.",
      },
    ],
  },
  {
    keyword: "ai_action",
    name: "AI: Action",
    activation: "",
    parents: ["a", "units"],
    tag: "Unit Keyword",
    range: "range_3",
    related_keywords: ["move", "aim", "dodge", "actions", "attack"],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "At the start of a unit with the AI keyword’s Perform Actions step, if it is on the battlefield, does not have a faceup order token, and is not at {range_3} of a friendly {rank_commander} unit, it must perform one of the specified actions as its first action that activation. Free actions do not satisfy the requirements of the AI keyword. If a unit cannot perform any of its listed actions as its first action, it is free to perform other actions as normal.",
      },
    ],
  },
  {
    keyword: "aid",
    name: "Aid: Affiliation",
    activation: "",
    parents: ["a", "units"],
    tag: "Unit Keyword",
    range: "range_2",
    related_keywords: [
      "aim",
      "dodge",
      "apply_dodge_cover",
      "line_of_sight",
      "suppression",
    ],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with the Aid keyword would gain an aim, dodge, or surge token, another friendly unit of the affiliation or type listed at {range_2} and in line of sight may gain that token instead. If it does, the unit with the Aid keyword gains one suppression token.",
      },
    ],
  },
  {
    keyword: "allies_of_convenience",
    name: "Allies of Convenience",
    activation: "",
    parents: ["a", "units"],
    tag: "Unit Keyword",
    related_keywords: ["issue_order", "mercenary", "army_building"],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "Units with the Allies of Convenience keyword may issue orders to friendly Mercenary units regardless of affiliation. Additionally, when building an army, players may include one extra Mercenary unit in their army regardless of rank if there is at least one unit with the Allies of Convenience keyword, though they cannot take more units of a particular rank than normally allowed.",
      },
    ],
  },
  {
    keyword: "aim",
    name: "Aim",
    activation: "action",
    parents: ["a"],
    summary:
      "A unit that performs an aim action gains an aim token which it can use to reroll dice during attacks.",
    related_keywords: ["actions", "attack", "dice", "lethal_x"],
    descriptions: [
      {
        type: "illustration",
        content: "tokens/aim.png",
        align: "right",
        altText: "A green token shaped like a crosshair.",
        width: "80",
      },
      {
        type: "text",
        content:
          "The attacking player can resolve any abilities or spend any aim tokens that allow the attacking unit to reroll attack dice. A unit may spend any number of aim tokens while it is attacking to reroll up to two different attack dice for each aim token spent.",
      },
      {
        type: "text",
        content:
          "If a unit has multiple aim tokens, that unit can choose to spend each aim token after determining the results of any previous rerolls granted by aim tokens.",
      },
      {
        type: "text",
        content:
          "A unit may reroll the same die multiple times by spending multiple aim tokens, but each die may only be rerolled once per aim token.",
      },
    ],
  },
  {
    keyword: "apply_dodge_cover",
    name: "Apply Dodge and Cover",
    activation: "",
    parents: ["a", "d", "c"],
    related_keywords: ["attack", "cover", "dodge", "line_of_sight"],
    summary: "",
    descriptions: [
      {
        type: "structured_list_numbered",
        content: [
          "<strong>Determine Number of Obscured Miniatures:</strong> f the attack is not a ranged attack, skip to the Apply Dodge step below. If the attack is a ranged attack, the attacking player checks LOS from the attacking unit leader to each miniature in the defending unit. If LOS to a miniature is completely blocked, the miniature is obscured. If LOS from any part of the attacking unit leader’s silhouette to any part of the defending miniature’s silhouette is blocked by terrain that the attacking unit leader is not in base contact with and that terrain is at {range_half} of the defending miniature, the defending miniature is obscured. Repeat this process for every miniature in the defending unit.",
          "<strong>Determine Cover:</strong> If at least half of the miniatures in the defending unit are obscured, the defending unit has cover. The type of cover is determined by whatever is obscuring the defending unit, providing either heavy or light cover based on the players’ discussion of terrain before the game. If a unit has cover and at least one of the miniatures in the defending unit is obscured by terrain that provides heavy cover, the unit has heavy cover. If the defending unit has cover but does not have heavy cover, it has light cover.<p>While a unit is suppressed, it improves its cover by one: a unit with no cover gains light cover, and a unit in light cover gains heavy cover.</p>",
          "<strong>Roll Cover Pool:</strong> If the defending unit has cover, the defending player rolls one white defense die for every {hit} result in the attack pool.",
          "<strong>Apply Cover:</strong> If the defending unit has light cover, it cancels one {hit} result in the attack pool for each {block} result in the cover pool. If the defending unit has heavy cover, it cancels one {hit} result in the attack pool for each {block} and each {block_surge} result in the cover pool instead.",
          "<strong>Apply Dodge:</strong> If the defending unit has one or more dodge tokens, the defending player may spend any number of them. For each dodge token spent, cancel one {hit} result in the attack pool. Units may spend dodge tokens even if there are no {hit} results in the attack pool.",
        ],
      },
      {
        type: "example",
        content: [
          { type: "header", content: "Example: Applying Cover" },
          {
            type: "text",
            content:
              "Summer’s Clone Troopers are attacking Brian’s unit of 7 Battle Droids with a ranged attack; she has rolled 1 {hit_critical} and 3 {hit} results. Summer then checks LOS from the Clone Troopers’ unit leader to each miniature in the Battle Droid unit. Summer has LOS to every miniature in the Battle Droid unit, but part of the silhouette of 5 Battle Droids is blocked by terrain. Brian then measures the distance between those Battle Droids and the obscuring terrain. Since 4 of them are at {range_half} of the obscuring terrain, those 4 miniatures are obscured.",
          },
          {
            type: "text",
            content:
              "Because at least half of the Battle Droids are obscured, the Battle Droids have cover. Before the game, Brian and Summer determined that the building provides heavy cover and the crates provide light cover. Because at least 1 of the Battle Droids is obscured by the building, the Battle Droids have heavy cover.",
          },
          {
            type: "text",
            content:
              "Brian then rolls 3 white defense dice in the cover pool, 1 for each {hit} result. Brian rolls 1 blank result and 2 {block_surge} results.",
          },
          {
            type: "text",
            content:
              "Because the Battle Droids have heavy cover, 2 {hit} results are canceled in the attack roll, 1 for each {block} and {block_surge} result in the cover pool. That leaves 1 {hit_critical} and 1 {hit} result in the attack pool.",
          },
          {
            type: "text",
            content:
              "Brian’s Battle Droids do not have any dodge tokens, so the Apply Dodge and Cover step of the attack is over.",
          },
        ],
      },
    ],
  },
  {
    keyword: "area_terrain",
    name: "Area Terrain",
    parents: ["a", "concepts"],
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
          "Some terrain features consist of an area of terrain containing multiple terrain elements inside a boundary or footprint, like a forest, craters, ruined buildings, or piles of rubble. The individual elements and their locations inside the area terrain are not relevant, only the boundary.",
      },
      {
        type: "text",
        content:
          "When determining the size of area terrain, imagine a silhouette beginning at the bottom of the area terrain and extending upwards to the tallest point of the terrain. The volume of this silhouette is all part of the area terrain. It is up to the players to determine the height, the boundaries, special rules, and the type of cover that area terrain provides.",
      },
      {
        type: "illustration",
        content: "examples/area-terrain.png",
        align: "center",
        altText: "A fallen AT-ST terrain piece",
      },
    ],
  },
  {
    keyword: "area_weapon",
    name: "Area Weapon",
    related_keywords: ["range"],
    range: "range_1",
    parents: ["a", "weapons"],
    descriptions: [
      {
        type: "text",
        content:
          "A weapon with a yellow range icon {range_1} is an area weapon. When using an area weapon, perform a separate attack against each unit, friendly and enemy, that is in LOS and at the range indicated by the number on the range icon, even if that unit is engaged. Attacks made by area weapons are always ranged attacks.",
      },
      {
        type: "text",
        content:
          "Area weapons can never be in an attack pool made by a unit and must always be the only weapon in an attack pool.",
      },
    ],
  },
  {
    keyword: "arm_x",
    name: "Arm X",
    related_keywords: ["range", "keywords"],
    range: "range_1",
    tag: "Weapon Keyword",
    parents: ["a", "weapons"],
    descriptions: [
      {
        type: "header",
        content: "Arm X: Charge Token Type",
      },
      {
        type: "text",
        content:
          "A unit that is equipped with a card that has the Arm X: Charge Token Type keyword can perform the Arm X action. When a unit performs the Arm X action, the unit places X charge tokens of the specified type and matching its controlling player’s color within {range_1} and LOS of its unit leader.",
      },

      { type: "reference", referenced_keyword: "charge_token" },
    ],
  },
  {
    keyword: "armor",
    name: "Armor",
    activation: "",
    parents: ["a", "units"],
    tag: "Unit Keyword",
    related_keywords: ["attack", "cancel", "impact_x", "weak_point_x"],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "During the Modify Attack Dice step of the attack sequence, if the defending unit has the Armor X keyword, the defending player may cancel all {hit} results, removing those dice from the attack pool.",
      },
    ],
  },
  {
    keyword: "armor_x",
    name: "Armor X",
    activation: "",
    parents: ["a", "units"],
    tag: "Unit Keyword",
    related_keywords: [
      "attack",
      "cancel",
      "impact_x",
      "weak_point_x",
      "keywords",
    ],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "During the Modify Attack Dice step of the attack sequence, if the defending unit has the Armor X keyword, the defending player may cancel up to X {hit} results, removing those dice from the attack pool.",
      },
    ],
  },
  {
    keyword: "army_building",
    name: "Army Building",
    related_keywords: ["unit", "upgrade_card", "command_cards"],
    tag: "",
    parents: ["a", "weapons"],
    descriptions: [
      {
        type: "header",
        content: "Build an Army, a Command Hand and a Battle Deck",
      },
      {
        type: "text",
        content:
          "Before the game begins, each player builds an army using the Star Wars: Legion miniatures in their collections. In addition to their miniatures, each player prepares a command hand, a Battle Deck, and the Unit and Upgrade Cards containing the rules for their units.",
      },
      { type: "reference", referenced_keyword: "faction" },
      { type: "header", content: "Points" },
      {
        type: "text",
        content:
          "Each army is made up of a collection of miniatures organized into units. These units may further be equipped and customized with Upgrade Cards. Each unit and upgrade have a point cost printed on the corresponding card. The total point cost of all units and Upgrade Cards in an army cannot exceed 1,000 points. An updated list containing the points for all Unit and Upgrade cards can be found at <a href='https://www.atomicmassgames.com/swlegiondocs/' target='_blank'>atomicmassgames.com</a>.",
      },
      { type: "reference", showOnlySummary: true, referenced_keyword: "ranks" },
      {
        type: "reference",
        referenced_keyword: "upgrade_card",
      },
      {
        type: "reference",
        referenced_keyword: "exhaust",
      },
      {
        type: "reference",
        referenced_keyword: "faction",
      },
      { type: "reference", referenced_keyword: "building_a_command_hand" },
    ],
  },
  {
    keyword: "arsenal_x",
    name: "Arsenal X",
    activation: "",
    parents: ["a", "units"],
    tag: "Unit Keyword",
    related_keywords: ["attack", "miniature", "weapons", "keywords"],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "When choosing weapons during the Form Attack Pool step, each miniature in the unit that has the Arsenal X keyword can contribute X weapons to attack pools. Each weapon or combination of weapons may form a new attack pool, but each weapon may only be added to one attack pool.",
      },
    ],
  },
  {
    keyword: "associate",
    name: "Associate: Unit Name",
    activation: "",
    parents: ["a", "units"],
    tag: "Unit Keyword",
    related_keywords: ["army_building"],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "During Army Building, a unit with the Associate keyword does not count its rank towards the maximum rank requirements for that rank if a unit with the specified unit name is included in the same army.",
      },
    ],
  },
  {
    keyword: "at_range",
    name: "At, Within, and Beyond",
    activation: "",
    parents: ["a", "w", "concepts"],
    summary:
      "Some abilities require two objects to be at, within, or beyond a certain distance from each other.",
    related_keywords: ["actions"],
    descriptions: [
      {
        type: "text",
        content:
          "Some abilities require two objects to be at, within, or beyond a certain distance from each other.",
      },
      {
        type: "text",
        content:
          "An object is at a range of another object if any portion of it is inside that range as measured by the range tool. For a unit to be at a specified range, only one miniature in the unit must be at the given range. An object is always at any range of itself.",
      },
      {
        type: "text",
        content:
          "An object is within a range of another object if it is entirely inside that range as measured by the range tool. For a unit to be within a range, all miniatures in the unit must be within the given range. A unit that is within a certain range is also at that range.",
      },
      {
        type: "text",
        content:
          "An object is beyond a range of another object if it is entirely outside that range as measured by the range tool. For a unit to be beyond a range, all miniatures in the unit must be beyond the given range.",
      },
      { type: "callout", callout_keyword: "undeployed_units" },
      {
        type: "example",
        content: [
          {
            type: "header",
            content: "Example: At, Within, and Beyond",
          },
          {
            type: "illustration",
            content: "examples/at-within-beyond.png",
            align: "center",
            altText: "Photo with the measurement tool flat on the ground.",
          },
          {
            type: "text",
            content:
              "The Clone Trooper unit is at {range_1} of Obi-Wan Kenobi because it has at least 1 miniature whose base is at least partially inside the first segment of the range tool. The AT-RT is within {range_1} of Obi- Wan Kenobi because its base is entirely inside the first segment of the range tool. The B1 Battle Droids are beyond {range_1} of Obi-Wan Kenobi because all of their miniatures' bases are entirely outside the first segment of the range tool.",
          },
        ],
      },
    ],
  },
  {
    keyword: "ataru_mastery",
    name: "Ataru Mastery",
    activation: "",
    parents: ["a", "units"],
    tag: "Unit Keyword",
    related_keywords: ["attack", "actions", "dodge", "aim"],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the Ataru Mastery keyword can perform up to two attack actions during its activation. When it attacks, it gains one dodge token after the attack is resolved. When it defends, it gains one aim token after the attack is resolved.",
      },
    ],
  },
  {
    keyword: "attack",
    name: "Attack",
    activation: "action",
    parents: ["a"],
    summary: "The unit attacks with its weapons.",
    related_keywords: [
      "aim",
      "actions",
      "backup",
      "attack",
      "dice",
      "lethal_x",
      "cover",
      "dodge",
      "fixed",
      "weak_point_x",
      "melee",
      "range",
      "apply_dodge_cover",
      "suppression",
      "silhouettes",
      "leader",
      "weapons",
      "wounds",
      "line_of_sight",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "Attacks are usually made by units as part of an attack action but can be made as part of another rule. A unit may make multiple attacks a turn but can only perform one attack action per turn, regardless of whether the attack action is a free action.",
      },
      {
        type: "reference",
        referenced_keyword: "attack_quick_reference",
        showOnlySummary: true,
      },
      {
        type: "example",
        initiallyExpanded: true,
        content: [
          {
            type: "header",
            content: "Attack timing",
          },
          {
            type: "structured_list_numbered",
            content: [
              "Declare Defender",
              "Form Attack Pools",
              [
                "Determine Eligible Miniatures",
                "Choose Weapons and Gather Dice",
              ],
              "Declare Additional Defender",
              "Roll Attack Dice",
              ["Roll Dice", "Reroll Dice", "Convert Attack Surge"],
              "Apply Dodge and Cover",
              [
                "Determine Number of Obscured Miniatures",
                "Determine Cover",
                "Roll Cover Pool",
                "Apply Cover",
                "Apply Dodge",
              ],
              "Modify Attack Dice",
              "Roll Defense Dice",
              ["Roll Dice", "Reroll Dice", "Convert Defense Surges"],
              "Modify Defense Dice",
              "Compare Results",
              "Assign Suppresion Token to Defender",
              "Choose Additional Attack Pool",
            ],
          },
        ],
      },
      {
        type: "reference",
        referenced_keyword: "line_of_sight",
      },
      {
        type: "reference",
        referenced_keyword: "silhouettes",
      },
      {
        type: "reference",
        referenced_keyword: "weapons",
      },
      {
        type: "reference",
        referenced_keyword: "backup",
      },
      {
        type: "reference",
        referenced_keyword: "declare_defender",
      },
      {
        type: "reference",
        referenced_keyword: "form_attack_pools",
      },

      { type: "header", content: "Attacking in Melee" },
      {
        type: "text",
        content:
          "Miniatures that are not in base contact with an enemy miniature can still contribute dice to an attack pool with a melee weapon if they belong to a unit in melee. A melee weapon cannot be in the same attack pool as a non-melee weapon.",
      },
      { type: "header", content: "Declare Additional Defender" },
      {
        type: "text",
        content:
          "If there are any remaining weapons available to a unit that have not been added to an attack pool, and there are eligible miniatures that have not yet added a weapon to an attack pool, the attacking player may repeat steps 1–2 of the attack sequence, forming a new attack pool targeting a different defending enemy unit than any other attack pool. Weapons cannot be added to an attack pool if a weapon with the same name has already been added to a different attack pool.",
      },
      {
        type: "example",
        content: [
          { type: "header", content: "Example: Declare Additional Defender" },
          {
            type: "text",
            content:
              "In the previous example, Sarah put all the Clone Troopers’ weapons into the same attack pool. If she wishes, she may leave the heavy weapon out of the attack pool and instead form a pool with only the 4 blaster rifles, leaving an eligible miniature that has not contributed a weapon to an attack pool. After she has formed the first attack pool, she may then choose to declare a new defender and repeat steps 1–2 of the attack sequence, forming a new attack pool with the heavy weapon against a different defending unit.",
          },
        ],
      },
      { type: "reference", referenced_keyword: "roll_attack_dice" },

      { type: "header", content: "Canceling Results" },
      {
        type: "text",
        content:
          "When a result in an attack pool is canceled, remove that result from the pool.",
      },

      { type: "reference", referenced_keyword: "apply_dodge_cover" },

      { type: "header", content: "Modify Attack Dice" },
      {
        type: "text",
        content:
          "The attacking player may resolve any effects that modify the attacking unit’s attack dice. Then the defending player may resolve any effects that modify the attacking unit’s attack dice.",
      },
      { type: "header", content: "Roll Defense Dice" },
      {
        type: "text",
        content:
          "The defending player rolls defense dice by following the below steps.",
      },
      {
        type: "structured_list_numbered",
        content: [
          "<strong>Roll Defense Dice:</strong> For every remaining {hit} and {hit_critical} result remaining in the attack pool, the defender rolls one defense die, using the die pictured on the defending Unit Card.",
          "<strong>Reroll Defense Dice:</strong> The defending player can resolve any effects that allow the defending unit to reroll defense dice.",
          "<strong>Convert Defense Surges:</strong> The defending player changes any {block_surge} results to the result indicated on the Unit Card. If no result is indicated, turn the die to a blank result. The defending player may spend any number of surge tokens on the defending unit to convert one {block_surge} result to a {block} result for each surge token spent.",
        ],
      },
      {
        type: "example",
        content: [
          { type: "header", content: "Example: Rolling Defense Dice" },
          {
            type: "text",
            content:
              "Summer has attacked Brian’s Battle Droids and has a dice pool of 1 {hit_critical} and 1 {hit} result after applying dodge and cover. Since Battle Droids have white defense dice, Brian rolls 2 white defense dice, 1 for each {hit} and {critical} result remaining. He rolls 1 {block} and 1 {block_surge} result.",
          },
          {
            type: "text",
            content:
              "After rolling defense dice, Brian may use any abilities that allow him to reroll defense dice. The Battle Droids do not have such an ability, so he proceeds to convert defense surges. Since Battle Droids do not have {block_surge}:{block} on their Unit Card, he changes the {block_surge} he rolled to a blank, resulting in a final roll of 1 {block} and 1 blank result.",
          },
        ],
      },
      { type: "header", content: "Modify Defense Dice" },
      {
        type: "text",
        content:
          "The defending player may resolve any effects that modify the defending unit’s defense dice. Then the attacking player may resolve any effects that modify the defending unit’s defense dice.",
      },
      { type: "header", content: "Compare Results" },
      {
        type: "text",
        content:
          "The attacking player counts the number of {hit} and {hit_critical} results. Then the defending player counts the number of {block} results and subtracts the total number of {block} results from the total number of {hit} and {hit_critical} results. The defending unit suffers a number of wounds equal to the difference.",
      },
      {
        type: "example",
        content: [
          { type: "header", content: "Example: Comparing Results" },
          {
            type: "text",
            content:
              "Summer has rolled 1 {hit_critical} and {hit} a result after applying cover in her attack against Brian’s Battle Droids, and he has rolled 1 {block} and 1 blank result in defense. Summer counts her {hit} and {hit_critical} results for a total of 2. ",
          },
          {
            type: "text",
            content:
              "Brian counts his {block} results for a total of 1. The players subtract Brian’s total from Summer’s total for 2-1=1. Since the defending unit suffers a number of wounds equal to the difference in the attacking and defending results, Brian’s Battle Droids suffer 1 wound.",
          },
        ],
      },
      {
        type: "reference",
        referenced_keyword: "suffering_wounds",
      },
    ],
  },
  {
    keyword: "attack_quick_reference",
    name: "Attack Quick Reference",
    activation: "",
    parents: ["a", "concepts"],
    related_keywords: [
      "spray",
      "aim",
      "observe_x",
      "critical_x",
      "marksman",
      "jarkai_mastery",
      "blast",
      "cover",
      "low_profile",
      "sharpshooter_x",
      "unconcerned",
      "ion_x",
      "impact_x",
      "lethal_x",
      "ram_x",
      "armor_x",
      "backup",
      "guardian_x",
      "shielded_x",
      "danger_sense",
      "impervious",
      "uncanny_luck_x",
      "pierce_x",
      "tokens",
    ],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "Following is a quick list of the attack timing and what keywords apply and when they apply. This list should <strong>not</strong> be used as reference i.e. rule disputes. For that purpose, please see {keyword:Attack} and/or related keyword at the bottom.",
      },
      {
        type: "reference",
        referenced_keyword: "attack",
        showOnlySummary: true,
      },
      { type: "header", content: "Roll Attack Dice" },
      {
        type: "keyword_list",
        showOnlyKeyname: true,
        content: ["spray"],
      },
      { type: "header", content: "Re-roll Attack Dice", inline: true },
      {
        type: "keyword_list",
        showOnlyKeyname: true,
        content: ["aim", "observe_x"],
      },
      { type: "header", content: "Convert Attack and Surge", inline: true },
      {
        type: "keyword_list",
        showOnlyKeyname: true,
        content: ["critical_x", "marksman", "jarkai_mastery"],
      },
      {
        type: "header",
        content: "Spend {surge_token} tokens on {hit_surge} results.",
        inline: true,
      },
      { type: "header", content: "Apply Dodge and Cover" },
      { type: "header", content: "Apply Cover", inline: true },
      {
        type: "keyword_list",
        showOnlyKeyname: true,
        content: [
          "blast",
          "cover",
          "low_profile",
          "sharpshooter_x",
          "unconcerned",
        ],
      },
      { type: "header", content: "Apply Dodge", inline: true },
      {
        type: "keyword_list",
        showOnlyKeyname: true,
        content: ["dodge", "outmaneuver"],
      },

      { type: "header", content: "Modify Attack Dice" },
      { type: "header", content: "Attacker", inline: true },
      {
        type: "keyword_list",
        showOnlyKeyname: true,
        content: ["ion_x", "impact_x", "lethal_x", "ram_x"],
      },
      { type: "header", content: "Defender", inline: true },
      { type: "header", content: "Modify Attack Dice" },
      {
        type: "keyword_list",
        showOnlyKeyname: true,
        content: ["armor_x", "backup", "guardian_x", "shielded_x"],
      },
      { type: "header", content: "Roll Defense Dice" },
      {
        type: "keyword_list",
        showOnlyKeyname: true,
        content: ["danger_sense", "impervious"],
      },
      { type: "header", content: "Re-roll Defense Dice", inline: true },
      {
        type: "keyword_list",
        showOnlyKeyname: true,
        content: ["uncanny_luck_x"],
      },
      {
        type: "header",
        content: "Spend {surge_token} tokens on {block_surge} results.",
        inline: true,
      },

      { type: "header", content: "Modify Defense Dice" },
      { type: "header", content: "Defender", inline: true },
      { type: "header", content: "Attacker", inline: true },
      {
        type: "keyword_list",
        showOnlyKeyname: true,
        content: ["pierce_x"],
      },
    ],
  },
  {
    keyword: "attack_run",
    name: "Attack Run",
    activation: "",
    parents: ["a", "units"],
    tag: "Unit Keyword",
    related_keywords: ["activating_units", "move"],
    summary: "",
    descriptions: [
      {
        type: "text",
        content:
          "At the start of its activation, a unit with the Attack Run keyword may increase or decrease its maximum speed by 1 until the end of that activation.",
      },
    ],
  },
];
