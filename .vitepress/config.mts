import { defineConfig } from "vitepress";

import DefaultTheme from "./theme";

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "Freelance Platform",
  description: "Documentation for a modern freelance marketplace app",  
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    docFooter: {
      next: false,
    },

    sidebar: [
      {
        text: "Overview",
        items: [
          { text: "What is This Project?", link: "/what-is-this" },
          { text: "Project Overview", link: "/overview" },
          { text: "Runtime API Examples", link: "/api/api-overview" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
