# Fake Sober｜白天人格測驗 ☀️🥐

「如果 Fake Sober 的麵包是一種人，你會是哪一種？」

## 開發

```bash
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)

## 麵包輪播影片

將影片放入 `public/videos/`，檔名需為：

- `原味.mp4`
- `伯爵茶.mp4`
- `紅豆奶油.mp4`
- `培根蘆筍.mp4`
- `蒜味奶油乳酪.mp4`

若影片不存在，會自動改顯示對應 PNG 圖片。

## 部署（Vercel）

專案根目錄即 Next.js 應用（`package.json` 在 repo 根目錄）。

- **Root Directory**：留空或 `.`
- **Framework Preset**：Next.js

若仍使用舊子目錄結構，請將 Root Directory 設為 `fakesober_bread_test`（已不再需要）。
