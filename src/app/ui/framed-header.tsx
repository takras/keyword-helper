import { Keyword } from "@/types";
import globalStyles from "./helper.module.css";
import styles from "./framed-header.module.css";
import classNames from "classnames";

interface Props {
  keyword: Keyword;
  overrideText?: string;
}

export const FramedHeader = ({ keyword, overrideText, ...rest }: Props) => {
  return (
    <div className={styles.headerFrame}>
      <div className={styles.headerContainer}>
        <h2 className={classNames(globalStyles.header2, styles.header)}>
          {overrideText ?? keyword.name} {keyword?.tag && `(${keyword.tag})`}
        </h2>
        <div className={styles.subHeader}>
          {overrideText ?? keyword.name.replace(/[^\w\s]/g, "")}{" "}
        </div>
      </div>
    </div>
  );
};
