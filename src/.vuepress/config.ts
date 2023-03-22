import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/vueblog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "浪里",
      description: "浪里指南",
    },
    
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
