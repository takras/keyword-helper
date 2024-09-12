"use client";
import React, { useContext } from "react";
import { getEnrichedKeyword, getKey } from "@/utils";
import { KeywordContext } from "../providers";
import Link from "next/link";
import classNames from "classnames";
import globalStyles from "./helper.module.css";
import styles from "./related-keyword.module.css";

export const RelatedKeywords = ({ related }: { related: string[] }) => {
  const { selectKeyword, getLink } = useContext(KeywordContext);
  return (
    <div className={styles.container} id="related">
      <h4 className={styles.header}>Related keywords:</h4>
      <div className={styles.buttonsContainer}>
        {related
          .toSorted((a, b) =>
            a.toUpperCase() < b.toUpperCase()
              ? -1
              : a.toUpperCase() > b.toUpperCase()
              ? 1
              : 0
          )
          .map((keyword) => {
            const enriched = getEnrichedKeyword(keyword);
            if (!enriched) {
              return null;
            }
            return (
              <React.Fragment key={getKey(keyword)}>
                <Link
                  href={getLink(keyword)}
                  className={classNames(
                    globalStyles.button,
                    styles.relatedButton
                  )}
                  onClick={() => {
                    selectKeyword(enriched.keyword);
                  }}
                  prefetch={true}
                >
                  {enriched?.name}
                </Link>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};
