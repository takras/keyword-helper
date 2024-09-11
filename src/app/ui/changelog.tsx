import { getKey } from "@/utils";
import { ChangelogVersion as ChangeLogVersionType } from "@/types";
import classNames from "classnames";
import styles from "./changelog.module.css";

export const Changelog = () => {
  return <h2>Changelog for Legion Helper</h2>;
};

export const ChangeLogVersion = (log: ChangeLogVersionType) => {
  return (
    <div>
      <h3>{log.version}</h3>
      <ul>
        {log.content.map((entry) => (
          <li
            key={getKey(entry.type)}
            className={classNames(
              entry.update === "add" ? styles.add : null,
              entry.update === "change" ? styles.change : null,
              entry.update === "remove" ? styles.remove : null
            )}
          >
            {entry.content}
          </li>
        ))}
      </ul>
    </div>
  );
};
