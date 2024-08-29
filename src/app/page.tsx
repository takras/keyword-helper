/* eslint-disable @next/next/no-img-element */
"use client";
import dynamic from "next/dynamic";
import Loading from "./ui/loading";
import { Suspense } from "react";

const loading = () => {
  return <Loading />;
};

export default function Home() {
  const DynamicComponentWithNoSSR = dynamic(
    () => import("./ui/helper"),

    { ssr: false, loading } // <-- not including this component on server-side
  );

  return (
    <Suspense>
      <DynamicComponentWithNoSSR />
    </Suspense>
  );
}
