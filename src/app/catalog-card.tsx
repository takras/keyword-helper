import { CatalogEntry, Keyword } from "@/types";
import { useState } from "react";
import { rules } from "@/data/rules";
import { KeywordCard } from "./keyword-card";
import { getKey, sortKeyword } from "@/utils";
import classNames from "classnames";
import styles from "./helper.module.css";

export const CatalogCard = ({
  catalog,
  selectKeyword,
}: {
  catalog: CatalogEntry;
  selectKeyword: (keyword: Keyword) => void;
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

  if (
    rules.keywords.filter((keyword) => keyword.parents.includes(catalog.id))
      .length === 0
  ) {
    return null;
  }

  const isExpanded = (index: string) => {
    return expandedCatalogs.includes(index);
  };
  return (
    <>
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
    </>
  );
};
