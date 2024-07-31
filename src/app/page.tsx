/* eslint-disable @next/next/no-img-element */
"use client";
import dynamic from "next/dynamic";
import "./globals.css";

export default function Home() {
  const DynamicComponentWithNoSSR = dynamic(
    () => import("./helper"),
    { ssr: false } // <-- not including this component on server-side
  );

  return <DynamicComponentWithNoSSR />;
}
