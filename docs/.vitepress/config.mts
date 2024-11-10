import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DDNS",
  description: "A free subdomain provider for the Machine Learning community ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/getting-started' },
    ],

    logo: "https://github.com/ML-comm.png",

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Format', link: '/format' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ml-comm/ddns' }
    ],
  },
})
