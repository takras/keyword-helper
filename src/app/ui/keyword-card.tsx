"use client";
import { Keyword } from "@/types";
import { getKey, interpolateString } from "@/utils";
import { useContext } from "react";
import { KeywordContext } from "../providers";
import globalStyles from "./helper.module.css";
import styles from "./keyword-card.module.css";
import classNames from "classnames";
import Link from "next/link";

export const KeywordCard = ({ keyword }: { keyword: Keyword }) => {
  const { selectKeyword, getLink } = useContext(KeywordContext);
  return (
    <Link
      className={classNames(globalStyles.button, styles.button)}
      href={getLink(keyword.keyword)}
      onClick={() => selectKeyword(keyword.keyword)}
      key={getKey(keyword.keyword)}
      prefetch={true}
      scroll={false}
    >
      {keyword.name}
      {keyword.range && (
        <span className={styles.buttonRange}>
          {interpolateString(
            `[{${keyword.range}}]`,
            getKey(keyword.range),
            styles.inlineIconContainer
          )}
        </span>
      )}
    </Link>
  );
};
