import { AVAILABLE_KEYWORDS } from "@/types";
import { KeywordComponent } from "../ui/keyword";
import { Metadata } from "next";
import { getEnrichedKeyword, Variables } from "@/utils";

export function generateStaticParams() {
  return AVAILABLE_KEYWORDS.map((key) => {
    return { keyword: [key] };
  });
}

type Props = {
  params: { keyword: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = [];
  const enriched = getEnrichedKeyword(params.keyword[0]);

  if (enriched) {
    title.push(enriched.name);
  }
  title.push(Variables.title);
  const summary = enriched?.summary
    ? enriched.summary.replace(/{([^{}:]*)}/g, (_, group) => {
        return `[${(group as string).replace("_", " ").toLocaleUpperCase()}]`;
      })
    : null;

  return {
    title: title.join(" – "),
    description: summary,
    openGraph: {
      siteName: Variables.title,
      images: [
        enriched?.hideFromsearch
          ? "/images/legionhelper.svg"
          : `/images/keywords/${enriched?.keyword}`,
      ],
      title: enriched?.name,
      url: `${Variables.url}/${enriched?.keyword}`,
      description: summary || undefined,
    },
    twitter: {
      card: "summary",
      site: "@site",
      title: title.join(" – "),
      images: [
        enriched?.hideFromsearch
          ? "/images/legionhelper.svg"
          : `/images/keywords/${enriched?.keyword}`,
      ],
      description: summary || undefined,
    },
  };
}

export default function Page({
  params,
}: Readonly<{ params: { keyword: string[] } }>) {
  const { keyword } = params;
  return <KeywordComponent keyword={keyword[0]} />;
}
