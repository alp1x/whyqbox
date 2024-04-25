import { defineConfig } from 'vitepress'

export default defineConfig({
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
    fr: {
      label: 'French',
      lang: 'fr',
      link: '/lang/fr'
    }
  }
})
