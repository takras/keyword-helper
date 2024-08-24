import { IconList } from "./utils";

export const AVAILABLE_KEYWORDS = [
  "search_result_blank",
  "about",
  "changelog",
  "coming_from_pre_2024",
  "abilities",
  "abilities_provide_move",
  "actions",
  "activating_units",
  "activation_phase",
  "advantage_cards",
  "agile_x",
  "aid",
  "ai_action",
  "aim",
  "allies_of_convenience",
  "apply_dodge_cover",
  "area_terrain",
  "area_weapon",
  "arm_x",
  "armor",
  "armor_x",
  "army_building",
  "arsenal_x",
  "associate",
  "ataru_mastery",
  "at_range",
  "attack",
  "attack_quick_reference",
  "attack_run",
  "backup",
  "bane_tokens",
  "barrage",
  "barricades",
  "base",
  "battle_cards",
  "battlefield",
  "beam_x",
  "beyond_range",
  "blast",
  "block",
  "bolster_x",
  "bounty",
  "building_a_battle_deck",
  "building_a_command_hand",
  "building_a_mission",
  "calculate_odds",
  "cancel",
  "card_action",
  "card_effects",
  "command_cards",
  "cache",
  "charge",
  "charge_token",
  "cover",
  "cover_x",
  "cohesion",
  "courage",
  "compulsory_move",
  "claiming_objective_tokens",
  "climb",
  "climb_vehicle",
  "clone_trooper",
  "command_phase",
  "compel",
  "complete_the_mission",
  "contingencies_x",
  "contesting_objectives",
  "coordinate",
  "counterpart",
  "covert_ops",
  "creature_trooper",
  "critical_x",
  "cumbersome",
  "cunning",
  "cycle",
  "danger_sense",
  "dauntless",
  "death_from_above",
  "declare_terrain",
  "declare_defender",
  "deflect",
  "defend_x",
  "deploy",
  "determine_blue_player",
  "detonate_x",
  "demoralize_x",
  "detachment",
  "dice",
  "direct",
  "disciplined_x",
  "disengage",
  "distract",
  "divine_influence",
  "divulge",
  "djem_so_mastery",
  "duelist",
  "difficult_terrain",
  "dodge",
  "droid_trooper",
  "emplacement_trooper",
  "empty_decks",
  "end_phase",
  "engaged",
  "enrage_x",
  "entourage",
  "equip",
  "exemplar",
  "exhaust",
  "expert_climber",
  "faction",
  "field_commander",
  "fire_support",
  "fitting_on_terrain",
  "fixed",
  "flawed",
  "flexible_response_x",
  "form_attack_pools",
  "free_card_action",
  "full_pivot",
  "game_effects",
  "game_overview",
  "generator_x",
  "graffiti_tokens",
  "ground_vehicles",
  "guardian_x",
  "guidance",
  "gunslinger",
  "golden_rule_terrain",
  "heavy_weapon_team",
  "high_velocity",
  "hover_x",
  "hunted",
  "im_part_of_the_squad_too",
  "immune",
  "immune_blast",
  "immune_deflect",
  "immune_enemy_effects",
  "immune_melee",
  "immune_melee_pierce",
  "immune_pierce",
  "immune_range_1_weapons",
  "immobilize_x",
  "impassable_terrain",
  "impact_x",
  "impervious",
  "ion_x",
  "incognito",
  "inconspicious",
  "independent_x",
  "indomitable",
  "infiltrate",
  "inspire_x",
  "interrogate",
  "issue_order",
  "jarkai_mastery",
  "jedi_hunter",
  "jump_x",
  "juyo_mastery",
  "keywords",
  "latent_power",
  "leader",
  "leaving_battlefield",
  "lethal_x",
  "line_of_sight",
  "loadout",
  "long_shot",
  "low_profile",
  "makashi_mastery",
  "map_cards",
  "marksman",
  "master_of_the_force",
  "master_storyteller",
  "measurement",
  "measuring_range",
  "mercenary",
  "melee",
  "melee_pierce",
  "miniature",
  "move",
  "move_into_melee",
  "move_through_miniatures",
  "nimble",
  "non_standard_move",
  "noncombatant",
  "notch_based_movement",
  "notched_bases",
  "null_courage",
  "objects",
  "objective",
  "objective_cards",
  "obstacle_terrain",
  "observe_x",
  "open_terrain",
  "outmaneuver",
  "overlapping_objects",
  "override",
  "overrun_x",
  "panic",
  "panic_commander",
  "pass",
  "permanent",
  "pierce_x",
  "pivot",
  "plodding",
  "poison_x",
  "precise_x",
  "prepared_positions",
  "primitive",
  "programmed",
  "promote",
  "pulling_the_strings",
  "quick_thinking",
  "rally",
  "ram_x",
  "ranks",
  "range",
  "ready_x",
  "reconfigure",
  "recharge_x",
  "recover",
  "regenerate",
  "reinforcements",
  "reliable_x",
  "relentless",
  "repair_x",
  "reposition",
  "repulsor_vehicle",
  "resiliency",
  "restore",
  "retinue",
  "reverse",
  "roll_attack_dice",
  "ruthless",
  "scale",
  "scatter",
  "scatter_terrain",
  "scout_x",
  "scouting_party_x",
  "secret_information",
  "secondary_objective_cards",
  "self_destruct_x",
  "self_preservation",
  "secret_mission",
  "sentinel",
  "setup",
  "sharpshooter_x",
  "shielded_x",
  "sidearm",
  "silhouettes",
  "small",
  "smoke_x",
  "smoke_tokens",
  "standby",
  "strafe",
  "special_issue",
  "speeder_x",
  "spotter_x",
  "spray",
  "spur",
  "soresu_mastery",
  "stationary",
  "steady",
  "strategize_x",
  "suffering_wounds",
  "suppression",
  "suppressive",
  "tactical_x",
  "take_cover_x",
  "target_x",
  "teamwork",
  "tempted",
  "terrain",
  "terrain_height",
  "terrain_cover",
  "terrain_movement",
  "timing",
  "tokens",
  "tow_cable",
  "transport",
  "treat_x",
  "troopers",
  "uncanny_luck_x",
  "unconcerned",
  "undeployed_units",
  "unique",
  "unit",
  "unit_cards",
  "unhindered",
  "unstoppable",
  "upgrade_card",
  "vehicles",
  "versatile",
  "weak_point_x",
  "weapons",
  "weighed_down",
  "we_are_not_regs",
  "wheel_mode",
  "wookiee_trooper",
  "winning",
  "within_range",
  "withdraw",
  "wounds",
] as const;

