module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: process.env.SENDGRID_API_KEY,
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
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_ACCESS_SECRET,
        endpoint: process.env.S3_ENDPOINT,
        sslEnabled: true,
        s3ForcePathStyle: true,
        params: {
          Bucket: process.env.S3_BUCKET,
        },
      },
    },
  },
});
