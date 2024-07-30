/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import {
  RulesDocument,
  Keyword,
  CatalogEntry,
  DescriptionType,
  RulesExample,
} from "@/types";
import dynamic from "next/dynamic";
import rules from "@/data/rules-2.6.0.json";
import styles from "./page.module.css";

export default function Home() {
  const DynamicComponentWithNoSSR = dynamic(
    () => import("./helper"),
    { ssr: false } // <-- not including this component on server-side
  );

  return <DynamicComponentWithNoSSR />;
}
