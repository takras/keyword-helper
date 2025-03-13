/* eslint-disable @next/next/no-img-element */
"use client";
import dynamic from "next/dynamic";
import Loading from "./ui/loading";
import { Suspense, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const loading = () => {
    setIsLoading(false);
    return null;
  };

  const DynamicComponentWithNoSSR = dynamic(
    () => import("./ui/helper"),

    { ssr: false, loading } // <-- not including this component on server-side
  );

  return (
    <Suspense>
      {isLoading && <Loading />}
      <DynamicComponentWithNoSSR />
    </Suspense>
  );
}
