import { IconList } from "./utils";

export type AvailableKeywords =
  | "abilities"
  | "abilities_provide_move"
  | "actions"
  | "activating_units"
  | "aim"
  | "apply_dodge_cover"
  | "armor"
  | "at_range"
  | "attack"
  | "backup"
  | "base"
  | "battlefield"
  | "cancel"
  | "card_action"
  | "command_cards"
  | "declare_defender"
  | "deploy"
  | "dice"
  | "cover"
  | "cohesion"
  | "courage"
  | "courage_null"
  | "compulsory_move"
  | "climb"
  | "clone_trooper"
  | "command_phase"
  | "difficult_terrain"
  | "displacement"
  | "dodge"
  | "exhaust"
  | "form_attack_pools"
  | "free_action"
  | "free_card_action"
  | "firing_arcs"
  | "ground_vehicles"
  | "impassable_terrain"
  | "impact"
  | "issue_order"
  | "keywords"
  | "leader"
  | "leaving_battlefield"
  | "lethal"
  | "line_of_sight"
  | "melee"
  | "melee_weapon"
  | "miniature"
  | "move"
  | "move_through_miniatures"
  | "non_standard_move"
  | "notch"
  | "objects"
  | "open_terrain"
  | "order_pool"
  | "panic"
  | "panic_commander"
  | "pass"
  | "pierce"
  | "pivot"
  | "promote"
  | "rally"
  | "range"
  | "ranged_weapon"
  | "reconfigure"
  | "recharge"
  | "recover"
  | "reverse"
  | "roll_attack_dice"
  | "silhouettes"
  | "standby"
  | "strafe"
  | "speeder"
  | "suffering_wounds"
  | "suppression"
  | "surge"
  | "terrain"
  | "tokens"
  | "troopers"
  | "unit"
  | "upgrade_card"
  | "vehicles"
  | "weak_points"
  | "weapons"
  | "withdraw"
  | "wounds";

export interface RulesDocument {
  version: string;
  validFrom: string;
  downloadUrl: string;
  documentUrl: string;
  discussionUrl: string;
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
  catalog: "alphabet" | "weapons" | "units" | "phases";
  name: string;
}

export interface Keyword {
  keyword: AvailableKeywords;
  name: string;
  parents: string[];
  activation?: string;
  summary?: string;
  related_keywords: AvailableKeywords[];
  descriptions: DescriptionType;
  tag?: string;
}

export interface Description {
  type: DescriptionType;
  content?: Description[] | Description | string | string[];
  align?: string;
  referenced_keyword?: AvailableKeywords;
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
  width?: string;
};

export type StructuredList = {
  type: "structured_list" | "structured_list_numbered";
  content: Array<string[] | string>;
};

export type Text = {
  type: "text";
  content: string;
};

type Reference = {
  type: "reference";
  referenced_keyword: AvailableKeywords;
};

type Header = {
  type: "header";
  content: string;
};

export type KeywordList = {
  type: "keyword_list";
  content: AvailableKeywords[];
};

export type RulesExample = {
  type: "example";
  content: DescriptionType;
  initiallyExpanded?: true;
};

export type IconListType = typeof IconList;
