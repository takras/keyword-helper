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
    setCanShare(
      navigator && navigator.canShare && navigator.canShare(shareData)
    );
  }, [shareData]);

  const getShareIcon = () => {
    if (!canShare) {
      return null;
    }
    if (/(A|a)ndroid/i.test(navigator && navigator.userAgent)) {
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
    if (!canShare && navigator) {
      navigator.clipboard.writeText(location.href).then(() => setCopied(true));
      return;
    }
    navigator
      .share(shareData)
      .then(() => {})
      .catch(() => {});
  };

  function isInBrowser() {
    const mqStandAlone = "(display-mode: standalone)";

    if (
      typeof window !== "undefined" &&
      window.matchMedia(mqStandAlone).matches
    ) {
      return false;
    }
    return true;
  }

  const sharableImageLink = isInBrowser()
    ? `/images/keywords/${keyword.keyword}.png`
    : `/image/${keyword.keyword}`;

  return (
    <div className={styles.container} id="share">
      {!keyword.hideImageShare && (
        <a className={globalStyles.button} href={sharableImageLink}>
          Get sharable image
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
