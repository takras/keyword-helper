import { Keyword } from "@/types";

export const KeywordsE: Keyword[] = [
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
    keyword: "engaged",
    name: "Engaged",
    parents: ["e", "concepts"],
    related_keywords: ["withdraw", "melee", "move", "standby"],
    descriptions: [
      {
        type: "text",
        content:
          "When two or more trooper units are in melee with one another, those units are engaged. Only trooper units can be engaged. An engaged unit cannot perform moves, form attack pools containing ranged weapons, and cannot be targeted by attack pools containing ranged weapons.",
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
    keyword: "exhaust",
    name: "Exhaust and Expend",
    activation: "",
    parents: ["e", "concepts"],
    related_keywords: ["card_action", "upgrade_card", "actions", "recover"],
    descriptions: [
      {
        type: "text",
        content:
          "Most Upgrade Cards provide a static game effect, but some cards must be exhausted or expended after being used. A card that must be exhausted or expended after use has the exhaust or expend icon on the card. Cards that exhaust or expend start the game readied, and only readied cards may be exhausted or expended.",
      },
      {
        type: "illustration",
        content: "examples/exhaust.png",
        width: "120",
        align: "center",
        altText:
          "Two icons showing an arrow turning right, and the other with an X.",
      },
      {
        type: "text",
        content:
          "When a card is exhausted, turn the card 90° to the right so that it is sideways. Exhausted cards may not be used for an effect that would exhaust them until they are readied.",
      },
      {
        type: "text",
        content:
          "When a card is expended, turn the card 180° so that it is upside down. Once a card is expended, it cannot be used for the rest of the game. Expended cards cannot be unexpended or readied.",
      },
      {
        type: "text",
        content:
          "After a miniature adds a weapon on an exhaust or expend Upgrade Card to an attack pool, exhaust or expend the Upgrade Card. If the weapon is an {upgrade_armament} upgrade that exhausts or expends, then any number of miniatures in the unit may add the weapon to the attack pool.",
      },
      {
        type: "text",
        content:
          "The {exhaust_action} and {exhaust_free} icons indicate that an Upgrade Card is exhausted after that action or free action is resolved.",
      },
      {
        type: "text",
        content:
          "When a unit recovers, it readies all of its exhausted cards. When a card is readied, turn it 90° to the left so it is in its original orientation. The card is no longer exhausted.",
      },
      {
        type: "example",
        content: [
          {
            type: "header",
            content: "Example: Exhaust and Expend",
          },
          {
            type: "illustration",
            content: "examples/exhaust-1.png",
            align: "center",
            altText:
              "A Fleet Trooper unit card and an upgrade card being turned sideways.",
          },
          {
            type: "text",
            content:
              "The Fleet Trooper unit adds the MPL-57 Barrage Trooper’s weapon to an attack pool, exhausting the card once the dice are added. It cannot be added to another attack pool until it is readied.",
          },
          {
            type: "illustration",
            content: "examples/expend.png",
            align: "center",
            altText:
              "Luke Skywalker unit card and an upgrade card being rotated upside down.",
          },
          {
            type: "text",
            content:
              "Luke Skywalker expends Burst of Speed to increase his speed. The card is expended and cannot be used for the rest of the game.",
          },
        ],
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
];
