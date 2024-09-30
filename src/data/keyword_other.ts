import { Keyword } from "@/types";

export const KeywordsOther: Keyword[] = [
  {
    keyword: "about",
    parents: [],
    name: "About Legion Helper",
    hideFromsearch: true,
    summary:
      "Legion Helper is intended to make it quick to find keywords and concepts from the Star Wars: Legion rulebook and reference, for quick and easy access during play.",
    related_keywords: [],
    descriptions: [],
  },
  {
    keyword: "skirmish",
    name: "Skirmish Builder - Quickly Generate skirmish mission.",
    activation: "",
    hideFromsearch: true,
    parents: [],
    related_keywords: [],
    descriptions: [],
  },
  {
    keyword: "scoreboard",
    name: "Scoreboard App for Star Wars: Legion",
    activation: "",
    hideFromsearch: true,
    parents: [],
    related_keywords: [],
    descriptions: [],
  },
  {
    keyword: "deprecated",
    name: "Concepts and Keywords removed from Legion rules.",
    activation: "",
    parents: [],
    related_keywords: [],
    descriptions: [
      {
        type: "text",
        content:
          "When I came into the Legion hobby I had a lot of confusion regarding many of the rules. One example was the concept of {keyword:Clambering} which I couldn't find online, it was just on some upgrade cards and my physical rule book. Turned out – that was a concept that had been removed from the rules altogether.",
      },
      {
        type: "text",
        content:
          "So to help others to avoid this, coming in to Legion now, after the 2024 rules, I'd make this list of concepts and keywords that are no longer part of the game.",
      },
      { type: "header", content: "Clambering" },
      {
        type: "text",
        content: "Removed from the game. No damage when climbing.",
      },
      { type: "reference", referenced_keyword: "climb", showOnlySummary: true },
      { type: "header", content: "Displacement" },
      {
        type: "text",
        content:
          "Removed from the game. Vehicles can not stop movement if it would be placed on top of other miniatures.",
      },
      {
        type: "reference",
        referenced_keyword: "notch_based_movement",
        showOnlySummary: true,
      },
      {
        type: "header",
        content: "Clone Troopers: Phase I and Clone Troopers: Phase II",
      },
      {
        type: "text",
        content:
          "Removed from the game. They are now merged into a single unit type called {keyword:Clone Trooper Infantry}. You can still use your existing Phase I and Phase II miniatures as Infantry units.",
      },
      {
        type: "header",
        content: "Removed Cards",
      },
      {
        type: "text",
        content:
          "Many cards were remove from the game in the July 2024 update, such as the command card {keyword:Hero of the Clone Wars} which was replaced by new 3-pip card: {keyword:General Skywalker}.",
      },
      {
        type: "clarification",
        content:
          "For a full list of updated and removed cards from the 2024 changes, please click the source for the official PDF.",
        url: "https://cdn.svc.asmodee.net/production-amgcom/uploads/2024/07/SWQ_Errata-Reference-2.6.0-1.pdf",
      },
      {
        type: "header",
        content: "Vehicle Disabled and Weapon Disrupted tokens.",
      },
      {
        type: "text",
        content:
          "Removed from the game. Now only one type of damage matters: the Damaged token.",
      },
      {
        type: "reference",
        referenced_keyword: "resiliency",
        showOnlySummary: true,
      },
    ],
  },
  {
    keyword: "coming_from_pre_2024",
    name: "What's new in 2024?",
    related_keywords: [],
    parents: ["changelog"],
    summary:
      "There are many changes being made from before the 2.6.0 version of the rules released in july 2024. The best way is to read the new rulebook, but that's not for everyone.",
    descriptions: [
      {
        type: "text",
        content:
          "There are many changes being made from before the 2.6.0 version of the rules released in july 2024. The best way is to read the new rulebook, but that's not for everyone.",
      },
      {
        type: "text",
        content:
          "Here you will find a brief summary of most of the changes, and more importantly what has been removed. Contents are due to change as I receive feedback or add... content.",
      },

      { type: "header", content: "New Battle Cards" },
      {
        type: "text",
        content:
          "These are the biggest change to the game. All existing Battle Cards, Condition cards and Deployment maps are removed in favor of these new card types. This means official scenarios like Downed AT-ST and Imperial Bunker are no longer viable under the new rules.",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "building_a_mission",
      },
      { type: "header", content: "Objectives" },
      {
        type: "text",
        content:
          "New setup phase is also added as a result of this. New types of objective tokens. New way to win the game. Pass tokens. Advantage cards. Entirely new Setup phase.",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "objective",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "objective_cards",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "winning",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "pass",
      },
      {
        type: "text",
        content:
          "Vital Assets, Priority Supplies and other with objectives are now removed from the game. Replacing them are Point of Interest (POI) tokens of 2 inches in diameter.",
      },
      {
        type: "clarification",
        content:
          "You will need to print a copy of the new Battle Cards, including Primary Objective, Secondary Objective, Maps and Advantages, as well as the new POI tokens and Mission Board. Click source for PDF.",
        url: "https://cdn.svc.asmodee.net/production-amgcom/uploads/2024/07/SWQ_BattleCards-2.pdf",
      },

      { type: "header", content: "New Unit cards" },
      {
        type: "text",
        content:
          "Many of the existing units have undergone an update and have had their artwork and information replaced with new content. Unfortunately there is no option to purchase these in 2024, but they are freely available for printing.",
      },
      {
        type: "clarification",
        content:
          "You will need to print new cards for many of your units. Click the source for the official PDF.",
        url: "https://cdn.svc.asmodee.net/production-amgcom/uploads/2024/07/SWQ_BattleCards-2.pdf",
      },
      {
        type: "clarification",
        content:
          "Un-official documents are also available and worth a look, such as this collection on the /r/SWlegion subreddit.",
        url: "https://www.reddit.com/r/SWlegion/comments/1ecexfi/2024_refresh_files_compendium/",
      },

      { type: "header", content: "Game Round and Points" },
      {
        type: "text",
        content:
          "The game now lasts up to 5 rounds. Round 1 includes deployment from off the battlefield and first activation of units.",
      },
      {
        type: "text",
        content:
          "For Army Building purposes, the point limit has changed from 800 to 1000.",
      },
      {
        type: "text",
        content:
          "If one player achieves 12 points before end of round 5, the game ends and that player wins.",
      },

      { type: "header", content: "Vehicles" },
      {
        type: "text",
        content:
          "Vehicles no longer cause displacement. Displacement is a keyword that has been removed from the game. Drive carefully.",
      },
      {
        type: "text",
        content:
          "Vehicles all gain free pivot-like ability at the first step of their movement.",
      },
      {
        type: "text",
        content:
          "Vehicles only has one kind of damage. Weapons Damage and Movement Damage have been removed.",
      },
      {
        type: "text",
        content: "Vehicles don't benefit from cover from terrain.",
      },
      {
        type: "text",
        content:
          "Vehicles and other Notched base miniature now also use silhouette tool to indicate Line of Sight.",
      },
      {
        type: "text",
        content:
          "Vehicles and other Notched base miniature no longer blocks movement of other miniatures.",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "vehicles",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "move_through_miniatures",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "notch_based_movement",
      },

      { type: "header", content: "Cover" },
      {
        type: "text",
        content:
          "The cover system has been overhauled greatly. There is no longer automatic removal of {hit} from cover.",
      },
      {
        type: "text",
        content:
          "To get cover benefitted by terrain, the miniature has to be at {range_half} of the terrain the attack is traced through. If the miniature is farther away, no cover is gained.",
      },
      {
        type: "text",
        content:
          "Instead, if light or heavy cover, you roll white defense dice for each {hit} and cancel hits based on cover type. Then you proceed to dodge and defense.",
      },
      {
        type: "text",
        content:
          "Also, to get cover from suppression tokens, the unit now needs tokens matching or exceeding their courage value.",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "apply_dodge_cover",
      },
      {
        type: "header",
        content: "Keyword changes: Armor, Scout, Transport, Backup, Guardian",
      },
      {
        type: "text",
        content:
          "<strong>Armor:</strong> Most units no longer av Armor without a number behind it. Armor X is the new standard.",
      },
      {
        type: "text",
        content:
          "<strong>Scout:</strong> Since there is a new deployment phase, Scout allows units to get a free move into the battlefield when they activate.",
      },
      {
        type: "text",
        content:
          "<strong>Transport:</strong> Vehicles can only transport units into the battlefield, then the transported unit disengages after the very first movement action. Transport may not be used again by that vehicle the rest of the game.",
      },
      {
        type: "text",
        content:
          "<strong>Backup:</strong> If a {rank_commander} or {rank_operative} is in range to a {rank_corps} unit, they will cancel 2 {hit} almost like the old Cover system did.",
      },
      {
        type: "text",
        content:
          "<strong>Guardian:</strong> As above, a unit with Guardian cannot be helped with Backup.",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "armor",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "scout_x",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "transport",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "backup",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "guardian_x",
      },
      {
        type: "header",
        content: "Keyword changes: Standby, Withdraw, Standard Move, Cohesion",
      },
      {
        type: "text",
        content:
          "<strong>Standby:</strong> When a unit uses their Standby token, if they attack, they must attack the unit that triggered the Standby.",
      },
      {
        type: "text",
        content:
          "<strong>Withdraw:</strong> If a unit is engaged in melee, it can make a speed reduced by 1 to move away. No loss of action. But they cannot attack this activation.",
      },
      {
        type: "text",
        content:
          "<strong>Standard Move:</strong> When placing the leader unit, you don't have to put it in the movement notch, but anywhere as long as its base is touching the movement tool.",
      },
      {
        type: "text",
        content:
          "<strong>Cohesion:</strong> Cohesion is now a half-range {range_half} tool, almost identical to a straight Speed 1 tool. For Squads, it's a full {range_1} cohesion.",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "standby",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "withdraw",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "move",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "cohesion",
      },
      {
        type: "header",
        content:
          "Keyword changes: Clone Trooper, Creature Trooper, Emplacement Trooper, Fire Support",
      },
      {
        type: "text",
        content:
          "<strong>Clone Trooper:</strong> Range to spend other units green tokens has increased to {range_2}.",
      },
      {
        type: "text",
        content:
          "<strong>Creature Trooper:</strong> Can attack and withdraw in the same activation.",
      },
      {
        type: "text",
        content:
          "<strong>Emplacement Trooper:</strong> Can pivot even while engaged.",
      },
      {
        type: "text",
        content:
          "<strong>Fire Support:</strong> Can no longer contribute to attacks. Instead, units with Fire Supports get a Standby token when issued order.",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "troopers",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "fire_support",
      },
      {
        type: "header",
        content: "Keyword changes: Ion X, AI: Actions",
      },
      {
        type: "text",
        content:
          "<strong>Ion X:</strong> No longer cancels an action automatically. Now the affected unit rolls 1 white dice for each token and loses an action if at least one die is blank.",
      },
      {
        type: "text",
        content:
          "<strong>AI: Action:</strong> As long as the unit with the AI keyword is at {range_3} of a {rank_commander}, the AI does not trigger.",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "ion_x",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "ai_action",
      },
      {
        type: "header",
        content: "Upgrade cards, Squads and Grenades",
      },
      {
        type: "text",
        content:
          "<strong>Upgrade Cards</strong> are now as big as Unit Cards. The art has been removed but the cards work much as before. A new icon has been added for Squad Leader {upgrade_squad_leader}.",
      },
      {
        type: "text",
        content:
          "<strong>Squads</strong> is a new upgrade, allowing to double the size of certain units. Example, a Fleet Trooper can add 5 miniatures to the existing 4 + 1 heavy upgrade. Cohesion is then also increased to {range_1}.",
      },
      {
        type: "text",
        content:
          "<strong>Grenades</strong> is now only usable by 1 of the miniatures in the unit or squad.",
      },
      {
        type: "reference",
        showOnlySummary: true,
        referenced_keyword: "upgrade_card",
      },
    ],
  },
];
