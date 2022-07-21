"use strict";

module.exports = ({ strapi }) => ({
  async revalidate(ctx) {
    const response = await strapi
      .plugin("nextjs-revalidate")
      .service("nextjs_revalidate")
      .revalidate(ctx.query.path);

    if (response.error) {
      return ctx.internalServerError(`Server error: ${response.error}`);
    }

    ctx.body = response;
  },

  async revalidateAll(ctx) {
    const paths = await strapi
      .plugin("nextjs-revalidate")
      .service("nextjs_revalidate")
      .revalidatePaths();

    const response = await strapi
      .plugin("nextjs-revalidate")
      .service("nextjs_revalidate")
      .revalidateAll(paths);

    if (response.error) {
      return ctx.internalServerError(`Server error: ${response.error}`);
    }

    ctx.body = response;
  },

  async revalidatePaths(ctx) {
    ctx.body = await strapi
      .plugin("nextjs-revalidate")
      .service("nextjs_revalidate")
      .revalidatePaths();
  },
});
