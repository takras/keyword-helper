"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";
import { createContext, ReactNode, Suspense, useMemo, useReducer } from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

interface Context {
  previousKeyword: string;
  keywordHistory: string[];
  close: () => void;
  goBack: () => void;
  backButtonKeyword: string;
  selectKeyword: (keyword: string) => void;
  getLink: (keyword: string) => string;
}

export const KeywordContext = createContext<Context>({
  previousKeyword: "",
  keywordHistory: [""],
  close: () => {},
  goBack: () => {},
  backButtonKeyword: "",
  selectKeyword: () => {},
  getLink: () => "",
});

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
  const [context, dispatch] = useReducer(keywordReducer, initialKeywords);
  const previousKeyword =
    context.keywordHistory[context.keywordHistory.length - 2];

  const value: Context = useMemo<Context>(() => {
    return {
      previousKeyword,
      keywordHistory: context.keywordHistory,
      getLink: (keyword: string) => {
        if (keyword === "search_result_blank") {
          return "#";
        }
        return `/${keyword}`;
      },
      close: () => {
        dispatch("action_close");
      },
      goBack: () => {
        dispatch("action_back");
      },
      backButtonKeyword: previousKeyword ?? "",
      selectKeyword: (keyword: string) => {
        sendGTMEvent({
          value: keyword,
        });
        dispatch(keyword);
      },
    };
  }, [context, previousKeyword]);

  return (
    <Suspense>
      <ThemeProvider>
        <KeywordContext.Provider value={value}>
          <ProgressBar shallowRouting={true} options={{ showSpinner: false }} />
          {children}
        </KeywordContext.Provider>
      </ThemeProvider>
    </Suspense>
  );
}

const initialKeywords = {
  keywordHistory: [],
};

function keywordReducer(state: { keywordHistory: string[] }, action: string) {
  switch (action) {
    case "action_back":
      return {
        ...state,
        keywordHistory: [...state.keywordHistory.slice(0, -1)],
      };
    case "action_close":
      return initialKeywords;
    default:
      return {
        ...state,
        keywordHistory: [...state.keywordHistory, action],
      };
  }
}
