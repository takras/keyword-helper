import { useState } from "react";
import Link from "next/link";
import styles from "./tools-menu.module.css";
import classNames from "classnames";

type AdminTools = {
  randomizeBoard: () => void;
};

export const ToolsMenu = ({ randomizeBoard }: AdminTools) => {
  const [showPanel, setShowPanel] = useState(false);

  function handleFileChange(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {};
    reader.onerror = () => {
      console.log("file error", reader.error);
    };
  }

  if (!showPanel) {
    return (
      <div className={styles.adminTools}>
        <button type="button" onClick={() => setShowPanel(true)}>
          Tools & Help
        </button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.adminTools, styles.open)}>
      <button type="button" onClick={() => setShowPanel(false)}>
        Close tools
      </button>
      <button type="button" onClick={randomizeBoard}>
        Randomize
      </button>

      <Link href="/generate">Make a JSON file</Link>
      <input type="file" onChange={handleFileChange}></input>
      <a
        href="/event-bingo/example.json"
        download={true}
        type="application/json"
      >
        Download sample file
      </a>
    </div>
  );
};
