import { defineConfig } from 'vitepress';
import { nav, sidebar } from './relaConf';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "爱读书的二丙子",
  description: "从0到1成为一名前端开发者",
  head: [[
    'link',
    { rel: 'icon', href: '/avatar.png' }
  ],], 
  themeConfig: {
    logo: '/avatar.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    sidebar: sidebar,
    outline: {
      level: [2, 6],
      label: '目录'
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jinbudaily/vitepress-blog' }
    ],
    footer: {
      message: 'MIT License | 版权所有 ',
      copyright: 'Copyright © 2022-2023 Jinbudaily'
    }
  },
  base: '/vitepress-blog/',
})
