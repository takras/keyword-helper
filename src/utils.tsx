import HTMLReactParser from "html-react-parser/lib/index";
import styles from "../src/app/helper.module.css";

const getIconPath = (fileName: string) => {
  return `<img className="${styles.inlineIcon}" src="/images/${fileName}">`;
};
export const interpolateString = (line: string) => {
  const interpolated = line
    .replace(/{([^{}:]*)}/g, (_a, b: keyof typeof IconList) => {
      if (IconList.hasOwnProperty(b)) {
        return getIconPath(IconList[b]);
      }
      return b;
    })
    .replace(/(\{keyword:).+\}/g, (a: string) => {
      const word = a.split(":")[1].split("}")[0];
      return `<span className=${styles.inlineKeyword}>${word}</span>`;
    });

  return HTMLReactParser(`<span key="${line}">${interpolated}</span>`);
};

export const IconList = {
  action: "action.png",
  hit: "hit.png",
  hit_surge: "hit-surge.png",
  hit_critial: "hit-critical.png",
  block: "block.png",
  block_surge: "block-surge.png",
  rank_commander: "rank-commander.png",
  rank_operative: "rank-operative.png",
  rank_corps: "rank-corps.png",
  rank_specialist: "rank-specialist.png",
  rank_support: "rank-support.png",
  rank_heavy: "rank-heavy.png",
  upgrade_heavy: "upgrade-heavy.png",
  upgrade_personnel: "upgrade-personnel.png",
  upgrade_command: "upgrade_command.png",
  upgrade_force: "upgrade_force.png",
  upgrade_hardpoint: "upgrade_hardpoint.png",
  upgrade_gear: "upgrade_gear.png",
  upgrade_grenades: "upgrade_grenades.png",
  upgrade_programming: "upgrade_programming.png",
  upgrade_comms: "upgrade_comms.png",
  upgrade_pilot: "upgrade_pilot.png",
  upgrade_training: "upgrade_training.png",
  upgrade_generator: "upgrade_generator.png",
  upgrade_armament: "upgrade_armament.png",
  upgrade_crew: "upgrade_crew.png",
  upgrade_ordnance: "upgrade_ordnance.png",
  upgrade_squadleader: "upgrade_squadleader.png",
};
