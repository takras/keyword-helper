import { Keyword } from "@/types";

export const KeywordsC: Keyword[] = [
  {
    keyword: "cache",
    name: "Cache",
    activation: "",
    parents: ["c", "units"],
    tag: "Unit Keyword",
    related_keywords: ["setup", "upgrade_card", "tokens"],
    summary:
      "During Setup, a unit with an equipped Upgrade Card that has the Cache keyword places the listed token(s) on the card with the Cache keyword. The unit may spend those tokens.",
    descriptions: [
      {
        type: "text",
        content:
          "During Setup, a unit with an equipped Upgrade Card that has the Cache keyword places the listed token(s) on the card with the Cache keyword. The unit may spend those tokens.",
      },
    ],
  },
  {
    keyword: "calculate_odds",
    name: "Calculate Odds",
    activation: "",
    parents: ["c", "units"],
    tag: "Unit Keyword",
    related_keywords: ["actions", "card_action", "aim", "dodge", "suppression"],
    summary:
      "As a card action, a unit with the Calculate Odds keyword can choose a friendly trooper unit at {range_2} and in LOS to gain one aim token, one dodge token, and one suppression token.",
    range: "range_2",
    descriptions: [
      {
        type: "text",
        content:
          "As a card action, a unit with the Calculate Odds keyword can choose a friendly trooper unit at {range_2} and in LOS to gain one aim token, one dodge token, and one suppression token.",
      },
    ],
  },
  {
    keyword: "card_effects",
    name: "Card Effects",
    activation: "",
    parents: ["c", "concepts"],
    related_keywords: ["keywords"],
    summary:
      "Card effect refers to any effect that originates from the text or rule on any card. Keywords are card effects.",
    descriptions: [
      {
        type: "text",
        content:
          "Card effect refers to any effect that originates from the text or rule on any card. Keywords are card effects.",
      },
      {
        type: "reference",
        referenced_keyword: "keywords",
        showOnlySummary: true,
      },
      {
        type: "example",
        initiallyExpanded: true,
        content: [
          {
            type: "header",
            content: "Reminder Text",
          },
          {
            type: "text",
            content:
              "Some cards contain italicized text in parantheses called reminder text. Reminder text is NOT rules text and is only there to remind players how the rule or ability functions.",
          },
        ],
      },
    ],
  },
  {
    keyword: "cancel",
    name: "Canceling Results",
    activation: "",
    parents: ["c", "concepts"],
    related_keywords: ["dice", "attack"],
    descriptions: [
      {
        type: "text",
        content:
          "When a result in an attack pool is canceled, remove that result from the pool.",
      },
    ],
  },

  {
    keyword: "charge",
    name: "Charge",
    activation: "",
    parents: ["c", "units"],
    tag: "Unit Keyword",
    related_keywords: ["move", "melee", "base", "attack"],
    printedDescription:
      "After this unit perform a move action during its activation, it may perform a free melee attack action.",
    summary:
      "After a unit that has the Charge keyword performs a move action during its activation that brings it into base contact with an enemy miniature to start a melee, it may perform a free attack action against that unit using only melee weapons.",
    descriptions: [
      {
        type: "text",
        content:
          "After a unit that has the Charge keyword performs a move action during its activation that brings it into base contact with an enemy miniature to start a melee, it may perform a free attack action against that unit using only melee weapons.",
      },
    ],
  },
  {
    keyword: "charge_token",
    name: "Charge Token",
    activation: "",
    parents: ["c", "weapons"],
    related_keywords: ["tokens", "arm_x", "detonate_x"],
    summary:
      "Charge tokens cannot overlap any objective, advantage, or other charge tokens and must be placed on a flat surface completely flush with that surface.",
    descriptions: [
      {
        type: "illustration",
        align: "right",
        altText: "Charge token, front and back",
        content: "tokens/charge.png",
        width: 100,
      },

      {
        type: "text",
        content:
          "Charge tokens cannot overlap any objective, advantage, or other charge tokens and must be placed on a flat surface completely flush with that surface.",
      },
    ],
  },
  {
    keyword: "claiming_objective_tokens",
    name: "Claiming Objective Tokens",
    parents: ["c", "concepts"],
    related_keywords: ["objective", "actions"],
    summary:
      "Battle Cards describe which units are eligible to claim asset tokens in that mission by granting them a Claim free action. An eligible unit can claim an unclaimed asset token it is contesting by performing that free action. When a unit claims an asset objective token, remove that token from the battlefield and place it on that unit’s Unit Card. That unit is now holding that asset token. When a unit drops an asset token it is holding, the opponent of that unit’s controlling player places that token on the battlefield at {range_half} of that unit’s unit leader. While an asset objective token is on the battlefield, it is unclaimed.",
    descriptions: [
      {
        type: "text",
        content:
          "Battle Cards describe which units are eligible to claim asset tokens in that mission by granting them a Claim free action. An eligible unit can claim an unclaimed asset token it is contesting by performing that free action. When a unit claims an asset objective token, remove that token from the battlefield and place it on that unit’s Unit Card. That unit is now holding that asset token. When a unit drops an asset token it is holding, the opponent of that unit’s controlling player places that token on the battlefield at {range_half} of that unit’s unit leader. While an asset objective token is on the battlefield, it is unclaimed.",
      },
      {
        type: "text",
        content:
          "When a unit panics, it drops all asset tokens it is holding. When a unit is defeated, it drops all asset tokens it is holding before removing its unit leader miniature from the battlefield.",
      },
    ],
  },
  {
    keyword: "climb",
    name: "Climbing",
    activation: "",
    parents: ["c", "concepts"],
    tag: "",
    related_keywords: ["move", "miniature", "terrain"],
    summary:
      "Sometimes units maneuver onto or through tall pieces of obstacle terrain. This is accomplished by performing a climb. Miniatures on notched bases may not climb.",
    descriptions: [
      {
        type: "text",
        content:
          "Sometimes units maneuver onto or through tall pieces of obstacle terrain. This is accomplished by performing a climb. Miniatures on notched bases may not climb.",
      },
      {
        type: "text",
        content:
          "To perform a climb, a unit performs a move as normal, except that it must use the speed-1 tool. A miniature may move a vertical distance up to height 1 when making a climb and may place the movement tool overlapping obstacle terrain that is up to height 1 taller than the height of the moving unit’s silhouette and any terrain the unit may be on.",
      },
      {
        type: "example",
        content: [
          {
            type: "header",
            content: "Example: Performing a Climb",
          },
          {
            type: "illustration",
            align: "center",
            altText: "Clone Troopers standing next to a building.",
            content: "examples/climb.png",
          },
          {
            type: "text",
            content:
              "Sarah wishes to move her Clone Trooper unit on top of the building. She measures the height of the building and determines that it is taller than the Clone Trooper’s silhouette, meaning that the Clone Troopers cannot reach the top by performing a standard move. Instead, Sarah performs a climb with the Clone Troopers. The Clone Troopers move as normal, except they must use the speed-1 movement tool when climbing, and they may move up to a vertical distance of height 1 when making a climb.",
          },
        ],
      },
    ],
  },
  {
    keyword: "clone_trooper",
    name: "Clone Trooper",
    parents: ["c"],
    related_keywords: ["troopers", "miniature", "unit"],
    summary:
      "While attacking or defending, a clone trooper unit may spend one aim, dodge, or surge token belonging to another friendly clone trooper unit at {range_2} and in LOS as if the attacking or defending unit had that token.",
    descriptions: [
      {
        type: "structured_list",
        content: [
          "While attacking or defending, a clone trooper unit may spend one aim, dodge, or surge token belonging to another friendly clone trooper unit at {range_2} and in LOS as if the attacking or defending unit had that token.",
        ],
      },
    ],
  },

  {
    keyword: "climb_vehicle",
    name: "Climbing Vehicle",
    activation: "",
    parents: ["c", "units"],
    tag: "Unit Keyword",
    related_keywords: ["move", "climb", "troopers"],
    printedDescription:
      "You are treated as a trooper for the purposes of climbing.",
    summary:
      "A unit with the Climbing Vehicle keyword is treated as a trooper unit for the purposes of climbing.",
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the Climbing Vehicle keyword is treated as a trooper unit for the purposes of climbing.",
      },
      { type: "reference", referenced_keyword: "climb" },
    ],
  },

  {
    keyword: "cohesion",
    name: "Cohesion",
    activation: "",
    parents: ["c", "units"],
    related_keywords: ["move", "range", "melee", "line_of_sight"],
    summary:
      "When a unit leader miniature changes position in any way, all other miniatures in the unit must be put into cohesion.",
    descriptions: [
      {
        type: "text",
        content:
          "When a unit leader miniature changes position in any way, all other miniatures in the unit must be put into cohesion. For a miniature to be in cohesion, all of the following must be true:",
      },
      {
        type: "structured_list",
        content: [
          "Each miniature must be at {range_half} of its unit leader. When measuring cohesion, the range tool may not overlap impassable terrain.",
          "Each miniature must have LOS to its unit leader.",
          "Each miniature must be within a vertical distance equal to the height of the unit leader’s silhouette of its unit leader.",
        ],
      },
      {
        type: "text",
        content:
          "If a miniature cannot be put into cohesion, place it as close as possible to its unit leader instead.",
      },
    ],
  },
  {
    keyword: "command_cards",
    name: "Command Cards",
    activation: "",
    parents: ["c", "concepts"],
    tag: "",
    related_keywords: ["move", "miniature", "terrain"],
    summary:
      "Command Cards form a player’s command hand and are used in the Command Phase to determine player priority, issue orders to units, and grant powerful game effects.",
    descriptions: [
      {
        type: "text",
        content:
          "Command Cards form a player’s command hand and are used in the Command Phase to determine player priority, issue orders to units, and grant powerful game effects.",
      },
      {
        type: "illustration",
        align: "center",
        altText: "Command cards: Hold ay any Cost, and I Make the Rules Now.",
        content: "examples/command-cards.png",
      },
      {
        type: "structured_list_numbered",
        content: [
          "<strong>Card Title:</strong> The title of the Command Card.",
          "<strong>Pips:</strong> The number of pips this Command Card has. Pips are used in Army Building and when determining player priority.",
          "<strong>Restriction:</strong> Some Command Cards are restricted to a certain commander, faction, unit, or Battle Force, which is listed here.",
          "<strong>Orders:</strong> The units the nominated commander can issue orders to with this card.",
          "<strong>Effect:</strong> The effect of the Command Card.",
          "<strong>Weapon:</strong> Some Command Cards allow miniatures to use a weapon on the Command Card.",
        ],
      },
    ],
  },
  {
    keyword: "courage",
    name: "Courage",
    activation: "",
    parents: ["c", "concepts"],
    related_keywords: [
      "panic",
      "panic_commander",
      "unit_cards",
      "droid_trooper",
    ],
    summary:
      "When a unit checks to see if it is panicked, instead of using its own courage value, it may use the courage value of a friendly {rank_commander} unit at {range_3}. For example, a unit with 3 suppression tokens and courage value 1 would not be panicked if it chooses to use the courage value of a friendly {rank_commander} at {range_3} that has a courage value of 2 or greater.",
    descriptions: [
      {
        type: "reference",
        referenced_keyword: "panic",
      },
    ],
  },
  {
    keyword: "compulsory_move",
    name: "Compulsory Move",
    activation: "",
    parents: ["c"],
    related_keywords: ["speeder_x", "move"],
    summary:
      "A compulsory move is a free move action. To perform a compulsory move, the unit performs a full move at its maximum speed. If it cannot do so, or if a full move would cause any part of the unit leader’s base to be outside the battlefield, it can perform a partial move instead, ending its movement as far along the movement template as possible.",
    descriptions: [
      {
        type: "text",
        content:
          "A compulsory move is a free move action. To perform a compulsory move, the unit performs a full move at its maximum speed. If it cannot do so, or if a full move would cause any part of the unit leader’s base to be outside the battlefield, it can perform a partial move instead, ending its movement as far along the movement template as possible.",
      },
    ],
  },

  {
    keyword: "contesting_objectives",
    name: "Contesting Objective Tokens",
    activation: "",
    parents: ["c"],
    related_keywords: ["objective", "panic"],
    summary:
      "A unit is contesting an objective token if its unit leader is at {range_half} of the objective token and the unit is not panicked.",
    descriptions: [
      {
        type: "text",
        content:
          "A unit is contesting an objective token if its unit leader is at {range_half} of the objective token and the unit is not panicked.",
      },
    ],
  },

  {
    keyword: "complete_the_mission",
    name: "Complete the Mission",
    activation: "",
    parents: ["c", "units"],
    tag: "Unit Keyword",
    related_keywords: ["setup", "tokens", "critical_x"],
    range: "range_1",
    summary:
      "During Setup, for each friendly unit with the Complete the Mission keyword, place a friendly priority mission token on the battlefield within contested territory.",
    descriptions: [
      {
        type: "text",
        content:
          "During Setup, for each friendly unit with the Complete the Mission keyword, place a friendly priority mission token on the battlefield within contested territory.",
      },
      {
        type: "text",
        content:
          "While a unit with the Complete the Mission keyword is at {range_1} of one or more friendly priority mission tokens, that unit gains {block_surge}:{block}. When a unit with the Complete the Mission keyword attacks an enemy unit at {range_1} of one or more friendly priority mission tokens, the attacking unit’s attack pool gains the {keyword:Critical 2} keyword.",
      },
    ],
  },

  {
    keyword: "creature_trooper",
    name: "Creature Trooper",
    parents: ["c"],
    related_keywords: [
      "troopers",
      "barricades",
      "miniature",
      "unit",
      "notched_bases",
      "reverse",
      "pivot",
      "engaged",
      "cover",
      "withdraw",
    ],
    descriptions: [
      {
        type: "structured_list",
        content: [
          "Creature troopers have notched bases.",
          "Creature troopers can reverse.",
          "Creature troopers can pivot, even while they are engaged.",
          "Creature troopers do not receive cover from barricades.",
          "Creature troopers can attack and withdraw during the same activation.",
        ],
      },
    ],
  },

  {
    keyword: "critical_x",
    name: "Critical X",
    parents: ["c", "weapons"],
    tag: "Weapon Keyword",
    printedDescription:
      "You may convert up to X surges to {hit_crit} result during Convert Surges step of attack.",
    summary:
      "When a unit converts attack surges for an attack pool with the Critical X keyword, during the Convert Surges step it may convert up to X attack surge {hit_surge} results to critical {hit_critical} results.",
    related_keywords: ["apply_dodge_cover", "attack", "keywords"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit converts attack surges for an attack pool with the Critical X keyword, during the Convert Surges step it may convert up to X attack surge {hit_surge} results to critical {hit_critical} results.",
      },
    ],
  },

  {
    keyword: "card_action",
    name: "Card Action",
    activation: "action",
    parents: ["c"],
    summary:
      "{action} The unit performs an action listed on its Unit Card or one of its Upgrade Cards. Card actions have this symbol {action}. A unit may perform more than one card action, as long as they are different. A card action with {action}{action} requires two actions to perform.",
    related_keywords: [
      "actions",
      "activating_units",
      "exhaust",
      "free_card_action",
      "keywords",
      "upgrade_card",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "The unit performs an action listed on its Unit Card or one of its Upgrade Cards. Card actions have this symbol {action}. A unit may perform more than one card action, as long as they are different. A card action with {action}{action} requires two actions to perform.",
      },
    ],
  },
  {
    keyword: "command_phase",
    name: "Command Phase",
    activation: "",
    parents: ["c", "phases"],
    summary:
      "During the Command Phase, players select a Command Card from their command hand, reveal and resolve their Command Cards, determine priority, issue orders, and create the order pool.The unit attacks with its weapons.",
    related_keywords: [
      "command_cards",
      "pass",
      "activating_units",
      "issue_order",
      "promote",
      "command_phase",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "During the Command Phase, players select a Command Card from their command hand, reveal and resolve their Command Cards, determine priority, issue orders, and create the order pool.",
      },
      {
        type: "example",
        content: [
          {
            type: "header",
            content: "Parts of the Command Phase",
          },
          {
            type: "structured_list_numbered",
            content: [
              "Select and Play Command Cards",
              "Resolve Command Cards",
              "Determine Priority",
              "Nominate Commanders and Issue Orders",
              "Create the Order Pool",
              "Create the Pass Pool",
            ],
          },
        ],
      },
      { type: "header", content: "Select and Play Command Cards" },
      {
        type: "text",
        content:
          "Each player secretly chooses a Command Card to play from their hand and places it facedown on the battlefield. If a player does not have at least one undefeated {rank_commander} or {rank_operative} unit, they may not play any Command Cards this round.",
      },
      {
        type: "text",
        content:
          "Some units have several unique Command Cards, which may only be played if that unit is included in a player’s army and is not defeated. Those Command Cards belong to that unit. When that unit's name is included in the effects section of that Command Card without specifying friendly or enemy, it refers to only friendly units with that name.",
      },
      {
        type: "example",
        content: [
          { type: "header", content: "Resolving Command Card Effects..." },
          {
            type: "structured_list",
            content: [
              "...that occur when the Command Card is revealed, starting with the Blue Player",
              "...that do not have a specific timing, starting with the Blue Player",
              "...that occur when a unit issues orders, starting with the player with priority.",
              "...that occur at the start of the Activation Phase, starting with the player with priority.",
              "...that occur during the Activation Phase, starting with the player with priority.",
            ],
          },
        ],
      },
      { type: "header", content: "Resolve Command Card Effects" },
      {
        type: "text",
        content:
          "After both players have played a Command Card facedown, they then reveal their Command Cards by flipping them faceup and proceed to resolve the effects of the Command Cards. Fully resolve the effect of each Command Card before moving to the next Command Card. If both players have an effect that occurs at the same time, the blue player resolves their Command Card effect first.",
      },
      { type: "header", content: "Determine Priority" },
      {
        type: "text",
        content:
          "Once players have resolved all relevant Command Card effects, compare the number of pips on the Command Cards that were played this round. The player whose card has the least number of pips has priority for the round.",
      },
      {
        type: "text",
        content:
          "If both players reveal Command Cards with the same number of pips, one player rolls a red defense die. If the result is a {block}, that player has priority. On any other result, the other player has priority.",
      },
      {
        type: "text",
        content:
          "If one player was unable to play a Command Card due to not having a {rank_commander} or {rank_operative} unit, the other player automatically has priority. If neither player played a Command Card, one player rolls a red defense die to determine priority.",
      },
      {
        type: "example",
        content: [
          {
            type: "header",
            content: "Example: Playing a Command Card and Detirmining Priority",
          },
          {
            type: "text",
            content:
              "Michael and Kevin are choosing their Command Cards for the turn. They each secretly choose a card from their hands to play, then they reveal their cards at the same time. Michael has played a 3-pip card, Assault, and Kevin has played a 1-pip card, Ambush. Because Kevin played the card with the fewest number of pips, he gains priority for the round.",
          },
          {
            type: "illustration",
            align: "center",
            altText: "Three command cards displayed",
            content: "examples/command-cards.png",
          },
          {
            type: "text",
            content:
              "Sarah and Michael are choosing Command Cards for the turn. Both of them play the 4-pip card Standing Orders. Because they revealed cards with the same number of pips, 1 of them rolls a red defense die. Michael rolls the die and rolls a blank. Because he did not roll a {block}, Sarah has priority for the round.",
          },
        ],
      },
      { type: "reference", referenced_keyword: "issue_order" },
      { type: "header", content: "Create the Order Pool" },
      {
        type: "text",
        content:
          "After issuing orders, each player creates their order pool by taking one order token that matches the rank of each undefeated unit that was not issued an order and shuffling those order tokens together.",
      },
      { type: "header", content: "Create the Pass Pool" },
      {
        type: "text",
        content:
          "After creating the order pool, each player counts the number of undefeated units they control. The player with fewer undefeated units adds a number of advantage tokens to their pass pool equal to 1 fewer than the difference in those counts. Once players have created their pass pools, if any, the Command Phase is over, and the Activation Phase begins.",
      },
      {
        type: "example",
        content: [
          { type: "header", content: "Example: Create the Pass Pool" },
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
    keyword: "compel",
    name: "Compel",
    activation: "",
    parents: ["c", "units"],
    tag: "Unit Keyword",
    related_keywords: ["rally", "suppression", "move"],
    range: "range_2",
    printedDescription:
      "After a friendly unit at {range_2} rallies, if it is suppressed but not panicked, it may gain one suppression token to perform a free move action.",
    summary:
      "After another trooper unit of the matching rank or unit type, if specified at {range_2} of a friendly unit with the Compel keyword performs its Rally step and is suppressed but not panicked, at the beginning of its Perform Action step, it may gain one suppression token to perform a free move action.",
    descriptions: [
      {
        type: "text",
        content:
          "After another trooper unit of the matching rank or unit type, if specified at {range_2} of a friendly unit with the Compel keyword performs its Rally step and is suppressed but not panicked, at the beginning of its Perform Action step, it may gain one suppression token to perform a free move action.",
      },
    ],
  },
  {
    keyword: "contingencies_x",
    name: "Contingencies X",
    activation: "",
    parents: ["c", "units"],
    tag: "Unit Keyword",
    related_keywords: [
      "command_cards",
      "card_effects",
      "game_effects",
      "keywords",
    ],
    summary:
      "When building a command hand before the game begins, for each unit with the Contingencies X keyword in a player’s army, that player sets aside up to X additional Command Cards facedown as Contingency Cards, where X is equal to the combined Contingencies X value on all their units. These set-aside cards may have any number of pips but must follow all other rules for constructing a command hand. Set-aside Contingency Cards are not considered to be in a player’s command hand and are kept secret from an opponent. A player may look at their set-aside Contingency Cards at any time.",
    descriptions: [
      {
        type: "text",
        content:
          "When building a command hand before the game begins, for each unit with the Contingencies X keyword in a player’s army, that player sets aside up to X additional Command Cards facedown as Contingency Cards, where X is equal to the combined Contingencies X value on all their units. These set-aside cards may have any number of pips but must follow all other rules for constructing a command hand. Set-aside Contingency Cards are not considered to be in a player’s command hand and are kept secret from an opponent. A player may look at their set-aside Contingency Cards at any time.",
      },
      {
        type: "text",
        content:
          "After a player reveals a Command Card, before any other effects are resolved, that player may discard that card to reveal one of their set-aside Contingency Cards with an equal number of pips instead. The revealed Contingency Card is then treated as that player’s selected and revealed Command Card for that turn. If both players have set-aside Contingency Cards, the blue player must decide first whether or not to reveal a Contingency Card.",
      },
      {
        type: "text",
        content:
          "If all a player’s units with the Contingencies X keyword are defeated, a player cannot reveal or use their Contingency Cards.",
      },
    ],
  },
  {
    keyword: "coordinate",
    name: "Coordinate: Type/Name",
    activation: "",
    parents: ["c", "units"],
    tag: "Unit Keyword",
    related_keywords: ["issue_order", "command_phase"],
    range: "range_1",
    printedDescription:
      "After you are issued an order, you may issue an order to a friendly unit at {range_1} of the specified unit name or type.",
    summary:
      "After a unit with the Coordinate keyword is issued an order, it may issue an order to a friendly unit at {range_1} that has the unit name or unit type specified. A unit that has one or more unit names or unit types listed can only choose one of these listed unit names or unit types to issue an order to using the Coordinate keyword. If a unit already has the Coordinate keyword and gains another instance of the keyword, the unit may choose which targets to issue an order to from the two instances of the keyword; it does not issue two orders.",
    descriptions: [
      {
        type: "text",
        content:
          "After a unit with the Coordinate keyword is issued an order, it may issue an order to a friendly unit at {range_1} that has the unit name or unit type specified. A unit that has one or more unit names or unit types listed can only choose one of these listed unit names or unit types to issue an order to using the Coordinate keyword. If a unit already has the Coordinate keyword and gains another instance of the keyword, the unit may choose which targets to issue an order to from the two instances of the keyword; it does not issue two orders.",
      },
    ],
  },
  {
    keyword: "counterpart",
    name: "Counterpart",
    activation: "",
    parents: ["c", "units"],
    tag: "Unit Keyword",
    related_keywords: ["miniature", "upgrade_card", "wounds"],
    summary:
      "Some units are faithful companions or subservient minions and are almost never seen apart from another unit. A unit like this has the Counterpart keyword and the miniature that represents this unit is always added to another unit. That miniature has a Counterpart Card and their miniature is a counterpart miniature. The combined unit has the rank, unit type, defense die, courage value, surge conversion chart, and speed as shown on the Unit Card.",
    descriptions: [
      {
        type: "text",
        content:
          "Some units are faithful companions or subservient minions and are almost never seen apart from another unit. A unit like this has the Counterpart keyword and the miniature that represents this unit is always added to another unit. That miniature has a Counterpart Card and their miniature is a counterpart miniature. The combined unit has the rank, unit type, defense die, courage value, surge conversion chart, and speed as shown on the Unit Card.",
      },
      {
        type: "structured_list",
        content: [
          "Sometimes, a Counterpart Card has a different unit type only for the purposes of equipping Upgrade Cards.",
          "A unit leader in a combined unit can be assigned wounds when it is the only non-counterpart miniature in the unit.",
          "When a wound token would be assigned to a non- counterpart miniature in a combined unit, that unit’s controlling player may assign that wound token to an undefeated counterpart miniature in that unit instead. That wound token must be assigned to a counterpart miniature if it would cause the last non-counterpart miniature in the unit to be defeated.",
          "Upgrade Cards without weapons equipped to a counterpart miniature are usable by the rest of the unit, unless the counterpart miniature is defeated.",
          "Upgrade Cards with weapons are usable only by the miniature which has them equipped.",
          "The non-counterpart miniatures in the unit use the wound threshold on their Unit or Upgrade Card, the counterpart miniature uses the wound threshold on the Counterpart Card.",
          "The combined unit has the keywords on both the Unit Card and the Counterpart Card.",
          "Miniatures in a combined unit may only use weapons that are on their respective cards. If a combined unit gains a weapon from a Command Card, only the non-counterpart miniature may use it.",
          "If the counterpart miniature is defeated, the unit loses any keywords, abilities, or effects on the Counterpart Card.",
        ],
      },
    ],
  },
  {
    keyword: "cover_x",
    name: "Cover X",
    activation: "",
    parents: ["c", "units"],
    summary:
      "If a unit has the Cover X keyword and is defending against an attack with at least one ranged weapon, during the Apply Dodge and Cover step, it improves the numerical value of its cover by a number equal to X.",
    tag: "Unit Keyword",
    related_keywords: ["attack", "weapons", "apply_dodge_cover", "keywords"],
    printedDescription:
      "While defending against ranged weapons, you improve cover by X.",
    descriptions: [
      {
        type: "text",
        content:
          "If a unit has the Cover X keyword and is defending against an attack with at least one ranged weapon, during the Apply Dodge and Cover step, it improves the numerical value of its cover by a number equal to X.",
      },
    ],
  },
  {
    keyword: "cover",
    name: "Cover",
    activation: "",
    parents: ["c", "concepts"],
    related_keywords: [
      "apply_dodge_cover",
      "barricades",
      "terrain",
      "terrain_cover",
    ],
    summary:
      "Cover helps miniatures defend themselves from attacks. Cover is divided into three categories: light, heavy, and no cover, and is determined during the attack sequence. Some rules refer to cover having a numerical value that is improved or reduced— light cover has a value of 1, heavy cover has a value of 2, and no cover has a value of 0. The numerical value of cover cannot be increased above 2 for any reason. Resolve effects that improve cover before effects that reduce cover.",
    descriptions: [
      {
        type: "illustration",
        altText: "Four miniatures standing next to Barricades",
        content: "examples/cover.png",
        align: "center",
      },
      {
        type: "text",
        content:
          "Cover helps miniatures defend themselves from attacks. Cover is divided into three categories: light, heavy, and no cover, and is determined during the attack sequence. Some rules refer to cover having a numerical value that is improved or reduced— light cover has a value of 1, heavy cover has a value of 2, and no cover has a value of 0. The numerical value of cover cannot be increased above 2 for any reason. Resolve effects that improve cover before effects that reduce cover.",
      },
      {
        type: "text",
        content:
          "For more information on determining cover, see {keyword:Apply Dodge and Cover}",
      },
    ],
  },
  {
    keyword: "covert_ops",
    name: "Covert Ops",
    activation: "",
    parents: ["c", "units"],
    tag: "Unit Keyword",
    related_keywords: ["setup", "infiltrate"],
    summary:
      "During Setup, a unit with the Covert Ops keyword may change its rank to {rank_operative} for all rules purposes for the rest of the game. If it does, it gains the Infiltrate keyword that game. A unit cannot change its rank to {rank_operative} if there are no other {rank_commander} units in that player’s army.",
    descriptions: [
      {
        type: "text",
        content:
          "During Setup, a unit with the Covert Ops keyword may change its rank to {rank_operative} for all rules purposes for the rest of the game. If it does, it gains the Infiltrate keyword that game. A unit cannot change its rank to {rank_operative} if there are no other {rank_commander} units in that player’s army.",
      },
    ],
  },
  {
    keyword: "cumbersome",
    name: "Cumbersome",
    parents: ["c", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["move", "attack", "pivot"],
    summary:
      "A unit that has a weapon with the Cumbersome keyword cannot perform a move prior to performing an attack using that weapon during the same activation unless the move is a pivot.",
    descriptions: [
      {
        type: "text",
        content:
          "A unit that has a weapon with the Cumbersome keyword cannot perform a move prior to performing an attack using that weapon during the same activation unless the move is a pivot.",
      },
    ],
  },
  {
    keyword: "cunning",
    name: "Cunning",
    activation: "",
    parents: ["c", "units"],
    tag: "Unit Keyword",
    related_keywords: ["command_phase", "command_cards", "interrogate"],
    printedDescription:
      "When your command-specific command cards are played, if there would be a tie for priority, treat your command card as though it had 1 fewer pip.",
    summary:
      "During the Command Phase, if a player reveals a {rank_commander} or {rank_operative} specific Command Card that belongs to a unit with the Cunning keyword and there would be a tie for priority, treat that Command Card as having one fewer pip. If both players reveal a specific {rank_commander} or {rank_operative} Command Card that belongs to a unit with the Cunning keyword, there is still a tie for priority.",
    descriptions: [
      {
        type: "text",
        content:
          "During the Command Phase, if a player reveals a {rank_commander} or {rank_operative} specific Command Card that belongs to a unit with the Cunning keyword and there would be a tie for priority, treat that Command Card as having one fewer pip. If both players reveal a specific {rank_commander} or {rank_operative} Command Card that belongs to a unit with the Cunning keyword, there is still a tie for priority.",
      },
    ],
  },
  {
    keyword: "cycle",
    name: "Cycle",
    activation: "",
    parents: ["c", "units"],
    tag: "Upgrade Keyword",
    related_keywords: ["upgrade_card", "activating_units", "exhaust"],
    summary:
      "At the end of a unit’s activation, ready each of its exhausted Upgrade Cards with the Cycle keyword that was not used during that activation. Only using the weapon, keywords, or other card text on the card counts as using that Upgrade Card.",
    descriptions: [
      {
        type: "text",
        content:
          "At the end of a unit’s activation, ready each of its exhausted Upgrade Cards with the Cycle keyword that was not used during that activation. Only using the weapon, keywords, or other card text on the card counts as using that Upgrade Card.",
      },
    ],
  },
];
