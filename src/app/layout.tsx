import type { Metadata } from "next";
import Script from "next/script";
import { Variables } from "@/utils";
import { GoogleTagManager } from "@next/third-parties/google";
import { Providers } from "./providers";

import "./globals.css";
import styles from "./layout.module.css";

const description = Variables.description;
const title = Variables.title;
const image = "/images/legionhelper.svg";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(Variables.url),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    url: Variables.url,
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
    <html lang="en" className={styles.html} suppressHydrationWarning>
      <Script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" />
      <GoogleTagManager gtmId="GTM-W7J477VD" />
      <GoogleTagManager gtmId="G-148T6XV7YW" />
      <meta name="viewport" content="width=device-width" />
      <body className={styles.body}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
