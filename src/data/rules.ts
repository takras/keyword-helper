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
      id: "v",
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
      keyword: "about",
      parents: [],
      name: "About Legion Helper",
      related_keywords: [],
      descriptions: [],
    },
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
      keyword: "activating_units",
      name: "Activating a Unit",
      parents: ["a"],
      related_keywords: ["rally", "actions", "order_pool"],
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
        "surge",
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
      name: "Armor",
      activation: "",
      parents: ["a", "units"],
      tag: "Unit Keyword",
      related_keywords: ["attack", "cancel", "impact", "weak_points"],
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
      related_keywords: ["attack", "cancel", "impact", "weak_points"],
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
      keyword: "arsenal_x",
      name: "Arsenal X",
      activation: "",
      parents: ["a", "units"],
      tag: "Unit Keyword",
      related_keywords: ["attack", "miniature", "weapons"],
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
      keyword: "barrage",
      name: "Barrage",
      activation: "",
      parents: ["b", "units"],
      tag: "Unit Keyword",
      related_keywords: ["attack", "arsenal_x"],
      summary: "",
      descriptions: [
        {
          type: "text",
          content:
            "If a unit has the Barrage keyword, it may make two attack actions instead of one if it does not use the Arsenal keyword during its activation.",
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
      summary: "",
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
      related_keywords: ["actions", "surge"],
      range: "range_2",
      summary: "",
      descriptions: [
        {
          type: "text",
          content:
            "As a card action, a unit with the Bolster X keyword can choose up to X friendly units at {range_2} to each gain one surge token.",
        },
      ],
    },
    {
      keyword: "bounty",
      name: "Bounty",
      activation: "",
      parents: ["b", "units"],
      tag: "Unit Keyword",
      related_keywords: ["setup", "unit"],
      summary: "",
      descriptions: [
        {
          type: "text",
          content:
            "During Setup, a unit with the Bounty keyword chooses an enemy {rank_operative} or {rank_commander} unit. The chosen unit gains a bounty token. After a friendly unit with the Bounty keyword defeats an enemy unit that has one or more bounty tokens with an attack or effect, the friendly unit’s controlling player scores 1 VP.",
        },
      ],
    },
    {
      keyword: "cache",
      name: "Cache",
      activation: "",
      parents: ["c", "units"],
      tag: "Unit Keyword",
      related_keywords: ["setup", "upgrade_card", "tokens"],
      summary: "",
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
      related_keywords: [
        "actions",
        "card_action",
        "aim",
        "dodge",
        "suppression",
      ],
      summary: "",
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
      keyword: "charge",
      name: "Charge",
      activation: "",
      parents: ["c", "units"],
      tag: "Unit Keyword",
      related_keywords: ["move", "melee", "base", "attack"],
      descriptions: [
        {
          type: "text",
          content:
            "After a unit that has the Charge keyword performs a move action that brings it into base contact with an enemy miniature to start a melee, it may perform a free attack action against that unit using only melee weapons.",
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
      keyword: "clone_trooper",
      name: "Clone Trooper",
      parents: ["c"],
      related_keywords: ["troopers", "miniature", "unit"],
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
      keyword: "complete_the_mission",
      name: "Complete the Mission",
      activation: "",
      parents: ["c", "units"],
      tag: "Unit Keyword",
      related_keywords: ["setup", "tokens", "critical_x"],
      range: "range_1",
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
      related_keywords: ["surge", "attack"],
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
      keyword: "compel",
      name: "Compel",
      activation: "",
      parents: ["c", "units"],
      tag: "Unit Keyword",
      related_keywords: ["rally", "suppression", "move"],
      range: "range_2",
      descriptions: [
        {
          type: "text",
          content:
            "After another trooper unit at {range_2} of a friendly unit with the Compel keyword performs its Rally step and is suppressed but not panicked, at the beginning of its Perform Action step, it may gain one suppression token to perform a free move action.",
        },
      ],
    },
    {
      keyword: "contingencies_x",
      name: "Contingencies X",
      activation: "",
      parents: ["c", "units"],
      tag: "Unit Keyword",
      related_keywords: ["command_cards", "effects"],
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
      keyword: "courage_null",
      name: "Null Courage Value",
      related_keywords: [
        "panic",
        "suppression",
        "activating_units",
        "rally",
        "recover",
        "courage",
      ],
      parents: ["n", "c"],
      descriptions: [
        {
          type: "text",
          content:
            "Some units have a null courage value, or “-”. These units can never gain or be assigned suppression tokens and cannot be suppressed or panicked. If a unit gains a null courage value through a special rule, it loses any suppression tokens it has, if any.",
        },
        {
          type: "text",
          content:
            "If a {rank_commander} unit has a null courage value, then friendly units at {range_3} may choose to use that {rank_commander} unit’s courage value and, therefore, never panic, regardless of the number of suppression tokens they might have.",
        },
      ],
    },
    {
      keyword: "coordinate",
      name: "Coordinate: Type/Name",
      activation: "",
      parents: ["c", "units"],
      tag: "Unit Keyword",
      related_keywords: ["issue_order", "order_pool"],
      range: "range_1",
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
      related_keywords: ["miniature", "upgrade_card", "wounds", "abilities"],
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
      tag: "Unit Keyword",
      related_keywords: ["attack", "ranged_weapon", "apply_dodge_cover"],
      descriptions: [
        {
          type: "text",
          content:
            "If a unit has the Cover X keyword and is defending against an attack with at least one ranged weapon, during the Apply Dodge and Cover step, it improves the numerical value of its cover by a number equal to X.",
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
      descriptions: [
        {
          type: "text",
          content:
            "During Setup, a unit with the Covert Ops keyword may change its rank to {rank_operative} for all rules purposes for the rest of the game. If it does, it gains the Infiltrate keyword that game. A unit cannot change its rank to {rank_operative} if there are no other {rank_commander} units in that player’s army.",
        },
      ],
    },
    {
      keyword: "cunning",
      name: "Cunning",
      activation: "",
      parents: ["c", "units"],
      tag: "Unit Keyword",
      related_keywords: ["command_phase", "command_cards"],
      descriptions: [
        {
          type: "text",
          content:
            "During the Command Phase, if a player reveals a {rank_commander} or {rank_operative} specific Command Card that belongs to a unit with the Cunning keyword and there would be a tie for priority, treat that Command Card as having one fewer pip. If both players reveal a specific {rank_commander} or {rank_operative} Command Card that belongs to a unit with the Cunning keyword, there is still a tie for priority.",
        },
      ],
    },

    {
      keyword: "danger_sense",
      name: "Danger Sense",
      activation: "",
      parents: ["d", "units"],
      tag: "Unit Keyword",
      related_keywords: ["suppression", "attack"],
      descriptions: [
        {
          type: "text",
          content:
            "When a unit with the Danger Sense X keyword would remove any number of its suppression tokens, it may choose to not remove up to X tokens, including zero.",
        },
        {
          type: "text",
          content:
            "While a unit with the Danger Sense X keyword is defending against an attack, it rolls one extra defense die during the Roll Defense Dice step for every suppression token it has, up to X additional dice.",
        },
      ],
    },
    {
      keyword: "dauntless",
      name: "Dauntless",
      activation: "",
      parents: ["d", "units"],
      tag: "Unit Keyword",
      related_keywords: ["rally", "move", "suppression", "compel"],
      descriptions: [
        {
          type: "text",
          content:
            "After a unit with the Dauntless keyword performs its Rally step and is suppressed but not panicked, at the beginning of its Perform Action step, it may gain one suppression token to perform a free move action.",
        },
        {
          type: "text",
          content:
            "A unit with the Dauntless keyword may not be affected by the {keyword:Compel} keyword.",
        },
      ],
    },
    {
      keyword: "death_from_above",
      name: "Death From Above",
      activation: "",
      parents: ["d", "units"],
      tag: "Unit Keyword",
      related_keywords: ["attack", "cover", "apply_dodge_cover", "terrain"],
      descriptions: [
        {
          type: "text",
          content:
            "When a unit with the Death From Above keyword attacks, the defending unit cannot use cover to cancel hit a results during the Apply Cover step if the attacking unit's unit leader is overlapping a piece of non-area terrain of greater height than any terrain the defending unit's unit leader is overlapping.",
        },
      ],
    },
    {
      keyword: "defend_x",
      name: "Defend X",
      activation: "",
      parents: ["d", "units"],
      tag: "Unit Keyword",
      related_keywords: ["issue_order", "dodge"],
      descriptions: [
        {
          type: "text",
          content:
            "After a unit with the Defend X keyword is issued an order, it gains X dodge tokens.",
        },
      ],
    },
    {
      keyword: "deflect",
      name: "Deflect",
      activation: "",
      parents: ["d", "units"],
      tag: "Unit Keyword",
      related_keywords: [
        "ranged_weapon",
        "attack",
        "guardian",
        "wounds",
        "high_velocity",
      ],
      descriptions: [
        {
          type: "text",
          content:
            "While a unit with the Deflect keyword is defending against a ranged attack or using the {keyword:Guardian X} keyword, its surge conversion chart gains {block_surge}:{block}. Additionally, during the Convert Defense Surges step before converting {block_surge} results, the attacker suffers one wound if there is at least one {block_surge} result in the defense roll.",
        },
        {
          type: "text",
          content:
            "If the Deflect keyword causes the attacking unit to be defeated, the attack continues, and the defender can still suffer wounds.",
        },
        {
          type: "text",
          content:
            "While defending or using the {keyword:Guardian X} keyword against an attack in which weapons with the {keyword:High Velocity} weapon keyword are the only weapons in an attack pool, the Deflect keyword has no effect.",
        },
      ],
    },
    {
      keyword: "demoralize_x",
      name: "Demoralize X",
      activation: "",
      parents: ["d", "units"],
      tag: "Unit Keyword",
      range: "range_2",
      related_keywords: ["rally"],
      descriptions: [
        {
          type: "text",
          content:
            "After a unit with the Demoralize X keyword performs its Rally step, add up to X total suppression tokens to enemy units at {range_2}.",
        },
      ],
    },
    {
      keyword: "detachment",
      name: "Detachment: Name/Type",
      activation: "",
      parents: ["d", "units"],
      tag: "Unit Keyword",
      related_keywords: [
        "army_building",
        "deploy",
        "infiltrate",
        "prepared_positions",
      ],
      descriptions: [
        {
          type: "text",
          content:
            "During Army Building, a unit with the Detachment keyword doesn’t count against the maximum number of units of its rank that can be included. A unit with the Detachment keyword can be included in a player’s army only if another unit that has the unit name or unit type specified and does not have the Detachment keyword is also included in that army.",
        },
        {
          type: "text",
          content:
            "Each unit with the Detachment keyword needs its own matching specified unit. Additionally, during the Deploy in Prepared Positions step, a unit with the Detachment keyword gains the {keyword:Infiltrate} or {keyword:Prepared Position} keyword for the remainder of the game if its matching specified unit has that keyword.",
        },
        {
          type: "example",
          content: [
            { type: "header", content: "Example: Detachment" },
            {
              type: "text",
              content:
                "For example, a player wishes to add a DF-90 Mortar Trooper to their army. Because the DF-90 Mortar Trooper has the Detachment: Shoretroopers keyword, the player must first add a unit of Shoretroopers to their army before adding the DF-90 Mortar Trooper. The player does so, and the army now contains a Shoretroopers unit and a DF-90 Mortar Trooper unit. The player then wishes to add a second DF-90 Mortar Trooper unit to their army, and therefore must first select a second unit of Shoretroopers to include in their army.",
            },
          ],
        },
      ],
    },
    {
      keyword: "deploy",
      name: "Deploy",
      parents: ["d"],
      related_keywords: ["activating_units", "actions"],
      descriptions: [
        { type: "header", content: "Deploying Units" },
        {
          type: "text",
          content:
            "When an undeployed unit performs a move, it deploys. When a unit deploys in this way, measure the start of the move with both prongs of one end of the movement tool touching the portion of the edge of the battlefield within friendly territory.",
        },
        {
          type: "text",
          content:
            "When a unit deploys, the unit leader measures the vertical distance changed during that move starting from the portion of the edge of the battlefield the movement tool is touching. When an undeployed unit activates, it must deploy and may not perform any action that is not a move until it deploys. Only undeployed units can deploy.",
        },
      ],
    },
    {
      keyword: "direct",
      name: "Direct Name/Type",
      activation: "",
      parents: ["d", "units"],
      tag: "Unit Keyword",
      range: "range_2",
      related_keywords: ["issue_order", "command_phase"],
      descriptions: [
        {
          type: "text",
          content:
            "Each Command Phase, during the Issue Orders step, a unit with the Direct keyword may issue an order to a friendly unit at {range_2} that has the unit name or unit type specified.",
        },
      ],
    },
    {
      keyword: "disciplined_x",
      name: "Disciplined X",
      activation: "",
      parents: ["d", "units"],
      tag: "Unit Keyword",
      related_keywords: ["issue_order", "suppression"],
      descriptions: [
        {
          type: "text",
          content:
            "After a unit with the Disciplined X keyword is issued an order, it may remove up to X suppression tokens.",
        },
      ],
    },
    {
      keyword: "disengage",
      name: "Disengage",
      activation: "",
      parents: ["d", "units"],
      tag: "Unit Keyword",
      related_keywords: ["engaged", "melee", "move"],
      descriptions: [
        {
          type: "text",
          content:
            "While a trooper unit with the Disengage keyword is engaged with a single enemy unit, it can still perform moves as normal.",
        },
      ],
    },
    {
      keyword: "distract",
      name: "Disengage",
      range: "range_2",
      activation: "",
      parents: ["d", "units"],
      tag: "Unit Keyword",
      related_keywords: [
        "free_card_action",
        "line_of_sight",
        "attack",
        "inconspicious",
      ],
      descriptions: [
        {
          type: "text",
          content:
            "As a free card action, a unit with the Distract keyword can choose an enemy trooper unit at {range_2} and in LOS. Until the end of the round, when the chosen enemy unit performs an attack, it must attack the unit that used the Distract action, if able.",
        },
        {
          type: "text",
          content:
            "While the chosen enemy unit is attacking the unit with the Distract keyword, each miniature in the enemy unit must choose an eligible weapon to contribute to an attack pool. The enemy unit may only declare additional defenders and form additional dice pools if, after first forming a dice pool with eligible weapons, there are still weapons usable by miniatures in the unit that were not eligible to be added to the first attack pool.",
        },
        {
          type: "text",
          content:
            "When a unit uses the Distract keyword, if it had the {keyword:Inconspicuous} keyword, it loses it until the end of the round.",
        },
      ],
    },
    {
      keyword: "divine_influence",
      name: "Divine Influence",
      range: "range_1",
      activation: "",
      parents: ["d", "units"],
      tag: "Unit Keyword",
      related_keywords: ["guardian"],
      descriptions: [
        {
          type: "text",
          content:
            "While they are at {range_1} of a friendly C-3PO, friendly {faction_ewoks} trooper units gain {keyword:Guardian 2}: C-3PO. While using {keyword:Guardian}, they may cancel {hit_critical} results as if they were {hit} results.",
        },
      ],
    },
    {
      keyword: "djem_so_mastery",
      name: "Djem So Mastery",
      activation: "",
      parents: ["d", "units"],
      tag: "Unit Keyword",
      related_keywords: ["melee", "attack"],
      descriptions: [
        {
          type: "text",
          content:
            "When a unit with the Djem So Mastery keyword is defending against a melee attack, during the Compare Results step, the attacking unit suffers a wound if the attack roll contains one or more blank results.",
        },
      ],
    },
    {
      keyword: "droid_trooper",
      name: "Droid Trooper",
      parents: ["d"],
      related_keywords: [
        "troopers",
        "barricades",
        "miniature",
        "unit",
        "cover",
        "suppression",
        "poison",
      ],
      descriptions: [
        {
          type: "structured_list",
          content: [
            "Droid troopers cannot be suppressed, though they can still be panicked.",
            "Droid troopers cannot gain or resolve poison tokens.",
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
          width: "80",
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
      keyword: "duelist",
      name: "Duelist",
      activation: "",
      parents: ["d", "units"],
      tag: "Unit Keyword",
      related_keywords: [
        "melee",
        "attack",
        "aim",
        "dodge",
        "pierce",
        "apply_dodge_cover",
        "immune",
      ],
      descriptions: [
        {
          type: "text",
          content:
            "When a unit with the Duelist keyword performs a melee attack, if it spends one or more aim tokens during the Reroll Attack Dice step, the attack pool gains the {keyword:Pierce 1} weapon keyword. While a unit with the Duelist keyword defends against a melee attack, if it spends at least one dodge token during the Apply Dodge and Cover step, it gains the {keyword:Immune: Pierce} keyword.",
        },
        {
          type: "text",
          content:
            "The unit with the Duelist keyword gets these effects in addition to the normal effects of spending aim or dodge tokens.",
        },
      ],
    },
    {
      keyword: "emplacement_trooper",
      name: "Emplacement Trooper",
      parents: ["e"],
      related_keywords: [
        "troopers",
        "notched_bases",
        "reverse",
        "pivot",
        "engaged",
      ],
      descriptions: [
        {
          type: "structured_list",
          content: [
            "Emplacement troopers have notched bases.",
            "Emplacement troopers can reverse.",
            "Emplacement troopers can pivot, even while they are engaged.",
          ],
        },
      ],
    },
    {
      keyword: "enrage_x",
      name: "Enrage X",
      activation: "",
      parents: ["e", "units"],
      tag: "Unit Keyword",
      related_keywords: ["wounds", "charge", "courage", "suppression"],
      descriptions: [
        {
          type: "text",
          content:
            "When a unit with the Enrage X keyword has wound tokens greater than or equal to X, that unit gains the {keyword:Charge} keyword and treats its courage value as “-” and loses any suppression tokens it may have. If a unit with the Enrage X keyword has wound tokens greater than or equal to X but removes wound tokens through an effect so that it has fewer than X, it no longer benefits from the Enrage X keyword until it has wound tokens greater than or equal to X again.",
        },
      ],
    },
    {
      keyword: "entourage",
      name: "Entourage: Unit Name",
      activation: "",
      parents: ["e", "units"],
      tag: "Unit Keyword",
      related_keywords: ["army_building", "command_phase", "issue_order"],
      range: "range_2",
      descriptions: [
        {
          type: "text",
          content:
            "During Army Building, if a player includes a unit with the Entourage keyword, one unit specified by the Entourage keyword does not count its rank towards the maximum rank requirements for that rank. This can allow a player to bring more units of a specific rank than rank requirements allow.",
        },
        {
          type: "text",
          content:
            "In the Command Phase, during the Issue Orders step, a unit with the Entourage keyword may issue an order to a friendly unit at {range_2} that has the name specified by the Entourage keyword.",
        },
        {
          type: "text",
          content:
            "Additionally, the unit specified by the Entourage keyword ignores the {rank_corps} rank requirement to provide backup to the unit with the Entourage keyword.",
        },
        {
          type: "example",
          content: [
            { type: "header", content: "Example: Entourage" },
            {
              type: "text",
              content:
                "For example, Director Orson Krennic has Entourage: Death Troopers. If an army includes Director Orson Krennic, 1 unit of Death Troopers in the same army does not count towards the maximum number of special forces ranks allowed in the army, allowing a player to bring up to three other special forces units in addition to the Death Troopers. In the Command Phase, Director Orson Krennic may issue an order to a Death Trooper unit at {range_2}.",
            },
          ],
        },
      ],
    },
    {
      keyword: "end_phase",
      name: "End Phase",
      parents: ["e"],
      related_keywords: [
        "abilities",
        "order_pool",
        "victory_points",
        "command_cards",
        "tokens",
        "promote",
        "objective_cards",
      ],
      descriptions: [
        {
          type: "text",
          content:
            "During the End Phase, players prepare for the next round by scoring VPs, discarding Command Cards, removing certain types of tokens, updating the order pool, resolving any effects, and advancing the round counter.",
        },
        {
          type: "example",
          initiallyExpanded: true,
          content: [
            { type: "header", content: "Parts of the End Phase" },
            {
              type: "structured_list_numbered",
              content: [
                "Resolve Any Abilities or Effects that happen at the Start of the End Phase",
                "Score VPs",
                "Discard Command Cards",
                "Remove Tokens",
                "Update Order Pool and Promote",
                "Resolve Any Abilities or Effects at End of End Phase",
                "Advance Round Counter",
              ],
            },
          ],
        },
        { type: "header", content: "Score Victory Points" },
        {
          type: "text",
          content:
            "Players score VPs as described on the Objective Card. Then players score VPs as described on the Secondary Objective Card.",
        },
        { type: "header", content: "Discard Command Cards" },
        {
          type: "text",
          content:
            "Each player discards their revealed Command Cards from this round into their discard pile. These cards cannot be used again this game.",
        },
        { type: "header", content: "Remove Tokens" },
        {
          type: "text",
          content:
            "Players remove all aim, dodge, surge, and standby tokens from their units. Then, they remove one suppression token from each of their units, if able. Finally, each player removes all advantage tokens from their pass pool.",
        },
        { type: "reference", referenced_keyword: "promote" },
        { type: "header", content: "Advance Round Counter" },
        {
          type: "text",
          content:
            "Set the round counter to the next highest number. The current round is over, and a new round begins. After the fifth game round, the game ends.",
        },
      ],
    },
    {
      keyword: "equip",
      name: "Equip",
      activation: "",
      parents: ["e", "units"],
      tag: "Unit Keyword",
      related_keywords: ["army_building"],
      descriptions: [
        {
          type: "text",
          content:
            "During Army Building, if a player includes a unit with the Equip keyword, that unit must equip the upgrades listed after the keyword.",
        },
      ],
    },
    {
      keyword: "exemplar",
      name: "Exemplar",
      activation: "",
      parents: ["e", "units"],
      tag: "Unit Keyword",
      related_keywords: ["attack", "line_of_sight", "aim", "dodge", "surge"],
      range: "range_2",
      descriptions: [
        {
          type: "text",
          content:
            "While attacking or defending, if a friendly unit is at {range_2} and in LOS of one or more friendly units that have the Exemplar keyword and that share the same faction or affiliation as that attacking or defending unit, that attacking or defending unit may spend one aim, dodge, or surge token belonging to one of those units with Exemplar as if that attacking or defending unit had the token.",
        },
      ],
    },
    {
      keyword: "expert_climber",
      name: "Expert Climber",
      activation: "",
      parents: ["e", "units"],
      tag: "Unit Keyword",
      related_keywords: ["climb"],
      descriptions: [
        {
          type: "text",
          content:
            "When a unit with the Expert Climber keyword performs a climb, it may move a vertical distance up to height 2.",
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
      ],
      descriptions: [
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
      related_keywords: ["upgrade_card", "army_building"],
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
      keyword: "full_pivot",
      name: "Full Pivot",
      activation: "",
      parents: ["f", "units"],
      tag: "Unit Keyword",
      related_keywords: ["pivot"],
      descriptions: [
        {
          type: "text",
          content:
            "When a unit with the Full Pivot keyword performs a pivot, it may pivot up to 360°.",
        },
      ],
    },

    {
      keyword: "generator_x",
      name: "Generator X",
      activation: "",
      parents: ["g", "units"],
      tag: "Unit Keyword",
      related_keywords: ["pivot", "shield", "end_phase"],
      descriptions: [
        {
          type: "text",
          content:
            "During the End Phase, a unit with the Generator X keyword may flip up to X inactive shield tokens to their active side.",
        },
      ],
    },

    {
      keyword: "ground_vehicles",
      name: "Ground Vehicles",
      parents: ["g"],
      related_keywords: [
        "unit",
        "notched_bases",
        "reverse",
        "pivot",
        "terrain",
        "cover",
        "line_of_sight",
        "damage_token",
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
            "Ground vehicles have notched bases.",
            "Ground vehicles can pivot and reverse.",
            "Ground vehicles can end a move with some part of their base partially overlapping terrain.",
            "A ground vehicle may not end a move or be placed in a position where the miniature would be physically unstable or fall over, or cause the angle of the miniature’s base to be greater than 45°.",
            "Ground vehicles can be in melee but cannot be engaged.",
            "Ground vehicles block LOS as if they were a piece of area terrain consisting of the volume of their silhouette.",
            "When determining the number of obscured miniatures and determining cover during an attack sequence, treat ground vehicles as a piece of area terrain consisting of the volume of their silhouette that provides heavy cover.",
            "When a ground vehicle is defending against a ranged attack, during the Apply Dodge and Cover step, it cannot be obscured and cannot have cover as a result of being obscured.",
          ],
        },
      ],
    },
    {
      keyword: "guardian",
      name: "Guardian X",
      activation: "",
      parents: ["g", "units"],
      tag: "Unit Keyword",
      related_keywords: [
        "line_of_sight",
        "ranged_weapon",
        "attack",
        "wounds",
        "suppression",
        "courage",
        "pierce",
        "backup",
        "surge",
      ],
      range: "range_1",
      descriptions: [
        {
          type: "text",
          content:
            "While a friendly trooper unit at {range_1} and in LOS of a unit that has the Guardian X keyword is defending against a ranged attack, it may cancel up to X hit {hit} results during the Modify Attack Dice step of the attack sequence. For each hit {hit} result canceled in this way, the unit with the Guardian X keyword rolls a defense die matching the one on its Unit Card. After converting any defense surge {block_surge} results according to its surge chart or by using surge tokens, the unit with the Guardian X keyword suffers one wound for each blank result. A defending unit that has the Guardian X keyword used on it gains a suppression token as normal.",
        },
        {
          type: "text",
          content:
            "A unit cannot use Guardian X if the defending unit also has the Guardian X keyword. If multiple friendly units can use the Guardian X keyword during an attack, the player who controls those units declares which unit is using the Guardian X keyword and resolves their ability before choosing whether to declare that another unit is using the Guardian X keyword.",
        },
        {
          type: "text",
          content:
            "A unit cannot use Guardian X if it has a number of suppression tokens equal to or greater than its courage.",
        },
        {
          type: "text",
          content:
            "The {keyword:Pierce X} keyword can be used to cancel block {block} results on defense dice rolled by a unit using Guardian X; treat canceled block {block} results as blank results. After using {keyword:Pierce X} in this way, any unused {keyword:Pierce X} value can still be used to cancel block {block} results rolled by the defending unit.",
        },
        {
          type: "text",
          content:
            "Additionally, a unit with the Guardian X keyword cannot benefit from backup and ignores the {rank_corps} rank requirement to provide backup.",
        },
      ],
    },
    {
      keyword: "guidance",
      name: "Guidance",
      activation: "",
      parents: ["g", "units"],
      tag: "Unit Keyword",
      related_keywords: ["free_action", "actions"],
      range: "range_2",
      descriptions: [
        {
          type: "text",
          content:
            "When a unit uses the Guidance card action, choose another friendly unit of the specified unit type at {range_2}. The chosen unit performs a free non-attack action.",
        },
      ],
    },
    {
      keyword: "gunslinger",
      name: "Gunslinger",
      activation: "",
      parents: ["g", "units"],
      tag: "Unit Keyword",
      related_keywords: ["attack", "ranged_weapon"],
      descriptions: [
        {
          type: "text",
          content:
            "When a unit with the Gunslinger keyword reaches the Declare Additional Defender step, it may declare an additional defender and create an attack pool consisting solely of a ranged weapon that has already been contributed to another attack pool. The Gunslinger keyword can only be used once per attack sequence.",
        },
      ],
    },
    {
      keyword: "heavy_weapon_team",
      name: "Heavy Weapon Team",
      activation: "",
      parents: ["h", "units"],
      tag: "Unit Keyword",
      related_keywords: ["upgrade_card"],
      descriptions: [
        {
          type: "text",
          content:
            "A unit with the Heavy Weapon Team keyword must equip a {upgrade_heavy}Upgrade Card. The miniature added to the unit with this Upgrade Card becomes the unit leader.",
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
      ],
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
        "pierce",
        "blast",
        "enemy_effects",
        "melee",
        "pierce",
        "range_1_weapons",
        "melee_pierce",
      ],
      descriptions: [
        {
          type: "reference",
          referenced_keyword: "immune_blast",
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
      related_keywords: ["immune", "enemy_effects"],
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
      related_keywords: ["immune", "melee", "pierce"],
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
      related_keywords: ["immune", "pierce"],
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
      descriptions: [
        {
          type: "text",
          content:
            "An attack pool that is assigned to a unit with the Immune: Range 1 Weapons keyword cannot contain weapons with a maximum range of {range_1}.",
        },
      ],
    },
    {
      keyword: "impervious",
      name: "Impervious",
      activation: "",
      parents: ["i", "units"],
      tag: "Unit Keyword",
      related_keywords: ["attack", "pierce"],
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
      descriptions: [
        {
          type: "text",
          content:
            "While a unit with the Inconspicuous keyword has at least one suppression token, when an enemy unit performs an attack, it must target another unit, if able. When a unit with the Inconspicuous keyword rallies, it may choose to not remove any number of suppression tokens, including zero.",
        },
      ],
    },
    {
      keyword: "independent",
      name: "Independent: Token X/Action",
      activation: "",
      parents: ["i", "units"],
      tag: "Unit Keyword",
      related_keywords: ["tokens", "free_action"],
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
      related_keywords: ["actions"],
      range: "range_2",
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
      related_keywords: ["command_phase", "command_cards"],
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
      keyword: "jarkai_mastery",
      name: "Jar'Kai Mastery",
      activation: "",
      parents: ["j", "units"],
      tag: "Unit Keyword",
      related_keywords: ["melee", "attack", "dodge"],
      descriptions: [
        {
          type: "text",
          content:
            "While performing a melee attack, after converting attack surges during the Convert Attack Surges step, a unit with the Jar'Kai Mastery keyword may spend any number of dodge tokens. For each dodge token spent in this way, change a blank result to a hit {hit} result, a hit {hit} result to a critical {hit_critical} result, or spend two dodge tokens to change a blank result to a critical {hit_critical} result.",
        },
      ],
    },
    {
      keyword: "jedi_hunter",
      name: "Jedi Hunter",
      activation: "",
      parents: ["j", "units"],
      tag: "Unit Keyword",
      related_keywords: ["keywords", "upgrade_card", "attack"],
      descriptions: [
        {
          type: "text",
          content:
            "When a unit with the Jedi Hunter keyword attacks a unit with a {upgrade_force} upgrade icon on its upgrade bar, it gains {hit_surge}:{hit_critical}.",
        },
      ],
    },
    {
      keyword: "jump_x",
      name: "Jump X",
      activation: "",
      parents: ["j", "units"],
      tag: "Unit Keyword",
      related_keywords: ["move", "terrain"],
      descriptions: [
        {
          type: "text",
          content:
            "A unit that has the Jump X keyword can perform the Jump X card action any time it could perform a move action. The unit performs a move action as normal and can ignore or end its movement on top of terrain that is height X or lower. While performing a move with the Jump X action, a unit ignores the effects of difficult terrain and other miniatures with a height equal to or lower than X. When making a move with the Jump X action, a unit may place the movement template overlapping impassable terrain but may not end its move overlapping it. When a unit performs the Jump X action, measure height from that unit’s starting position.",
        },
      ],
    },
    {
      keyword: "juyo_mastery",
      name: "Juyo Mastery",
      activation: "",
      parents: ["j", "units"],
      tag: "Unit Keyword",
      related_keywords: ["wounds", "move"],
      descriptions: [
        {
          type: "text",
          content:
            "While a unit with the Juyo Mastery keyword has one or more wound tokens, it can perform one additional action during its activation. A unit with Juyo Mastery may only perform two move actions during its activation, including free actions.",
        },
      ],
    },
    {
      keyword: "latent_power",
      name: "Latent Power",
      activation: "",
      parents: ["l", "units"],
      tag: "Unit Keyword",
      range: "range_1",
      related_keywords: ["suppression"],
      descriptions: [
        {
          type: "text",
          content:
            "At the end of a unit with the Latent Power keyword’s activation, it may gain 1 suppression token to roll 1 red defense die. If it does, on {block_surge} e result, choose an enemy unit at {range_1} of this miniature. The chosen unit gains 2 suppression tokens and 2 immobilize tokens. On a blank result, remove 1 wound or 1 poison token from a friendly non-droid trooper unit at {range_1} of this miniature.",
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
      keyword: "leaving_battlefield",
      name: "Leaving the Battlefield",
      parents: ["l"],
      related_keywords: [
        "activating_units",
        "move",
        "miniature",
        "battlefield",
      ],
      descriptions: [
        {
          type: "text",
          content:
            "Units may not voluntarily end a movement with any of its miniature’s bases partially or fully outside the battlefield. A miniature may leave the battlefield temporarily if it ends its movement with its base fully inside the battlefield, such as when a unit with a notched base moves along the movement tool. If this is not possible, the miniature stops its movement when it contacts the edge of the battlefield, then it loses any remaining actions and may not perform any free actions.",
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
      keyword: "loadout",
      name: "Loadout",
      activation: "",
      parents: ["l", "units"],
      tag: "Unit Keyword",
      related_keywords: ["army_building", "upgrade_card", "counterpart"],
      descriptions: [
        {
          type: "text",
          content:
            "During Army Building, when a player includes a unit with the Loadout keyword in their army, for each Upgrade Card equipped to that unit, they may choose another eligible Upgrade Card of the same type with an equal or lesser point cost and set it aside. During Setup, a unit with the Loadout keyword may swap any number of its equipped Upgrade Cards with the matching set-aside Upgrade Cards one for one.",
        },
        {
          type: "text",
          content:
            "When swapping Upgrade Cards, a unit cannot have two or more upgrades with the same name equipped at the same time. If two or more units with the Loadout keyword are in the same army, keep their respective set-aside Upgrade Cards separate. Each unit can swap Upgrade Cards only with their own set- aside cards; they cannot share set-aside Upgrade Cards.",
        },
        {
          type: "text",
          content:
            "A Counterpart Card that is added to a unit with the Loadout keyword also benefits from the Loadout ability.",
        },
      ],
    },

    {
      keyword: "low_profile",
      name: "Low Profile",
      activation: "",
      parents: ["l", "units"],
      tag: "Unit Keyword",
      related_keywords: ["cover"],
      descriptions: [
        {
          type: "text",
          content:
            "While defending against a ranged attack, if a unit with the Low Profile keyword would roll one or more defense dice during the Roll Cover Pool step, it rolls one fewer defense die and instead adds an additional {block} result to the cover pool after rolling.",
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
            "When a unit performs a move action, it performs a standard move or climb. Miniatures have one of two types of bases— notched or unnotched. What kind of base a miniature has determines how that unit performs moves. Creature troopers, emplacement troopers, and vehicles all have notched bases.",
        },
        { type: "reference", referenced_keyword: "leaving_battlefield" },
        { type: "header", content: "Standard Move" },
        {
          type: "text",
          content:
            "To perform a standard move, take a movement tool of lower or equal speed of the moving unit and place it flat on the battlefield so that one end wholly touches the base of the unit’s unit leader. Then, the player may adjust the joint of the movement tool as they wish.",
        },
        {
          type: "text",
          content:
            "After the movement tool has been adjusted, pick up the unit leader miniature and place it on the battlefield in contact with any portion of the movement tool. A unit may choose to use a movement tool of a lower speed when performing a move unless otherwise specified.",
        },
        {
          type: "text",
          content:
            "After placing the unit leader miniature, pick up any other miniatures in the unit and place them in cohesion. If for any reason a miniature cannot be placed in cohesion at the end of a move, place it as close as possible to the unit leader.",
        },
        {
          type: "example",
          content: [
            { type: "header", content: "Example: Performing Standard Moves" },
            {
              type: "text",
              content:
                "Marco is activating an undeployed unit of B1 Battle Droids. He declares a move action to deploy them by performing a standard move. As the Battle Droids are speed-2, he may choose either the speed-1 or speed-2 movement tool. Marco chooses the speed-2 movement tool and places it flat on the battlefield so that both prongs of one end of the movement tool touch the edge of the battlefield within friendly territory.",
            },
            {
              type: "text",
              content:
                "Then, he may adjust the movement tool at its joint as he wishes. After he is content with the placement and position of the movement tool, Marco picks up the Battle Droid’s unit leader and places it back down on the battlefield in contact with any portion of the movement tool. Then he picks up the rest of the miniatures in the Battle Droid unit and places them so that they are all at {range_half} of their unit leader.",
            },
            {
              type: "illustration",
              content: "examples/movement-deployment.png",
              align: "center",
              altText:
                "B1 figures on the battlefield a Movement 2 from the edge",
            },
            {
              type: "text",
              content:
                "With their first action complete, Marco declares the second action of the B1 Battle Droids will be another move action. Because the Battle Droids are now deployed, he places the movement tool on the battlefield so that one end wholly touches the unit leader’s base. He then adjusts the movement tool and places his unit leader in contact with it. Finally, he picks up the rest of the miniatures in the Battle Droid unit and places them so that they are all at 7 of their unit leader.",
            },
            {
              type: "illustration",
              content: "examples/movement-tool.png",
              align: "center",
              altText:
                "B1 figures with a movement tool next to leader miniature",
            },
            {
              type: "illustration",
              content: "examples/movement-cohesion.png",
              align: "center",
              altText:
                "B1 figures after movement, checking cohesion using half-range tool.",
            },
          ],
        },
        { type: "callout", callout_keyword: "move_through_miniatures" },
        { type: "callout", callout_keyword: "abilities_provide_move" },
      ],
    },
    {
      keyword: "move_through_miniatures",
      name: "Moving Through Miniatures",
      parents: ["m"],
      related_keywords: ["move", "miniature", "notch"],
      descriptions: [
        {
          type: "text",
          content:
            "Miniatures can move through and overlap other miniatures during a move, but they cannot end a move overlapping other miniatures.",
        },
      ],
    },
    {
      keyword: "non_standard_move",
      name: "Non-Standard Moves",
      parents: [],
      related_keywords: ["climb", "pivot", "reverse", "strafe"],
      descriptions: [
        {
          type: "text",
          content:
            "All of the following are not standard moves: climb, pivot, reverse, and strafe. These moves each have a separate rules entry describing how they are performed.",
        },
      ],
    },

    {
      keyword: "notch",
      name: "Notched Base Movement",
      parents: ["n"],
      related_keywords: [
        "vehicles",
        "ground_vehicles",
        "move",
        "miniature",
        "reverse",
        "pivot",
        "notched_bases",
        "repulsor_vehicle",
        "emplacement_trooper",
      ],
      summary:
        "Units on notched bases follow all the Standard Move rules for movement, with some exceptions.",
      descriptions: [
        {
          type: "text",
          content:
            "Units on notched bases follow all the above rules for movement. Additionally, a unit on a notched base must execute the following steps to perform a standard move:",
        },
        {
          type: "structured_list_numbered",
          content: [
            "The player may rotate the unit leader’s base up to 90° to the left or right, keeping the center of the base in the same place.",
            "The player takes a movement tool less than or equal to the unit’s speed characteristic and places it flat on the battlefield so that one end is wholly inside the front notch of the unit leader’s base.",
            "The player may adjust the movement tool at its joint as they wish.",
            "The player decides to perform either a full move and step 6 or a partial move and step 5. Unlike normal bases, notched bases cannot be placed anywhere along the movement tool and instead move along the tool with different requirements based on this decision.",
            "To execute a partial move, pick up the unit leader miniature and move it along the movement tool, taking care to keep the movement tool lined up with the front and rear notches on the base. The player may choose to stop this movement anywhere along the path created by the movement tool, moving the movement tool out of the way and placing the miniature on the battlefield. The miniature must be placed in such a way so that the line of the front and back notches on its base are parallel to the section of the movement tool the miniature reached at the farthest part of its move.",
            "To execute a full move, pick up the unit leader miniature and move it along the movement tool, taking care to keep the movement tool lined up with the front and rear notches on the base. The player places the miniature so that the other end of the movement tool is inserted in the back notch of the miniature’s base.",
            "When a miniature performs a full or partial move, if the base of the miniature is impeded by an object while moving along the movement tool, it must stop its movement prematurely unless it can legally move through, over, or on top of the obstructing object. Move the movement tool out of the way and place the miniature on the battlefield accordingly.",
            "After placing the unit leader miniature, pick up any other miniatures in the unit and place them in cohesion. Miniatures with notched bases must be placed in the exact same directional orientation as their unit leader’s base. If for any reason a miniature cannot be placed in cohesion at the end of a move, place it as close to the unit leader as possible.",
          ],
        },
        { type: "reference", referenced_keyword: "non_standard_move" },
        {
          type: "example",
          content: [
            { type: "header", content: "Example: Moving With Notched Bases" },
            {
              type: "illustration",
              align: "center",
              altText:
                "A Speeder Bike notched base with movement tool into its notch.",
              content: "examples/movement-notched.png",
            },
            {
              type: "text",
              content:
                "Simone chooses to perform a standard move with her Swoop Bike Riders. Since the Swoop Bike Riders have the Speeder X keyword, she cannot rotate the unit leader’s base. She then chooses to use the speed-3 movement tool since the Swoop Bike Riders are speed-3. She places the movement tool in the front notch of the Swoop Bike Riders unit leader’s base. ",
            },
            {
              type: "text",
              content:
                "Next, she adjusts the movement tool as she wishes, then decides if she wants to perform a full or partial move. She decides to perform a full move and picks up the miniature and moves it along the movement tool, making sure to keep the tool lined up with the front and rear notches on the miniature’s base. She then places the miniature so that the rear notch is on the opposite end of the movement tool.",
            },
            {
              type: "illustration",
              align: "center",
              altText:
                "A Speeder Bike notched base with movement tool into its back notch.",
              content: "examples/movement-notched-2.png",
            },
            {
              type: "illustration",
              align: "center",
              altText:
                "A Speeder Bike notched base with movement tool under its base.",
              content: "examples/movement-partial.png",
            },
            {
              type: "text",
              content:
                "If Simone wishes to perform a partial move instead, she simply stops the miniature’s movement along the movement tool at the desired point and places it on the battlefield in such a way so that the front and rear notches on its base are parallel to the section of the movement tool the miniature reached at the farthest part of its move.",
            },
            {
              type: "illustration",
              align: "center",
              altText:
                "A Speeder Bike notched base with movement tool under its base, stopping at a terrain piece.",
              content: "examples/movement-notched-premature.png",
            },
            {
              type: "text",
              content:
                "If terrain impedes a full or partial movement, the miniature must stop prematurely. Because the tower is stopping the Swoop Bike Riders movement, it ends its movement even though it has not traveled the full distance of the movement tool.",
            },
          ],
        },
        {
          type: "header",
          content: "Miniatures Physically Interfering With Movement",
        },
        {
          type: "text",
          content:
            "While moving a miniature, treat the non-base portion of all miniatures as if they do not exist. A miniature’s movement cannot be impeded by the non-base parts of itself or another miniature.",
        },
        { type: "callout", callout_keyword: "move_through_miniatures" },
      ],
    },

    {
      keyword: "notched_bases",
      name: "Notched Bases",
      parents: ["n"],
      related_keywords: ["miniature", "vehicles", "reverse", "pivot", "notch"],
      descriptions: [
        {
          type: "text",
          content:
            "Some miniatures in Star Wars: Legion have notched bases. Units on notched bases follow all of the rules detailed in this section.",
        },
        {
          type: "illustration",
          content: "examples/notched-base.png",
          altText: "A Republic AT-RT with a notched base",
          align: "center",
        },
        { type: "header", content: "Moving With Notched Bases" },
        {
          type: "text",
          content:
            "Miniatures with notched bases have a number of additional movement options available to them:",
        },
        { type: "reference", referenced_keyword: "pivot" },
        { type: "reference", referenced_keyword: "reverse" },
        { type: "header", content: "Attacking With Notched Bases" },
        {
          type: "text",
          content:
            "Miniatures with notched bases have four different arcs represented by lines sculpted on their bases: front, two sides, and rear. These arcs are referenced by certain rules, such as the <strong>Fixed</strong> and <strong>Weak Point</strong> keywords.",
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
      keyword: "panic_commander",
      name: "Commanders and Checking for Panic",
      parents: ["p", "c"],
      related_keywords: [
        "suppression",
        "activating_units",
        "courage",
        "recover",
        "rally",
      ],
      descriptions: [
        {
          type: "text",
          content:
            "When a unit checks to see if it is panicked, instead of using its own courage value, it may use the courage value of a friendly {rank_commander} unit at {range_3}. For example, a unit with 3 suppression tokens and courage value 1 would not be panicked if it chooses to use the courage value of a friendly {rank_commander} at {range_3} that has a courage value of 2 or greater.",
        },
      ],
    },

    {
      keyword: "pivot",
      name: "Pivot",
      parents: ["p"],
      related_keywords: [
        "notch",
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
      keyword: "promote",
      name: "Promote",
      parents: ["p"],
      related_keywords: [
        "miniature",
        "unit",
        "commander",
        "field_commander",
        "order_pool",
      ],
      descriptions: [
        {
          type: "text",
          content:
            "If all of a player’s {rank_commander} units are defeated, and they do not control a unit with the Field Commander keyword with a commander token, starting with the player with priority, players must promote a trooper unit to change its rank and become {rank_commander} p unit. ",
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
        "commander",
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
          callout_keyword: "courage_null",
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
        "damage_token",
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
      keyword: "resiliency",
      name: "Resiliency",
      parents: ["r"],
      related_keywords: [
        "vehicles",
        "ground_vehicles",
        "repulsor_vehicle",
        "damage_token",
        "tokens",
      ],
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
          width: "80",
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
        "notch",
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
      keyword: "strafe",
      name: "Strafe",
      activation: "",
      parents: ["s", "units"],
      tag: "Unit Keyword",
      related_keywords: [
        "hover_x",
        "notch",
        "move",
        "battlefield",
        "miniature",
      ],
      descriptions: [
        {
          type: "text",
          content:
            "If the unit with the {keyword:Hover: Ground/Air X} keyword has a base with side notches, the unit may perform a strafe move as part of a move action instead of moving normally.",
        },
        {
          type: "text",
          content:
            "A unit reduces its maximum speed by 1 to a minimum of 1 while performing a strafe.",
        },
        {
          type: "text",
          content:
            "As with other movements with notched bases, a strafe can be a full strafe or a partial strafe, and can be interrupted if an object prevents the strafing miniature from fully progressing across the movement tool.",
        },
        {
          type: "text",
          content:
            "To perform a full strafe, place the end of a movement tool into one of the side notches on the unit’s base. Keeping the movement tool in place on the battlefield, move the miniature along the movement tool until the opposite side notch is wholly in the opposite end of the movement tool. While performing a strafe, a miniature’s base must not overlap terrain that it cannot move through.",
        },
      ],
    },

    {
      keyword: "troopers",
      name: "Trooper",
      parents: ["t"],
      related_keywords: [
        "clone_trooper",
        "creature_trooper",
        "droid_trooper",
        "emplacement_trooper",
        "woookie_trooper",
      ],
      descriptions: [
        {
          type: "text",
          content:
            "Trooper is the most common unit type in <i>Star Wars</i>: Legion. Trooper units may have the following subtypes, each with their own additional rules:",
        },
        {
          type: "structured_list",
          content: [
            "Clone Trooper",
            "Creature Trooper",
            "Droid Trooper",
            "Emplacement Trooper",
            "Wookie Trooper",
          ],
        },
        {
          type: "text",
          content:
            "Rules that affect a trooper unit affect all its subtypes. Subtypes must follow all the rules of normal troopers unless otherwise stated.",
        },
        { type: "reference", referenced_keyword: "clone_trooper" },
        { type: "reference", referenced_keyword: "creature_trooper" },
        { type: "reference", referenced_keyword: "droid_trooper" },
        { type: "reference", referenced_keyword: "emplacement_trooper" },
        { type: "reference", referenced_keyword: "woookie_trooper" },
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
        "woookie_trooper",
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
      keyword: "vehicles",
      name: "Vehicles",
      parents: ["v"],
      related_keywords: [
        "ground_vehicles",
        "repulsor_vehicle",
        "resiliency",
        "damage_token",
      ],
      descriptions: [
        {
          type: "text",
          content:
            "There are many types of vehicles in <i>Star Wars</i>: Legion, from lumbering tanks to soaring airspeeders and everything in between. Every vehicle unit in <i>Star Wars</i>: Legion also has one of the subtypes listed below with their own special rules:",
        },
        {
          type: "structured_list",
          content: ["Ground Vehicle", "Repulsor Vehicle"],
        },
        {
          type: "text",
          content:
            "Rules that affect a vehicle unit affect all its subtypes unless otherwise stated. Regardless of subtype, all vehicles have the resiliency rules listed below.",
        },
        { type: "reference", referenced_keyword: "resiliency" },
        { type: "reference", referenced_keyword: "ground_vehicles" },
        { type: "reference", referenced_keyword: "repulsor_vehicle" },
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
      keyword: "woookie_trooper",
      name: "Wookie Trooper",
      parents: ["w"],
      related_keywords: ["troopers"],
      descriptions: [
        {
          type: "structured_list",
          content: [
            "Wookiee troopers have no additional special rules, other than being referenced by their unit type for certain rules and abilities.",
          ],
        },
      ],
    },
  ],
};