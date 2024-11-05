import { Keyword } from "@/types";

export const BattleForces: Keyword[] = [
  {
    keyword: "bf_bright_tree_village",
    name: "Bright Tree Village",
    related_keywords: ["battle_forces", "army_building", "skirmishes", "ranks"],
    tag: "Battle Force",
    parents: ["battle_forces"],
    descriptions: [
      {
        type: "header",
        content: "Special Rules",
      },
      {
        type: "text",
        content:
          "A Bright Tree Village Battle Force is part of the Rebel Alliance faction.",
      },
      {
        type: "text",
        content:
          "This Battle Force may take any number of Mercenary units. These units <strong>do</strong> count toward the minimum number of ranks required and the army may include any number of Mercenaries at each rank. This Battle Force must take at least 2 non-{faction_ewoks} Rebel units.",
      },
      {
        type: "text",
        content:
          "During the End Phase, {faction_ewoks} units in this army remove one fewer suppression token during the Remove Tokens step.",
      },
      {
        type: "quotation",
        content:
          "This Battle Force includes command cards. See Clarification source further down for PDF.",
      },
      {
        type: "header",
        content: "Army Building",
      },
      {
        type: "header",
        content: "Allowed Units",
      },
      {
        type: "structured_list",
        content: [
          "<strong>Commander:</strong> C-3PO, Han Solo, Leia Organa, Logray, Wicket",
          "<strong>Operative:</strong> Chewbacca",
          "<strong>Special Forces:</strong> Ewok Slingers, 0-2 Rebel Commandos (No Strike Teams)",
          "<strong>Corps:</strong> Ewok Skirmishers, 0-2 Rebel Troopers",
          "<strong>Heavy:</strong> Chewbacca",
          "<strong>Unique Upgrades Allowed:</strong> Call to Arms, Herbal Medicine, Onwards to Victory, Secret Ingredients",
        ],
      },
      {
        type: "header",
        content: "Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander}/{rank_operative} <strong>Commander/Operative:</strong> Each army must include one to five commander units. At least one unit must be a commander.",
          "{rank_specialist} <strong>Special Forces:</strong> Each army may include one to three special forces unit.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include three to six corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to two support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to two heavy units.",
        ],
      },
      {
        type: "header",
        content: "Skirmish Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander}/{rank_operative} <strong>Commander/Operative:</strong> Each army must include one to four commander units. At least one unit must be a commander.",
          "{rank_specialist} <strong>Special Forces:</strong> Each army may include one to three special forces unit.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include two to four corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to one support unit.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to one heavy unit.",
        ],
      },
      {
        type: "clarification",
        url: "https://cdn.svc.asmodee.net/production-amgcom/uploads/2023/07/StarWarsLegionBFRulesSheetBrightTreeVillage1.pdf",
        content:
          "Based off of the original version, pre Legion 2.6. Click Source to download the PDF with printable cards.",
      },
    ],
  },
  {
    keyword: "bf_501st_legion",
    name: "501st Legion",
    related_keywords: ["battle_forces", "army_building", "skirmishes", "ranks"],
    tag: "Battle Force",
    parents: ["battle_forces"],
    descriptions: [
      {
        type: "header",
        content: "Special Rules",
      },
      {
        type: "text",
        content:
          "A 501st Legion Battle Force is part of the Galactic Republic faction.",
      },
      {
        type: "quotation",
        content:
          "This Battle Force includes special command cards. See Clarification source further down for PDF.",
      },
      {
        type: "header",
        content: "Army Building",
      },
      {
        type: "header",
        content: "Allowed Units",
      },
      {
        type: "structured_list",
        content: [
          "<strong>Commander:</strong> Anakin Skywalker, Clone Captain Rex, Clone Commander",
          "<strong>Corps:</strong> Clone Trooper Infantry, Clone Trooper Marksmen",
          "<strong>Special Forces:</strong> ARC Troopers, ARF Troopers",
          "<strong>Support:</strong> AT-RT, BARC Speeder, Clone Commandos",
          "<strong>Heavy:</strong> LAAT/le Patrol Transport",
          "<strong>Unique Upgrades Allowed:</strong> Echo, ARC Marksman, Fives",
        ],
      },
      {
        type: "header",
        content: "Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander}/{rank_operative} <strong>Commander/Operative:</strong> Each army must include one to two commander and operative units. At least one unit must be a commander.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include one to four corps units.",
          "{rank_specialist} <strong>Special Forces:</strong> Each army must include one to four Special Forces unit.",
          "  {rank_support}  <strong>Support:</strong> Each army must include up to two support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to one heavy unit.",
        ],
      },
      {
        type: "header",
        content: "Skirmish Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander}/{rank_operative} <strong>Commander/Operative:</strong> Each army must include one commander and up to one operative units.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include one to four corps units.",
          "{rank_specialist} <strong>Special Forces:</strong> Each army must include one to four Special Forces unit.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to two support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to one heavy unit.",
        ],
      },
      {
        type: "clarification",
        url: "/documents/SWQ_501st.pdf",
        content:
          "Based off of Version 1.1. Click Source to download the PDF with printable cards.",
      },
    ],
  },
  {
    keyword: "bf_separatist_invasion",
    name: "Separatist Invasion",
    related_keywords: ["battle_forces", "army_building", "skirmishes", "ranks"],
    tag: "Battle Force",
    parents: ["battle_forces"],
    descriptions: [
      {
        type: "header",
        content: "Special Rules",
      },
      {
        type: "text",
        content:
          "A Separatist Invasion Battle Force is part of the Separatist Alliance faction.",
      },
      {
        type: "text",
        content:
          "The Field Commander keyword cannot be used in a Separatist Invasion army.",
      },
      {
        type: "quotation",
        content:
          "This Battle Force includes command cards. See Clarification source further down for PDF.",
      },
      {
        type: "header",
        content: "Army Building",
      },
      {
        type: "header",
        content: "Allowed Units",
      },
      {
        type: "structured_list",
        content: [
          "<strong>Commander:</strong> Count Dooku, General Grievous, T-Series Tactical Droid",
          "<strong>Operative:</strong> Maul (Impatient Apprentice)",
          "<strong>Special Forces:</strong> IG-100 Magnaguard",
          "<strong>Corps:</strong> B1 Battle Droids",
          "<strong>Support:</strong> Droidekas, STAP Riders",
          "<strong>Heavy:</strong> AAT Trade Federation Battle Tank",
          '<strong>Unique Upgrades Allowed:</strong> DT-57 "Annihilator"',
        ],
      },
      {
        type: "header",
        content: "Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander} <strong>Commander:</strong> Each army must include one commander unit.",
          "  {rank_operative}   <strong>Operative:</strong> Each army must include up to one operative unit.",
          "{rank_specialist} <strong>Special Forces:</strong> Each army may include one to two Special Forces unit.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include four to eight corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to three support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army must include one or two heavy units.",
        ],
      },
      {
        type: "header",
        content: "Skirmish Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander} <strong>Commander:</strong> Each army must include one commander unit.",
          "  {rank_operative}   <strong>Operative:</strong> Each army may include up to one operative unit.",
          "{rank_specialist} <strong>Special Forces:</strong> Each army may include up to one Special Forces unit.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include two to six corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to two support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army must include one heavy unit.",
        ],
      },
      {
        type: "clarification",
        url: "/documents/StarWarsLegionBFRulesSheetSI.pdf",
        content:
          "Based off of the original version, pre Legion 2.6. Click Source to download the PDF with printable cards.",
      },
    ],
  },
  {
    keyword: "bf_tempest_force",
    name: "Tempest Force",
    related_keywords: ["battle_forces", "army_building", "skirmishes"],
    tag: "Battle Force",
    parents: ["battle_forces"],
    descriptions: [
      {
        type: "header",
        content: "Special Rules",
      },
      {
        type: "text",
        content:
          "A Tempest Force Battle Force is part of the Galactic Empire faction.",
      },
      {
        type: "text",
        content: "Vehicles in this army gain {keyword:Scout 2}.",
      },
      {
        type: "text",
        content:
          "Units that are beyond {range_3} of a friendly {rank_commander} unit and do not have a {upgrade_comms} upgrade equipped remove 1 less suppression during the Remove Tokens step.",
      },
      {
        type: "text",
        content:
          "During Setup, you may set aside 1 friendly {rank_commander} or {rank_support} unit that is not holding an asset objective token, marking the unit with an advantage token. The first time the set-aside unit would activate this game, you must place that unit in cohesion onto the battlefield beyond {range_2} of all enemy units, if able. If you do, that unit is treated as activated and its order token is placed facedown. Then, the unit loses its advantage token.",
      },
      {
        type: "quotation",
        content:
          "This Battle Force includes special unit cards and command cards. See Clarification source further down for PDF.",
      },
      {
        type: "header",
        content: "Army Building",
      },
      {
        type: "header",
        content: "Allowed Units",
      },
      {
        type: "structured_list",
        content: [
          "<strong>Commander:</strong> Imperial Officer",
          "<strong>Special Forces:</strong> Scout Troopers (No Strike Teams)",
          "<strong>Corps:</strong> Stormtroopers",
          "<strong>Support:</strong> 74-Z Speeder Bikes",
          "<strong>Heavy:</strong> AT-ST, Major Marquand",
          "<strong>Unique Upgrades Allowed:</strong> None",
        ],
      },
      {
        type: "header",
        content: "Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander} <strong>Commander:</strong> Each army must include one to two commander units.",
          "{rank_specialist} <strong>Special Forces:</strong> Each army must include two to six Special Forces unit.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include one to three corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to three support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to three heavy unit.",
        ],
      },
      {
        type: "header",
        content: "Skirmish Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander} <strong>Commander:</strong> Each army must include one to two commander units.",
          "{rank_specialist} <strong>Special Forces:</strong> Each army must include one to four Special Forces unit.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include one to two corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to two support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to two heavy unit.",
        ],
      },
      {
        type: "clarification",
        url: "/documents/SWQ_TempestForce-1.pdf",
        content:
          "Based off of Version 1.2. Click Source to download the PDF with printable cards.",
      },
    ],
  },
  {
    keyword: "bf_blizzard_force",
    name: "Blizzard Force",
    related_keywords: ["battle_forces", "army_building", "skirmishes"],
    tag: "Battle Force",
    parents: ["battle_forces"],
    descriptions: [
      {
        type: "header",
        content: "Special Rules",
      },
      {
        type: "text",
        content:
          "A Blizzard Force Battle Force is part of the Galactic Empire faction.",
      },
      {
        type: "text",
        content:
          "The Field Commander keyword cannot be used in a Blizzard Force army.",
      },
      {
        type: "quotation",
        content:
          "This Battle Force includes special unit cards and command cards. See Clarification source further down for PDF.",
      },
      {
        type: "header",
        content: "Army Building",
      },
      {
        type: "header",
        content: "Allowed Units",
      },
      {
        type: "structured_list",
        content: [
          "<strong>Commander:</strong> Darth Vader, General Veers, Imperial Officer",
          "<strong>Corps:</strong> Snowtroopers, 0-2 Stormtroopers",
          "<strong>Support:</strong> 74-Z Speeder Bikes, E-Web Heavy Blaster Team",
          "<strong>Heavy:</strong> AT-ST",
          "<strong>Unique Upgrades Allowed:</strong> General Weiss",
        ],
      },
      {
        type: "header",
        content: "Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander} <strong>Commander:</strong> Each army must include one to two commander units.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include three to six corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army must include one to four support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to two heavy units.",
        ],
      },
      {
        type: "header",
        content: "Skirmish Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander} <strong>Commander:</strong> Each army must include one to two commander units.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include two to four corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army must include one to three support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to one heavy unit.",
        ],
      },
      {
        type: "clarification",
        url: "/documents/SWQ_BlizzardForce.pdf",
        content:
          "Based off of Version: 1.1. Click Source to download the PDF with printable cards.",
      },
    ],
  },
  {
    keyword: "bf_shadow_collective",
    name: "Shadow Collective",
    related_keywords: [
      "battle_forces",
      "army_building",
      "skirmishes",
      "mercenaries",
      "affiliations",
    ],
    tag: "Battle Force",
    parents: ["battle_forces"],
    descriptions: [
      {
        type: "reference",
        referenced_keyword: "mercenaries",
        showOnlySummary: true,
      },
      {
        type: "header",
        content: "Special Rules",
      },
      {
        type: "text",
        content:
          "This Battle Force must be composed entirely of Mercenary units. These units <strong>do</strong> count toward the minimum number of ranks required and the army may include any number of Mercenaries at each rank.",
      },
      {
        type: "text",
        content:
          "A Shadow Collective Battle Force is aligned with the Dark Side.",
      },
      {
        type: "text",
        content:
          "Units in this army with the Transport keyword may issue orders to transported units regardless of Affiliation.",
      },
      {
        type: "header",
        content: "Army Building",
      },
      {
        type: "header",
        content: "Allowed Units",
      },
      {
        type: "structured_list",
        content: [
          "<strong>Commander:</strong> Black Sun Vigo, Gar Saxon, Pyke Syndicate Capo",
          "<strong>Operative:</strong> Maul (A Rival), Bossk, Cad Bane",
          "<strong>Corps:</strong> Black Sun Enforcers, Pyke Syndicate Foot Soldiers",
          "<strong>Special Forces:</strong> Mandalorian Super Commandos",
          "<strong>Support:</strong> Swoop Bike Riders",
          "<strong>Heavy:</strong> A-A5 Speeder Truck",
          "<strong>Unique Upgrades Allowed:</strong> The Darksaber, Raiding Party Leader, Rook Kast, Saxon's Combat Shield, Saxon's Galar-90 Rifle, Saxon's Z-3X Jetpack Rockets, Saxon's ZX Flame Projector",
        ],
      },
      {
        type: "header",
        content: "Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander}/{rank_operative} <strong>Commander/Operative:</strong> Each army must include one to four commander and operative units. At least one unit must be a commander.",
          " {rank_specialist}<strong>Special Forces:</strong> Each army may include up to four special forces units.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include two to six corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to three support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to two heavy units.",
        ],
      },
      {
        type: "header",
        content: "Skirmish Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander}/{rank_operative} <strong>Commander/Operative:</strong> Each army must include one to two commander and operative units. At least one unit must be a commander.",
          " {rank_specialist}<strong>Special Forces:</strong> Each army may include up to three special forces units.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include one to four corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to two support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to one heavy unit.",
        ],
      },
      {
        type: "clarification",
        url: "/documents/SWQ_ShadowCollective.pdf",
        content: "Based off of Version: 1.2. Click Source to download the PDF.",
      },
    ],
  },

  {
    keyword: "bf_echo_base_defenders",
    name: "Echo Base Defenders",
    related_keywords: ["battle_forces", "army_building", "skirmishes"],
    tag: "Battle Force",
    parents: ["battle_forces"],
    descriptions: [
      {
        type: "header",
        content: "Special Rules",
      },
      {
        type: "text",
        content:
          "An Echo Base Defenders Battle Force is part of the Rebel Alliance faction.",
      },
      {
        type: "text",
        content:
          "The {keyword:Field Commander} keyword can not be used in an Echo Base Defenders army.",
      },
      {
        type: "quotation",
        content:
          "This Battle Force includes special command cards. See Clarification source further down for PDF.",
      },
      {
        type: "header",
        content: "Army Building",
      },
      {
        type: "header",
        content: "Allowed Units",
      },
      {
        type: "structured_list",
        content: [
          "<strong>Commander:</strong> Leia Organa, Luke Skywalker, Han Solo, Rebel Officer",
          "<strong>Operative:</strong> Chewbacca, R2-D2 (C-3PO)",
          "<strong>Corps:</strong> Rebel Veterans. Mark II Medium Blaster Trooper",
          "<strong>Support:</strong> 1.4 FD Laser Cannon Team, Tauntaun Riders",
          "<strong>Heavy:</strong> T-47 Airspeeder",
          "<strong>Unique Upgrades Allowed:</strong> Wedge Antilles",
        ],
      },
      {
        type: "header",
        content: "Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander}/{rank_operative} <strong>Commander/Operative:</strong> Each army must include one to four commander and operative units. At least one unit must be a commander.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include three to six corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army must include one to four support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to two heavy units.",
        ],
      },
      {
        type: "header",
        content: "Skirmish Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander}/{rank_operative} <strong>Commander/Operative:</strong> Each army must include one to three commander and operative units. At least one unit must be a commander.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include two to four corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army must include one to three support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to one heavy unit.",
        ],
      },
      {
        type: "clarification",
        url: "https://cdn.svc.asmodee.net/production-amgcom/uploads/2024/07/SWQ_EchoBaseDefenders.pdf",
        content: "Based off of Version: 1.1. Click Source to download the PDF.",
      },
    ],
  },

  {
    keyword: "bf_imperial_remnant",
    name: "Imperial Remnant",
    related_keywords: ["battle_forces", "army_building", "skirmishes"],
    tag: "Battle Force",
    parents: ["battle_forces"],
    summary:
      "An Imperial Remnant Battle Force is part of the Galactic Empire faction.",
    descriptions: [
      {
        type: "header",
        content: "Special Rules",
      },
      {
        type: "text",
        content:
          "The following units count as {rank_corps} units for the purposes of army building: Scout Troopers and Imperial Death Troopers.",
      },
      {
        type: "text",
        content:
          "When building an army, an Imperial Remnant Battle Force cannot take more than 1 of each unit with a {rank_corps} rank until at least 1 of each has been taken. This army may not include detachments.",
      },
      {
        type: "text",
        content:
          "When issuing orders, a nominated {rank_commander} unit can issue orders only to units at {range_2} of them. Units beyond {range_2} of a friendly {rank_commander} unit gain Independent: Aim 1 or Dodge 1. When a unit checks to see if it is panicked, it may only use the courage value of a friendly {rank_commander} unit at {range_2} instead of {range_3}.",
      },
      {
        type: "text",
        content:
          "Any non-droid Trooper unit in this army with a {upgrade_heavy} upgrade icon may equip a {upgrade_heavy} upgrade with one of the following unit requirements, ignoring that requirement: Stormtroopers only, Shoretroopers only, Scout Troopers only, or Imperial Death Troopers only.",
      },
      {
        type: "header",
        content: "Army Building",
      },
      {
        type: "header",
        content: "Allowed Units",
      },
      {
        type: "structured_list",
        content: [
          "<strong>Commander:</strong> Moff Gideon, Imperial Officer",
          "<strong>Special Forces:</strong> Scout Troopers (No Strike Teams), Imperial Death Troopers",
          "<strong>Corps:</strong> 1-2 Stormtroopers, 1-2 Shoretroopers",
          "<strong>Support:</strong> 74-Z Speeder Bikes, E-Web Heavy Blaster Team",
          "<strong>Heavy:</strong> Imperial Dark Troopers",
          "<strong>Unique Upgrades Allowed:</strong> The Darksaber",
        ],
      },
      {
        type: "header",
        content: "Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander}/{rank_operative} <strong>Commander/Operative:</strong> Each army must include one to two commander and operative units. At least one unit must be a commander.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include three to six corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to two support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to two heavy units.",
        ],
      },
      {
        type: "header",
        content: "Skirmish Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander}/{rank_operative} <strong>Commander/Operative:</strong> Each army must include one to two commander and operative units. At least one unit must be a commander.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include three to four corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to one support unit.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to one heavy unit.",
        ],
      },
      {
        type: "clarification",
        url: "/documents/SWQ_ImperialRemnant-1.pdf",
        content: "Based off of Version: 1.1. Click Source to download the PDF.",
      },
    ],
  },

  {
    keyword: "bf_wookiee_defenders",
    name: "Wookiee Defenders",
    related_keywords: ["battle_forces", "army_building", "skirmishes"],
    tag: "Battle Force",
    parents: ["battle_forces"],
    descriptions: [
      {
        type: "header",
        content: "Special Rules",
      },
      {
        type: "text",
        content:
          "A Wookiee Defenders Battle Force is part of the Galactic Republic faction.",
      },
      {
        type: "text",
        content:
          "The following unit counts as a {rank_corps} unit for the purposes of army building and battle cards: Wookiee Warriors (Noble Fighters).",
      },
      {
        type: "text",
        content: "Your army must include at least three Wookiee Trooper units.",
      },
      {
        type: "text",
        content:
          "The first time 1 or more miniatures in each Wookiee Trooper unit are defeated each round, that unit may make a speed-1 move.",
      },

      {
        type: "quotation",
        content:
          "This Battle Force includes special unit cards. See Clarification source further down for PDF.",
      },
      {
        type: "header",
        content: "Army Building",
      },
      {
        type: "header",
        content: "Allowed Units",
      },
      {
        type: "structured_list",
        content: [
          "<strong>Commander:</strong> Yoda, Chewbacca, Wookiee Chieftain",
          "<strong>Special Forces:</strong>0-1 ARC Troopers (No Strike Teams), Wookiee Warriors",
          "<strong>Corps:</strong> 0-2 Clone Trooper Infantry",
          "<strong>Support:</strong> 0-1 BARC Speeder, Raddaugh Gnasp Fluttercraft",
          "<strong>Heavy:</strong> 0-1 Heavy Infantry Support Platform, 0-1 <i>Saber</i>-class Tank",
          "<strong>Unique Upgrades Allowed:</strong> None",
        ],
      },
      {
        type: "header",
        content: "Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander} <strong>Commander</strong> Each army must include one to two commander units.",
          "{rank_specialist} <strong>Special Forces:</strong> Each army may include up to four special forces unit.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include three to six corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to three support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to one heavy unit.",
        ],
      },
      {
        type: "header",
        content: "Skirmish Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander} <strong>Commander</strong> Each army must include one to two commander units.",
          "{rank_specialist} <strong>Special Forces:</strong> Each army may include up to four special forces unit.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include three to six corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to three support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to one heavy unit.",
        ],
      },
      {
        type: "clarification",
        url: "/documents/SWQ_WookieesDefenders.pdf",
        content:
          "Based off of Version 1.1. Click Source to download the PDF with printable cards.",
      },
    ],
  },

  {
    keyword: "bf_experimental_droids",
    name: "Experimental Droids",
    related_keywords: ["battle_forces", "army_building", "skirmishes"],
    tag: "Battle Force",
    parents: ["battle_forces"],
    descriptions: [
      {
        type: "header",
        content: "Special Rules",
      },
      {
        type: "text",
        content:
          "An Experimental Droids Battle Force is part of the Separatist Alliance faction.",
      },
      {
        type: "text",
        content:
          "The following unit counts as a {rank_corps} unit for the purposes of army building and battle cards: IG-100 MagnaGuard (Prototype Assassin Droids).",
      },
      {
        type: "text",
        content:
          "At the start of each Activation Phase, choose up to 1 of your {rank_commander} units. If you do, put 3 surge tokens on that unit's unit card. Once during its activation, a friendly {rank_specialist}, {rank_corps}, or {rank_support} unit that has the {keyword:AI} keyword may perform a free action to spend a surge token on the chosen {rank_commander} unit, if it is at {range_3}. If it does, choose one of the following:",
      },
      {
        type: "structured_list",
        content: [
          "Increase their speed by 1 during their next move action this turn.",
          "Gain 1 aim token or 1 dodge token.",
          "Add one black die and one white die to their attack pool during their next attack action this turn.",
          "Remove up to 2 suppression tokens.",
        ],
      },

      {
        type: "quotation",
        content:
          "This Battle Force includes special unit cards. See Clarification source further down for PDF.",
      },
      {
        type: "header",
        content: "Army Building",
      },
      {
        type: "header",
        content: "Allowed Units",
      },
      {
        type: "structured_list",
        content: [
          "<strong>Commander:</strong> Super Tactical Droid. T-Series Tactical Droid",
          "<strong>Special Forces:</strong> 0-2 BX-Series Droid Commandos (No Strike Teams). IG-100 MagnaGuard (Prototype Assassin Droids)",
          "<strong>Corps:</strong> 0-2 B1 Battle Droids. 0-2 B2 Battle Droids",
          "<strong>Support:</strong> Droidekas",
          "<strong>Heavy:</strong> <i>Persuader</i>-class Tank Droid (Prototype Tank Droid)",
          "<strong>Unique Upgrades Allowed:</strong> None",
        ],
      },
      {
        type: "header",
        content: "Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander} <strong>Commander</strong> Each army must include one to two commander units.",
          "{rank_specialist} <strong>Special Forces:</strong> Each army may include up to three special forces units.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include three to six corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to three support units.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to two heavy units.",
        ],
      },
      {
        type: "header",
        content: "Skirmish Rank Requirements",
      },
      {
        type: "structured_list",
        content: [
          "{rank_commander} <strong>Commander</strong> Each army must include one to two commander units.",
          "{rank_specialist} <strong>Special Forces:</strong> Each army may include up to three special forces unit.",
          " {rank_corps}  <strong>Corps:</strong> Each army must include three to six corps units.",
          "  {rank_support}  <strong>Support:</strong> Each army may include up to one support unit.",
          "{rank_heavy} <strong>Heavy:</strong> Each army may include up to one heavy unit.",
        ],
      },
      {
        type: "clarification",
        url: "/documents/SWQ_ExperimentalDroids.pdf",
        content:
          "Based off of Version 1.1. Click Source to download the PDF with printable cards.",
      },
    ],
  },
];
