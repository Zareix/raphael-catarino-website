module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "strapi@zrx.sh",
        defaultReplyTo: "strapi@zrx.sh",
        testAddress: "strapi@zrx.sh",
      },
    },
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
      teamFilter: process.env.VERCEL_DEPLOY_PLUGIN_TEAM_FILTER,
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  "nextjs-revalidate": {
    enabled: true,
    resolve: "./src/plugins/nextjs-revalidate",
    config: {
      apiUrl: process.env.NEXTJS_REVALIDATE_API_URL,
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
