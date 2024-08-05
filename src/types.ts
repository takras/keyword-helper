import { IconList } from "./utils";

export type AvailableKeywords =
  | "about"
  | "abilities"
  | "abilities_provide_move"
  | "actions"
  | "activating_units"
  | "aid"
  | "ai_action"
  | "aim"
  | "allies_of_convenience"
  | "apply_dodge_cover"
  | "armor"
  | "armor_x"
  | "army_building"
  | "arsenal_x"
  | "associate"
  | "ataru_mastery"
  | "at_range"
  | "attack"
  | "attack_run"
  | "backup"
  | "barrage"
  | "barricades"
  | "base"
  | "battlefield"
  | "blast"
  | "block"
  | "bolster_x"
  | "bounty"
  | "calculate_odds"
  | "cancel"
  | "card_action"
  | "commander"
  | "command_cards"
  | "cache"
  | "charge"
  | "cover"
  | "cohesion"
  | "courage"
  | "courage_null"
  | "compulsory_move"
  | "climb"
  | "climb_vehicle"
  | "clone_trooper"
  | "command_phase"
  | "compel"
  | "complete_the_mission"
  | "contingencies_x"
  | "coordinate"
  | "counterpart"
  | "cover_x"
  | "covert_ops"
  | "creature_trooper"
  | "critical_x"
  | "cunning"
  | "danger_sense"
  | "dauntless"
  | "death_from_above"
  | "declare_defender"
  | "deflect"
  | "defend_x"
  | "deploy"
  | "demoralize_x"
  | "detachment"
  | "dice"
  | "direct"
  | "disciplined_x"
  | "disengage"
  | "distract"
  | "divine_influence"
  | "djem_so_mastery"
  | "duelist"
  | "damage_token"
  | "difficult_terrain"
  | "displacement"
  | "dodge"
  | "droid_trooper"
  | "effects"
  | "emplacement_trooper"
  | "enemy_effects"
  | "end_phase"
  | "engaged"
  | "enrage_x"
  | "entourage"
  | "equip"
  | "exemplar"
  | "exhaust"
  | "expert_climber"
  | "field_commander"
  | "fire_support"
  | "flawed"
  | "flexible_response_x"
  | "form_attack_pools"
  | "free_action"
  | "free_card_action"
  | "firing_arcs"
  | "full_pivot"
  | "generator_x"
  | "ground_vehicles"
  | "guardian"
  | "guidance"
  | "gunslinger"
  | "heavy_weapon_team"
  | "high_velocity"
  | "hover_x"
  | "hunted"
  | "im_part_of_the_squad_too"
  | "immune"
  | "immune_blast"
  | "immune_enemy_effects"
  | "immune_melee"
  | "immune_melee_pierce"
  | "immune_pierce"
  | "immune_range_1_weapons"
  | "impassable_terrain"
  | "impact"
  | "impervious"
  | "incognito"
  | "inconspicious"
  | "independent"
  | "indomitable"
  | "infiltrate"
  | "inspire_x"
  | "interrogate"
  | "issue_order"
  | "jarkai_mastery"
  | "jedi_hunter"
  | "jump_x"
  | "juyo_mastery"
  | "keywords"
  | "latent_power"
  | "leader"
  | "leaving_battlefield"
  | "lethal"
  | "line_of_sight"
  | "loadout"
  | "low_profile"
  | "mercenary"
  | "melee"
  | "melee_weapon"
  | "melee_pierce"
  | "miniature"
  | "move"
  | "move_through_miniatures"
  | "non_standard_move"
  | "notch"
  | "notched_bases"
  | "objects"
  | "objective"
  | "objective_cards"
  | "open_terrain"
  | "order_pool"
  | "panic"
  | "panic_commander"
  | "pass"
  | "pierce"
  | "pivot"
  | "poison"
  | "prepared_positions"
  | "promote"
  | "rally"
  | "range"
  | "range_1_weapons"
  | "ranged_weapon"
  | "reconfigure"
  | "recharge"
  | "recover"
  | "repulsor_vehicle"
  | "resiliency"
  | "reverse"
  | "roll_attack_dice"
  | "setup"
  | "shield"
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
  | "victory_points"
  | "weak_points"
  | "weapons"
  | "woookie_trooper"
  | "withdraw"
  | "wounds";

type Range =
  | "range_melee"
  | "range_1"
  | "range_2"
  | "range_3"
  | "range_4"
  | "range_5"
  | "range_infinite"
  | "range_half";

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
  range?: Range;
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
  | Callout
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

type Callout = {
  type: "callout";
  callout_keyword: AvailableKeywords;
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
