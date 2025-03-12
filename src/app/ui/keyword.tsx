"use client";
import { getEnrichedKeyword } from "@/utils";
import { About } from "./about";
import { RenderContent } from "./render-content";
import { RelatedKeywords } from "./related-keyword";
import { Share } from "./share";
import { SkirmishGenerator } from "./skirmish-generator";
import { Scoreboard } from "./scoreboard";
import { ToggleDarkMode } from "./toggle-dark-mode";
import { TopMenu } from "./top-menu";
import { Resources } from "./resources";
import { FramedHeader } from "./framed-header";
import styles from "./keyword.module.css";

export const KeywordComponent = ({ keyword }: { keyword: string }) => {
  const selectedKeyword = getEnrichedKeyword(keyword);
  if (!selectedKeyword) {
    return;
  }

  return (
    <>
      <TopMenu />
      {selectedKeyword?.keyword === "skirmish" && <SkirmishGenerator />}
      {selectedKeyword?.keyword === "about" && <About />}
      {selectedKeyword?.keyword === "scoreboard" && <Scoreboard />}
      {selectedKeyword?.keyword === "resources" && <Resources />}

      {selectedKeyword &&
        selectedKeyword.keyword !== "scoreboard" &&
        selectedKeyword.keyword !== "resources" &&
        selectedKeyword.keyword !== "about" &&
        selectedKeyword.keyword !== "skirmish" && (
          <div className={styles.container} id="keyword">
            <FramedHeader keyword={selectedKeyword} />
            <RenderContent descriptions={selectedKeyword.descriptions} />
            <RelatedKeywords related={selectedKeyword.related_keywords} />
            <ToggleDarkMode />
          </div>
        )}
      <Share keyword={selectedKeyword} />
    </>
  );
};
