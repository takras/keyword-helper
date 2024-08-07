import { getEnrichedKeyword, getKey } from "@/utils";
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
              <button
                className={styles.relatedButton}
                key={getKey(keyword)}
                onClick={() => selectKeyword(enriched)}
              >
                {enriched?.name}
              </button>
            );
          })}
      </div>
    </div>
  );
};
