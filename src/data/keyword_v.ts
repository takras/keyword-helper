import { Keyword } from "@/types";

export const KeywordsV: Keyword[] = [
  {
    keyword: "vehicles",
    name: "Vehicles",
    parents: ["v"],
    related_keywords: [
      "ground_vehicles",
      "repulsor_vehicle",
      "resiliency",
      "notched_bases",
      "notch_based_movement",
      "vehicle_damage_token",
    ],
    descriptions: [
      {
        type: "text",
        content:
          "There are many types of vehicles in <i>Star Wars</i>: Legion, from lumbering tanks to soaring airspeeders and everything in between. Every vehicle unit in <i>Star Wars</i>: Legion also has one of the subtypes listed below with their own special rules:",
      },
      {
        type: "structured_list",
        content: ["Ground Vehicle", "Repulsor Vehicle"],
      },
      {
        type: "text",
        content:
          "Rules that affect a vehicle unit affect all its subtypes unless otherwise stated. Regardless of subtype, all vehicles have the resiliency rules listed below.",
      },
      { type: "reference", referenced_keyword: "resiliency" },
      {
        type: "reference",
        referenced_keyword: "vehicle_damage_token",
        showOnlySummary: true,
      },
      { type: "reference", referenced_keyword: "ground_vehicles" },
      { type: "reference", referenced_keyword: "repulsor_vehicle" },
    ],
  },
  {
    keyword: "vehicle_damage_token",
    name: "Vehicle Damage Token",
    parents: [""],
    related_keywords: ["vehicles", "tokens", "resiliency"],
    descriptions: [
      {
        type: "illustration",
        content: "tokens/damage.png",
        align: "center",
        width: 80,
        altText: "Oblong hexagonal, black token with orange cog inside.",
      },

      {
        type: "text",
        content:
          "Used to track the penalties suffered by a vehicle that has sustained significant damage.",
      },
    ],
  },
  {
    keyword: "versatile",
    name: "Versatile",
    parents: ["v", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["attack", "weapons", "engaged", "melee"],
    printedDescription:
      "You can perform ranged attacks with this weapon even while engaged.",
    summary:
      "Some ranged weapons have the Versatile keyword. Units can perform ranged attacks using a weapon with the Versatile keyword even while engaged. A weapon with the Versatile keyword that is both a ranged weapon and a melee weapon can be used to perform either a ranged attack or a melee attack.",
    descriptions: [
      {
        type: "text",
        content:
          "Some ranged weapons have the Versatile keyword. Units can perform ranged attacks using a weapon with the Versatile keyword even while engaged. A weapon with the Versatile keyword that is both a ranged weapon and a melee weapon can be used to perform either a ranged attack or a melee attack.",
      },
    ],
  },
];
