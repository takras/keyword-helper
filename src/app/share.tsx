import { useState } from "react";
import { Keyword } from "@/types";
import styles from "./helper.module.css";
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
          className={styles.shareIcon}
          src="/images/share-android.svg"
          alt="Share"
        />
      );
    }
    return (
      <img
        className={styles.shareIcon}
        src="/images/share-ios.svg"
        alt="Share"
      />
    );
  };

  const sharePopup = () => {
    if (!navigator.canShare || !navigator.canShare(shareData)) {
      navigator.clipboard.writeText(location.href).then(() => setCopied(true));
    }
    navigator
      .share(shareData)
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div className={styles.shareContainer}>
      <button
        className={classNames(styles.button, styles.shareButton)}
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
