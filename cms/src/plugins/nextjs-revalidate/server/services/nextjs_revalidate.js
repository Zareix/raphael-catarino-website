"use strict";

const { buildConfig } = require("./utils");

const axios = require("axios").default;

module.exports = ({ strapi }) => ({
  async revalidate(path) {
    try {
      const config = buildConfig(strapi);
      if (!config || !config.apiUrl) {
        throw "missing configuration: apiUrl";
      }
      const response = path
        ? await axios.get(
            `${config.apiUrl}/revalidate?path=${path}${
              config.secret ? "&secret=" + config.secret : ""
            }`
          )
        : await axios.get(`${config.apiUrl}/revalidate`);

      return {
        data: response?.data,
      };
    } catch (error) {
      console.error(
        `[nextjs-revalidate] Error while revalidating path ${path} -`,
        error
      );
      return {
        error: "An error occurred",
      };
    }
  },

  async revalidateAll(paths) {
    try {
      const config = buildConfig(strapi);
      if (!config || !config.apiUrl) {
        throw "missing configuration: apiUrl";
      }
      const response = await axios.get(
        `${config.apiUrl}/revalidate?${paths
          .map((p) => "path=" + p.path)
          .join("&")}${config.secret ? "&secret=" + config.secret : ""}`
      );

      return {
        data: response?.data,
      };
    } catch (error) {
      console.error(
        `[nextjs-revalidate] Error while revalidating all paths (${paths})`,
        error
      );
      return {
        error: "An error occurred",
      };
    }
  },

  async revalidatePaths() {
    return await strapi
      .query("plugin::nextjs-revalidate.revalidate-path")
      .findMany();
  },
});
