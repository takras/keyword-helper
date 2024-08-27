/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Keyword } from "@/types";
import globalStyles from "../helper.module.css";
import styles from "./share.module.css";
import classNames from "classnames";

export const Share = ({ keyword }: { keyword: Keyword }) => {
  const [copied, setCopied] = useState(false);
  const shareData = {
    title: `Legion Helper`,
    text: `Here's what Legion Helper says about "${keyword.name}"`,
    url: location.href,
  };

  const getShareImage = () => {
    if (!navigator.canShare || !navigator.canShare(shareData)) {
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
    if (!navigator.canShare || !navigator.canShare(shareData)) {
      navigator.clipboard.writeText(location.href).then(() => setCopied(true));
      return;
    }
    navigator
      .share(shareData)
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div className={styles.container}>
      <button
        className={classNames(globalStyles.button, styles.button)}
        onClick={sharePopup}
      >
        <span>
          {!navigator.canShare
            ? "Copy sharable link to clipboard"
            : "Share keyword"}
        </span>
        {getShareImage()}
      </button>
      {copied ? "Link copied" : null}
    </div>
  );
};
