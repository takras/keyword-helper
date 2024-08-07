import type { Metadata } from "next";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "Legion Helper",
  description: "Keyword helper for Star Wars: Legion",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.html}>
      <Script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" />
      <Script
        crossOrigin="anonymous"
        type="text/javascript"
        src="//cdn.cookie-script.com/s/dfceac6281af9a6e5880f80b02354b5b.js"
      />
      <body className={styles.body}>{children}</body>
      <GoogleTagManager gtmId="GTM-W7J477VD" />
    </html>
  );
}
