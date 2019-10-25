---
title: css盒模型
date: 2019-10-22
tags:
- css
categories: web前端
---

## 盒模型分为IE盒模型与W3C标准盒模型

### IE盒模型：
* 属性width/height的值会包括（padding+border+content）的值；

* 相当于设置<font color="red">box-sizing: box-border</font>;

* 盒子的大小始终保持为设置的width/height值

### W3C标准盒模型： 
* 属性width/height的值会只包括 content的值；

* 相当于设置<font color="red">box-sizing: box-content</font>;

* 盒子的大小为: content(width/height)+padding+border