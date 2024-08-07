import type { Metadata } from "next";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

import styles from "./layout.module.css";

const description =
  "Keyword helper for use with the miniatures game Star Wars: Legion";
const title = "Legion Helper";
const image = "/images/legionhelper.svg";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://legion.takras.net"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://legion.takras.net",
    title,
    siteName: title,
    description,
    images: [{ url: image }],
  },
  twitter: {
    card: "summary",
    site: "@site",
    title,
    description,
    images: [image],
  },
  keywords: [
    "star wars",
    "legion",
    "keywords",
    "quick quide",
    "atomic mass games",
    "ffg",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={styles.html}>
      <Script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" />
      <GoogleTagManager gtmId="GTM-W7J477VD" />
      <GoogleTagManager gtmId="G-148T6XV7YW" />
      <body className={styles.body}>{children}</body>
    </html>
  );
}
