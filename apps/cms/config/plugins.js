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
      deployHook: env("VERCEL_DEPLOY_PLUGIN_HOOK"),
      apiToken: env("VERCEL_DEPLOY_PLUGIN_API_TOKEN"),
      appFilter: env("VERCEL_DEPLOY_PLUGIN_APP_FILTER"),
      teamFilter: env("VERCEL_DEPLOY_PLUGIN_TEAM_FILTER"),
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  "nextjs-revalidate": {
    enabled: true,
    resolve: "./src/plugins/nextjs-revalidate",
    config: {
      apiUrl: env("NEXTJS_REVALIDATE_API_URL"),
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
        accessKeyId: env("R2_ACCESS_KEY_ID"),
        secretAccessKey: env("R2_ACCESS_SECRET"),
        region: env("R2_REGION"),
        params: {
          Bucket: env("R2_BUCKET"),
          accountId: env("R2_ACCOUNT_ID"),
          publicUrl: env("R2_PUBLIC_URL"),
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
          secretKey: env("RECAPTCHA_KEY"),
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
