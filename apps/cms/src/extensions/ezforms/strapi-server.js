module.exports = (plugin) => {
  plugin.services.formatData = () => ({
    formatData(data) {
      return `Message from ${data.name}\n\n${data.message}\n\nReply to ${data.email}`;
    },
  });

  return plugin;
};
