# 手動建置Webpack-Vue的開發環境

## 前言

發想是來自於彭彭老師在9/24的[Webpack 建置 React 開發環境教學直播](https://youtu.be/YN2hwa4_ins)。

因此，雖然有Vue-cli這種好用的工具，但是今天我們想要自虐地自己一步一步手動建置一個可以給Vue開發者開發的Webpack環境。


## Chpater webpack 與 npm 基本安裝

1. 安裝 node.js
2. 建立專案資料夾
3. 初始化node.js 專案 
```bat
npm init -y
```
4. 使用 npm 安裝 webpack, webpack-cli:
```bat 
npm install webpack webpack-cli --save-dev 
```

5. 設置 package.json (專案描述檔) 用來執行 webpack
		
```json
"scripts": {
	"test": "echo \"Error: no test specified\" && exit 1",
	"build": "webpack"
},		 
```
		

6. 基本專案資料夾結構與運作概念：

> /src/Vue原始碼  =={ webpack 轉換 }==> /dist/可執行檔

7. 所以根據上一點在專案目錄中新增 src 資料夾 與 dist 資料夾（Webpack的預設來源資料夾與目的資料夾）
8. 在src資料夾中建立一個index.js ，測試打包。使用指令： 
```bat
npm run build
```

9. 在 dist資料夾中建立一個 index.html，並且在當中引入main.js
```html
<!DOCTYPE html>
<html>
<head>
	<title> Webpack and Vue </title>
</head>
<body>
	<div id = "app"></div>
	<script src = "main.js"></script>
</body>
</html>

```
10. 打開 index.html 測試看看是否成功打開沒有錯誤


