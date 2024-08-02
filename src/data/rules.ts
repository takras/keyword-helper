import { RulesDocument } from "@/types";

export const rules: RulesDocument = {
  version: "2.6.0",
  validFrom: "2024-07-24T00:00:00Z",
  downloadUrl:
    "https://cdn.svc.asmodee.net/production-amgcom/uploads/2024/07/SWQ_Rulebook_2.6.0-1.pdf",
  documentUrl: "https://www.atomicmassgames.com/swlegiondocs/",
  discussionUrl:
    "https://forums.atomicmassgames.com/forum/165-star-wars-legion-rules-questions/",
  changelog: [],
  index: [
    {
      id: "a",
      catalog: "alphabet",
      name: "A",
    },
    {
      id: "b",
      catalog: "alphabet",
      name: "B",
    },
    {
      id: "c",
      catalog: "alphabet",
      name: "C",
    },
    {
      id: "d",
      catalog: "alphabet",
      name: "D",
    },
    {
      id: "e",
      catalog: "alphabet",
      name: "E",
    },
    {
      id: "f",
      catalog: "alphabet",
      name: "F",
    },
    {
      id: "g",
      catalog: "alphabet",
      name: "G",
    },
    {
      id: "h",
      catalog: "alphabet",
      name: "H",
    },
    {
      id: "i",
      catalog: "alphabet",
      name: "I",
    },
    {
      id: "j",
      catalog: "alphabet",
      name: "J",
    },
    {
      id: "k",
      catalog: "alphabet",
      name: "K",
    },
    {
      id: "l",
      catalog: "alphabet",
      name: "L",
    },
    {
      id: "m",
      catalog: "alphabet",
      name: "M",
    },
    {
      id: "n",
      catalog: "alphabet",
      name: "N",
    },
    {
      id: "o",
      catalog: "alphabet",
      name: "O",
    },
    {
      id: "p",
      catalog: "alphabet",
      name: "P",
    },
    {
      id: "q",
      catalog: "alphabet",
      name: "Q",
    },
    {
      id: "r",
      catalog: "alphabet",
      name: "R",
    },
    {
      id: "s",
      catalog: "alphabet",
      name: "S",
    },
    {
      id: "t",
      catalog: "alphabet",
      name: "T",
    },
    {
      id: "u",
      catalog: "alphabet",
      name: "U",
    },
    {
      id: "V",
      catalog: "alphabet",
      name: "V",
    },
    {
      id: "w",
      catalog: "alphabet",
      name: "W",
    },
    {
      id: "x",
      catalog: "alphabet",
      name: "X",
    },
    {
      id: "y",
      catalog: "alphabet",
      name: "Y",
    },
    {
      id: "z",
      catalog: "alphabet",
      name: "Z",
    },
    {
      id: "weapons",
      catalog: "weapons",
      name: "Weapon Keyword",
    },
    {
      id: "units",
      catalog: "units",
      name: "Unit Keyword",
    },
    { id: "phases", catalog: "phases", name: "Game Phases" },
  ],
  keywords: [
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
      keyword: "aim",
      name: "Aim",
      activation: "action",
      parents: ["a"],
      summary:
        "A unit that performs an aim action gains an aim token which it can use to reroll dice during attacks.",
      related_keywords: ["actions", "attack", "dice", "lethal"],
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
      keyword: "armor",
      name: "Armor X",
      activation: "",
      parents: ["a", "units"],
      tag: "Unit Keyword",
      related_keywords: ["attack", "cancel", "impact", "weak_points"],
      summary: "",
      descriptions: [
        {
          type: "text",
          content:
            "During the Modify Attack Dice step of the attack sequence, if the defending unit has the Armor X keyword, the defending player may cancel up to X hit {hit} results, removing those dice from the attack pool.",
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
        "lethal",
        "cover",
        "dodge",
        "firing_arcs",
        "melee",
        "melee_weapon",
        "range",
        "ranged_weapon",
        "surge",
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
      keyword: "backup",
      name: "Backup",
      activation: "",
      parents: ["b"],
      summary:
        "When a unit that is benefiting from backup is attacked by a ranged attack and the attacking unit’s unit leader is beyond {range_2} of it, it may cancel up to two {hit} results during the Modify Attack Dice step of the attack sequence.",
      related_keywords: ["attack", "line_of_sight", "troopers", "suppression"],
      descriptions: [
        {
          type: "text",
          content:
            "A trooper unit with the {rank_commander} or {rank_operative} rank benefits from backup if it is at {range_half} and has LOS to the unit leader of a unit that provides backup. A unit must meet the following requirements to provide backup:",
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
            "When a unit that is benefiting from backup is attacked by a ranged attack and the attacking unit’s unit leader is beyond {range_2} of it, it may cancel up to two {hit} results during the Modify Attack Dice step of the attack sequence.",
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
        "abilities",
        "activating_units",
        "exhaust",
        "free_action",
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
        "order_pool",
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
              content:
                "Example: Playing a Command Card and Detirmining Priority",
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
        {
          type: "header",
          content: "Nominate Commanders and Issue Orders",
        },
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
      keyword: "dodge",
      name: "Dodge",
      activation: "",
      parents: ["d"],
      summary:
        "The unit gains a dodge token, which allows it to cancel incoming results when defending.",
      related_keywords: [
        "actions",
        "attack",
        "dice",
        "cover",
        "clone_trooper",
        "ground_vehicles",
      ],
      descriptions: [
        {
          type: "illustration",
          content: "tokens/dodge.png",
          align: "right",
          altText: "A green 8-sided token.",
        },
        {
          type: "text",
          content:
            "A unit that performs a dodge action gains a dodge token. Units may spend dodge tokens to cancel a results during attacks.",
        },
        {
          type: "header",
          content: "Apply Dodge and Cover",
        },
        {
          type: "text",
          content:
            "<strong>Apply Dodge:</strong> If the defending unit has one or more dodge tokens, the defending player may spend any number of them. For each dodge token spent, cancel one a result in the attack pool. Units may spend dodge tokens even if there are no a results in the attack pool.",
        },
      ],
    },
    {
      keyword: "declare_defender",
      name: "Declare Defender",
      activation: "",
      parents: ["d"],
      summary: "",
      related_keywords: ["attack", "line_of_sight", "unit"],
      descriptions: [
        {
          type: "text",
          content:
            "The first stage in the attack sequence is choosing an enemy unit to attack. The attacking player declares they are performing an attack action with their unit against an enemy unit, which becomes the defending unit.",
        },
        {
          type: "text",
          content:
            "Then, measuring from the attacking unit’s unit leader, the attacking player checks to see that the defending unit is at range of at least one of the attacking unit’s weapons and has at least one miniature in LOS to the attacking unit leader.",
        },
        {
          type: "text",
          content:
            "If either of these conditions cannot be met, the attack or attack action cannot be made.",
        },
        {
          type: "example",
          content: [
            { type: "header", content: "Example: Declare Defender" },
            {
              type: "illustration",
              content: "examples/declare-defender.png",
              align: "center",
              altText: "A droid unit at range 3 of Obi-Wan and Clone troopers.",
            },
            {
              type: "text",
              content:
                "Sarah has declared an attack action with her unit of Battle Droids. The first step of the attack sequence is to declare a defender. Measuring from the Battle Droids’ unit leader, Sarah chooses an enemy unit that is in range of at least one of the Battle Droid’s weapons and that has at least 1 miniature in LOS. In this case, since the Battle Droids’ weapons are {range_1}–{range_3}, Sarah must choose an enemy unit at {range_3} of the Battle Droids’ unit leader that is also in LOS. Since the Battle Droid unit leader has LOS to both Obi-Wan Kenobi and the Clone Troopers, and both are in range of at least 1 of the Battle Droids’ weapons, Sarah can choose either as the defending unit.",
            },
          ],
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
            "Weapons provided by a {upgrade_squad_leader}, {upgrade_heavy}, or {upgrade_personnel}upgrade or Command Card can only be used by the miniature indicated on the card.",
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
        "abilities",
        "actions",
        "activating_units",
        "card_action",
        "exhaust",
        "free_action",
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
      keyword: "move",
      name: "Move",
      activation: "",
      parents: ["m"],
      tag: "",
      related_keywords: [
        "actions",
        "base",
        "climb",
        "compulsory_move",
        "difficult_terrain",
        "displacement",
        "impassable_terrain",
        "notch",
        "open_terrain",
        "pivot",
        "reverse",
        "speeder",
        "troopers",
        "unit",
        "vehicles",
        "withdraw",
      ],
      summary:
        "When a unit performs a move action, it performs a standard move or climb.",
      descriptions: [
        {
          type: "text",
          content:
            "When a unit performs an attack with a weapon that has the Lethal X keyword in the attack pool, it can spend up to X Aim tokens during the Modify Attack Dice step. If it does, the attack pool gains Pierce 1 for each aim token spent. The attacking unit may not reroll dice with any aim tokens spent this way.",
        },
      ],
    },

    {
      keyword: "objects",
      name: "Objects / Battlefield",
      activation: "",
      parents: ["o", "b"],
      tag: "",
      summary:
        "Miniatures, tokens, and terrain are all objects. The table or surface being played on is the battlefield.",
      related_keywords: ["miniature", "terrain", "tokens", "melee"],
      descriptions: [
        {
          type: "text",
          content:
            "Miniatures, tokens, and terrain are all objects. The table or surface being played on is the battlefield.",
        },
        {
          type: "example",
          content: [
            { type: "header", content: "Overlapping Objects" },
            {
              type: "text",
              content:
                "Objects can rest on top of each other only in the following ways:",
            },
            {
              type: "structured_list",
              content: [
                "Terrain can be placed resting on top of other terrain but cannot be placed resting on top of tokens or miniatures.",
                "Tokens that are on the battlefield can be placed resting on top of terrain and other tokens but cannot be placed resting on top of miniatures.",
                "Miniatures can be placed resting on top of both tokens and terrain but cannot be placed resting on top of each other.",
              ],
            },
          ],
        },
        { type: "header", content: "Bases and Base Contact" },
        {
          type: "text",
          content:
            "Each miniature in Star Wars: Legion is modeled on a base. A unit’s base depends on its unit type: troopers, clone troopers, droid troopers, and Wookiee troopers are on small bases. Everything else is on notched bases of various sizes.",
        },
        {
          type: "illustration",
          content: "examples/base-contact-1.png",
          align: "center",
          altText:
            "One Clone trooper and AT-RT miniature with some space apart",
        },
        {
          type: "text",
          content:
            "Many rules in Star Wars: Legion use the term “base contact,” which means that the miniature's base must be touching whatever the rule is referencing. This includes another miniature’s base, a piece of terrain, or a token.",
        },
        {
          type: "text",
          content:
            "Miniatures cannot move into base contact with miniatures from enemy units unless the unit leader has a melee weapon ({range_melee}). If the unit leader does, the unit leader can perform a move into base contact with an enemy miniature to start a melee.",
        },
        {
          type: "text",
          content:
            "Because an object can be placed on top of uneven terrain, there are situations in which another miniature cannot be placed into physical base contact with the object because of a difference in elevation between the two bases. In these situations, if the following two conditions are met, the miniature and object are treated as if they are in base contact: when viewed from above, there is no space between the miniature's base and the object, such that if they were not on differing elevations or were both flat on the battlefield, the miniature's base and the object would be touching, and the vertical distance between the miniature's base and the object is no greater than the height of either object´s silhouette.",
        },
        {
          type: "illustration",
          content: "examples/base-contact-2.png",
          align: "center",
          altText:
            "One Clone trooper and one Droid trooper miniature with bases touching physically.",
        },
        { type: "reference", referenced_keyword: "melee" },
        { type: "reference", referenced_keyword: "silhouettes" },
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
        "recharge",
        "reconfigure",
        "suppression",
        "upgrade_card",
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
      ],
    },

    {
      keyword: "roll_attack_dice",
      name: "Roll Attack Dice",
      parents: ["r"],
      related_keywords: ["attack", "dice", "surge", "aim"],
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
      keyword: "silhouettes",
      name: "Silhouettes",
      activation: "",
      parents: ["s"],
      summary:
        "When determining LOS between two miniatures, if an unobstructed straight imaginary line can be drawn from any part of one miniature’s silhouette to any part of the other miniature’s silhouette, those miniatures have LOS to each other.",
      related_keywords: ["line_of_sight", "miniature", "vehicles", "terrain"],
      descriptions: [
        {
          type: "text",
          content:
            "When determining LOS between two miniatures, if an unobstructed straight imaginary line can be drawn from any part of one miniature’s silhouette to any part of the other miniature’s silhouette, those miniatures have LOS to each other.",
        },
        {
          type: "text",
          content:
            "To determine the height of a miniature’s silhouette, use the following rules:",
        },
        {
          type: "structured_list",
          content: [
            "Trooper units and all their subtypes use a standardized silhouette template to determine LOS. Place the side with the white mark touching the miniature’s base, moving the template around if needed. The notched base trooper silhouette template is not as wide as a notched base, so it will need to be moved around to measure LOS to various parts of the silhouette. Miniatures in trooper units with small bases use the small base trooper silhouette template, and miniatures in trooper units with notched bases use the notched base trooper silhouette template.",
          ],
        },
        {
          type: "illustration",
          content: "silhouette-notched.png",
          align: "center",
          altText: "A tall, tiled rectangle token",
          width: "280",
        },
        {
          type: "illustration",
          content: "silhouette-small.png",
          align: "center",
          altText: "A small, tiled rectangle token",
          width: "225",
        },
        {
          type: "structured_list",
          content: [
            "Unlike trooper units, vehicles do not use silhouette templates when determining LOS. To determine a vehicles silhouette, create a cylinder rising from the vehicle miniature’s base all the way to the top of the vehicle’s hull— do not include things like antennas, weapons, or crew members when creating this cylinder. Players should discuss vehicle silhouettes before the game begins.",
          ],
        },
      ],
    },

    {
      keyword: "standby",
      name: "Standby",
      activation: "",
      parents: ["s"],
      tag: "",
      related_keywords: [
        "actions",
        "attack",
        "at_range",
        "free_action",
        "move",
        "suppression",
        "troopers",
        "vehicles",
        "withdraw",
      ],
      summary:
        "The unit gains a standby token, which allows it to perform certain actions after an enemy unit performs an action.",
      descriptions: [
        {
          type: "text",
          content:
            "A trooper or ground vehicle unit can perform the standby action to gain a standby token. Place it on the battlefield near the unit’s unit leader. A unit cannot perform an attack action and a standby action in the same activation. A unit can only have one standby token at a time.",
        },
        {
          type: "illustration",
          content: "tokens/standby.png",
          align: "center",
          altText: "6-sided token with four black edges and green x in middle",
        },
        {
          type: "text",
          content:
            "During the Activation Phase, after an enemy unit at {range_2} and in LOS of any miniature in a friendly trooper or friendly ground vehicle unit with a standby token performs an attack, move, or action, if it is not that friendly unit’s activation and that attack, move, or action was not caused by an effect of that friendly unit’s controlling player, that friendly unit may spend a standby token to perform a free move action or a free attack action. The only unit that can be declared as a defender during a free attack action made in this way is the enemy unit that performed the attack, move, or action that triggered the standby.",
        },
        {
          type: "text",
          content:
            "If a unit performs a move, an attack, an action, or gains a suppression token, it removes any standby tokens it has.",
        },
        {
          type: "text",
          content:
            "A standby token is spent before any effects that trigger after an attack, attack action, move, or move action. A unit cannot spend a standby token until all of an attacking unit’s attack pools have been resolved.",
        },
        {
          type: "example",
          content: [
            {
              type: "header",
              content: "Example: Standby",
            },
            {
              type: "illustration",
              content: "examples/standby.png",
              align: "center",
              altText:
                "An example photo illustrating when a standby would trigger",
            },
            {
              type: "text",
              content:
                "Melissa’s Battle Droid unit performs the standby action and gains a standby token. Later in the round, the enemy Clone Trooper unit activates and performs an action. Because the Clone Trooper unit is at {range_2} of the Battle Droids and in LOS, after the action is complete the Battle Droids may spend their standby token to perform a free move or attack action after the Clone Trooper’s action is resolved.",
            },
          ],
        },
      ],
    },

    {
      keyword: "weapons",
      name: "Weapons",
      activation: "",
      parents: ["w"],
      summary:
        "Each unit is equipped with weapons that miniatures may contribute to attack pools. Every weapon has a range and dice it contributes to an attack pool when used by a miniature during an attack.",
      related_keywords: [
        "attack",
        "dice",
        "tokens",
        "aim",
        "dodge",
        "keywords",
        "impact",
        "pierce",
        "upgrade_card",
        "command_cards",
        "melee",
      ],
      descriptions: [
        {
          type: "text",
          content:
            "Each unit is equipped with weapons that miniatures may contribute to attack pools. Every weapon has a range and dice it contributes to an attack pool when used by a miniature during an attack.",
        },
        {
          type: "text",
          content:
            "Some weapons have keywords associated with them, called weapon keywords. Weapons on Upgrade or Command Cards sometimes have their own surge charts.",
        },
        {
          type: "text",
          content:
            "A weapon with a {range_melee} is a melee weapon, and a weapon with a blue range icon is a ranged weapon. A weapon with both a melee icon and one or more blue ranged icons can be used as a melee weapon or a ranged weapon, chosen when the weapon is added to an attack pool—treat the weapon as that type for the duration of the attack sequence.",
        },
        {
          type: "text",
          content:
            "An attack pool that contains melee weapons is a melee attack, while an attack pool that contains ranged weapons is a ranged attack.",
        },
        {
          type: "illustration",
          content: "examples/weapon-types.png",
          align: "center",
          altText: "Examples of Anakin's Lightsaber and Luke's Blaster",
        },
      ],
    },
    {
      keyword: "suffering_wounds",
      name: "Suffering Wounds and Defeating Miniatures",
      parents: ["w", "s"],
      related_keywords: ["attack", "miniature", "line_of_sight"],
      descriptions: [
        {
          type: "text",
          content:
            "When a player’s unit suffers wounds, that player chooses a miniature from that unit and assigns wound tokens to it until either all wounds have been suffered or the miniature is defeated.",
        },
        {
          type: "text",
          content:
            "A miniature is defeated when it has a number of wound tokens assigned to it equal to its wound threshold. If there are unassigned wounds remaining after a miniature has been defeated, the player chooses another miniature from the same unit and repeats the process until either all wounds have been assigned or all miniatures in the unit have been defeated. When a unit suffers wounds from a ranged attack, if the attacker has LOS to only some of the miniatures in the defending unit, the defending unit cannot suffer wounds greater than the total wound threshold of miniatures that are in LOS.",
        },
        {
          type: "text",
          content:
            "A unit leader cannot be assigned wounds unless it is the only miniature in the unit.",
        },
        {
          type: "text",
          content:
            "A miniature or unit with at least one wound token is wounded. When assigning wound tokens, the wounded miniature with the most wound tokens must be chosen before any others when assigning wounds and must be assigned wounds until it is defeated. If more than one miniature has the same number of wound tokens assigned, choose one of those miniatures to assign wounds to.",
        },
        {
          type: "text",
          content:
            "When a miniature is defeated, remove it from the battlefield. If a unit leader is defeated and there are still undefeated miniatures in the unit, the unit’s controlling player must immediately choose another miniature in that unit to become the unit leader, replacing that miniature with the unit leader miniature.",
        },
        {
          type: "text",
          content:
            "When all of the miniatures in a unit are defeated, the unit is defeated. Remove all order tokens for that unit from the battlefield.",
        },
      ],
    },
  ],
};
