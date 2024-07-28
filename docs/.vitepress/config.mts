import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'


// https://vitepress.dev/reference/site-config
export default defineConfig(withMermaid({
  title: "Orsiam日本語版ドキュメント",
  description: "ORSIAMの日本語版説明サイトです",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction/welcome' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          {
            text: 'はじめに',
            link: '/introduction/welcome'
          },
          {
            text: 'ゲームを始める',
            link: '/introduction/story'
          }
        ]
      },{
        text: "指標",
        items: [
          {
            text: "財務の指標",
            link: "/metrics/finance"
          },
          {
            text: "販売の指標",
            link: "/metrics/distribution"
          },
          {
            text: "製造の指標",
            link: "/metrics/production"
          },
          {
            text: "購買の指標",
            link: "/metrics/purchases"
          },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mizphses/orsiam' }
    ]
  },
  markdown: {
    math: true
  }
}))