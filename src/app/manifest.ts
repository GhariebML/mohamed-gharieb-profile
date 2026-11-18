import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohamed Gharieb — Applied AI Engineer",
    short_name: "M. Gharieb",
    description: "Digital profile of Mohamed Gharieb, Applied AI Engineer & Social Entrepreneur.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F8FD",
    theme_color: "#071B35",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
