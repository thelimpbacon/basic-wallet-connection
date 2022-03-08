const path = require("path");
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve("./"),
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "../components"),
      "@components/common": path.resolve(__dirname, "../components/common"),
      "@lib": path.resolve(__dirname, "../lib"),
      "@lib/types": path.resolve(__dirname, "../lib/types"),
      "@emotion/core": toPath("node_modules/@emotion/react"),
      "emotion-theming": toPath("node_modules/@emotion/react"),
    };
    return config;
  },
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-next-router",
  ],
  typescript: {
    reactDocgen: "react-docgen", // this option will take compile time from 9 secs to less than 1 sec on refresh
  },
};
