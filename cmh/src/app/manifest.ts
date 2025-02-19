import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Complete Mobile Health",
    short_name: "CMH",
    description: "Drug testing company based in Wisconsin, USA",
    start_url: "/",
    display: "standalone",
    background_color: "#449126",
    theme_color: "#ffffff",
  };
}
