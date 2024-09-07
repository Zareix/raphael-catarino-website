export default {
  site: 'raphael-catarino.fr',
  outputPath: 'unlighthouse',
  scanner: {
    samples: 1,
    exclude: ['/api/*', '/cdn-cgi/l/email-protection'],
  },
  ci: {
    budget: 70,
    buildStatic: true,
    reporter: 'jsonExpanded',
  },
};
