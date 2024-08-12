import { Keyword } from "@/types";

export const KeywordsV: Keyword[] = [
  {
    keyword: "vehicles",
    name: "Vehicles",
    parents: ["v"],
    related_keywords: ["ground_vehicles", "repulsor_vehicle", "resiliency"],
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
      { type: "reference", referenced_keyword: "ground_vehicles" },
      { type: "reference", referenced_keyword: "repulsor_vehicle" },
    ],
  },
  {
    keyword: "versatile",
    name: "Versatile",
    parents: ["v", "weapons"],
    tag: "Weapon Keyword",
    related_keywords: ["attack", "weapons", "engaged", "melee"],
    descriptions: [
      {
        type: "text",
        content:
          "Some ranged weapons have the Versatile keyword. Units can perform ranged attacks using a weapon with the Versatile keyword even while engaged. A weapon with the Versatile keyword that is both a ranged weapon and a melee weapon can be used to perform either a ranged attack or a melee attack.",
      },
    ],
  },
];
