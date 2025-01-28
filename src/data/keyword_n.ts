import { Keyword } from "@/types";

export const KeywordsN: Keyword[] = [
  {
    keyword: "nimble",
    name: "Nimble",
    activation: "",
    parents: ["n", "units"],
    tag: "Unit Keyword",
    related_keywords: ["dodge", "attack"],
    printedDescription:
      "When you defend, if you spent at least one dodge token during the attack, gain one dodge token.",
    descriptions: [
      {
        type: "text",
        content:
          "After a unit that has the Nimble keyword defends against an attack, if it spent at least one dodge token during any point of the attack sequence, it gains one dodge token.",
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
    keyword: "noncombatant",
    name: "Noncombatant",
    parents: ["n"],
    related_keywords: ["weapons", "suffering_wounds", "miniature"],
    descriptions: [
      {
        type: "text",
        content:
          "A miniature with the Noncombatant keyword cannot add any weapons to attack pools, and any wounds must be assigned to non-unit leader miniatures without the Noncombatant keyword, if able. If a miniature with the Noncombatant keyword already has one or more wound tokens, it must be assigned wounds before miniatures that do not have wound tokens. If the unit leader miniature in a unit with the Noncombatant keyword is defeated, a Noncombatant miniature cannot be replaced by a new unit leader miniature unless there are no other miniatures without the Noncombatant keyword.",
      },
    ],
  },

  {
    keyword: "notch_based_movement",
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
          "When a miniature performs a full or partial move, if the base of the miniature is impeded by an object while moving, it must stop its movement prematurely unless it can legally move through, over, or on top of the obstructing object. Move the movement tool out of the way and place the miniature on the battlefield accordingly.",
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
    related_keywords: [
      "miniature",
      "vehicles",
      "reverse",
      "pivot",
      "notch_based_movement",
      "panic_commander",
      "setup",
    ],
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
    keyword: "null_courage",
    name: "Null Courage Value",
    related_keywords: [
      "panic",
      "suppression",
      "activating_units",
      "rally",
      "recover",
      "courage",
    ],
    parents: ["n"],
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
];
