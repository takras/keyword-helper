import { Keyword } from "@/types";

export const KeywordsW: Keyword[] = [
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
      "impact_x",
      "pierce_x",
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
    keyword: "weak_point_x",
    name: "Weak Point X",
    parents: ["w", "units"],
    related_keywords: ["attack", "impact_x", "keywords"],
    descriptions: [
      {
        type: "text",
        content:
          "While a unit with the Weak Point X: Front/Rear/Sides keyword is defending, if the attacking unit’s unit leader is at least partially inside the specified firing arc of the defending unit, the attack pool gains the Impact X keyword where X is equal to the value of Weak Point X.",
      },
      {
        type: "text",
        content:
          "While a unit with the Weak Point X keyword is defending against a ranged attack made by an area weapon, treat the charge or advantage token as the attacking unit leader.",
      },
    ],
  },
  {
    keyword: "weighed_down",
    name: "Weighed Down",
    parents: ["w", "units"],
    related_keywords: ["jump_x"],
    descriptions: [
      {
        type: "text",
        content:
          "While a unit with the Weighed Down keyword is holding 1 or more objective tokens, it cannot use the {keyword:Jump} keyword.",
      },
    ],
  },
  {
    keyword: "we_are_not_regs",
    name: "We're Not Regs",
    parents: ["w", "units"],
    related_keywords: ["clone_trooper", "backup"],
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the We’re Not Regs keyword may not spend green tokens on other Clone Trooper units, and other Clone Trooper units may not spend this unit’s green tokens. Additionally, this unit cannot benefit from backup.",
      },
    ],
  },
  {
    keyword: "wheel_mode",
    name: "Wheel Mode",
    parents: ["w", "units"],
    related_keywords: ["activating_units", "move", "cover", "miniature"],
    descriptions: [
      {
        type: "illustration",
        altText: "A round token with orange wheel inside",
        align: "right",
        content: "tokens/wheel-mode.png",
        width: "80",
      },
      {
        type: "text",
        content:
          "At the start of its activation, a unit with the Wheel Mode keyword can increase its maximum speed to 3 until the end of that activation. If it does, until the end of the round, it gains the Cover 2 keyword and cannot attack or flip active shield tokens.",
      },
      {
        type: "text",
        content:
          "To indicate that a unit of Droidekas is using the Wheel Mode keyword, a player may replace their standing Droideka miniatures with ball-form Droideka miniatures, or simply mark the unit with a Wheel Mode token.",
      },
      {
        type: "text",
        content:
          "Players should use the ball-form Droideka miniatures only when the unit uses the Wheel Mode keyword and only for the duration of that round. At the end of the round, any ball- form Droideka miniatures should be replaced with standing Droideka miniatures.",
      },
    ],
  },
  {
    keyword: "winning",
    name: "Winning the Game",
    parents: ["w", "concepts"],
    related_keywords: [],
    descriptions: [
      {
        type: "text",
        content:
          "Each game of <i>Star Wars</i>: Legion ends when one of the following conditions has been met:",
      },
      {
        type: "structured_list",
        content: [
          "If, at the end of the End Phase of any round, a player has 12 or more Victory Points (VPs) and has more VPs than each opponent, they win the game.",
          "If, at any time, only one player has undefeated units, they immediately win the game.",
          "At the end of the fifth round, the player with the most VPs is the winner. If both players have the same number of VPs, each player totals the point value of defeated units in their army. Whichever player has the lowest point value of defeated units in their army wins the game. If the game is still tied, the game ends in a draw.",
        ],
      },
    ],
  },
  {
    keyword: "withdraw",
    name: "Withdraw",
    parents: ["w", "concepts"],
    related_keywords: ["engaged", "melee", "move", "standby"],
    descriptions: [
      {
        type: "text",
        content:
          "An engaged unit may withdraw during its activation to leave melee. To withdraw, a unit must make a move action. Reduce the units speed to 1 during this move action. A unit with a maximum speed of 0 cannot withdraw. A unit cannot move into melee during an activation that it withdraws. A unit cannot perform a standby action or an attack and withdraw during the same activation.",
      },
    ],
  },
  {
    keyword: "wookiee_trooper",
    name: "Wookiee Trooper",
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
  {
    keyword: "within_range",
    name: "Within, At, and Beyond",
    parents: ["w", "concepts"],
    related_keywords: ["actions", "range", "measurement"],
    descriptions: [
      {
        type: "reference",
        referenced_keyword: "at_range",
      },
    ],
  },
  {
    keyword: "wounds",
    name: "Wound Tokens",
    parents: ["w", "concepts"],
    related_keywords: ["resiliency", "suffering_wounds"],
    descriptions: [
      {
        type: "reference",
        referenced_keyword: "suffering_wounds",
      },
    ],
  },
];