export type AvailableKeywords = (typeof AVAILABLE_KEYWORDS)[number];

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
  helperVersion: string;
  validFrom: string;
  downloadUrl: string;
  documentUrl: string;
  discussionUrl: string;
  changelog: CatalogEntry[];
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
  catalog:
    | "alphabet"
    | "weapons"
    | "units"
    | "phases"
    | "concepts"
    | "changelog";
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
  | Clarification
>;

type Illustration = {
  type: "illustration";
  content: string;
  align: "left" | "center" | "right";
  altText: string;
  width?: string;
};

type StructuredList = {
  type: "structured_list" | "structured_list_numbered";
  content: Array<string[] | string>;
};

type Text = {
  type: "text";
  content: string;
};

type Clarification = {
  type: "clarification";
  content: string;
  url: string;
};

type Reference = {
  type: "reference";
  referenced_keyword: AvailableKeywords;
  showOnlySummary?: boolean;
};

type Callout = {
  type: "callout";
  callout_keyword: AvailableKeywords;
};

type Header = {
  type: "header";
  content: string;
  inline?: boolean;
};

type KeywordList = {
  type: "keyword_list";
  content: AvailableKeywords[];
  showOnlyKeyname?: boolean;
};

type RulesExample = {
  type: "example";
  content: DescriptionType;
  initiallyExpanded?: true;
};

export type IconListType = typeof IconList;
