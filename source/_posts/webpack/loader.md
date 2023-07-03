---
title: Webpack Loader的学习与使用
date: 2023-06-22 10:46:55
tags: 
  webpack
categories:
  构建工具
---

<!-- Webpack Loader是Webpack的一个重要概念，它用于对模块的源代码进行转换和处理。在Webpack的构建过程中，Loader负责将不同类型的文件转换为可以被Webpack理解和处理的模块。 -->

<!-- more -->

## 1. 什么是 Loader ?

Loader Webpack 理解和处理的模块。例如，当遇到 JavaScript 文件时，可以使用 Babel Loader 将 ES6+ 的语法转换为兼容性更好的 ES5 语法；当遇到 CSS 文件时，可以使用 CSS Loader 将 CSS 文件转换为 JavaScript 对象，再使用 Style Loader 将其注入到页面中。
Loader 支持链式调用，我们可以在 Webpack 配置中按照一定的顺序定义多个 Loader，每个 Loader 都对模块进行一些特定的处理或转换，这种链式调用的方式让我们能够按需对模块进行处理，并且可以根据项目的需要进行灵活配置。

## 2. 常用 loader 及其配置应用

### 2.1 babel-loader

babel-loader 是 Webpack 中用于将新版本的 JavaScript 代码（如ES6+）转换为旧版本（如ES5）的 Loader。它利用了 [``Babel``](https://babeljs.io/) 这个流行的 JavaScript 编译器工具，使我们能够在旧版浏览器中运行使用了最新语法特性的 JavaScript 代码。

安装：

```shell
npm install --save-dev babel-loader @babel/core @babel/preset-env
```

配置：
```javascript
// webpack.config.js
module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配以.js结尾的文件
        exclude: /node_modules/, // 排除node_modules目录下的文件
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']  // 使用@babel/preset-env预设，预设是一组Babel插件的集合，用于指定要使用的语法转换规则，通常使用的是@babel/preset-env预设，它会根据目标浏览器的版本自动选择需要的插件进行转换
          }
        }
      }
    ]
  }
}
```

配置完成后，Webpack 在构建过程中会使用 babel-loader 对所有匹配 test 条件的 JavaScript 文件进行转换。它会根据预设（Presets）的配置将新版本的 JavaScript 代码转换为目标浏览器支持的兼容性更好的代码，转换后的代码将被用于打包和部署。


### 2.2 css-loader style-loader

css-loader 和 style-loader 是在 Webpack 中常用的一对 Loader 组合，它们通常会一起配合使用来处理CSS文件。css-loader 的作用是将 CSS 文件转换为 Webpack 可以理解和处理的模块，它负责解析CSS文件，并处理其中的 @import 和 url() 等引用关系，以及处理样式中的路径和依赖关系;
style-loader 的作用是将 CSS 样式以 ``<style>`` 标签的形式插入到 HTML 页面中。

安装：
```shell
npm install css-loader style-loader -D
```

配置：
```javascript
module.exports = {
  // ...其他配置项
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配以.css结尾的文件
        use: [
          'style-loader', // 将CSS样式注入到页面中的<style>标签
          'css-loader' // 将CSS文件转换为JavaScript模块
        ]
      }
    ]
  }
};
```

### 2.3 sass-loader less-loader

sass-loader 和 less-loader是 Webpack 中用于处理 Sass 和 Less 等预处理器语言的Loader，它们的作用是将Sass和Less文件转换为CSS文件。

- sass-loader 

安装：

```shell
npm install sass-loader dart-sass --save-dev
```

配置：
```javascript
module.exports = {
  // ...其他配置项
  module: {
    rules: [
      {
        test: /\.scss$/, // 匹配以.scss结尾的文件
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  }
};
```

- less-loader

安装：

```shell
npm install less-loader less --save-dev
```

配置：
```javascript
module.exports = {
  // ...其他配置项
  module: {
    rules: [
      {
        test: /\.less/, // 匹配以.less结尾的文件
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      }
    ]
  }
};
```

### 2.4 postcss-loader

postcss-loader 的作用是为 CSS 样式添加自动化的后处理过程。[``PostCSS``](https://www.postcss.com.cn/) 是一个功能强大的 CSS 处理工具，它使用插件机制来处理 CSS，并提供了许多有用的功能，如自动添加浏览器前缀、通过 preset 来转换最新的 CSS语法等，还可以通过使用插件来优化和压缩 CSS 代码，以减少文件大小和提升性能。

安装：

```shell
npm install postcss-loader postcss autoprefixer cssnano --save-dev
```

配置：
```javascript
module.exports = {
  // ...其他配置项
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配以.css结尾的文件
        use: [
          'style-loader', // 将CSS样式注入到页面中的<style>标签
          'css-loader', // 将CSS文件转换为JavaScript模块
          'postcss-loader'
        ]
      }
    ]
  }
};
```

```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')
  ]
};
```

### 2.4 file-loader url-loader 

file-loader 和 url-loader 都是 Webpack 中用于处理文件资源的 Loader，它们的作用是将文件复制到输出目录，并返回文件的引用路径用于在项目中使用，但它们有一点点区别：

``file-loader:``

- 将文件复制到输出目录：file-loader 会将文件复制到 Webpack 输出目录中（一般都是dist目录），并返回文件的引用路径，这样我们就可以在项目中通过该引用路径来访问相应的文件。
- 适用于任何文件类型：file-loader 适用于任何类型的文件，包括图片、字体、音视频文件等。它不仅可以处理文件的复制和路径处理，还可以在处理过程中根据配置对文件进行重命名、指定输出路径等操作。
- 返回文件的引用路径：file-loader 返回文件在输出目录中的相对路径或绝对路径，具体取决于配置。你可以使用该路径来在 HTML、CSS 或 JavaScript 来引用相应的文件。

``url-loader:``

- 将文件转换为 Data URL：与 file-loader 不同，url-loader 可以将文件转换为Data URL格式，将文件内容嵌入到生成的文件中，以 limit 配置为限，小于 limit 体积的文件可以直接以Data URL的形式存在，而不需要生成额外的文件，以此来达到减少 http 请求的优化，大于 limit 的话，
则会使用备用选项来指定的其他 Loader（通常是file-loader）来处理文件。

:::warning
Webpack5 已经使用资源模块(asset module)来替代上面两个 Loader ，这是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 Loader
:::

[资源模块](https://webpack.docschina.org/guides/asset-modules/#root)

配置：
```javascript
module.exports = {
  // ...其他配置项
  module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ]
  }
};
```


### 2.5 thread-loader

thread-loader 的作用是将耗时的 Loader，比如 babel-loader 操作转移到单独的 worker 线程中执行，以提高整体的构建性能。

安装：

```shell
npm install thread-loader --save-dev
```

配置：
```javascript
module.exports = {
  // ...其他配置项
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配以.js结尾的文件
        exclude: /node_modules/, // 排除node_modules目录下的文件
        use: [
          'thread-loader',
          'babel-loader'
        ]
      }
    ]
  }
};
```
