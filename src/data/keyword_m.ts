import { Keyword } from "@/types";

export const KeywordsM: Keyword[] = [
  {
    keyword: "makashi_mastery",
    name: "Makashi Mastery",
    activation: "",
    parents: ["m", "units"],
    tag: "Unit Keyword",
    related_keywords: ["melee", "pierce_x"],
    descriptions: [
      {
        type: "text",
        content:
          "While a unit with the Makashi Mastery keyword performs a melee attack, during the Choose Weapons and Gather Dice step, it can reduce the {keyword:Pierce X} value of a weapon in the attack pool by 1. If it does, the defender cannot use the {keyword:Immune: Pierce} and/or {keyword:Impervious} keywords during this attack.",
      },
    ],
  },
  {
    keyword: "map_cards",
    name: "Map Cards",
    activation: "",
    parents: ["m", "concepts"],
    related_keywords: [
      "setup",
      "card_effects",
      "objective",
      "terrain",
      "battlefield",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "Map Cards show player territories and objective placement on a gridded map. Each side of each grid square is {range_1}. Each player will be assigned one of the player territories during Setup.",
      },
      {
        type: "illustration",
        content: "examples/map-card.png",
        align: "center",
        altText: "One map card shown: Shifting Priorities.",
      },
      {
        type: "structured_list_numbered",
        content: [
          "<strong>Card Title:</strong> The title of the objective that is paired with this Map Card.",
          "<strong>Player Territory:</strong> Limits where units can deploy.",
          "<strong>Contested Territory:</strong> The area of the battlefield that is not part of any player’s territory.",
          "<strong>POI Placement:</strong> Shows where to place a POI on the battlefield during Setup.",
        ],
      },
    ],
  },

  {
    keyword: "marksman",
    name: "Marksman",
    activation: "",
    parents: ["m", "units"],
    tag: "Unit Keyword",
    related_keywords: ["attack", "aim"],
    descriptions: [
      {
        type: "text",
        content:
          "After converting attack surges during the Convert Attack Surges step, a unit with the Marksman keyword may spend any number of aim tokens. For each aim token spent in this way, instead of rerolling dice, change a blank result to a hit {hit} result, a hit {hit} result to a critical {hit_critical} result, or spend two aim tokens to change a blank result to a critical {hit_critical} result.",
      },
    ],
  },

  {
    keyword: "master_of_the_force",
    name: "Master of the Force",
    activation: "",
    parents: ["m", "units"],
    tag: "Unit Keyword",
    related_keywords: ["upgrade_card", "ready_x", "exhaust"],
    descriptions: [
      {
        type: "text",
        content:
          "At the end of its activation, a unit that has the Master of the Force X keyword may ready up to X of its exhausted Force {upgrade_force} Upgrade Cards.",
      },
    ],
  },

  {
    keyword: "master_storyteller",
    name: "Master Storyteller",
    activation: "",
    range: "range_2",
    parents: ["m", "units"],
    tag: "Unit Keyword",
    related_keywords: ["apply_dodge_cover", "card_action"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit performs the Master Storyteller card action, it chooses up to X friendly {faction_ewoks} units at {range_2}, where X is the current round number. Each chosen unit gains 2 surge tokens.",
      },
    ],
  },
  {
    keyword: "melee",
    name: "Melee",
    activation: "",
    parents: ["m"],
    related_keywords: ["move", "move_into_melee", "base"],
    descriptions: [
      {
        type: "text",
        content:
          "Melee is close ranged, hand-to-hand combat between two or more units. When two miniatures controlled by opposing players are in base contact, those units are in melee.",
      },
    ],
  },

  {
    keyword: "mercenary",
    name: "Mercenary: Faction",
    activation: "",
    parents: ["m", "units"],
    tag: "Unit Keyword",
    related_keywords: ["army_building"],
    descriptions: [
      {
        type: "text",
        content:
          "A unit with the Mercenary keyword is a Mercenary unit. The faction(s) specified by the Mercenary keyword can include that unit in an army as a Mercenary unit.",
      },
    ],
  },
  {
    keyword: "miniature",
    name: "Miniatures",
    activation: "",
    parents: ["m", "concepts"],
    related_keywords: ["miniature", "terrain", "tokens", "melee"],
    descriptions: [
      {
        type: "reference",
        referenced_keyword: "objects",
      },
    ],
  },
  {
    keyword: "nimble",
    name: "Nimble",
    activation: "",
    parents: ["n", "units"],
    tag: "Unit Keyword",
    related_keywords: ["dodge", "attack"],
    descriptions: [
      {
        type: "text",
        content:
          "After a unit that has the Nimble keyword defends against an attack, if it spent at least one dodge token during any point of the attack sequence, it gains one dodge token.",
      },
    ],
  },

  {
    keyword: "measuring_range",
    name: "Measuring Range",
    activation: "",
    parents: ["m", "concepts"],
    related_keywords: ["battlefield"],
    descriptions: [
      {
        type: "text",
        content:
          "When measuring range between two objects, only take the horizontal distance into account—never the vertical distance. A measurement tool should always be flat on the battlefield; if this isn’t possible (due to terrain, for example), hold the measuring tool above the battlefield and check positions based on the measurement tool.",
      },
      {
        type: "illustration",
        content: "examples/measuring-range.png",
        align: "center",
        altText: "Photo with the measurement tool flat on the ground.",
      },
    ],
  },
  {
    keyword: "measurement",
    name: "Measurement",
    parents: ["m", "concepts"],
    related_keywords: [
      "move",
      "range",
      "terrain_height",
      "cohesion",
      "weapons",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "<i>Star Wars</i>: Legion uses two kinds of measuring tools: movement tools and range tools. Any distance can be measured at any time, but players may use only one movement tool and one range tool at a time.",
      },
      {
        type: "text",
        content:
          "There are three movement tools, from shortest to longest: the speed-1 tool, the speed-2 tool, and the speed-3 tool.",
      },
      {
        type: "header",
        content: "Movement Tools",
      },

      {
        type: "illustration",
        content: "examples/movement-tools.png",
        align: "center",
        altText: "Three variants of the Movement Tools.",
      },
      {
        type: "header",
        content: "Range Rules Segments",
      },
      {
        type: "illustration",
        content: "examples/range-rulers.png",
        align: "center",
        altText: "Four segments of the Range Rules.",
      },
      {
        type: "header",
        content: "Half-Range Tool",
      },
      {
        type: "illustration",
        content: "examples/half-range-tool.png",
        align: "center",
        altText: "The Half-Range Tool",
      },
      {
        type: "text",
        content:
          "<a href='https://www.printables.com/model/947836-star-wars-legion-half-12-and-15-deployment-range-t'>Download 3D Printable Half-Range tool.</a>",
      },
      {
        type: "text",
        content:
          "A range tool can be made up of any number of connected 6-inch segments as well as up to one 3-inch half-range tool.",
      },
      {
        type: "structured_list",
        content: [
          "{range_melee}: Melee",
          "{range_half}: Half-Range",
          "{range_1}: Range 1",
          "{range_2}: Range 2",
          "{range_3}: Range 3",
          "{range_4}: Range 4",
          "{range_5}: Range 5",
          "{range_infinite}: Beyond range 5",
        ],
      },
      { type: "callout", callout_keyword: "area_weapon" },
      {
        type: "text",
        content:
          "Sometimes, more than one number is shown—in this case, the first number represents the minimum range, and the second number represents the maximum range. If only a single number is shown, then that is the maximum range for that effect.",
      },
      {
        type: "illustration",
        content: "examples/weaponrange-1-3.png",
        align: "center",
        altText: "A blue square with beyond icon and number range 1 to 3.",
        width: 80,
      },
      {
        type: "text",
        content:
          "Range is always measured as the shortest distance possible between two objects. To measure range between two objects, take the range tool and place it flat on the battlefield so that one end is touching the object being measured from. Then add segments until the total length of the range tool is longer than the distance between the two objects. The segment of the range tool that object is inside is equal to the range between the two objects. When measuring to or from miniatures, always measure from the miniature’s base, ignoring the miniature itself.",
      },
      {
        type: "illustration",
        content: "examples/weaponrange-melee.png",
        align: "center",
        altText: "A red square with melee icon.",
        width: 80,
      },
      {
        type: "text",
        content:
          "Melee range is not measured with the range tool; instead, two miniatures are in melee range with one another if they are in base contact.",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "move_into_melee",
      },
      {
        type: "reference",
        referenced_keyword: "measuring_range",
      },
    ],
  },
  {
    keyword: "melee_pierce",
    name: "Melee Pierce",
    activation: "",
    parents: ["m", "concepts"],
    related_keywords: ["melee", "attack"],
    descriptions: [
      {
        type: "reference",
        referenced_keyword: "immune_melee_pierce",
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
      "impassable_terrain",
      "notch_based_movement",
      "open_terrain",
      "pivot",
      "reverse",
      "speeder_x",
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
            altText: "B1 figures on the battlefield a Movement 2 from the edge",
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
            altText: "B1 figures with a movement tool next to leader miniature",
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
    keyword: "move_into_melee",
    name: "Moving Into Melee",
    parents: ["m"],
    related_keywords: ["move", "melee", "engaged"],
    descriptions: [
      {
        type: "text",
        content:
          "The only way a unit can move or be placed into base contact with an enemy miniature is to move into melee. While a unit that has at least one weapon with a melee range is moving or being placed, it can move into melee by moving or placing that unit’s unit leader into base contact with an enemy miniature. When a unit moves into melee, the following steps must be performed:",
      },
      {
        type: "structured_list_numbered",
        content: [
          "After the unit leader of the unit moving into melee is placed, place the other miniatures in that unit into base contact with enemy miniatures in the unit that their unit leader is now in melee with.",
          "If the opponent’s unit leader is not in base contact with an enemy miniature, that miniature’s controlling player places it into base contact with a miniature in the unit that moved into melee.",
          "The opposing player places the other miniatures in their unit that are not currently in base contact with an enemy miniature or are not in cohesion into base contact with miniatures from the enemy unit that moved into melee.",
        ],
      },
      {
        type: "text",
        content:
          "If any miniatures cannot be placed into base contact with enemy miniatures during this process, they must still be placed in cohesion. Miniatures may never move or be placed in such a way that they would be in base contact with multiple enemy units, though it is possible for a unit to be in melee with multiple enemy units if another unit joins the melee later.",
      },
      {
        type: "example",
        content: [
          {
            type: "header",
            content: "Example: Moving Into Melee",
          },
          {
            type: "illustration",
            content: "examples/move-into-melee-1.png",
            align: "center",
            altText: "Clone trooper moving leader unit miniature droid unit.",
          },
          {
            type: "illustration",
            content: "examples/move-into-melee-2.png",
            align: "center",
            altText:
              "Clone trooper moving the rest of their unit into melee and in cohesion.",
          },
          {
            type: "text",
            content:
              "Will decides that he wants to move his Clone Trooper unit into melee with Tony’s Battle Droids. Because they have a melee weapon, the Clone Troopers may move into base contact with the Battle Droids. To do this, Will performs a move with the Clone Troopers’ unit leader that ends with the Clone Troopers’ unit leader in base contact with 1 of the Battle Droids. Then, ensuring that all of the Clone Troopers remain in cohesion, Will places the rest of the Clone Troopers so that they are also in base contact with the Battle Droids. The unit leader of the Battle Droids is in base contact with an enemy miniature, so it does not move. Tony then places the Battle Droids that are not in base contact into base contact with Will’s Clone Troopers while maintaining cohesion. The Clone Troopers and Battle Droids are engaged and in melee.",
          },
        ],
      },
    ],
  },
  {
    keyword: "move_through_miniatures",
    name: "Moving Through Miniatures",
    parents: ["m"],
    related_keywords: ["move", "miniature", "notch_based_movement"],
    descriptions: [
      {
        type: "text",
        content:
          "Miniatures can move through and overlap other miniatures during a move, but they cannot end a move overlapping other miniatures.",
      },
    ],
  },
];
