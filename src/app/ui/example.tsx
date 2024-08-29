"use client";
import { DescriptionType, Keyword } from "@/types";
import { useState } from "react";
import { getKey } from "@/utils";
import { RenderContent } from "./render-content";
import classNames from "classnames";
import styles from "./example.module.css";

export const ExampleContent = ({
  descriptions,
  isInitiallyExpanded,
  selectKeyword,
}: {
  descriptions: DescriptionType;
  isInitiallyExpanded?: boolean;
  selectKeyword: (keyword: Keyword) => void;
}) => {
  const [isActive, setIsActive] = useState(isInitiallyExpanded === true);
  const toggleActive = () => setIsActive((current) => !current);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} key={getKey("header")}>
        <button
          onClick={() => toggleActive()}
          className={classNames(
            styles.header,
            isActive ? styles.headerActive : styles.headerInactive
          )}
        >
          <RenderContent
            descriptions={descriptions.filter(
              (description) => description.type === "header"
            )}
            overrideWithClassName={styles.headerOverride}
            selectKeyword={selectKeyword}
          />
        </button>
        <div className={isActive ? styles.active : styles.inactive}>
          <RenderContent
            descriptions={descriptions.filter(
              (description) => description.type !== "header"
            )}
            selectKeyword={selectKeyword}
          />
        </div>
      </div>
    </div>
  );
};
