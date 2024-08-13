import { getEnrichedKeyword, getKey, interpolateString } from "@/utils";
import styles from "./helper.module.css";

export const KeywordList = ({ keywords }: { keywords: string[] }) => {
  const content = keywords.map((keyword) => {
    const enriched = getEnrichedKeyword(keyword);
    if (!enriched?.summary) {
      return null;
    }
    return (
      <li key={getKey(keyword)}>
        <strong className={styles.keywordListName}>{enriched.name}: </strong>
        {interpolateString(
          enriched.summary,
          getKey(enriched.summary),
          styles.keywordItem
        )}
      </li>
    );
  });
  return content ? <ul key={getKey(keywords[0])}>{content}</ul> : null;
};
