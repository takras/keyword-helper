import { CatalogEntry, Keyword } from "@/types";
import { useState } from "react";
import { rules } from "@/data/rules";
import { KeywordCard } from "./keyword-card";
import { getKey, sortKeyword, Variables } from "@/utils";
import classNames from "classnames";
import styles from "./helper.module.css";

export const CatalogCard = ({
  catalog,
  selectKeyword,
  activeCatalog,
}: {
  catalog: CatalogEntry;
  selectKeyword: (keyword: Keyword) => void;
  activeCatalog: CatalogEntry["catalog"];
}) => {
  const [expandedCatalogs, setExpandedCatalogs] = useState<string[]>([]);
  const toggleExpandCatalog = (index: string) => {
    if (isExpanded(index)) {
      const i = expandedCatalogs.findIndex((catalog) => catalog === index);
      setExpandedCatalogs((current) => current.filter((c) => c !== index));
      return;
    }
    setExpandedCatalogs((current) => [...current, index]);
  };
  const filterByActiveCatalog = (keyword: Keyword) =>
    activeCatalog === "alphabet"
      ? true
      : keyword.parents.includes(activeCatalog);

  if (
    rules.keywords
      .filter(filterByActiveCatalog)
      .filter((keyword) => keyword.parents.includes(catalog.id)).length === 0
  ) {
    return null;
  }

  const isExpanded = (index: string) => {
    return expandedCatalogs.includes(index);
  };
  return (
    <div className={styles.catalogContainer}>
      <button
        className={classNames(
          styles.catalogButton,
          isExpanded(catalog.id) ? styles.active : null
        )}
        onClick={() => toggleExpandCatalog(catalog.id)}
      >
        {catalog.name}
      </button>
      {isExpanded(catalog.id) && (
        <div className={styles.keywordsContainer}>
          {rules.keywords
            .filter(filterByActiveCatalog)
            .filter((keyword) => keyword.parents.includes(catalog.id))
            .toSorted(sortKeyword)
            .map((keyword) => (
              <KeywordCard
                key={getKey(keyword.keyword)}
                keyword={keyword}
                selectKeyword={selectKeyword}
              />
            ))}
        </div>
      )}
      <div className={styles.hiddenLink}>
        {rules.keywords
          .filter(filterByActiveCatalog)
          .filter((keyword) => keyword.parents.includes(catalog.id))
          .toSorted(sortKeyword)
          .map((keyword) => (
            <a
              key={`${keyword.keyword}_hidden`}
              href={`${Variables.url}/#!${keyword.keyword}`}
              className={styles.hiddenLink}
            >
              {keyword.name}
            </a>
          ))}
      </div>
    </div>
  );
};
