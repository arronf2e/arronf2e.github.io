---
title: FastAPI PostgreSQL 实现 CRUD
date: 2021-08-21 10:30:05
tags: 
  FastAPI
categories:
  后端技术
---

使用 FastAPI 构建一个CRUD RESTful API，对 PostgreSQL 数据库执行增删改查操作。

<!-- more -->

## 1. 实现结果

|  资源   | 请求方式  |  API   | 描述  | 
|  ----   |   ----  |  ----  | ---- |
| users  | GET | /api/users | 获取所有用户 |
| users  | POST| /api/users | 创建一篇用户 |
| users  | GET | /api/users/:postId | 根据id获取用户详情 |
| users  | PUT | /api/users/:postId | 根据id更新用户详情 |
| users  | DELETE| /api/users/:postId | 根据id删除用户 |


## 2. 创建FastAPI项目

直接使用 PyCharm 来创建 FastAPI 项目：

![fastapi_create.png](/images/fastapi_create.png)

## 3. 通过 Docker 搭建 PostgreSQL

在根项目中创建 docker-compose.yml 文件并添加以下配置：

```javascript
// docker-compose.yml
version: '3'
services:
  postgres:
    image: postgres
    container_name: postgres
    ports:
      - '5432:5432'
    restart: always
    env_file:
      - ./.env
    volumes:
      - postgres-db:/var/lib/postgresql/data
volumes:
  postgres-db:
```

然后新建.env文件来保存我们项目中的环境变量：

```shell
# .env
DATABASE_PORT=5432
POSTGRES_PASSWORD=passwordcrud
POSTGRES_USER=postgres
POSTGRES_DB=fastcrud
POSTGRES_HOST=postgres
POSTGRES_HOSTNAME=127.0.0.1
```

接着，使用以下命令启动 PostgreSQL Docker 容器：

```shell
$ docker-compose up -d
```

![fastapi_crud_docker_start](/images/fastapi_crud_docker_start.png)

看到这样的提示的话，说明我们的容器已经启动成功了！❤️

## 4. 数据库连接

接下来，我们需要配置自定义类来读取配置文件，现在创建一个 ``app/config.py`` 文件并添加自定义设置类，我们需要安装一个 pydantic-settings 包，它用于从环境变量加载设置或配置类：

```shell
$ pip install pydantic-settings
```

```python
# app/config.py

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DATABASE_PORT: int
    POSTGRES_PASSWORD: str
    POSTGRES_USER: str
    POSTGRES_DB: str
    POSTGRES_HOST: str
    POSTGRES_HOSTNAME: str

    class Config:
        env_file = './.env'


settings = Settings()
```

然后我们安装两个包，一个是 pg 的适配器 psycopg2，以及 ORM SQLAlchemy

```shell 
$ pip install sqlalchemy psycopg2-binary databases
```

安装完成后，我们新建  ``app/database.py`` 文件来连接 PostgreSQL 服务器：

```python
# app/database.py
from fastapi import FastAPI
from sqlalchemy import create_engine, MetaData
from sqlalchemy.orm import declarative_base, sessionmaker
import databases

from app.config import settings

DATABASE_URL = f"postgresql://{settings.POSTGRES_USER}:{settings.POSTGRES_PASSWORD}@{settings.POSTGRES_HOSTNAME}/{settings.POSTGRES_DB}"

# 创建数据库连接对象
database = databases.Database(DATABASE_URL)
engine = create_engine(DATABASE_URL)
metadata = MetaData(DATABASE_URL)

# 创建会话工厂
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 创建基类模型
Base = declarative_base(metadata=metadata)
```

启动和关闭数据库连接： 在 FastAPI 应用程序中，创建一个启动事件和关闭事件，用于在应用程序启动和关闭时处理数据库连接的打开和关闭：

```python
# main.py
from fastapi import FastAPI
from app.database import database

app = FastAPI()

@app.on_event("startup")
async def startup():
    await database.connect()
    try:
        result = await database.fetch_one("SELECT version()")
        print(f"Connected to PostgreSQL. Server version: {result['version']}")
    except Exception as e:
        print(f"Failed to connect to PostgreSQL: {e}")
    finally:
        await database.disconnect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/")
async def root():
    return {"message": "Hello World"}

```


## 5. 使用 SQLAlchemy 创建数据库模型

```python
# app/models.py
import uuid

from sqlalchemy import TIMESTAMP, Column, String, text
from sqlalchemy.dialects.postgresql import UUID

from database import Base


class User(Base):
    __table_name__ = 'users'
    id = Column(UUID(as_uuid=True), primary_key=True, nullable=False, default=uuid.uuid4)
    username = Column(String, nullable=False)
    username = Column(String, unique=True)
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("now()"))
    updated_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("now()"))
```

## 5. 使用 Pydantic 创建校验规则

```python
# app/schemas.py
from pydantic import BaseModel

class UserBaseSchema(BaseModel):
    username: str
    email: str

    class Config:
        from_attributes = True


class CreateUserSchema(UserBaseSchema):
    pass
```

## 6. 创建 Controller

```python
# app/routers/user.py
from fastapi import APIRouter
from starlette import status

from app.database import SessionLocal
from app.models import User
from app.schemas import CreateUserSchema

router = APIRouter()

from fastapi import APIRouter
from starlette import status

from app.database import SessionLocal
from app.models import User
from app.schemas import CreateUserSchema

router = APIRouter()

@router.post('/', status_code=status.HTTP_201_CREATED)
def create_user(user: CreateUserSchema):
    db = SessionLocal()

    # 创建用户对象
    db_user = User(username=user.username, email=user.email)

    # 添加用户到会话并提交
    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    # 返回创建的用户
    return db_user
```