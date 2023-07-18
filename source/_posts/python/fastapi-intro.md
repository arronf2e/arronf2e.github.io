---
title: FastAPI 入门介绍
date: 2021-08-20 15:46:53
tags: 
  FastAPI
categories:
  后端技术
---

FastAPI 是一个现代化的 Python Web 框架，用于构建高性能的 Web 应用程序和 API。它基于 Python 3.7+ 中的异步框架 starlette，并提供了简单、快速和易于使用的方式来创建 Web 服务。

<!-- more -->

## 1. 特点和优势：

- 高性能：FastAPI 基于异步编程模型，利用 Python 3.7+ 中引入的 asyncio 和 await 特性，以及 starlette 框架的异步支持，实现了卓越的性能和并发处理能力；
- 快速开发：FastAPI 提供了简洁且易于理解的 API，可以快速定义路由、请求验证、数据序列化和文档生成等功能，从而加快了开发速度；
- 类型注解和自动文档生成： FastAPI 使用 Python 3.7+ 的类型注解特性，可以提供静态类型检查和自动文档生成。它使用 Pydantic 库来处理数据验证和序列化，并基于 API 路由的定义自动生成交互式文档（如 Swagger UI 和 ReDoc）；
- 规范标准：FastAPI 遵循 OpenAPI（以前称为 Swagger）和 JSON Schema 等标准，使得它与其他工具和服务（如 Swagger UI、ReDoc、自动化测试和代码生成工具）的集成更加容易；
- 强大的请求处理：FastAPI 支持请求参数的自动解析和验证，可以处理路径参数、查询参数、请求体、表单数据、文件上传等各种类型的请求数据；
- WebSocket 支持：FastAPI 内置对 WebSocket 的支持，可以轻松处理实时双向通信的需求；
- 安全性：FastAPI 提供了内置的身份验证和授权支持，可以轻松集成认证方案，如 OAuth2、JWT 等；


## 2. 安装与运行

```shell
$ pip install fastapi
$ pip install "uvicorn[standard]"
```

```python
# main.py

from typing import Union

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

```

```shell
$ uvicorn main:app --reload

INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [28720]
INFO:     Started server process [28722]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```