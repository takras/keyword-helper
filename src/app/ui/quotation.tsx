"use client";
import { RenderContent } from "./render-content";
import { getEnrichedKeyword, getKey, interpolateString } from "@/utils";
import globalStyles from "./helper.module.css";
import classNames from "classnames";
import styles from "./quotation.module.css";

export const Quotation = ({ content }: { content: string }) => {
  return (
    <div className={styles.container}>
      <figure className={styles.figure}>
        <blockquote className={styles.blockquote}>
          {interpolateString(content, getKey(content))}
        </blockquote>
        <figcaption className={styles.caption}>&mdash; Takras</figcaption>
      </figure>
    </div>
  );
};
