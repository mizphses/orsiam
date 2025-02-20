# 販売の指標

## 決定変数となるもの
* 販売価格：製品$X$，$Y$（のち，$Z$も含まれる）
* マーケティング予算：製品$X$，$Y$（および$Z$）それぞれについて
* 研究開発予算：製品$X$，$Y$（および$Z$）それぞれについて
* クレジットライン（与信枠）の顧客
  > 設定された信用枠を利用して資金を借りることができる顧客。ある企業が銀行と契約を結び，1億円のクレジットラインを設定してもらう。この企業は，必要な時にこの1億円の範囲内で資金を借りることができる。
  * ここイマイチ訳が確定しないので原語を読みたい
* 市場調査

## 意思決定について
* 販売部門は，[Holt-Winters法](https://grisha.org/blog/2016/01/29/triple-exponential-smoothing-forecasting/)による売上予測に基づいてマーケティング・ミックスを決定する。
  > Holt-Winters法は，季節変動のあるデータに対して有効な予測手法。売上や需要の変動を正確に捉えることができます。
* 製品$X$と$Y$は互いに独立している。
* 製品の需要は，世界市場，販売価格，マーケティング予算，研究開発予算に左右される。
* マーケティング予算は，主に即効性があるが，長期的な効果もある（ブランド価値など）
* 研究開発投資は，主に長期的な影響を及ぼす（製品の品質など）
* 市場の需要が入手可能な在庫を上回った場合，一部は競合他社に移り，他は失われる。
* 市場調査の費用は，2万円である。競合他社に対する自社のベンチマーキングを行うことができる。

## 成果について

### 支出について
#### 販売部門の直接経費
* 原価
* 販売手数料6％
* 梱包・発送費用:
  * 製品$X$ 1個の売上ごとに0.94円
  * 製品$Y$ 1個の売上ごとに0.76円

#### 考慮すべき間接費
* 保管費
  * 四半期開始時に各アイテムにつき4.5円
* 固定費（人件費，建物）
* マーケティング費
* 研究開発費
* 市場調査
* 減価償却費(注1)

(注1) 車両は，現在12万である。20四半期で減価償却を行う。

### 成果の計測
* 販売部門の貢献は，売上高と原価との差額として計算される。
* 最終製品の在庫は市場価格で評価される。
* 四半期開始時の初期在庫は，前四半期末の最終在庫である。
* 請求書は，1カ月後に支払が始まる。
  * 売上高の2/3は，同じ四半期に支払われる
  * 売上高の1/3が，次の四半期に支払われる
* 請求書の約0.15％は，回収が不確実な債権者に対するものである。
* 現在の売上の33％は掛け売り（信用取引）であり，その支払はさらに1カ月遅れる。
* 市場の需要が入手可能な在庫を上回った場合，その需要の一部は競合他社に移り，他は失われる。

## 訳者注
おそらく原語版の`Le département Distribution`を簡単にした物だと思われます。