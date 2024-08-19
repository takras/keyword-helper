import React from "react";
import { getEnrichedKeyword, getKey, Variables } from "@/utils";
import { Keyword } from "@/types";
import styles from "./helper.module.css";

export const RelatedKeywords = ({
  related,
  modal,
  selectKeyword,
}: {
  related: string[];
  modal: HTMLDialogElement;
  selectKeyword: (keyword: Keyword) => void;
}) => {
  return (
    <div className={styles.relatedContainer}>
      <h4 className={styles.relatedHeader}>Related keywords:</h4>
      <div className={styles.relatedButtons}>
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
              modal.close();
              return null;
            }
            return (
              <React.Fragment key={getKey(keyword)}>
                <button
                  className={styles.relatedButton}
                  onClick={() => selectKeyword(enriched)}
                >
                  {enriched?.name}
                </button>
                <a
                  href={`${Variables.url}/#!${enriched.keyword}`}
                  className={styles.hiddenLink}
                >
                  {enriched.name}
                </a>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};
