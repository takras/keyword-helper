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
    version: "1.1.0",
    entries: [
      {
        type: "change",
        description:
          "Updated a lot in the routing logic, in the hopes of making loading faster for certain users.",
      },
    ],
  },
  {
    version: "1.0.10",
    entries: [
      {
        type: "add",
        description: "Add clarification text. For now it's just for Disengage.",
      },
      {
        type: "change",
        description: "Update attack quick-guide more keywords.",
      },
    ],
  },
  {
    version: "1.0.9",
    entries: [
      {
        type: "add",
        description: "Add keywords to At, Within and Beyond ranges.",
      },
      {
        type: "change",
        description: "Update attack quick-guide with numbers.",
      },
    ],
  },
  {
    version: "1.0.8",
    entries: [
      {
        type: "add",
        description:
          "Added a Quick Reference for Attacks, including Keywords and when in the Attack Timing they apply.",
      },
      {
        type: "add",
        description:
          "Added keywords reference examples for 'Game Effects' step of the Setup.",
      },
      {
        type: "add",
        description: "Added link to rules PDF for direct download.",
      },
      {
        type: "change",
        description: "More fixes for Safari browser and Dark Mode.",
      },
      {
        type: "change",
        description: "Updated Silhouette images for Dark Mode.",
      },
    ],
  },
  {
    version: "1.0.7",
    entries: [
      {
        type: "add",
        description: "Dark-mode. Switch between light and dark mode.",
      },
      {
        type: "add",
        description:
          "Added keyword reference from Vehicle to Notched Based Movement",
      },
      {
        type: "change",
        description:
          "Corrected missing {operative} icon in 'changes in 2024' section.",
      },
    ],
  },
  {
    version: "1.0.6",
    entries: [
      {
        type: "add",
        description: "Add share-button for mobile users.",
      },
      {
        type: "change",
        description: "Updated font settings for Mac OS Safari.",
      },
    ],
  },
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
        description:
          "Add keyword to url path for easy sharing of specific keyword rules.",
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
