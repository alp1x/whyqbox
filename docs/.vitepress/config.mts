import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [
    ['meta', { name: 'theme-color', content: '#e1b53e' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: '🐥 briefly summarises the purpose of the Qbox' }],
    ['meta', { property: 'og:site_name', content: 'why.qbox' }],
    ['meta', { property: 'og:image', content: 'https://i.pinimg.com/564x/b0/69/d3/b069d3bd78a81e7bd800897e75af6f17.jpg' }],
    ['meta', { property: 'og:url', content: 'https://whyqbox.wtf/' }],
  ],
  title: "🐥why.qbox",
  description: "While originally forked from QBCore, many Qbox resources have been refactored to improve code quality, enhance security, lower performance overhead, and integrate with overextended resources. ",
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'ayu-dark',
    },
    image: {
      lazyLoading: true
    },
    lineNumbers: true
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Qbox-project' },
      { icon: 'discord', link: 'https://discord.gg/qbox' },
    ],
    footer: {
      message: 'why.qbox',
      copyright: 'copyright © 2024'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    tr: {
      label: 'Turkish',
      lang: 'tr',
      link: '/lang/tr'
    },
    nl: {
      label: 'Dutch',
      lang: 'nl',
      link: '/lang/nl'
    },
    fr: {
      label: 'French',
      lang: 'fr',
      link: '/lang/fr'
    },
    ko: {
      label: 'Korean',
      lang: 'ko',
      link: '/lang/ko'
    },
    sv: {
      label: 'Swedish',
      lang: 'sv',
      link: '/lang/sv'
    },
  }
})
