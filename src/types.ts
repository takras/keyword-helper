import { IconList } from "./utils";

export interface RulesDocument {
  version: string;
  validFrom: Date | string;
  downloadUrl: string;
  documentUrl: string;
  changelog: any[];
  index: CatalogEntry[];
  keywords: Keyword[];
}

export interface Icons {
  critical: string;
  hit: string;
  hit_surge: string;
  defense: string;
  defense_surge: string;
  rank_commander: string;
  rank_operative: string;
  rank_corps: string;
  rank_special: string;
  rank_support: string;
  rank_heavy: string;
  upgrade_heavy: string;
  upgrade_personnel: string;
  upgrade_force: string;
  upgrade_command: string;
  upgrade_hardpoint: string;
  upgrade_gear: string;
  upgrade_grenades: string;
  upgrade_programming: string;
  upgrade_comms: string;
  upgrade_pilot: string;
  upgrade_training: string;
  upgrade_generator: string;
  upgrade_armament: string;
  upgrade_crew: string;
  upgrade_ordnance: string;
  upgrade_squadleader: string;
}

export interface CatalogEntry {
  id: string;
  catalog: "alphabet" | "weapons" | "units";
  name: string;
}

export interface Keyword {
  keyword: string;
  name: string;
  parents: string[];
  activation?: string;
  summary?: string;
  related_keywords: string[];
  descriptions: DescriptionType;
  tag?: string;
}

export interface Description {
  type: DescriptionType;
  content?: Description[] | Description | string | string[];
  align?: string;
  referenced_keyword?: string;
}

export type DescriptionType = Array<
  | Illustration
  | StructuredList
  | Text
  | KeywordList
  | RulesExample
  | Reference
  | Header
>;

export type Illustration = {
  type: "illustration";
  content: string;
  align: "left" | "center" | "right";
  altText: string;
};

export type StructuredList = {
  type: "structured_list";
  content: Array<string[] | string>;
};

export type Text = {
  type: "text";
  content: string;
};

type Reference = {
  type: "reference";
  keyword: string;
};

type Header = {
  type: "header";
  content: string;
};

export type KeywordList = {
  type: "keyword_list";
  content: string[];
};

export type RulesExample = {
  type: "example";
  content: DescriptionType;
};

export type IconListType = typeof IconList;
