/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "fr"],
  i18nextServer: {
    backend: {
      loadPath: './public/locales/{{lng}}/{{ns}}.json',
    },
  },
  i18next: {
    fallbackLng: 'en', // Fallback language
    // ns: ['common'], // Namespaces for translations
    // defaultNS: 'common',
  },
  load: ["server", "client"],
  i18nextServerPlugins: {
    "{initReactI18next}": "react-i18next",
  },
  i18nextClientPlugins: {
    "{initReactI18next}": "react-i18next",
  },
  routes: {
    fr: {
      accelerate: "accelerate",
      "research": "research",
      "data&AIconsulting": "data&AIconsulting",
      products: "products",
      "tailer-made": "sur-tailer-made",
      about: "about",
      values: "values",
      partners: "partners"
      // products: {
      //   index: "produits",
      //   categories: "categories",
      // },
    },
  },
};