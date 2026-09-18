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
          text: 'General',
          items: [
            { text: 'Markdown Printer', link: '/tools/markdown-printer/' },
          ]
        },
        {
          text: 'Android Apps',
          items: [
            { text: 'Wish Export', link: '/tools/wish-export/' },
            { text: 'Hoyolab Automation', link: '/tools/hoyolab-automation/' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KOW-tools' }
    ]
  }
})
