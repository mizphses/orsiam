# ORSIAM日本版ドキュメント（仮）
## 更新方法
`docs/`以下に資料が入っています。

1. ファイルを作成する  
  例えば`docs/introduction/contributors.md`などのように，Markdownファイルを作成しましょう。
2. vitepressの設定ファイルに書き込む  
  `docs/.vitepress/config.mts`に書き込みます。書き方は下の「書き方」を参照
3. git pushするなりPRを作成するなりして更新する

## 書き方
```typescript
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

    sidebar: [ //ここの[ ]の間に書き込む
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

//（以下略）
```

