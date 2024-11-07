import { useSearchParams } from "next/navigation";
import styles from "./toggle-dark-mode.module.css";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export const ToggleDarkMode = () => {
  const { theme, setTheme } = useTheme();
  const params = useSearchParams();

  useEffect(() => {
    if (params.get("theme") === "dark") {
      setTheme("dark");
    }
  }, []);

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      return;
    }
    setTheme("light");
  }

  return (
    <div className={styles.switch}>
      <label className={styles.label} htmlFor="toggle-mode">
        <input
          checked={theme !== "light"}
          className={styles.input}
          id="toggle-mode"
          type="checkbox"
          onChange={() => toggleTheme()}
        />
        {""}
        <span
          className={styles.slider}
          title="Change between dark mode and light mode"
        ></span>
      </label>
    </div>
  );
};
