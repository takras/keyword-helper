import { RulesDocument } from "@/types";
import { index } from "./catalog";
import { KeywordsA } from "./keyword_a";
import { KeywordsB } from "./keyword_b";
import { KeywordsC } from "./keyword_c";
import { KeywordsD } from "./keyword_d";
import { KeywordsE } from "./keyword_e";
import { KeywordsF } from "./keyword_f";
import { KeywordsG } from "./keyword_g";
import { KeywordsH } from "./keyword_h";
import { KeywordsI } from "./keyword_i";
import { KeywordsJ } from "./keyword_j";
import { KeywordsK } from "./keyword_k";
import { KeywordsL } from "./keyword_l";
import { KeywordsM } from "./keyword_m";
import { KeywordsN } from "./keyword_n";
import { KeywordsO } from "./keyword_o";
import { KeywordsP } from "./keyword_p";
import { KeywordsQ } from "./keyword_q";
import { KeywordsR } from "./keyword_r";
import { KeywordsS } from "./keyword_s";
import { KeywordsT } from "./keyword_t";
import { KeywordsU } from "./keyword_u";
import { KeywordsV } from "./keyword_v";
import { KeywordsW } from "./keyword_w";
import { KeywordsOther } from "./keyword_other";
import { changelog } from "./changelog";
import { BattleForces } from "./battle_forces";

export const rules: RulesDocument = {
  helperVersion: "1.1.13",
  version: "2.6.1",
  validFrom: "2024-11-14T00:00:00Z",
  downloadUrl:
    "https://drive.google.com/uc?export=download&id=13e-eKDjn9oeas-cE4qrR59zQvgFGh0th",
  documentUrl: "https://www.atomicmassgames.com/swlegiondocs/",
  discussionUrl:
    "https://forums.atomicmassgames.com/forum/165-star-wars-legion-rules-questions/",
  changelog: [],
  index,
  keywords: [
    ...changelog,
    ...BattleForces,
    ...KeywordsOther,
    ...KeywordsA,
    ...KeywordsB,
    ...KeywordsC,
    ...KeywordsD,
    ...KeywordsE,
    ...KeywordsF,
    ...KeywordsG,
    ...KeywordsH,
    ...KeywordsI,
    ...KeywordsJ,
    ...KeywordsK,
    ...KeywordsL,
    ...KeywordsM,
    ...KeywordsN,
    ...KeywordsO,
    ...KeywordsP,
    ...KeywordsQ,
    ...KeywordsR,
    ...KeywordsS,
    ...KeywordsT,
    ...KeywordsU,
    ...KeywordsV,
    ...KeywordsW,
  ],
};
