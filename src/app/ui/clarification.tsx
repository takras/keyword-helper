"use client";

import { interpolateString } from "@/utils";
import globalStyles from "./helper.module.css";
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
      {interpolateString(content, "clarify", globalStyles.paragraph)}
      <a href={url} target="_blank" className={styles.source}>
        [Source]
      </a>
    </div>
  );
};
