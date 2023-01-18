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
  "drag-drop-content-types": {
    enabled: true,
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-cloudflare-r2",
      providerOptions: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID,
        secretAccessKey: process.env.R2_ACCESS_SECRET,
        region: process.env.R2_REGION,
        params: {
          Bucket: process.env.R2_BUCKET,
          accountId: process.env.R2_ACCOUNT_ID,
          publicUrl: process.env.R2_PUBLIC_URL,
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  ezforms: {
    config: {
      enableFormName: true,
      captchaProvider: {
        name: "recaptcha",
        config: {
          secretKey: process.env.RECAPTCHA_KEY,
          minimumScore: 0.5,
        },
      },
      notificationProviders: [
        {
          name: "email",
          enabled: true,
          config: {
            subject: "New form submission received (raphael-catarino.fr)",
            from: "strapi@zrx.sh",
          },
        },
      ],
    },
  },
});
