"use client";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { getEnrichedKeyword } from "@/utils";
import { useContext } from "react";
import { About } from "./about";
import { Changelog } from "./changelog";
import { KeywordContext } from "../providers";
import { RenderContent } from "./render-content";
import { RelatedKeywords } from "./related-keyword";
import { Share } from "./share";
import { SkirmishObjectiveCard } from "./skirmish-objective-card";
import globalStyles from "./helper.module.css";
import styles from "./keyword.module.css";

export const KeywordComponent = ({ keyword }: { keyword: string }) => {
  const { close, getLink, previousKeyword, goBack } =
    useContext(KeywordContext);
  const selectedKeyword = getEnrichedKeyword(keyword);
  const enrichedPrevious = getEnrichedKeyword(previousKeyword);

  if (!selectedKeyword) {
    return;
  }

  return (
    <>
      <div>
        <aside className={styles.topMenu}>
          <div className={styles.topMenuButtonRow}>
            <Link
              href={previousKeyword ? getLink(previousKeyword) : "/"}
              className={classNames(
                globalStyles.button,
                styles.topMenuBackButton
              )}
              prefetch={true}
              onClick={goBack}
            >
              <Image
                src="/images/arrow-left.png"
                alt="Arrow pointing left"
                width={20}
                height={20}
              />
              {enrichedPrevious?.name ?? "Back to Legion Helper"}
            </Link>
            <Link
              href={"/"}
              className={classNames(
                globalStyles.button,
                styles.topMenuCloseButton
              )}
              prefetch={true}
              onClick={() => {
                close();
              }}
            >
              <Image
                src="/images/cross-x.png"
                alt="A black cross"
                width={20}
                height={20}
              ></Image>
            </Link>
          </div>
        </aside>
      </div>

      {selectedKeyword?.keyword === "skirmish" && <SkirmishObjectiveCard />}
      {selectedKeyword?.keyword === "about" && <About />}

      {selectedKeyword &&
        selectedKeyword.keyword !== "about" &&
        selectedKeyword.keyword !== "skirmish" && (
          <div className={styles.container}>
            <h2 className={globalStyles.header2}>
              {selectedKeyword.name}{" "}
              {selectedKeyword.tag && `(${selectedKeyword.tag})`}
            </h2>
            <RenderContent descriptions={selectedKeyword.descriptions} />
            <RelatedKeywords related={selectedKeyword.related_keywords} />
          </div>
        )}
      <Share keyword={selectedKeyword} />
    </>
  );
};
