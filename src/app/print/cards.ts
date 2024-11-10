const GAR = "GAR";
const CIS = "CIS";
const REBEL = "REBEL";
const EMPIRE = "EMPIRE";
const MERCENARY = "MERCENARY";

export const Factions = {
  [GAR]: "Galactic Republic",
  [CIS]: "Separatist Alliance",
  [REBEL]: "Rebel Alliance",
  [EMPIRE]: "Galactic Empire",
  [MERCENARY]: "Mercenaries",
};

const cards_gar: BaseCard[] = [
  {
    faction: GAR,
    name: "Anakin Skywalker (The Chosen One)",
    filename: "anakin",
  },
  {
    faction: GAR,
    name: "Padmé Amidala (Spirited Senator)",
    filename: "padme",
  },
  {
    faction: GAR,
    name: "ARC Troopers",
    filename: "arc_troopers",
  },
  {
    faction: GAR,
    name: "ARC Troopers (Strike Team)",
    filename: "arc_troopers_strike",
  },
  {
    faction: GAR,
    name: "AT-RT",
    filename: "at_rt_gar",
  },
  {
    faction: GAR,
    name: "Clone Trooper Infantry",
    filename: "clone_trooper",
  },
  {
    faction: GAR,
    name: "LAAT/le Patron Transport",
    filename: "laat_gar",
  },
  {
    faction: GAR,
    name: "Obi-Wan Kenobi (Civilized Warrior)",
    filename: "obiwan",
  },
  {
    faction: GAR,
    name: "R2-D2 (Hero of a Thousand Devices)",
    filename: "r2d2_gar",
  },
  {
    faction: GAR,
    name: "Raddaugh Gnasp Fluttercraft (Attack Craft)",
    filename: "raddaugh",
  },
  {
    faction: GAR,
    name: "Saber-Class Tank",
    filename: "saber_class",
  },
  {
    faction: GAR,
    name: "Yoda (Grand Master of the Jedi Order)",
    filename: "yoda",
  },
];

const cards_cis: BaseCard[] = [
  {
    name: "AAT Battle Tank",
    filename: "aat",
  },
  {
    name: "B1 Battle Droids",
    filename: "b1",
  },
  {
    name: "B2 Super Battle Droids",
    filename: "b2",
  },
  {
    name: "BX-Series Droid Commandos",
    filename: "bx",
  },
  {
    name: "BX-Series Droid Commandos (Strike Team)",
    filename: "bx_strike",
  },
  {
    name: "Count Dooku (Darth Tyranus)",
    filename: "dooku",
  },
  {
    name: "General Grievous (Sinister Cyborg)",
    filename: "grievous",
  },
  {
    name: "Super Tactical Droid (Kalani)",
    filename: "kalani",
  },
  {
    name: "Super Tactical Droid (Kraken)",
    filename: "kraken",
  },
  {
    name: "IG-100 MagnaGuard (Prototype Assassin Droids)",
    filename: "magnaguard_prototype",
  },
  {
    name: "Persuader-Class Tank Droid",
    filename: "persuader",
  },
  {
    name: "Persuader-Class Tank Droid (Prototype Tank Droid)",
    filename: "persuader_prototype",
  },
  {
    name: "Poggle the Lesser (Public Leader of the Geonosians)",
    filename: "poggle",
  },
  {
    name: "Super Tactical Droid (Commanding Controller)",
    filename: "super_tactical",
  },
  {
    name: "T-Series Tactical Droid (Progammed for Strategy)",
    filename: "tactical_droid",
  },
].map((card) => {
  return { ...card, faction: CIS };
});

const cards_empire: BaseCard[] = [
  {
    filename: "at_st",
    name: "AT-ST",
  },
  {
    filename: "dark_troopers",
    name: "Imperial Dark Troopers",
  },
  {
    filename: "e-web",
    name: "E-Web Heavy Blaster Team",
  },
  {
    filename: "imperial_officer",
    name: "Imperial Officer (Ruthless Commander)",
  },
  {
    filename: "laat_empire",
    name: "LAAT/le Patrol Transport",
  },
  {
    filename: "marquand",
    name: "Major Marquand (Tempest Scout 2)",
  },
  {
    filename: "orson_krennic",
    name: "Director Orson Krennic (Architect of Terror)",
  },
  {
    filename: "scout_strike",
    name: "Scout Troopers (Strike Team)",
  },
  {
    filename: "shoretroopers",
    name: "Shoretroopers",
  },
  {
    filename: "snowtroopers",
    name: "Snowtroopers",
  },
  {
    filename: "stormtroopers",
    name: "Stormtroopers",
  },
  {
    filename: "stormtroopers_hwu",
    name: "Stormtroopers (Heavy Response Unit)",
  },
  {
    filename: "tx-225",
    name: "TX-225 GAVw Occupier Tank",
  },
  {
    filename: "veers",
    name: "General Veers (Master Tactician)",
  },
].map((card) => {
  return { ...card, faction: EMPIRE };
});

const cards_rebel: BaseCard[] = [
  {
    filename: "1.4_fd_laser_cannon_team",
    name: "1.4 FD Laser Cannon Team",
  },
  {
    filename: "a-a5_speeder_truck_rebel",
    name: "A-A5 Speeder Truck",
  },
  {
    filename: "at_rt_rebel",
    name: "AT-RT",
  },
  {
    filename: "chewbacca",
    name: "Chewbacca (Let the Wookie Win)",
  },
  {
    filename: "ewok_skirmishers",
    name: "Ewok Skirmishers",
  },
  {
    filename: "ewok_slingers",
    name: "Ewok Slingers",
  },
  {
    filename: "fleet_troopers",
    name: "Fleet Troopers",
  },
  {
    filename: "leia_organa",
    name: "Leia Organa (Fearless and Inventive)",
  },
  {
    filename: "luke_skywalker_hero",
    name: "Luke Skywalker (Hero of the Rebellion)",
  },
  {
    filename: "r2d2_hero",
    name: "R2-D2 (Hero of a Thousand Devices)",
  },
  {
    filename: "rebel_commandos",
    name: "Rebel Commandos (Strike Team)",
  },
  {
    filename: "rebel_officer",
    name: "Rebel Officer (Resolute Commander)",
  },
  {
    filename: "rebel_troopers",
    name: "Rebel Troopers",
  },
  {
    filename: "rebel_veterans",
    name: "Rebel Veterans",
  },
  {
    filename: "t-47",
    name: "T-47 Airspeeder",
  },
  {
    filename: "x-34_landspeeder",
    name: "X-34 Landspeeder",
  },
].map((card) => {
  return { ...card, faction: REBEL };
});

const cards_mercs: BaseCard[] = [
  {
    filename: "aa5_speeder_truck",
    name: "A-A5 Speeder Truck",
  },
].map((card) => {
  return { ...card, faction: MERCENARY };
});

export const cards: Card[] = cards_gar
  .concat(cards_cis)
  .concat(cards_empire)
  .concat(cards_rebel)
  .concat(cards_mercs)
  .toSorted((cardA, cardB) => cardA.name.localeCompare(cardB.name))
  .map((card, index) => {
    return {
      ...card,
      amount: 0,
      id: index,
    };
  });
