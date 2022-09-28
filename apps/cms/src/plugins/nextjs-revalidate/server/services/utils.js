"use strict";

const getPluginConfig = require("../helpers/pluginConfig");

const buildConfig = (strapi) => {
  const pluginConfig = getPluginConfig(strapi);

  return {
    apiUrl: pluginConfig("apiUrl"),
    secret: pluginConfig("secret"),
  };
};

module.exports = {
  buildConfig,
};
