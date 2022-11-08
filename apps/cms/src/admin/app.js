import favicon from "./extensions/favicon.svg";

export default {
  config: {
    locales: ["fr", "en"],
    tutorials: false,
    auth: {
      logo: favicon,
    },
    menu: {
      logo: favicon,
    },
    head: {
      favicon: favicon,
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
