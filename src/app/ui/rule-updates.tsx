"use client";
import { AvailableKeywords } from "@/types";
import { useState } from "react";
import { KeywordCard } from "./keyword-card";
import { getEnrichedKeyword, getKey } from "@/utils";
import classNames from "classnames";
import styles from "./catalog-card.module.css";

export const RuleUpdates = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const updatedRulesKeywords: AvailableKeywords[] = [
    "backup",
    "charge",
    "compel",
    "deflect",
    "keywords",
    "makashi_mastery",
    "notch_based_movement",
    "relentless",
    "restore",
    "secret_mission",
    "self_destruct_x",
    "steady",
    "transport",
    "terrain_movement",
    "upgrade_card",
  ];

  return (
    <div className={styles.container}>
      <button
        className={classNames(styles.button, isExpanded ? styles.active : null)}
        onClick={() => setIsExpanded((current) => !current)}
      >
        Updated Rules from 2.6.0 to 2.6.1
      </button>
      {isExpanded && (
        <div className={styles.keywordsContainer}>
          {updatedRulesKeywords.map((keyword) => {
            const enrichedKeyword = getEnrichedKeyword(keyword);
            if (!enrichedKeyword) {
              return null;
            }
            return (
              <KeywordCard key={getKey(keyword)} keyword={enrichedKeyword} />
            );
          })}
        </div>
      )}
    </div>
  );
};
