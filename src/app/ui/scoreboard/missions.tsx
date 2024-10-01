import classNames from "classnames";
import globalStyles from "../helper.module.css";
import styles from "../scoreboard.module.css";
import { Card } from "./cards";
import { BattleCard, BlueToken, RedToken } from "./images";
import { Dispatch, SetStateAction } from "react";

export type SecondaryPoints = {
  red: number[];
  blue: number[];
};

interface Mission {
  secondaryObjective: Card;
  secondaryPoints: SecondaryPoints;
  scoreSecondary: (color: "blue" | "red", index: number) => void;
  round: number;
}
