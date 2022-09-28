module.exports = [
  {
    method: "GET",
    path: "/revalidate",
    handler: "nextjs_revalidate.revalidate",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/revalidate/all",
    handler: "nextjs_revalidate.revalidateAll",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/revalidate/paths",
    handler: "nextjs_revalidate.revalidatePaths",
    config: {
      policies: [],
      auth: false,
    },
  },
];
