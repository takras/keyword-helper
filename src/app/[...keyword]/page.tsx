import { AVAILABLE_KEYWORDS } from "@/types";
import { KeywordComponent } from "../ui/keyword";
import { Metadata } from "next";
import { getEnrichedKeyword, interpolateString, Variables } from "@/utils";

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
  };
}

export default function Page({
  params,
}: Readonly<{ params: { keyword: string[] } }>) {
  const { keyword } = params;
  return <KeywordComponent keyword={keyword[0]} />;
}
