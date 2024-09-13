/* eslint-disable @next/next/no-img-element */
"use client";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { interpolateStringForShare } from "@/utils";
import { Keyword } from "@/types";
import globalStyles from "./helper.module.css";
import styles from "./share.module.css";
import Link from "next/link";

export const Share = ({ keyword }: { keyword: Keyword }) => {
  const [copied, setCopied] = useState(false);
  const [shareData, setShareData] = useState({});
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    const text = keyword.summary
      ? `: ${interpolateStringForShare(keyword.summary)}`
      : null;
    setShareData({
      title: `Legion Helper`,
      text: `Here's what Legion Helper says about "${keyword.name}${text}"`,
      url: location.href,
    });
  }, [keyword]);

  useEffect(() => {
    setCanShare(navigator.canShare && navigator.canShare(shareData));
  }, [shareData]);

  const getShareImage = () => {
    if (!canShare) {
      return null;
    }
    if (/(A|a)ndroid/i.test(navigator.userAgent)) {
      return (
        <img
          className={styles.icon}
          src="/images/share-android.svg"
          alt="Share"
        />
      );
    }
    return (
      <img className={styles.icon} src="/images/share-ios.svg" alt="Share" />
    );
  };

  const sharePopup = () => {
    if (!canShare) {
      navigator.clipboard.writeText(location.href).then(() => setCopied(true));
      return;
    }
    navigator
      .share(shareData)
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div className={styles.container} id="share">
      <Link
        className={classNames(globalStyles.button, styles.button)}
        href={`/images/keywords/${keyword.keyword}.png`}
        target="_blank"
      >
        <span>{"Sharable Image"}</span>
      </Link>
      <button
        className={classNames(globalStyles.button, styles.button)}
        onClick={sharePopup}
      >
        <span>
          {!canShare ? "Copy sharable link to clipboard" : "Share keyword"}
        </span>

        {getShareImage()}
      </button>
      {copied ? "Link copied" : null}
    </div>
  );
};
