import HTMLReactParser from "html-react-parser/lib/index";
import styles from "../src/app/ui/helper.module.css";
import { rules } from "./data/rules";
import { Keyword } from "./types";

export const Variables = {
  title: "Legion Helper",
  url: "https://legion.takras.net",
  description:
    "Keyword helper for use with the miniatures game Star Wars: Legion",
};

const getIconPath = (fileName: string, title?: string) => {
  return `<img className="${styles.inlineIcon}" alt="${fileName}" src="/images/${fileName}" title="${title}">`;
};
export const interpolateString = (
  line: string,
  key: string,
  className?: string
) => {
  const interpolated = line
    .replace(/{([^{}:]*)}/g, (_a, iconName: keyof typeof IconList) => {
      if (IconList.hasOwnProperty(iconName)) {
        return getIconPath(IconList[iconName], iconName.replace("_", " "));
      }
      return iconName;
    })
    .replace(/(\{keyword:).+?\}/g, (a: string) => {
      const word = a.replace("{keyword:", "").split("}")[0];
      return `<span className="${styles.inlineKeyword}">${word}</span>`;
    });

  return HTMLReactParser(
    `<span key="${key}" ${
      className ? `className="${className}"` : ""
    }>${interpolated}</span>`
  );
};

export const sortKeyword = (keywordA: Keyword, keywordB: Keyword) => {
  const a = keywordA.name.toUpperCase();
  const b = keywordB.name.toUpperCase();
  return a < b ? -1 : a > b ? 1 : 0;
};

export function interpolateStringForShare(line: string) {
  return line.replace(/{([^{}:]*)}/g, (_, group) => {
    return `[${(group as string).replace("_", " ").toLocaleUpperCase()}]`;
  });
}

export function getEnrichedKeyword(keyword: string) {
  return rules.keywords.find((key) => key.keyword === keyword);
}

let counter = 0;
export const getKey = (key: string) => {
  counter += 1;
  return `${key}_${counter}`;
};

export const IconList = {
  action: "black/action.png",
  action_free: "black/action-free.png",
  arrow_right: "black/arrow-right.png",
  exhaust_action: "black/exhaust-action.png",
  exhaust_free: "black/exhaust-free.png",
  hit: "black/hit.png",
  hit_surge: "black/hit-surge.png",
  hit_critical: "black/hit-critical.png",
  block: "black/block.png",
  block_surge: "black/block-surge.png",
  faction_black_sun: "black/faction_black_sun.png",
  faction_maul_loyalists: "black/faction_maul_loyalists.png",
  faction_pyke_syndicate: "black/faction_pyke_syndicate.png",
  faction_raiders: "black/faction_raiders.png",
  faction_rogue: "black/faction_rogue.png",
  faction_ewoks: "black/faction_ewoks.png",
  range_melee: "black/range-melee.png",
  range_half: "black/range-half.png",
  range_infinite: "black/range-infinite.png",
  range_1: "black/range-1.png",
  range_2: "black/range-2.png",
  range_3: "black/range-3.png",
  range_4: "black/range-4.png",
  range_5: "black/range-5.png",
  rank_commander: "black/rank-commander.png",
  rank_operative: "black/rank-operative.png",
  rank_corps: "black/rank-corps.png",
  rank_specialist: "black/rank-specialist.png",
  rank_support: "black/rank-support.png",
  rank_heavy: "black/rank-heavy.png",
  self_destruct: "black/self-destruct.png",
  surge_token: "black/surge-token.png",
  upgrade_heavy: "black/upgrade-heavy.png",
  upgrade_personnel: "black/upgrade-personnel.png",
  upgrade_command: "black/upgrade-command.png",
  upgrade_force: "black/upgrade-force.png",
  upgrade_hardpoint: "black/upgrade-hardpoint.png",
  upgrade_gear: "black/upgrade-gear.png",
  upgrade_grenades: "black/upgrade-grenade.png",
  upgrade_programming: "black/upgrade-programming.png",
  upgrade_comms: "black/upgrade-comms.png",
  upgrade_pilot: "black/upgrade-pilot.png",
  upgrade_training: "black/upgrade-training.png",
  upgrade_generator: "black/upgrade-generator.png",
  upgrade_armament: "black/upgrade-armament.png",
  upgrade_crew: "black/upgrade-crew.png",
  upgrade_ordnance: "black/upgrade-ordnance.png",
  upgrade_squad_leader: "black/upgrade-squad-leader.png",
  overrun: "black/overrun.png",
};
