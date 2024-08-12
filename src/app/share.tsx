import styles from "./helper.module.css";

export const Share = () => {
  if (!navigator.canShare) {
    return null;
  }
  const getShareIcon = () => {
    if (/(A|a)ndroid/i.test(navigator.userAgent)) {
      return "/images/share-android.svg";
    }
    return "/images/share-ios.svg";
  };

  const sharePopup = () => {
    navigator.share({ url: location.href });
  };
  return (
    <div className={styles.shareContainer}>
      <button className={styles.button} onClick={sharePopup}>
        <span>Share</span>
        <img className={styles.shareIcon} src={getShareIcon()} alt="Share" />
      </button>
    </div>
  );
};
