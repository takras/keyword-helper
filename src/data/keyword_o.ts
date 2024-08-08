import { Keyword } from "@/types";

export const KeywordsO: Keyword[] = [
  {
    keyword: "objective",
    name: "Objective Tokens",
    activation: "",
    parents: ["o", "concepts"],
    related_keywords: ["tokens", "cover", "line_of_sight"],
    descriptions: [
      {
        type: "text",
        content:
          "Units in Star Wars: Legion use objective tokens to score victory points. Objective Cards and Secondary Objective Cards specify which objective tokens are used and how to score victory points with them. Miniatures can move through objective tokens.",
      },
      {
        type: "header",
        content: "Types of Objective Tokens",
      },
      {
        type: "text",
        content: "There are two types of objective tokens:",
      },
      {
        type: "structured_list_numbered",
        content: [
          "<strong>Asset Tokens:</strong> Assets are valuable objects that can be carried around.",
          "<strong>Point-of-Interest Tokens:</strong> Also referred to as POIs. POIs represent critical locations, vantage points, or particularly interesting areas that armies attempt to secure throughout a battle.",
        ],
      },
      {
        type: "structured_list",
        content: [
          "When determining the number of obscured miniatures and determining cover during an attack sequence, treat POIs as a piece of area terrain consisting of the volume of their silhouette that provides heavy cover. The silhouette for a POI is a cylinder as wide as the token and {range_half} tall. For all other rules purposes, POIs do not block LOS.",
          "Miniatures, advantage tokens, and other objective tokens cannot overlap or be overlapped by POIs.",
          "POIs can be represented by a miniature on a 2-inch base instead of using a token. A POI represented by a miniature still counts as a token and does not count as a miniature for all rules purposes.",
        ],
      },
      {
        type: "illustration",
        content: "tokens/poi-3d.png",
        altText: "",
        align: "center",
        width: "200",
      },
      {
        type: "text",
        content:
          "<a href='https://www.printables.com/model/948921-star-wars-legion-poi-tokens'>Download 3D Printable POI tokens</a>",
      },
      { type: "reference", referenced_keyword: "contesting_objectives" },
      {
        type: "reference",
        referenced_keyword: "claiming_objective_tokens",
      },

      {
        type: "header",
        content: "Securing Objective Tokens",
      },
      {
        type: "text",
        content:
          "Some objective tokens can be secured. If an objective token can be secured, the player with the most units contesting that objective token is securing it.",
      },
      {
        type: "header",
        content: "Placing Objectives",
      },
      {
        type: "text",
        content:
          "Objective tokens must meet the following conditions when they are placed:",
      },
      {
        type: "structured_list",
        content: [
          "Objective tokens cannot be placed overlapping impassable terrain.",
          "Objective tokens cannot be placed partially overlapping a non-area terrain feature.",
          "Objective tokens cannot be placed overlapping obstacle terrain that is height 2 or greater.",
        ],
      },
      {
        type: "text",
        content:
          "During Setup, if an objective token should be placed at a position where the above conditions are not met, players must adjust terrain placement in a mutually agreeable manner so that the conditions are met. After Setup, if an objective token must be placed and there is not a position in range where the above conditions are met, that token is placed in the closest position that meets the above conditions instead.",
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
        altText: "One Clone trooper and AT-RT miniature with some space apart",
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
    keyword: "observe_x",
    name: "Observe X",
    activation: "",
    parents: ["o", "units"],
    tag: "Unit Keyword",
    range: "range_3",
    related_keywords: ["tokens", "dice"],
    descriptions: [
      {
        type: "text",
        content:
          "As a card action or free card action, a unit with the Observe X keyword can choose an enemy unit at {range_3} and in LOS. The chosen enemy unit gains X observation tokens. Observation tokens are removed during the Remove Tokens step of the End Phase.",
      },
      {
        type: "text",
        content:
          "During an attack, a friendly attacking unit can spend any number of observation tokens that belong to the defending unit during the Reroll Attack Dice step. The attacking unit rerolls one attack die for each observation token spent. Observation tokens are spent one at a time, and the same die can be rerolled multiple times by spending subsequent observation tokens or aim tokens. The attacking unit may spend aim tokens and observation tokens in any order.",
      },
    ],
  },
  {
    keyword: "obstacle_terrain",
    name: "Obstacle Terrain",
    parents: ["o", "concepts"],
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
          "Obstacle terrain represents large or tall terrain features such as buildings, cliffs, or high walls. When a trooper miniature wants to move through or onto an obstacle terrain feature, it may have to perform a climb based on the obstacle terrain’s height.",
      },
    ],
  },
  {
    keyword: "open_terrain",
    name: "Open Terrain",
    parents: ["o", "concepts"],
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
        type: "reference",
        referenced_keyword: "terrain_movement",
      },
    ],
  },

  {
    keyword: "outmaneuver",
    name: "Outmaneuver",
    activation: "",
    parents: ["o", "units"],
    tag: "Unit Keyword",
    related_keywords: ["dodge", "apply_dodge_cover"],
    descriptions: [
      {
        type: "text",
        content:
          "During the Apply Dodge and Cover step, a unit with the Outmaneuver keyword can spend dodge tokens to cancel critical {hit_critical} results.",
      },
    ],
  },
  {
    keyword: "override",
    name: "Override",
    activation: "",
    parents: ["o", "units"],
    tag: "Unit Keyword",
    range: "range_5",
    related_keywords: ["suppression", "ai_action"],
    descriptions: [
      {
        type: "text",
        content:
          "When a friendly unit begins its activation while at {range_5} of a unit that has the Override keyword, the unit with the Override keyword may gain one suppression token. If it does, the activating unit ignores the AI keyword during its activation.",
      },
    ],
  },
  {
    keyword: "overrun",
    name: "Overrun X",
    parents: ["o", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["weapons", "move"],
    descriptions: [
      {
        type: "illustration",
        content: "black/overrun.png",
        align: "right",
        altText: "An arrow pointing inwards to center of a circle.",
        width: "80",
      },
      {
        type: "text",
        content:
          "A weapon with a red overrun range icon {overrun} is an overrun weapon and can only be used during overrun attacks. Overrun attacks are not ranged or melee attacks. A unit may make X overrun attacks during its activation. A unit with an overrun weapon can perform an overrun attack after it performs a standard move in which the movement tool or one of its miniatures’ bases overlapped an enemy miniature’s base.",
      },
      {
        type: "text",
        content:
          "After completing the move, the unit with the overrun weapon performs an attack against the unit it moved through, ignoring range when making this attack. It can only form one attack pool when making this attack, and only weapons with the Overrun X keyword can be in this attack pool. The overrun weapon is only added to the attack pool once, even if there are multiple miniatures in the unit.",
      },
      {
        type: "text",
        content:
          "If a unit can perform multiple overrun attacks during its activation, it must perform a separate move through an enemy unit for each overrun attack.",
      },
    ],
  },
  {
    keyword: "overlapping_objects",
    name: "Overlapping Objects",
    parents: ["o"],
    related_keywords: ["terrain", "tokens", "objective", "miniature"],
    descriptions: [
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
];
