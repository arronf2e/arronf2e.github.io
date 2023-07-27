---
title: Nest 入门介绍
date: 2023-07-21 13:43:27
tags: 
  Nest
categories:
  后端技术
---

NestJS 是一个用于构建高效、可扩展、服务器端应用程序的框架。它基于 TypeScript，并且受到了 Angular 框架的启发。NestJS 提供了一种优雅且模块化的方式来构建复杂的应用程序，尤其适用于构建 RESTful API、Websockets、GraphQL 服务以及类似的后端服务。

## 1. 主要特性和用途：

- TypeScript：NestJS 使用 TypeScript，这意味着我们可以利用静态类型检查和更好的代码组织来编写应用程序。

- 模块化架构：NestJS 鼓励使用模块化的方式组织代码，使得应用程序易于扩展和维护。

- 控制器和路由：NestJS 提供了类似于 Express.js 的路由系统，您可以通过创建控制器来处理传入的请求。

- 依赖注入：NestJS 内置了依赖注入容器，使得组件的管理和解耦更加容易。

- 中间件：您可以使用中间件来在请求处理的不同阶段添加功能，例如身份验证、日志记录等。

- 异常处理：NestJS 提供了统一的异常处理机制，方便处理在应用程序中发生的异常。

- 数据库集成：NestJS 可以与多种数据库进行集成，包括 TypeORM、Sequelize、Mongoose 等。

- WebSocket 支持：NestJS 支持 WebSocket 协议，使得构建实时通信功能变得更加简单。

- GraphQL：NestJS 对 GraphQL 提供了原生支持，使得构建灵活的 API 更加容易。

总的来说，NestJS 是一个强大的后端框架，适用于构建各种类型的服务器端应用程序，从简单的 API 服务到复杂的实时 Web 应用都可以使用它。它的模块化架构和 TypeScript 支持使得团队合作更加高效，并且能够帮助您更好地组织和管理代码。

## 2. 安装及初始化项目

```shell
$ npm i -g @nestjs/cli
$ nest new project-name
$ cd project-name && npm start
```

打开浏览器并访问到 http://localhost:3000/

## 3. Nest CLI（NestJS

Nest CLI（NestJS Command Line Interface）是一个用于快速创建和管理 NestJS 应用程序的命令行工具，它提供了一些常用的命令，用于加速开发过程和提高生产效率，以下是一些常用的 Nest CLI 命令及其作用：

```shell
# 创建一个新的 NestJS 项目
$ nest new <project-name>

# 创建一个新的模块
$ nest g module <module-name>

# 创建一个新的控制器
$ nest g controller <controller-name>

# 创建一个新的服务
$ nest g service <service-name>

# 创建一个新的管道，管道用于转换输入数据或验证数据
$ nest g pipe <pipe-name>

# 创建一个新的拦截器，拦截器用于在请求和响应之前进行处理
$ nest g interceptor <interceptor-name>

# 创建一个新的过滤器，过滤器用于处理异常和响应的转换
$ nest g filter <filter-name>：

# 使用 TypeORM 进行数据库迁移
$ nest migrate
```

这些命令是 Nest CLI 中一些常用的命令。您可以通过运行 ``nest --help`` 或 ``nest <command> --help`` 来获取更多关于每个命令的详细信息和选项，使用 Nest CLI，我们可以更加便捷地创建、管理和开发 NestJS 应用程序。
