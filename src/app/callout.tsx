import { RenderContent } from "./render-content";
import { getEnrichedKeyword } from "@/utils";
import { Keyword } from "@/types";
import classNames from "classnames";
import styles from "./helper.module.css";

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
    <div className={styles.calloutContainer}>
      <h3 className={classNames(styles.header3, styles.calloutHeader)}>
        {enriched?.name}
      </h3>
      <RenderContent
        descriptions={enriched?.descriptions}
        selectKeyword={selectKeyword}
      />
    </div>
  );
};
