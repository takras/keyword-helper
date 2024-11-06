import { Keyword } from "@/types";

export const KeywordsK: Keyword[] = [
  {
    keyword: "keywords",
    name: "Keywords",
    activation: "",
    parents: ["k", "concepts"],
    related_keywords: ["unit_cards", "pierce_x", "troopers", "upgrade_card"],
    descriptions: [
      {
        type: "text",
        content:
          "Bolded words are special rules called keywords. There are four types of keywords: command, unit, upgrade, and weapon.",
      },
      {
        type: "text",
        content:
          "Their full rules text is found in the appropriate keyword card found on this site.",
      },
      {
        type: "example",
        initiallyExpanded: true,
        content: [
          {
            type: "header",
            content: "X Keywords",
          },
          {
            type: "text",
            content:
              "Some keywords have a numerical value, presented as 'X' in the Keyword Glossary. These keywords stack with themselves and can be any type of keyword. If a unit gains multiple instances of a unit keyword with a numerical value, add those values together. If a unit adds multiple instances of a weapon keyword with a numerical value to an attack pool, add those values together",
          },
          {
            type: "text",
            content:
              "For example, Stormtroopers have the {keyword:Precise 1} keyword on their Unit Card. If they equip the Targeting Scopes gear upgrade, which gives them {keyword: Precise 1}, they will have {keyword: Prceise 2}.",
          },
        ],
      },
    ],
  },
];
