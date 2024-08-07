import { DescriptionType, Keyword } from "@/types";
import { useState } from "react";
import { getKey } from "@/utils";
import { RenderContent } from "./render-content";
import classNames from "classnames";
import styles from "./helper.module.css";

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
    <div className={styles.exampleModule}>
      <div className={styles.exampleContainer} key={getKey("header")}>
        <button
          onClick={() => toggleActive()}
          className={classNames(
            styles.exampleHeader,
            isActive ? styles.exampleHeaderActive : styles.exampleHeaderInactive
          )}
        >
          <RenderContent
            descriptions={descriptions.filter(
              (description) => description.type === "header"
            )}
            selectKeyword={selectKeyword}
          />
        </button>
        <div className={isActive ? styles.helperActive : styles.helperInactive}>
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
