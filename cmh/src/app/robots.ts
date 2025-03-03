import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/email/contact", "/api/email/apply"],
      },
    ],
    sitemap: "https://completemobile-health.com/sitemap.xml",
  };
}
