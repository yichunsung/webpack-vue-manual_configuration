# 手動建置Webpack-Vue的開發環境

## 前言

發想是來自於彭彭老師在9/24的[Webpack 建置 React 開發環境教學直播](https://youtu.be/YN2hwa4_ins)。

因此，雖然有Vue-cli這種好用的工具，但是今天我們想要自虐地自己一步一步手動建置一個可以給Vue開發者開發的Webpack環境。


## Chpater webpack 與 npm 基本安裝

1. 安裝 node.js
2. 建立專案資料夾
3. 使用終端機介面
4. 初始化node.js 專案 `npm init -y`
5. 使用 npm 安裝 webpack, webpack-cli:
	` npm install webpack webpack-cli --save-dev `

6. 設置 package.json (專案描述檔) 用來執行 webpack
		
		```json
		"
		  "scripts": {
		    "test": "echo \"Error: no test specified\" && exit 1",
		    "build": "webpack"
		  },
		"
		```