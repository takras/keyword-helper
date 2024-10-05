import { AVAILABLE_KEYWORDS } from "@/types";
import { getEnrichedKeyword } from "@/utils";
import styles from "./page.module.css";
import globalStyles from "../../ui/helper.module.css";

export function generateStaticParams() {
  return AVAILABLE_KEYWORDS.map((key) => {
    return { keyword: [key] };
  });
}

export default function Page({
  params,
}: Readonly<{ params: { keyword: string[] } }>) {
  const { keyword } = params;
  const enriched = getEnrichedKeyword(keyword[0]);
  return (
    <div className={styles.container}>
      <a href="javascript:history.back()" className={globalStyles.button}>
        Back
      </a>
      <img src={`/images/keywords/${keyword[0]}.png`} alt={enriched?.summary} />
    </div>
  );
}
