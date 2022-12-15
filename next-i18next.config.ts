const I18NextHttpBackend = require("i18next-http-backend");

const nextI18NextConfig = (module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],

    backend: {
      loadPath: `${process.env.INTERNAL_API_URI}/api/locales/{{lng}}/{{ns}}`,
    },
  },
  debug: true,
  ns: ["common", "employees", "projects"],
  serializeConfig: false,
  use: [I18NextHttpBackend],
});

export default nextI18NextConfig;
