---
title: Webpack 入门介绍
date: 2023-06-20 15:46:53
tags: 
  webpack
categories:
  构建工具
---

Webpack是一个现代化的静态模块打包工具。它是一个用于构建前端项目的工具，通过分析项目中的各种资源（如JavaScript、CSS、图片等），将它们打包成最终的静态资源，以供浏览器加载和运行。

<!-- more -->

## 前言

在过去的前端开发中，经常会使用的主要构建工具是 [``Gulp``](https://gulpjs.com/) 和 [``Grunt``](https://gruntjs.com/)。它们是基于任务（Stream / Task）的构建工具，通过定义一系列任务来完成前端项目的构建和优化工作。这些任务可以包括文件合并、混淆、压缩、编译预处理器、静态资源处理等。

Gulp 和 Grunt 在当时的前端开发中起到了很大的作用，简化了前端项目的构建流程，提高了开发效率。开发者可以通过编写任务配置文件，指定各个任务的执行顺序和所需的操作，然后通过命令行工具执行这些任务。

然而，随着前端开发的快速发展和复杂化，Gulp 和 Grunt 的局限性逐渐凸显出来。它们的配置方式相对繁琐，需要编写大量的配置代码，而且配置文件的维护和管理也变得困难。在处理大型项目时，任务执行的效率也不够高，构建过程的速度较慢。

Webpack 应运而生。Webpack 是一个现代化的静态模块打包工具，它引入了模块化的概念，并通过构建依赖图来管理模块之间的依赖关系。与 Gulp 和 Grunt 不同，Webpack 更加注重于模块的处理和构建过程的优化。

## 1. 简介

Webpack是一个模块打包工具，它可以将多个模块打包成最终的静态资源文件，如JavaScript、CSS、图片等。Webpack提供了丰富的功能和插件生态系统，可以进行模块化开发、代码分割、按需加载、资源优化等，使前端项目的构建过程更高效和可靠。  

Webpack 的主要优势包括：
- ```模块化支持```：Webpack 支持各种模块化规范，如 CommonJS、ES modules、AMD 等，能够将项目拆分为模块，并按需加载，提高代码的可维护性和复用性。
- ```强大的插件系统```：Webpack 提供了强大的插件系统，使得开发者可以通过插件扩展和定制化构建过程。可以通过各种插件实现代码压缩、文件合并、资源优化等优化操作。
- ```开发环境支持```：Webpack 提供了开发环境下的热重载、模块热替换等功能，能够提高开发效率和调试体验。
- ```强大的生态系统```：Webpack 拥有庞大的社区和丰富的生态系统，有大量的插件和工具可供选择，能够满足各种项目需求。

![webpack-intro.png](/images/webpack-intro.png)

## 2. 安装与使用

### 2.1 安装

接下来我们新建一个文件夹，然后在项目本地安装 webpack 及对应的 cli，

:::warning
注：webpack 也可以全局安装，但一般不推荐全局安装 webpack。这会将你项目中的 webpack 锁定到指定版本，并且在使用不同的 webpack 版本的项目中， 可能会导致构建失败。
:::
  
<br />

```shell

mkdir webpack-demo && cd webpack-demo 

npm init -y

npm i webpack webpack-cli -D
```

```
├── package.json
├── package-lock.json
└── src
    └── index.js
```

然后我们更新一下 ``package.json`` ：

```shell
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"  // 新增
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.87.0",
    "webpack-cli": "^5.1.4"
  }
}
```
接着我们在终端执行 ``npm run build``，webpack 会自动以 ``src`` 目录下的 ``index.js`` 为入口进行打包，并将打包产物放置当前目录下的 dist 路径下：

```shell
├── dist
│   └── main.js
├── node_modules
├── package.json
├── package-lock.json
└── src
    └── main.js
```


### 2.2 使用配置文件

我们在项目下新建 ``webpack.config.js`` 文件来作为 webpack 的配置文件，然后同样执行 ``npm run build``

```javascript
const path = require('path')
module.exports = {
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'main.js', // bundle 文件名
    path: path.resolve(__dirname, 'dist') // bundle 目录
  }
}
```
这一段基本配置，和我们在上一步中直接执行 ``npm run build`` 功能是一样的，都会在当前目录下生成一个 ``dist`` 目录及对应的打包出来的 bundle 文件。
