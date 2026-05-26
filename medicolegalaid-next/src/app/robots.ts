import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "OpenAIbot",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended"
        ],
        allow: "/",
      }
    ],
    sitemap: "https://medicolegalaid.com/sitemap.xml",
  };
}
