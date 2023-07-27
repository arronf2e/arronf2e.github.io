---
title: Nest 核心模块介绍
date: 2023-07-21 13:43:27
tags: 
  Nest
categories:
  后端技术
---

在 NestJS 中，有几个重要的核心模块，它们是构建应用程序所必需的。这些模块包括：

## 1. 根模块（Root Module）

根模块是 NestJS 整个应用程序的入口，并用于组织和加载其他模块。根模块通常包含一些全局配置、中间件和全局引导等。在根模块中，至少需要一个控制器和一个服务，以便 NestJS 知道如何处理传入的请求。

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

## 2. Controllers 控制器

控制器负责处理传入的请求和向客户端返回响应。

