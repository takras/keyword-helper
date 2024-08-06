import type { Metadata } from "next";
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
      <body className={styles.body}>{children}</body>
      <GoogleTagManager gtmId="G-148T6XV7YW" />
    </html>
  );
}
