import { Keyword } from "@/types";

export const KeywordsQ: Keyword[] = [
  {
    keyword: "quick_thinking",
    name: "Quick Thinking",
    parents: ["q"],
    related_keywords: ["dodge", "card_action"],
    descriptions: [
      {
        type: "text",
        content:
          "When a unit performs the Quick Thinking card action, it gains one aim and one dodge token.",
      },
    ],
  },
];
