import { Keyword } from "@/types";

export const KeywordsT: Keyword[] = [
  {
    keyword: "tactical_x",
    name: "Tactical X",
    parents: ["t", "units"],
    related_keywords: ["aim", "move"],
    descriptions: [
      {
        type: "text",
        content:
          "The Tactical X keyword allows a unit to gain a number of aim tokens equal to X each time it performs a standard move as part of an action or free action.",
      },
    ],
  },
  {
    keyword: "take_cover_x",
    name: "Take Cover X",
    parents: ["t", "units"],
    range: "range_2",
    related_keywords: ["dodge", "card_action"],
    descriptions: [
      {
        type: "text",
        content:
          "As a card action, a unit with the Take Cover X keyword can choose up to X friendly units at {range_2}. Each chosen unit gains one dodge token.",
      },
    ],
  },
  {
    keyword: "terrain",
    name: "Terrain",
    parents: ["t", "concepts"],
    related_keywords: [
      "barricades",
      "dodge",
      "scatter_terrain",
      "terrain_cover",
      "terrain_height",
      "terrain_height",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "The scenery and features that make up the battlefield are terrain. Terrain serves more of a purpose than simply being aesthetically pleasing—the terrain over which armies fight can have as dramatic an impact on the course of battle as the abilities of the armies themselves. Players should always discuss terrain before the game starts. There are three types of terrain: scatter terrain, area terrain, and obstacle terrain.",
      },
      { type: "reference", referenced_keyword: "scatter_terrain" },
      { type: "callout", callout_keyword: "barricades" },
      { type: "reference", referenced_keyword: "area_terrain" },
      { type: "reference", referenced_keyword: "obstacle_terrain" },
      { type: "reference", referenced_keyword: "terrain_movement" },
      {
        type: "example",
        content: [
          {
            type: "header",
            content: "Example: Different Types of Terrain",
          },
          {
            type: "text",
            content:
              "The Clone Trooper unit is preparing to move. The battlefield and barricades are open terrain and do not restrict the Clone Trooper unit’s movement. The building is impassable terrain, and the Clone Troopers may not move through it unless they have a special rule that allows them to do so.",
          },
        ],
      },
      { type: "reference", referenced_keyword: "fitting_on_terrain" },
      { type: "reference", referenced_keyword: "terrain_cover" },
      { type: "reference", referenced_keyword: "terrain_height" },
      { type: "callout", callout_keyword: "golden_rule_terrain" },
    ],
  },
  {
    keyword: "terrain_cover",
    name: "Terrain Providing Cover",
    parents: ["t", "concepts"],
    related_keywords: [
      "barricades",
      "dodge",
      "scatter_terrain",
      "terrain_height",
      "line_of_sight",
      "battlefield",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "The main purpose of terrain is to block line of sight between miniatures and provide them with cover. Terrain provides either light, heavy, or no cover. What kind of cover, if any, a piece of terrain provides is ultimately for players to decide. Before the game begins, players should agree on what kind of cover each piece of terrain on the battlefield provides.",
      },
    ],
  },
  {
    keyword: "terrain_height",
    name: "Terrain Height",
    parents: ["t", "concepts"],
    related_keywords: [
      "barricades",
      "dodge",
      "scatter_terrain",
      "terrain_cover",
      "line_of_sight",
      "battlefield",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "Each piece of terrain has a height characteristic. To measure this, take the range tool and put one end on the battlefield, orienting the range tool vertically. Then add segments until the end of the range tool is taller than the piece of terrain. The segment of the range tool that the top of the terrain is inside is equal to that object’s height.",
      },
      {
        type: "text",
        content:
          "Some terrain might have various pieces at multiple heights. When determining the height of the terrain for the purposes of performing a movement or a climb, measure the height of the part of the terrain the miniatures are moving or climbing to, subtracting the height of any terrain the miniatures may be on.",
      },
      {
        type: "example",
        content: [
          {
            type: "header",
            content: "Example: Measuring Height",
          },
          {
            type: "illustration",
            content: "examples/measure-height.png",
            align: "center",
            altText:
              "An example photo illustrating when a standby would trigger",
          },
          {
            type: "text",
            content:
              "Sarah wants to measure the height of this building to determine how it will impede the movement of her Clone Troopers. To do so, she takes the range tool and places one end on the battlefield, holding the range tool upright. Because the roof of the building is entirely inside the first segment of the range tool, the building is considered height 1.",
          },
          {
            type: "text",
            content:
              "Later in the game, Sarah measures the height of another building. Because this building has multiple levels, it consists of different heights. The first roof is completely inside the first segment of the range tool, so that part of the building is height 1. However, the second roof of the building is inside the second segment of the range tool, so that part of the building is height 2.",
          },
          {
            type: "illustration",
            content: "examples/measure-height-2.png",
            align: "center",
            altText:
              "An example photo illustrating when a standby would trigger",
          },
          {
            type: "text",
            content:
              "To determine how the building affects the movement of her Clone Troopers, Sarah only considers the part of the building her Clone Troopers wish to move to—they may perform a climb onto the height 1 part of the building but are unable to move onto the height 2 part from the battlefield. If they begin their movement while on the height 1 part of the building, then they may climb onto the height 2 part of the building.",
          },
        ],
      },
    ],
  },
  {
    keyword: "teamwork",
    name: "Teamwork: Unit Name",
    parents: ["t", "units"],
    range: "range_2",
    related_keywords: ["aim", "dodge"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit with the Teamwork keyword is at {range_2} of a friendly unit that has the unit name specified by the Teamwork keyword, if either unit gains an aim token or a dodge token, the other unit gains a token of the same type.",
      },
    ],
  },
  {
    keyword: "terrain_movement",
    name: "Terrain Restricting Movement",
    parents: ["t", "concepts"],
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
          "In addition to being scatter, area, or obstacle terrain, a terrain feature is also open, difficult, or impassable.",
      },
      {
        type: "text",
        content:
          "Open terrain represents parts of the battlefield that are relatively easy to traverse and free from obstacles or obstructions. Open fields, lamp posts, planters, tall grass, or sandy desert are all open terrain. Open terrain does not restrict movement.",
      },
      {
        type: "text",
        content:
          "Difficult terrain restricts but does not completely prevent movement. Craters, ruins, woods, piles of rubble, and swamps are all examples of difficult terrain. Difficult terrain reduces the maximum speed of a unit moving through or into it by 1 to a minimum of 1.",
      },
      {
        type: "text",
        content:
          "Impassable terrain completely prevents movement. Miniatures cannot move through or end a movement on impassable terrain unless they have a special rule which allows them to do so.",
      },
      {
        type: "text",
        content:
          "Some larger and more complex pieces of terrain are made up of various parts that each restrict movement differently. For example, the walls of a piece of obstacle terrain may be impassable, but a miniature may be able to move through a door or window that is open terrain. Players should discuss the parts of terrain and agree on how they are to be played before the game begins.",
      },
      {
        type: "text",
        content:
          "In addition to being scatter, area, or obstacle terrain, a terrain feature is also open, difficult, or impassable.",
      },
    ],
  },
  {
    keyword: "target_x",
    name: "Target X",
    parents: ["t", "units"],
    related_keywords: ["aim", "issue_order"],
    descriptions: [
      {
        type: "text",
        content:
          "After a unit with the Target X keyword is issued an order, it gains X aim tokens.",
      },
    ],
  },
  {
    keyword: "tempted",
    name: "Tempted",
    parents: ["t", "units"],
    range: "range_3",
    related_keywords: ["attack", "free_action", "move", "terrain"],
    descriptions: [
      {
        type: "text",
        content:
          "If a friendly unit is defeated by an enemy attack and the attacking unit is at {range_3} of a unit with the Tempted keyword, after the attack is resolved, that unit with the Tempted keyword may perform a free attack action or a speed-2 move ignoring difficult terrain. A unit may use the Tempted keyword only once each round.",
      },
    ],
  },
  {
    keyword: "tow_cable",
    name: "Tow Cable",
    parents: ["t", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["attack", "pivot", "wounds"],
    descriptions: [
      {
        type: "text",
        content:
          "After a vehicle is wounded by an attack pool that included a weapon with the Tow Cable keyword, the player who performed the attack performs a pivot with the vehicle that was wounded.",
      },
    ],
  },
  {
    keyword: "transport",
    name: "Transport",
    parents: ["t", "units"],
    related_keywords: [
      "setup",
      "deploy",
      "issue_order",
      "command_phase",
      "move",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "During Setup, a unit with the Transport keyword may choose a friendly {rank_corps} or {rank_specialist} unit to transport. During the Issue Orders step of the Command Phase of round 1, a unit with the Transport keyword may issue an order to the chosen unit. If the chosen unit is undeployed when the unit with the Transport keyword deploys, after the effect is resolved, the chosen unit deploys by performing a speed-1 move. Measure the start of this move with both prongs of one side of the movement tool touching the base of the unit with the Transport keyword. When the chosen unit deploys in this way, the unit leader of that unit measures the vertical distance changed during that move starting from the unit with the Transport keyword.",
      },
    ],
  },
  {
    keyword: "treat_x",
    name: "Treat X",
    parents: ["t", "units"],
    range: "range_1",
    tag: "Upgrade Keyword",
    related_keywords: ["troopers", "line_of_sight", "wounds", "poison"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit uses the Treat X: Capacity Y card action, choose a friendly non-droid trooper unit at {range_1} and LOS and place one wound token on the card that has the Treat X: Capacity Y keyword. Remove a total of up to X wound and/or poison tokens from the chosen unit or restore up to X miniatures to that unit. This ability cannot be used if the card that has the Treat X: Capacity Y keyword has a number of wound tokens on it equal to or exceeding Y.",
      },
      {
        type: "text",
        content:
          "Wound tokens on cards are not considered to be on units and do not count toward a unit’s wound threshold, nor can they be removed by abilities that remove wound tokens from units.",
      },
      {
        type: "text",
        content:
          "If a unit has multiple Treat X: Capacity Y abilities, treat each keyword as a separate ability.",
      },
      {
        type: "text",
        content:
          "Additionally, each action is considered to be unique, and a unit that has access to more than one can use each ability once during its activation. This applies even if the unit has access to two identical abilities from different sources.",
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
];
