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

在 NestJS 中，Providers 是一个非常重要的概念，它是由 NestJS 的依赖注入容器（Dependency Injection Container）管理的任何可注入的对象。Provider 可以是服务、中间件、拦截器、过滤器等等，Providers 的主要作用是封装可重用的业务逻辑、数据访问等功能，并且可以在应用程序中通过依赖注入的方式来使用，在 NestJS 中，您可以使用 @Injectable() 装饰器将一个类标记为可注入的 Provider，然后，您可以在模块中使用 providers 属性将其提供给依赖注入容器。。通过使用依赖注入，可以实现组件之间的解耦和更好的可测试性，同时也使得代码更加整洁和易于维护。

三种主要类型的 Providers：

- 1、Services

服务是最常见的 Providers 类型，它们用于封装业务逻辑、数据访问等功能。服务通常在 Controller 或其他服务中进行注入，并在整个应用程序中共享和重用，例如，数据库操作、外部 API 调用等都可以封装在服务中，以下是一个简单的 Service 示例：

```typescript
// example.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  // ...
}

// example.module.ts
import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
@Module({
  providers: [ExampleService],
})
export class ExampleModule {}
```

- 2、Middleware

中间件也是 Providers 的一种类型，中间件是一个功能强大的机制，它允许我们在处理请求和响应之间执行操作，中间件可以在控制器级别、模块级别或全局级别应用。常见的中间件包括身份验证、日志记录、错误处理等，以下是一个简单的日志 Middleware 示例：

```shell
$ nest g middleware middlewares/logger
```

```typescript
// logger.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`Request: ${req.method} ${req.uri}`);
    next();
  }
}

// 消费中间件 app.module.ts
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger/logger.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
```

- 3、filters

过滤器也是 Providers 的一种类型。过滤器用于全局处理异常和响应的转换。它们可以帮助您在响应发送到客户端之前对响应进行修改或在异常发生时返回自定义错误响应，以下是一个简单的日志 Filter 示例：

```shell
nest g filter filters/HttpException
```

```typescript
// http-exception.filter.ts
// http-exception.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message || 'Internal server error',
    });
  }
}

// 全局使用 main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
```



除了上述三种常见的 Providers 类型，我们还可以创建拦截器 (Interceptors)、网关 (Gateways) 等等，这些 Providers 可以根据应用程序的需求实现各种功能，并且通过依赖注入的方式来在应用程序中使用和管理。



