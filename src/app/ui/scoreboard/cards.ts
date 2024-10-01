export const INTERCEPT_SIGNALS = "PRIMAY_INTERCEPT_SIGNALS";
export const BUNKER_ASSAULT = "PRIMARY_BUNKER_ASSAULT";
export const CLOSE_THE_POCKET = "PRIMARY_CLOSE_THE_POCKET";
export const BREAKTHROUGH = "PRIMARY_BREAKTHROUGH";
export const RECOVER_THE_RESEARCH = "PRIMARY_RECOVER_THE_RESEARCH";
export const SHIFTING_PRIORITIES = "PRIMARY_SHIFTING_PRIORITIES";

export const BRING_THEM_TO_HEEL = "SECONDARY_BRING_THEM_TO_HEEL";
export const DESTROY_ENEMY_BASE = "SECONDARY_DESTROY_ENEMY_BASE";
export const MARKED_TARGETS = "SECONDARY_MARKED_TARGETS";
export const RECON_MISSION = "SECONDARY_RECON_MISSION";
export const SURFACE_SCAN = "SECONDARY_SURFACE_SCAN";
export const SWEEP_AND_CLEAR = "SECONDARY_SWEEP_AND_CLEAR";

export const ADVANCED_INTEL = "ADVANTAGE_ADVANCED_INTEL";
export const CUNNING_DEPLOYMENY = "ADVANTAGE_CUNNING_DEPLOYMENY";
export const FORTIFIED_POSITIONS = "ADVANTAGE_FORTIFIED_POSITIONS";
export const GARRISON = "ADVANTAGE_GARRISON";
export const ORDNANCE = "ADVANTAGE_ORDNANCE";
export const STRAFING_RUN = "ADVANTAGE_STRAFING_RUN";

export type Card = {
  id: string;
  image: string;
  name: string;
  type: "primary" | "secondary" | "advantage";
  mapImage?: string;
  scoring?: number[];
};

export const primaryCards: Card[] = [
  {
    id: INTERCEPT_SIGNALS,
    name: "Intercept Signals",
    image: "primary-intercept-signals.png",
    mapImage: "map-intercept-signals.png",
    type: "primary",
  },
  {
    id: BUNKER_ASSAULT,
    name: "Bunker Assault",
    image: "primary-bunker-assault.png",
    mapImage: "map-bunker-assault.png",
    type: "primary",
  },
  {
    id: CLOSE_THE_POCKET,
    name: "Close the Pocket",
    image: "primary-close-the-pocket.png",
    mapImage: "map-close-the-pocket.png",
    type: "primary",
  },
  {
    id: BREAKTHROUGH,
    name: "Breakthrough",
    image: "primary-breakthrough",
    mapImage: "map-breakthrough.png",
    type: "primary",
  },
  {
    id: RECOVER_THE_RESEARCH,
    name: "Recover the Research",
    image: "primary-recover-the-research.png",
    mapImage: "map-recover-the-research.png",
    type: "primary",
  },
  {
    id: SHIFTING_PRIORITIES,
    name: "Shifting Priorities",
    image: "primary-shifting-priorities.png",
    mapImage: "map-shifting-priorities.png",
    type: "primary",
  },
];

export const secondaryCards: Card[] = [
  {
    id: BRING_THEM_TO_HEEL,
    name: "Bring Them to Heel",
    image: "secondary-bring-them-to-heel.png",
    type: "secondary",
    scoring: [1, 1, 1, 1, 2, 2],
  },
  {
    id: DESTROY_ENEMY_BASE,
    name: "Destroy Enemy Base",
    image: "secondary-destroy-enemy-base.png",
    type: "secondary",
    scoring: [4],
  },
  {
    id: MARKED_TARGETS,
    name: "Marked Targets",
    image: "secondary-marked-targets.png",
    type: "secondary",
    scoring: [1],
  },
  {
    id: RECON_MISSION,
    name: "Recon Mission",
    image: "secondary-recon-mission.png",
    type: "secondary",
    scoring: [1, 1, 1, 1],
  },
  {
    id: SURFACE_SCAN,
    name: "Surface Scan",
    image: "secondary-surface-scan.png",
    type: "secondary",
    scoring: [1, 1, 1, 1, 2],
  },
  {
    id: SWEEP_AND_CLEAR,
    name: "Sweep and Clear",
    image: "secondary-sweep-and-clear.png",
    type: "secondary",
    scoring: [1, 1, 1, 2],
  },
];

export const advantageCards: Card[] = [
  {
    id: ADVANCED_INTEL,
    name: "Advanced Intel",
    image: "advantage-advanced-intel.png",
    type: "advantage",
  },
  {
    id: CUNNING_DEPLOYMENY,
    name: "Cunning Deployment",
    image: "advantage-cunning-deployment.png",
    type: "advantage",
  },
  {
    id: FORTIFIED_POSITIONS,
    name: "Fortified Positions",
    image: "advantage-fortified-positions.png",
    type: "advantage",
  },
  {
    id: GARRISON,
    name: "Garrison",
    image: "advantage-garrison.png",
    type: "advantage",
  },
  {
    id: ORDNANCE,
    name: "Ordnance",
    image: "advantage-ordnance.png",
    type: "advantage",
  },
  {
    id: STRAFING_RUN,
    name: "Strafing Run",
    image: "advantage-strafing-run.png",
    type: "advantage",
  },
];
