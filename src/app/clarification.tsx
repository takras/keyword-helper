import { RenderContent } from "./render-content";
import { getEnrichedKeyword, interpolateString } from "@/utils";
import { Keyword } from "@/types";
import classNames from "classnames";
import styles from "./clarification.module.css";

export const Clarification = ({
  content,
  url,
}: {
  content: string;
  url: string;
}) => {
  return (
    <div className={styles.container}>
      <strong className={styles.header}>Clarification: </strong>
      {interpolateString(content, "clarify")}
      <a href={url} target="_blank" className={styles.source}>
        [Source]
      </a>
    </div>
  );
};
