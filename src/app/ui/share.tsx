/* eslint-disable @next/next/no-img-element */
"use client";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { interpolateStringForShare } from "@/utils";
import { Keyword } from "@/types";
import globalStyles from "./helper.module.css";
import styles from "./share.module.css";

export const Share = ({ keyword }: { keyword: Keyword }) => {
  const [copied, setCopied] = useState(false);
  const [shareData, setShareData] = useState({});
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    const text = keyword.summary
      ? `: ${interpolateStringForShare(keyword.summary)}`
      : "";
    setShareData({
      title: `Legion Helper`,
      text: `${keyword.name}${text}`,
      url: location.href,
    });
  }, [keyword]);

  useEffect(() => {
    setCanShare(navigator.canShare && navigator.canShare(shareData));
  }, [shareData]);

  const getShareIcon = () => {
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
      {!keyword.hideImageShare && (
        <a
          className={globalStyles.button}
          href={`/images/keywords/${keyword}.png`}
          download={true}
        >
          Download sharable image
        </a>
      )}
      <button
        className={classNames(globalStyles.button, styles.button)}
        onClick={sharePopup}
      >
        <span>
          {!canShare ? "Copy sharable link to clipboard" : "Share keyword"}
        </span>

        {getShareIcon()}
      </button>
      {copied ? "Link copied" : null}
    </div>
  );
};
