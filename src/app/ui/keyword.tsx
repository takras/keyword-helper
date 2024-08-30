"use client";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { getEnrichedKeyword } from "@/utils";
import { useContext } from "react";
import { About } from "./about";
import { Changelog } from "../changelog";
import { KeywordContext } from "../providers";
import { RenderContent } from "./render-content";
import { RelatedKeywords } from "./related-keyword";
import globalStyles from "./helper.module.css";
import styles from "./keyword.module.css";
import { Share } from "./share";

export const KeywordComponent = ({ keyword }: { keyword: string }) => {
  const { close, selectKeyword, backButtonKeyword, getLink, previousKeyword } =
    useContext(KeywordContext);

  const selectedKeyword = getEnrichedKeyword(keyword);
  const enrichedBackButton = getEnrichedKeyword(backButtonKeyword);

  if (!selectedKeyword) {
    return null;
  }

  return (
    <>
      <aside className={styles.topMenu}>
        <div className={styles.topMenuButtonRow}>
          <Link
            scroll={false}
            href={previousKeyword ? getLink(backButtonKeyword) : "/"}
            className={classNames(
              globalStyles.button,
              styles.topMenuBackButton
            )}
            prefetch={true}
          >
            <Image
              src="/images/arrow-left.png"
              alt="Arrow pointing left"
              width={20}
              height={20}
            />
            {enrichedBackButton?.name ?? "Back to Legion Helper"}
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

      {selectedKeyword?.keyword === "about" && <About />}
      {selectedKeyword?.keyword === "changelog" && <Changelog />}

      {selectedKeyword &&
        selectedKeyword.keyword !== "about" &&
        selectedKeyword.keyword !== "changelog" && (
          <div className={styles.container}>
            <h2 className={globalStyles.header2}>
              {selectedKeyword.name}{" "}
              {selectedKeyword.tag && `(${selectedKeyword.tag})`}
            </h2>
            <RenderContent
              descriptions={selectedKeyword.descriptions}
              selectKeyword={() => selectKeyword(selectedKeyword.keyword)}
            />
            <RelatedKeywords related={selectedKeyword.related_keywords} />
            <Share keyword={selectedKeyword} />
          </div>
        )}
    </>
  );
};
