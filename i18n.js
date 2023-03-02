const workaround = require("next-translate/lib/cjs/plugin/utils.js");

// As a workaround you can change the string of the defaultLoader, this is working fine
workaround.defaultLoader =
  "(l, n) => import(`public/locales/${l}/${n}.json`).then((m) => m.default)";

module.exports = {
  locales: ["en", "id"],
  defaultLocale: "en",
  pages: {
    "*": ["common"],
    "/": ["home"],
    "/about": ["about"],
    "/blog": ["blog"],
  },
};
