import React from "react";
import { getEnrichedKeyword, getKey, Variables } from "@/utils";
import { Keyword } from "@/types";
import globalStyles from "../helper.module.css";
import styles from "./related-keyword.module.css";
import classNames from "classnames";

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
    <div className={styles.container}>
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
              modal.close();
              return null;
            }
            return (
              <React.Fragment key={getKey(keyword)}>
                <button
                  className={classNames(
                    globalStyles.button,
                    styles.relatedButton
                  )}
                  onClick={() => selectKeyword(enriched)}
                >
                  {enriched?.name}
                </button>
                <a
                  href={`${Variables.url}/#!${enriched.keyword}`}
                  className={globalStyles.hiddenLink}
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
