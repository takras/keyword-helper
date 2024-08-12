type EntryType = "add" | "remove" | "change";

type Entry = {
  type: EntryType;
  description: string;
};

type Log = {
  version: string;
  entries: Entry[];
};

export const log: Log[] = [
  {
    version: "1.0.5",
    entries: [
      {
        type: "add",
        description:
          "New keywords: Building Command Hand, Command Cards, Impassable Terrain, Keywords, Melee Pierce, Range, Secret Information, Tokens, Wounds.",
      },
      {
        type: "add",
        description: "Add key to url path for sharing specific keyword rules.",
      },
    ],
  },
  {
    version: "1.0.4",
    entries: [
      {
        type: "add",
        description:
          "New keywords: Building a Mission, Declare Terrain, Determine Blue Player, Empty Decks",
      },
      {
        type: "change",
        description: "Keyword enriched with new steps: Setup.",
      },
    ],
  },
  {
    version: "1.0.3",
    entries: [
      {
        type: "add",
        description:
          "New keywords: Bases, Battlefield, Cancel, Timing, Card Effects, Game Effects, Difficult Terrain, Dice, Issue Orders, Miniature, Setup, Advantage Cards, Battle Cards, Map Cards, Objective Cards, Secondary Objective Cards ",
      },
      {
        type: "add",
        description:
          "Added buttons to filter keyword list by type. This does not include Search.",
      },
    ],
  },
  {
    version: "1.0.2",
    entries: [
      {
        type: "add",
        description:
          "Many new keywords. Agile. Abilities. Army Building. Claiming Objective Token. Climb. Clone Trooper. Courage. Contesting Objectives. Exhaust. Factions. Panic. Ranks. Unit Cards. Unique. Upgrade Card.",
      },
      {
        type: "add",
        description: "This changelog.",
      },
      {
        type: "change",
        description: "Updated the About section.",
      },
      {
        type: "change",
        description:
          "Optimized for low-resolution screens, as this is the most used screen size according to analytics.",
      },
      {
        type: "change",
        description:
          "A lot of code changes, hopefully affect positively on performance.",
      },
      {
        type: "change",
        description: "Fixed key name on Distract.",
      },
    ],
  },
  {
    version: "1.0.1",
    entries: [
      {
        type: "add",
        description: "More keywords.",
      },
      {
        type: "add",
        description: "You can now add website as desktop or app.",
      },
      {
        type: "change",
        description: "Some UI color changes.",
      },
    ],
  },
];
