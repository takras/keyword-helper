import { getEnrichedKeyword, getKey, interpolateString } from "@/utils";
import styles from "./keyword-list.module.css";

export const KeywordList = ({
  keywords,
  showOnlyKeyname,
}: {
  keywords: string[];
  showOnlyKeyname?: boolean;
}) => {
  const content = keywords.map((keyword) => {
    const enriched = getEnrichedKeyword(keyword);
    if (!enriched) {
      return null;
    }
    return (
      <li key={getKey(keyword)}>
        <strong className={styles.listName}>
          {enriched.name}
          {showOnlyKeyname ? null : ": "}
        </strong>
        {enriched.summary &&
          !showOnlyKeyname &&
          interpolateString(
            enriched.summary,
            getKey(enriched.summary),
            styles.item
          )}
      </li>
    );
  });
  return content ? (
    <ul className={styles.list} key={getKey(keywords[0])}>
      {content}
    </ul>
  ) : null;
};
