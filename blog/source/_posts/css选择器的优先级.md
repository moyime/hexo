---
title: css选择器的优先级
date: 2019-10-22
tags:
- css
categories: web前端
---

## css选择器
1、id选择器 (#elementName)

2、类别选择器 (.class-name)

3、标签选择器 (div) 

4、通用选择器 (*)

5、后代选择器 (div p)

6、子选择器 (div>p)

7、兄弟选择器 (div+p)

8、属性选择器

9、伪类选择器（虚拟状态）

10、伪元素选择器 （虚拟元素）

11、群组选择器 (div,p)

12、层次选择器 （p~ul：选择前面有p元素的每个ul元素）

### 权重计算规则

第零等：!important， 大过了其它任何设置。

第一等：代表内联样式，如: style=””，权值为1000。

第二等：代表ID选择器，如：#content，权值为100。

第三等：代表类，伪类和属性选择器，如.content，权值为10。

第四等：代表标签选择器和伪元素选择器，如div p，权值为1。

第五等：通配符、子选择器、相邻选择器等的。如*、>、+,权值为0。

第六等：继承的样式没有权值。
