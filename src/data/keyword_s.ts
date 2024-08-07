import { Keyword } from "@/types";

export const KeywordsS: Keyword[] = [
  {
    keyword: "scale",
    name: "Scale",
    parents: ["s"],
    related_keywords: ["climb", "move"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with the Scale keyword performs a climb, it may move a vertical distance up to height 2.",
      },
      {
        type: "text",
        content:
          "When a unit that has the Scale keyword performs a move, it does not reduce its maximum speed for moving out of, into, or through difficult terrain.",
      },
    ],
  },
  {
    keyword: "scatter",
    name: "Scatter",
    parents: ["s", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["troopers", "attack", "miniature", "cohesion"],
    descriptions: [
      {
        type: "text",
        content:
          "After a unit performs an attack against a trooper unit on small bases using an attack pool that includes a weapon with the Scatter keyword, it may place any non-unit leader miniatures in the defending unit, following all the rules of cohesion, as if the defending unit leader had just performed a standard move.",
      },
    ],
  },
  {
    keyword: "scatter_terrain",
    name: "Scatter Terrain",
    parents: ["s", "concepts"],
    related_keywords: [
      "terrain_cover",
      "terrain_height",
      "terrain_height",
      "terrain",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "Scatter terrain represents small terrain features such as crates, planters, or lamp posts. It is up to the players to determine the height, special rules, and the type of cover that scatter terrain provides.",
      },
    ],
  },
  {
    keyword: "scout_x",
    name: "Scout X",
    parents: ["s"],
    related_keywords: ["move", "terrain"],
    descriptions: [
      {
        type: "text",
        content:
          "When an undeployed unit with the Scout X keyword activates, at the start of its Perform Actions step, it may deploy by performing a free speed-X move action, ignoring difficult terrain. A unit can perform this move regardless of its maximum speed.",
      },
      {
        type: "text",
        content:
          "The Scout X keyword is cumulative but cannot exceed 3. If a unit would ever have Scout X exceeding Scout 3, it has Scout 3 instead.",
      },
    ],
  },
  {
    keyword: "scouting_party",
    name: "Scouting Party",
    parents: ["s"],
    related_keywords: ["troopers", "faction", "setup", "scout_x"],
    descriptions: [
      {
        type: "text",
        content:
          "During Setup, the controlling player of a unit with the Scouting Party keyword may choose up to X friendly trooper units that share the same faction or affiliation with that unit and do not have the Scout keyword. Each chosen unit gains the Scout X keyword this game, where X is the Scout X value of the unit with the Scouting Party keyword.",
      },
    ],
  },
  {
    keyword: "secret_mission",
    name: "Secret Mission",
    parents: ["s"],
    related_keywords: ["tokens", "victory_points"],
    descriptions: [
      {
        type: "text",
        content:
          "Once per game, at the beginning of the Command Phase, if a unit with the Secret Mission keyword is within enemy territory, it gains a secret mission token.",
      },
      {
        type: "text",
        content:
          "When scoring VP, if a player controls a unit with one or more secret mission tokens and that unit is within enemy territory, that unit’s controlling player scores 1 VP. Then, remove those secret mission tokens from the game.",
      },
    ],
  },
  {
    keyword: "self_destruct",
    name: "Self-Destruct X",
    parents: ["s", "weapons"],
    tag: "Weapon Keyword",
    range: "range_1",
    related_keywords: [
      "melee",
      "ranged_weapon",
      "wounds",
      "free_action",
      "transport",
    ],
    descriptions: [
      {
        type: "illustration",
        content: "black/self-destruct.png",
        align: "right",
        altText: "A crosshair in a circle.",
        width: "80",
      },
      {
        type: "text",
        content:
          "A weapon with a red {self_destruct} icon is a Self-Destruct weapon and can only be used during Self-Destruct attacks. Self-Destruct attacks are ranged attacks even though Self-Destruct weapons are not ranged weapons. A unit can perform a Self-Destruct attack as a free action during its activation if it has at least X wound tokens. Perform an attack using a unit’s Self-Destruct weapon against each unit at {range_1} and in LOS, even if they are engaged. Self-Destruct attacks may not be made by a unit that is embarked on a transport.",
      },
      {
        type: "text",
        content:
          "After performing all attacks, the unit performing the Self-Destruct attack is defeated and removed from play.",
      },
    ],
  },
  {
    keyword: "self_preservation",
    name: "Self-Preservation",
    parents: ["s"],
    related_keywords: ["panic", "courage"],
    descriptions: [
      {
        type: "text",
        content:
          "When checking to see if a unit with the Self-Preservation keyword panics, that unit cannot use the courage value of units that are not of the same affiliation.",
      },
    ],
  },
  {
    keyword: "sentinel",
    name: "Sentinel",
    parents: ["s"],
    range: "range_3",
    related_keywords: ["standby"],
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the Sentinel keyword can spend a standby token after an enemy unit performs an attack, move, or action at {range_3}, rather than at {range_2}.",
      },
    ],
  },
  {
    keyword: "sharpshooter_x",
    name: "Sharpshooter",
    parents: ["s"],
    related_keywords: ["cover"],
    descriptions: [
      {
        type: "text",
        content:
          "During the Determine Cover step, a unit with the Sharpshooter X keyword subtracts X from the numerical value of the defender’s cover.",
      },
      {
        type: "example",
        initiallyExpanded: true,
        content: [
          { type: "header", content: "Example: Sharpshooter" },
          {
            type: "text",
            content:
              "For example, a unit with heavy cover and a suppression token that is attacked by a unit with Sharpshooter 1 has light cover.",
          },
        ],
      },
    ],
  },
  {
    keyword: "shield",
    name: "Shielded X",
    parents: ["s"],
    related_keywords: ["ranged_weapon", "attack"],
    descriptions: [
      {
        type: "illustration",
        content: "tokens/shield.png",
        width: "200",
        align: "right",
        altText: "Shield token, front and back",
      },
      {
        type: "text",
        content:
          "A unit with the Shielded X keyword has X shield tokens. Shield tokens belong to the unit and are not assigned to individual miniatures. If a unit gains the Shielded X keyword, it gains X shield tokens. Similarly, if a unit loses the Shielded X keyword it loses X shield tokens.",
      },
      {
        type: "text",
        content:
          "Shield tokens are double-sided, with an active side and an inactive side, and always enter play with their active side faceup placed on the battlefield next to the unit that has those shield tokens. When a unit flips an active shield token, that shield token is flipped to its inactive side and is now inactive. When a unit flips an inactive shield token, that shield token is flipped to its active side and is now active.",
      },
      {
        type: "text",
        content:
          "While defending against a ranged attack, during the Modify Attack Dice step, a defending unit may flip any number of its active shield tokens to their inactive side to cancel one hit {hit} or critical {hit_critical} result for each shield token flipped in this way.",
      },
    ],
  },
  {
    keyword: "sidearm",
    name: "Sidearm",
    parents: ["s"],
    related_keywords: ["weapons", "upgrade_card", "melee", "ranged_weapon"],
    tag: "Upgrade Keyword",
    descriptions: [
      {
        type: "header",
        content: "Sidearm: Melee/Ranged",
      },
      {
        type: "text",
        content:
          "If an upgrade has the Sidearm: Melee keyword, the miniature added by that upgrade or with that upgrade cannot add any melee weapons to attack pools other than any melee weapons on the Upgrade Card with the Sidearm: Melee keyword.",
      },
      {
        type: "text",
        content:
          "If an upgrade has the Sidearm: Ranged keyword, the miniature added by that upgrade cannot add any ranged weapons to attack pools other than any ranged weapons on the Upgrade Card with the Sidearm: Ranged keyword.",
      },
      {
        type: "example",
        initiallyExpanded: true,
        content: [
          {
            type: "text",
            content:
              "For example, the Electrostaff Guard Upgrade Card provides a melee weapon and has the Sidearm: Melee keyword. The miniature added by that upgrade can only use the weapon on the Electrostaff Guard upgrade during a melee attack. That miniature may still use any available ranged weapon, such as the ranged weapon on the Imperial Royal Guard Unit Card, during a ranged attack.",
          },
        ],
      },
    ],
  },
  {
    keyword: "small",
    name: "Small",
    parents: ["s"],
    related_keywords: [
      "ranged_weapon",
      "attack",
      "area_weapon",
      "line_of_sight",
      "cover",
    ],
    tag: "Upgrade Keyword",
    descriptions: [
      {
        type: "text",
        content:
          "While a unit is defending against a non-area ranged attack, miniatures with the Small keyword are ignored for the purposes of determining LOS, cover, and range. The miniature with the Small keyword is treated as though it were not a part of the defending unit.",
      },
    ],
  },
  {
    keyword: "smoke_x",
    name: "Smoke X",
    parents: ["s"],
    range: "range_1",
    related_keywords: ["actions", "smoke_tokens"],
    descriptions: [
      {
        type: "text",
        content:
          "A unit that has the Smoke X keyword can perform the Smoke X action. To perform this action, the unit places X smoke tokens within {range_1} and in LOS of its unit leader.",
      },
      {
        type: "text",
        content:
          "Smoke tokens cannot overlap any objective, advantage, charge, or other smoke tokens and must be placed on a flat surface.",
      },
    ],
  },
  {
    keyword: "smoke_tokens",
    name: "Smoke Tokens",
    parents: ["s"],
    range: "range_1",
    related_keywords: ["tokens", "smoke_x"],
    descriptions: [
      {
        type: "illustration",
        content: "tokens/smoke.png",
        width: "80",
        align: "right",
        altText: "Smoke token",
      },
      {
        type: "text",
        content:
          "Trooper units whose unit leader is at {range_1} of a smoke token improve the numerical value of their cover by 1 during the Determine Cover step. While a trooper unit is attacking, if the attacking unit leader is at {range_1} of a smoke token, the defending unit improves the numerical value of their cover by 1. Effects that improve a unit’s cover are cumulative. A unit cannot be affected by the same Smoke token more than once. Smoke tokens are removed during the Remove Tokens step of the End Phase.",
      },
      {
        type: "text",
        content:
          "Smoke tokens cannot overlap any objective, advantage, charge, or other smoke tokens and must be placed on a flat surface.",
      },
      {
        type: "example",
        initiallyExpanded: true,
        content: [
          { type: "header", content: "Example: Smoke Tokens" },
          {
            type: "text",
            content:
              "For example, a trooper unit whose unit leader is at {range_1} of 2 smoke tokens would improve the numerical value of its cover by 2.",
          },
        ],
      },
    ],
  },
  {
    keyword: "special_issue",
    name: "Special Issue: Battle Force",
    parents: ["s"],
    related_keywords: ["army_building"],
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the Special Issue keyword can only be included in an army using the specified Battle Force.",
      },
    ],
  },
  {
    keyword: "soresu_mastery",
    name: "Soresu Mastery",
    parents: ["s"],
    related_keywords: ["ranged_weapon", "guardian", "dodge"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with Soresu Mastery is defending against a ranged attack, it may reroll all of its defense dice during the Reroll Defense Dice step. Additionally, when a unit with Soresu Mastery is using the {keyword:Guardian X} keyword, it may spend one dodge token before converting any {block_surge} results. If it does, it rerolls all of its defense dice before converting {block_surge} results. Each die cannot be rerolled more than once using Soresu Mastery.",
      },
    ],
  },
  {
    keyword: "speeder",
    name: "Speeder X",
    parents: ["s"],
    related_keywords: [
      "move",
      "terrain",
      "notched_bases",
      "pivot",
      "compulsory_move",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "While it is performing a move, a unit that has the Speeder X keyword can move over or end its movement on terrain equal to or less than height X. Additionally, when a unit on notched bases performs a move, it skips step 1 of notched base movement, rotating the unit leader’s base.",
      },
      {
        type: "text",
        content:
          "A unit with the Speeder X keyword must perform a free compulsory move action at the start or end of its Perform Actions step.",
      },
      {
        type: "text",
        content:
          "If a unit with the Speeder X keyword performs more than one non-compulsory move action during its activation, it may not claim asset tokens that activation. Additionally, a unit with the Speeder X keyword that has claimed an asset token can perform only one non-compulsory move action during its activation.",
      },
      {
        type: "reference",
        referenced_keyword: "compulsory_move",
      },
    ],
  },
  {
    keyword: "spotter",
    name: "Spotter X",
    parents: ["s", "units"],
    range: "range_2",
    related_keywords: ["aim"],
    descriptions: [
      {
        type: "text",
        content:
          "As a card action, a unit with the Spotter X keyword can choose up to X friendly units at {range_2}. Each chosen unit gains an aim token.",
      },
    ],
  },
  {
    keyword: "spray",
    name: "Spray",
    parents: ["s", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["attack", "miniature", "line_of_sight"],
    descriptions: [
      {
        type: "text",
        content:
          "When a miniature adds a weapon that has the Spray keyword to the attack pool, that weapon contributes its dice a number of times equal to the number of miniatures in the defending unit that are in LOS of the miniature using that weapon.",
      },
      {
        type: "example",
        initiallyExpanded: true,
        content: [
          {
            type: "header",
            content: "Example: Spray",
          },
          {
            type: "text",
            content:
              "For example, if an AT-RT with a flamethrower attacks a unit of 3 Death Troopers, since the flamethrower has the Spray keyword and an attack value of 2 black die, the flamethrower contributes 6 black attack dice to the attack pool.",
          },
        ],
      },
    ],
  },
  {
    keyword: "spur",
    name: "Spur",
    parents: ["s", "units"],
    range: "range_2",
    related_keywords: ["move", "suppression"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with the Spur keyword performs a move, its controlling player may assign it one suppression token to increase its maximum speed by 1 for that move, to a maximum of 3. When a unit performs a move, apply any effects that increase the unit’s maximum speed before applying any effects that reduce that unit’s maximum speed.",
      },
      {
        type: "example",
        initiallyExpanded: true,
        content: [
          { type: "header", content: "Example: Smoke Tokens" },
          {
            type: "text",
            content:
              "For example, a unit that normally has a maximum speed of 1, but has 1 immobilize token, can use the Spur keyword to perform a move with a total maximum speed of 1. However, a unit that normally has a maximum speed of 1, but has 2 immobilize tokens, cannot use the Spur keyword to perform a move because its maximum speed would still be 0.",
          },
        ],
      },
    ],
  },
  {
    keyword: "stationary",
    name: "Stationary",
    parents: ["s", "units"],
    related_keywords: ["move", "pivot", "prepared_positions", "deploy"],
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the Stationary keyword cannot perform moves unless the move is a pivot. A unit with the Prepared Position and Stationary keywords must deploy during the Deploy in Prepared Positions step of setup.",
      },
    ],
  },
  {
    keyword: "steady",
    name: "Steady",
    parents: ["s", "units"],
    related_keywords: ["move", "ranged_weapon", "attack"],
    descriptions: [
      {
        type: "text",
        content:
          "After a unit that has the Steady keyword performs a move action, it may perform a free attack action. During this attack action it may only add ranged weapons to attack pools.",
      },
    ],
  },
  {
    keyword: "strategize_x",
    name: "Strategize X",
    parents: ["s", "units"],
    range: "range_2",
    related_keywords: ["suppression", "dodge"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit uses the Strategize X action, it gains one suppression token, then chooses X friendly units at 2. Each chosen unit gains one aim and one dodge token.",
      },
    ],
  },

  {
    keyword: "suffering_wounds",
    name: "Wounds",
    parents: ["w"],
    related_keywords: ["attack", "miniature", "line_of_sight"],
    descriptions: [
      {
        type: "header",
        content: "Suffering Wounds and Defeating Miniatures",
      },
      {
        type: "illustration",
        altText: "Jagged red tokens, number 3 or blank inside.",
        width: "120",
        align: "right",
        content: "tokens/wound.png",
      },
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
    keyword: "suppressive",
    name: "Suppressive",
    parents: ["s", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["attack", "suppression"],
    descriptions: [
      {
        type: "text",
        content:
          "After defending against an attack pool that includes a weapon with the Suppressive keyword, the defending unit gains one suppression token during the Assign Suppression Token to Defender step.",
      },
      { type: "callout", callout_keyword: "suppression" },
    ],
  },
  {
    keyword: "suppression",
    name: "Suppression",
    parents: ["s"],
    related_keywords: [
      "suppressive",
      "courage",
      "panic",
      "apply_dodge_cover",
      "troopers",
    ],
    descriptions: [
      {
        type: "illustration",
        content: "tokens/suppression.png",
        align: "center",
        altText: "Two triangle-shaped tokens, one with a number 3 in it.",
        width: "280",
      },
      {
        type: "illustration",
        content: "examples/suppression.png",
        align: "center",
        altText: "Luke Skywalker unit card, with courage value highlighted",
        width: "280",
      },
      {
        type: "text",
        content:
          "Trooper units have a courage value on their Unit Card. When a unit has a number of suppression tokens equal to or greater than its courage value, it is suppressed. If a unit has a number of suppression tokens that is equal to or greater than double its courage value, it is panicked. A suppressed unit performs one less action each activation, while a panicked unit suffers additional effects.",
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
    related_keywords: ["hover_x", "notch", "move", "battlefield", "miniature"],
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
];