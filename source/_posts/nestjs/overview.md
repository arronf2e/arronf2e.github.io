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

在 NestJS 中，Controller 是一个重要的模块，用于处理传入的 HTTP 请求并返回响应。它负责接收客户端的请求，并将其转发给适当的服务来执行业务逻辑。Controller 类通常包含多个路由处理程序方法，每个方法处理来自不同的 HTTP 方法的请求。

![nest_controller.png](/images/nest_controller.png)

一个常用的 Controller 文件结构如下所示：

```typescript
// user.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
```

在上面的示例中，我们定义了一个名为 UserController 的 Controller 类。@Controller('user') 装饰器指定了这个 Controller 的根路由路径为 /user，这意味着它的路由处理程序方法将处理匹配 /example 的路径请求。
在 UserController 类中，我们定义了五个路由处理程序方法：

- create()：该方法使用 @Post() 装饰器来指定它处理 HTTP POST 请求。它调用了一个名为 create() 的服务方法并返回创建的数据。
- findAll()：该方法使用 @Get() 装饰器来指定它处理 HTTP GET 请求。它调用了一个名为 findAll() 的服务方法并返回所有的数据。
- findOne()：该方法使用 @Get() 装饰器来指定它处理 HTTP GET 请求。它调用了一个名为 findOne() 的服务方法并返回指定id的数据。
- update()：该方法使用 @Patch() 装饰器来指定它处理 HTTP PATCH 请求。它调用了一个名为 update() 的服务方法来更新数据并返回最新的数据。
- remove()：该方法使用 @Delete() 装饰器来指定它处理 HTTP DELETE 请求。它调用了一个名为 remove() 的服务方法来删除指定id的数据。

在 Controller 中，可以使用多种 HTTP 方法装饰器来指定不同的路由处理程序方法，例如 @Get()、@Post()、@Put()、@Delete() 等，还可以使用其他装饰器来处理路径参数、查询参数等。

## 3. Providers