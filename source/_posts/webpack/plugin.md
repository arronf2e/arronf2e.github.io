---
title: Webpack Plugin的学习与使用
date: 2023-06-24 10:46:55
tags: 
  webpack
categories:
  构建工具
---

<!-- Webpack Loader是Webpack的一个重要概念，它用于对模块的源代码进行转换和处理。在Webpack的构建过程中，Loader负责将不同类型的文件转换为可以被Webpack理解和处理的模块。 -->

<!-- more -->

## 1. 什么是 plugin ?

Webpack 插件是用于扩展和定制 Webpack 功能的 JavaScript 模块。它们与 Webpack 的构建过程密切相关，可以在不同的构建阶段执行特定的任务，例如优化代码、生成文件、处理资源等。

## 2. Webpack 打包生命周期

Webpack的打包生命周期可以分为以下几个阶段：

``初始化阶段（Initialization）  ``

  - 解析配置文件：Webpack读取并解析配置文件，确定构建的入口、输出等配置；
  - 实例化Compiler：Compiler 模块是 webpack 的主要引擎，它通过 CLI 或者 Node API 传递的所有选项创建出一个 compilation 实例。它扩展（extends）自 [``Tapable``](https://github.com/webpack/tapable) 类，用来注册和调用插件。大多数面向用户的插件会首先在 Compiler 上注册；
  

``编译阶段（Compilation）``

  - 编译模块：Webpack根据入口文件，递归地解析依赖关系，生成模块；
  - 执行Loader：对模块应用配置中定义的Loader进行转换和处理；
  - 构建依赖图：根据模块的依赖关系构建依赖图，确定模块之间的依赖关系；

``完成编译阶段（Seal Compilation）``

  - 生成编译结果：将所有模块转换后的结果和依赖图整合，生成编译结果；
  - 触发额外的编译操作：根据需要，可能触发额外的编译操作，如热模块替换（HMR）；

``输出阶段（Output）``

  - 输出文件：将编译结果输出到指定的输出目录，生成最终的静态资源文件；

  在每个阶段，Webpack 会触发一系列的事件（Hooks），插件可以监听这些事件并执行相应的逻辑。常见的Webpack生命周期事件包括：

  - beforeRun/beforeCompile：在编译开始前触发；
  - compile：编译开始时触发；
  - thisCompilation：在每次新的编译创建时触发；
  - compilation：在每次编译创建完成后触发；
  - done：整个编译过程完成时触发；

  所有的 compiler 钩子可以在官网查看 [https://webpack.docschina.org/api/compiler-hooks/#afteremit](https://webpack.docschina.org/api/compiler-hooks/#afteremit)

## 3. 常用 plugin 及其配置应用

### 3.1 HtmlWebpackPlugin

用于自动生成HTML文件，并将打包后的资源自动注入到HTML中。它简化了手动创建 HTML 文件的过程，同时提供了一些额外的功能，如压缩HTML、指定模板文件、自定义输出文件名等。


### 3.2 MiniCssExtractPlugin

用于将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载；

### 3.3 CleanWebpackPlugin

用于清理输出目录中的旧文件，确保每次构建都能生成新的输入目录；

:::warning
注：webpack5中已移除，使用 output 中的 clean 配置即可清除 dist 目录 
:::

```javascript
output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist'),
  clean: true, // 在生成文件之前清空 output 目录
},
```

### 3.4 DefinePlugin

用于在编译时将你代码中的变量替换为环境变量，版本信息等配置信息；

```javascript
new webpack.DefinePlugin({
  PRODUCTION: JSON.stringify(true),
  VERSION: JSON.stringify('1.0.0'),
});
```

### 3.5 HotModuleReplacementPlugin

用于启用热模块替换（Hot Module Replacement），热模块替换是一种开发时的特性，它允许在应用程序运行过程中，无需刷新整个页面，只替换发生变化的模块，以实现快速的代码更新和实时预览。

HMR插件的实现原理如下：

- 客户端连接：

  HMR插件会在Webpack构建后生成一个运行时客户端，该客户端通过WebSocket与Webpack开发服务器建立连接；

- 监听模块更新：

  HMR插件会在Webpack编译阶段，将需要进行热替换的模块标记为可被接受更新的模块，插件会为这些模块添加监听，以便在模块发生变化时通知客户端；

- 通知客户端：

  当一个模块发生变化时，Webpack会通过WebSocket向运行时客户端发送更新通知，客户端接收到更新通知后，会向Webpack开发服务器发送Ajax请求，获取更新的模块代码；

- 模块替换：

  客户端在接收到新的模块代码后，会利用Webpack的模块热替换接口，将新的模块代码替换掉旧的模块，替换过程中，保留模块的状态（例如表单输入、组件的状态等），以便在替换完成后恢复到之前的状态；

- 更新界面：

  客户端在成功替换模块后，会通知应用程序的其他部分，以便更新界面和执行其他逻辑。