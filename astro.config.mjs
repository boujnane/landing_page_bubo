import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import simpleStackForm from "simple-stack-form";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  site: "https://wwww.bubobu.bo",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark-dimmed",
      },
      gfm: true,
    }),
    icon({
      iconDirectory: './public/icons',
    }),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    // db(),
    simpleStackForm(),
    astroI18next(),
  ],
  output: "hybrid",
  adapter: vercel({
    analytics: true,
  }),
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
  }
});