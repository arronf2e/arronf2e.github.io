---
title: Webpack Loader 实现原理
date: 2023-06-23 17:46:40
tags: 
  webpack
categories:
  构建工具
---

## 1. Loader是什么

前一篇介绍 Loader 的文章我们已经介绍过了，这边就不重复了~

## 2. Loader链式调用

理解 Loader 的加载顺序对于我们去了解其实现原理非常重要。Webpack 在解析模块的时候，根据文件的后缀名或规则匹配对应的 Loader ，并按照配置中的顺序依次应用。Webpack会``从右向左、从下到上``的顺序链式调用 Loader，当一个 Loader 执行时，它可以对文件内容进行处理并返回结果，然后 Webpack 将处理结果传递给下一个Loader作为它的输入， 下一个 Loader 继续对处理结果进行转换和处理，依此类推，直到 Loader 链的末尾，Loader链的最后一个 Loader 将返回最终处理后的内容，交给 Webpack 进行后续的模块解析和打包。

## 3. Loader的实现方式

Webpack Loader的实现方式非常灵活，主要有两种方式：通过导出一个函数或通过导出一个Loader对象。

### 3.1 函数式 Loader

这种方式是最简单的 Loader 实现方式。Loader 函数接收源文件内容作为输入，通过对内容进行处理后，返回新的内容作为输出。我们可以在函数中使用各种工具、正则表达式、解析器等来处理文件内容。

```javascript
module.exports = function(source) {
  const options = this.getOptions(); // loader context 是指在 loader 内使用 this 可以访问的一些方法或属性。
  // 处理文件内容的逻辑
  let transformSource = source
  // 返回处理后的内容
  return transformSource
}
```

### 3.2 对象式Loader

相比于函数式 Loader，对象式 Loader 提供了更多的灵活性和可配置性。Loader 对象中必须包含一个 pitch 方法和一个 loader 方法。pitch 方法用于在文件被其他 Loader 处理之前，提前执行的逻辑。loader 方法是 Loader 的核心，用于进行文件内容的转换和处理。

```javascript
module.exports = {
  pitch: function(remainingRequest, precedingRequest, data) {
    // pitch方法的处理逻辑
    // 可以进行一些预处理或提前返回结果
  },
  loader: function(content, map, meta) {
    // loader方法的处理逻辑
    // 进行文件内容的转换和处理
    // 返回处理后的内容
    return transformedContent;
  }
}
```

### 3.3 在 Webpack 中如何使用自定义 Loader

```javascript
module.exports = {
  // ...其他配置项
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')], // loaders 为当前项目根目录下存储 loaders 的文件夹，可自行定义
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'your-loadername',
        ]
      }
    ]
  }
};
```

## 4. 缓存和性能优化
为了提高构建性能，Webpack 会对经过 Loader 处理的文件进行缓存。当文件内容没有发生变化时，Webpack 会直接使用缓存结果，避免重复处理。同时，Loader 也可以通过配置 cacheable 选项来指定是否支持缓存，以及通过设置 loader-runner 的 pitchExecuted 选项来控制是否执行pitch方法。
