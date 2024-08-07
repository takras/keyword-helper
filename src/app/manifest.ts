import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Legion Helper",
    short_name: "Legion",
    description: "Legion Helper App",
    start_url: "/",
    display: "standalone",
    background_color: "#a78c5c",
    theme_color: "#fff",
    icons: [
      {
        src: "/images/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
