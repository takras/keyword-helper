import { Keyword } from "@/types";
import { getKey, interpolateString } from "@/utils";
import globalStyles from "../helper.module.css";
import styles from "./keyword-card.module.css";
import classNames from "classnames";

export const KeywordCard = ({
  keyword,
  selectKeyword,
}: {
  keyword: Keyword;
  selectKeyword: (keyword: Keyword) => void;
}) => {
  return (
    <button
      className={classNames(globalStyles.button, styles.button)}
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
