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
import { useRouter } from "next/navigation";
import { SkirmishObjectiveCard } from "./skirmish-objective-card";

export const KeywordComponent = ({ keyword }: { keyword: string }) => {
  const { close, backButtonKeyword, getLink, previousKeyword } =
    useContext(KeywordContext);
  const selectedKeyword = getEnrichedKeyword(keyword);
  const enrichedBackButton = getEnrichedKeyword(backButtonKeyword);
  const router = useRouter();

  if (!selectedKeyword) {
    return null;
  }

  return (
    <>
      <aside className={styles.topMenu}>
        <div className={styles.topMenuButtonRow}>
          <Link
            scroll={false}
            href={previousKeyword ? getLink(backButtonKeyword) : "#"}
            className={classNames(
              globalStyles.button,
              styles.topMenuBackButton
            )}
            prefetch={true}
            onClick={() => router.back()}
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

      {selectedKeyword?.keyword === "skirmish" && <SkirmishObjectiveCard />}
      {selectedKeyword?.keyword === "about" && <About />}
      {selectedKeyword?.keyword === "changelog" && <Changelog />}

      {selectedKeyword &&
        selectedKeyword.keyword !== "about" &&
        selectedKeyword.keyword !== "skirmish" &&
        selectedKeyword.keyword !== "changelog" && (
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
