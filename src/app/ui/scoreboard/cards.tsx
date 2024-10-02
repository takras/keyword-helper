import { Card } from "./types";

export const CARDS = {
  INTERCEPT_SIGNALS: "PRIMAY_INTERCEPT_SIGNALS",
  BUNKER_ASSAULT: "PRIMARY_BUNKER_ASSAULT",
  CLOSE_THE_POCKET: "PRIMARY_CLOSE_THE_POCKET",
  BREAKTHROUGH: "PRIMARY_BREAKTHROUGH",
  RECOVER_THE_RESEARCH: "PRIMARY_RECOVER_THE_RESEARCH",
  SHIFTING_PRIORITIES: "PRIMARY_SHIFTING_PRIORITIES",
  BRING_THEM_TO_HEEL: "SECONDARY_BRING_THEM_TO_HEEL",
  DESTROY_ENEMY_BASE: "SECONDARY_DESTROY_ENEMY_BASE",
  MARKED_TARGETS: "SECONDARY_MARKED_TARGETS",
  RECON_MISSION: "SECONDARY_RECON_MISSION",
  SURFACE_SCAN: "SECONDARY_SURFACE_SCAN",
  SWEEP_AND_CLEAR: "SECONDARY_SWEEP_AND_CLEAR",
  ADVANCED_INTEL: "ADVANTAGE_ADVANCED_INTEL",
  CUNNING_DEPLOYMENY: "ADVANTAGE_CUNNING_DEPLOYMENY",
  FORTIFIED_POSITIONS: "ADVANTAGE_FORTIFIED_POSITIONS",
  GARRISON: "ADVANTAGE_GARRISON",
  ORDNANCE: "ADVANTAGE_ORDNANCE",
  STRAFING_RUN: "ADVANTAGE_STRAFING_RUN",
} as const;

export const primaryCards: Card[] = [
  {
    id: CARDS.INTERCEPT_SIGNALS,
    name: "Intercept Signals",
    image: "primary-intercept-signals.png",
    mapImage: "map-intercept-signals.png",
    type: "primary",
  },
  {
    id: CARDS.BUNKER_ASSAULT,
    name: "Bunker Assault",
    image: "primary-bunker-assault.png",
    mapImage: "map-bunker-assault.png",
    type: "primary",
  },
  {
    id: CARDS.CLOSE_THE_POCKET,
    name: "Close the Pocket",
    image: "primary-close-the-pocket.png",
    mapImage: "map-close-the-pocket.png",
    type: "primary",
  },
  {
    id: CARDS.BREAKTHROUGH,
    name: "Breakthrough",
    image: "primary-breakthrough.png",
    mapImage: "map-breakthrough.png",
    type: "primary",
  },
  {
    id: CARDS.RECOVER_THE_RESEARCH,
    name: "Recover the Research",
    image: "primary-recover-the-research.png",
    mapImage: "map-recover-the-research.png",
    type: "primary",
  },
  {
    id: CARDS.SHIFTING_PRIORITIES,
    name: "Shifting Priorities",
    image: "primary-shifting-priorities.png",
    mapImage: "map-shifting-priorities.png",
    type: "primary",
  },
];

export const secondaryCards: Card[] = [
  {
    id: CARDS.BRING_THEM_TO_HEEL,
    name: "Bring Them to Heel",
    image: "secondary-bring-them-to-heel.png",
    type: "secondary",
    scoring: [1, 1, 1, 1, 2, 2],
  },
  {
    id: CARDS.DESTROY_ENEMY_BASE,
    name: "Destroy Enemy Base",
    image: "secondary-destroy-enemy-base.png",
    type: "secondary",
    scoring: [4],
  },
  {
    id: CARDS.MARKED_TARGETS,
    name: "Marked Targets",
    image: "secondary-marked-targets.png",
    type: "secondary",
    scoring: [1],
  },
  {
    id: CARDS.RECON_MISSION,
    name: "Recon Mission",
    image: "secondary-recon-mission.png",
    type: "secondary",
    scoring: [1, 1, 1, 1],
  },
  {
    id: CARDS.SURFACE_SCAN,
    name: "Surface Scan",
    image: "secondary-surface-scan.png",
    type: "secondary",
    scoring: [1, 1, 1, 1, 2],
  },
  {
    id: CARDS.SWEEP_AND_CLEAR,
    name: "Sweep and Clear",
    image: "secondary-sweep-and-clear.png",
    type: "secondary",
    scoring: [1, 1, 1, 2],
  },
];

export const advantageCards: Card[] = [
  {
    id: CARDS.ADVANCED_INTEL,
    name: "Advanced Intel",
    image: "advantage-advanced-intel.png",
    type: "advantage",
  },
  {
    id: CARDS.CUNNING_DEPLOYMENY,
    name: "Cunning Deployment",
    image: "advantage-cunning-deployment.png",
    type: "advantage",
  },
  {
    id: CARDS.FORTIFIED_POSITIONS,
    name: "Fortified Positions",
    image: "advantage-fortified-positions.png",
    type: "advantage",
  },
  {
    id: CARDS.GARRISON,
    name: "Garrison",
    image: "advantage-garrison.png",
    type: "advantage",
  },
  {
    id: CARDS.ORDNANCE,
    name: "Ordnance",
    image: "advantage-ordnance.png",
    type: "advantage",
  },
  {
    id: CARDS.STRAFING_RUN,
    name: "Strafing Run",
    image: "advantage-strafing-run.png",
    type: "advantage",
  },
];
