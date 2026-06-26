import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.atlasandsand.ma/sitemap.xml", // TODO: replace with the real production domain
  };
}
