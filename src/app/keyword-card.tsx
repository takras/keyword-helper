import { Keyword } from "@/types";
import { getKey, interpolateString } from "@/utils";
import styles from "./helper.module.css";

export const KeywordCard = ({
  keyword,
  selectKeyword,
}: {
  keyword: Keyword;
  selectKeyword: (keyword: Keyword) => void;
}) => {
  return (
    <button
      className={styles.keywordButton}
      onClick={() => selectKeyword(keyword)}
      key={getKey(keyword.keyword)}
    >
      {keyword.name}
      {keyword.range && (
        <span className={styles.buttonRange}>
          {interpolateString(
            `[{${keyword.range}}]`,
            getKey(keyword.range),
            styles.inlineIconContainer
          )}
        </span>
      )}
    </button>
  );
};
