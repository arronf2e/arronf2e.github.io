---
title: PostgreSQL 常用命令
date: 2023-07-25 21:20:27
tags: 
  PostgreSQL
categories:
  数据库
---

PostgreSQL 是一个强大的开源关系型数据库管理系统（RDBMS），它支持大部分SQL标准，并提供了许多高级特性和扩展功能，记录一下常用命令。

## 1. 创建数据库

```shell
$ create database <database-name>
```

## 2. 删除数据库

```shell
$ drop database <database-name>
```

## 3. 创建表

```shell
$ create table <table-name>
```

## 4. 单表简单列查询

```sql
# 所有列
select * from table_name
# 单列
select column_name from table_name
# 多列
select column_name1, column_name2 from table_name
# 连接运算符，合并多列结果
select column_name1 || '' || column_name2 from table_name
# 列别名
select column_name as(可省略) column_name_alias from table_name
```

## 5. ORDER BY 排序

根据排序表达式按升序或降序对SELECT返回的行进行排序，基础语法如下：

```sql
select
	column_name
from
	table_name
order by
	sort_expression1 [ASC | DESC],
        ...
	sort_expressionN [ASC | DESC]
```

在这种语法中：

- 首先，指定要在ORDER BY关键字之后排序的排序表达式，可以是列或表达式。如果要基于多个列或表达式对结果集进行排序，则需要在两列或表达式之间放置逗号（,）来分隔它们；
- 其次，使用ASC选项按升序对行进行排序，使用 DESC 选项按降序对行进行排序。如果省略 ASC 或 DESC 选项，ORDER BY 默认使用 ASC；

PostgreSQL 按以下顺序计算 SELECT 中的子句：FROM、SELECT和ORDER BY。

## 6. DISTINCT 去重

基础语法如下：

```sql
select
   distinct column_name
from
   table_name

-- 多列合并去重
select
   distinct column_name1, column_name2
from
   table_name
```

## 7. WHERE 条件查询

返回表中一个或多个列中的满足指定条件的行，可以使用WHERE；

```sql
-- 满足单个条件
select
    column_name
from
    table_name
where
    condition
  
-- 满足多个条件
select
    column_name
from
    table_name
where
    condition1 and
    ...
    conditionN

-- 满足某个条件
select
    column_name
from
    table_name
where
    condition1 or
    ...
    conditionN

-- 模糊条件 
select
    column_name
from
    table_name
where
    column_name like '%xxxx'

-- 包含条件 
select
    column_name
from
    table_name
where
    column_name in []
```

## 8. LIMIT / FETCH

基础语法如下：

```sql
select
	column_name
from
	table_name
limit count

-- 跳过offset count行查询
select
	column_name
from
	table_name
limit count offset count

-- fetch
select
	column_name
from
	table_name
fetch first count row
```

## 7. 多表查询

### 7.1 内联接  INNER JOIN

内联接是最常用的联接类型。它通过指定连接条件在两个或多个表之间进行关联查询，并返回满足连接条件的行。只有在连接条件匹配的情况下，从两个表中获取匹配的数据。语法为：

```sql
select
    column_name,
    column_name,
    ...
from
    table_name1
inner join table_name2
    on condition;
```

### 7.2 左外联接 LEFT JOIN

左外联接返回左表的所有行，以及满足连接条件的右表的匹配行。如果右表中没有匹配的行，则右表的列值为 NULL。语法为：

```sql
select
    column_name,
    column_name,
    ...
from
    table_name1
left join table_name2
    on condition;
```

### 7.3 右外联接 LEFT JOIN

右外联接与左外联接相反，返回右表的所有行，以及满足连接条件的左表的匹配行。如果左表中没有匹配的行，则左表的列值为 NULL。语法为：

```sql
select
    column_name,
    column_name,
    ...
from
    table_name1
right join table_name2
    on condition;
```

### 7.4 全外联接 FULL OUTER JOIN

全外联接返回两个表中所有的行，如果没有匹配的行，则非匹配表的列值为 NULL。全外联接是左外联接和右外联接的组合。语法为：

```sql
select
    column_name,
    column_name,
    ...
from
    table_name1
full outer join table_name2
    on condition;
```

