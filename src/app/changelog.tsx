import { log } from "@/data/changelog";
import { getKey } from "@/utils";
import classNames from "classnames";
import styles from "./changelog.module.css";

export const Changelog = () => {
  return (
    <div className={styles.changelog}>
      <h2>Changelog for Legion Helper</h2>
      {log.map((version) => (
        <div key={version.version}>
          <h3>{version.version}</h3>
          <ul>
            {version.entries.map((entry) => (
              <li
                key={getKey(entry.type)}
                className={classNames(
                  entry.type === "add" ? styles.add : null,
                  entry.type === "change" ? styles.change : null,
                  entry.type === "remove" ? styles.remove : null
                )}
              >
                {entry.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
