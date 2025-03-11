import { useSearchParams } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import styles from "./toggle-dark-mode.module.css";
import bb8styles from "./toggle-dark-mode-bb8.module.css";

export const ToggleDarkMode = () => {
  const { theme, setTheme } = useTheme();
  const params = useSearchParams();

  useEffect(() => {
    if (params.get("theme") === "dark") {
      setTheme("dark");
    }
  }, [params, setTheme]);

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  }

  return (
    <div id="darkModeToggle" className={styles.darkModeToggle}>
      <div className={styles.switch}>
        <label
          className={bb8styles.bb8Toggle}
          aria-label="Toggle between light and dark mode"
          htmlFor="toggle-mode"
        >
          <input
            className={bb8styles.bb8Toggle__checkbox}
            type="checkbox"
            checked={theme !== "light"}
            onChange={() => toggleTheme()}
            id="toggle-mode"
          />
          <div className={bb8styles.bb8Toggle__container}>
            <div className={bb8styles.bb8Toggle__scenery}>
              <div className={bb8styles.bb8Toggle__star}></div>
              <div className={bb8styles.bb8Toggle__star}></div>
              <div className={bb8styles.bb8Toggle__star}></div>
              <div className={bb8styles.bb8Toggle__star}></div>
              <div className={bb8styles.bb8Toggle__star}></div>
              <div className={bb8styles.bb8Toggle__star}></div>
              <div className={bb8styles.bb8Toggle__star}></div>
              <div className={bb8styles.tatto_1}></div>
              <div className={bb8styles.tatto_2}></div>
              <div className={bb8styles.gomrassen}></div>
              <div className={bb8styles.hermes}></div>
              <div className={bb8styles.chenini}></div>
              <div className={bb8styles.bb8Toggle__cloud}></div>
              <div className={bb8styles.bb8Toggle__cloud}></div>
              <div className={bb8styles.bb8Toggle__cloud}></div>
            </div>
            <div className={bb8styles.bb8}>
              <div className={bb8styles.bb8__head_container}>
                <div className={bb8styles.bb8__antenna}></div>
                <div className={bb8styles.bb8__antenna}></div>
                <div className={bb8styles.bb8__head}></div>
              </div>
              <div className={bb8styles.bb8__body}></div>
            </div>
            <div className={bb8styles.artificial__hidden}>
              <div className={bb8styles.bb8__shadow}></div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};
