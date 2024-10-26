# 天堂衝裝模擬器

目的：使用 ESCSS 重構早期的版本，並比較成果差異。

## 線上 Demo

- 重構後：https://lineage-gear-enhancement-simulator.netlify.app/
- 早期版本: https://mikelee0358.github.io/LineageEmulator/#

## 技術使用

- ESCSS
- Nuxt 3 (早期版本為 Vue 3)
- playwright (早期版本為 Cypress)
- Sass/SCSS
- Pinia

[早期 Vue 3 版本](https://github.com/MikeLee0358/lineage)

## 差異比較

![compare](/public/doc/compare.png)
![google speed](/public/doc/google-speed.png)

## 心得

### HTML/CSS 部分
- ID 提供清晰的結構，所以很容易找出冗余的 Elements 並優化 Element Tags 來提昇可讀性和 SEO，

### Javascript 部分
- ESTest 很容易使用在舊的程式碼上，搭配 playwright 很容易找出不小心改壞的地方。

### 感受性的部分
- 早期的程式碼寫的太糟糕了（!!，重構後看程式碼比較舒服。
- CSS 全部由單一檔案 `_awaken.scss` 處理，沒有額外 scss 檔案，降低心智負擔。
