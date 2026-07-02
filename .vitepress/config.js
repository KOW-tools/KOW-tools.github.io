import { defineConfig } from 'vitepress'

export const PAGE_URL = 'tools.kowx712.cc'

export default defineConfig({
  title: 'KOW Tools',
  description: 'A collection of useful tools',
  base: '/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }]
  ],

  themeConfig: {
    logo: '/favicon.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tools', link: '/tools/markdown-printer/' }
    ],

    sidebar: {
      '/tools/': [
        {
          text: 'Tools',
          items: [
            { text: 'Markdown Printer', link: '/tools/markdown-printer/' },
            // Add more tools here as you create them
            // { text: 'Video Converter', link: '/tools/video-converter/' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KOW-tools' }
    ]
  }
})
