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
  return {
    title: title.join(" – "),
  };
}

export default function Page({
  params,
}: Readonly<{ params: { keyword: string[] } }>) {
  const { keyword } = params;
  return <KeywordComponent keyword={keyword[0]} />;
}
