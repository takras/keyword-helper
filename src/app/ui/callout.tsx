import { RenderContent } from "../render-content";
import { getEnrichedKeyword } from "@/utils";
import { Keyword } from "@/types";
import classNames from "classnames";
import styles from "./callout.module.css";
import globalStyles from "../helper.module.css";

export const CalloutComponent = ({
  reference,
  selectKeyword,
}: {
  reference: string;
  selectKeyword: (keyword: Keyword) => void;
}) => {
  const enriched = getEnrichedKeyword(reference);
  if (!enriched?.descriptions) {
    return null;
  }
  return (
    <div className={styles.container}>
      <h3 className={classNames(globalStyles.header3, styles.header)}>
        {enriched?.name}
      </h3>
      <RenderContent
        descriptions={enriched?.descriptions}
        selectKeyword={selectKeyword}
      />
    </div>
  );
};
