---
title: a:link  a:visited  a:hover  a:active的正确使用顺序
date: 2019-10-22
tags:
- css
categories: web前端
---
a标签中有四个伪类：link、visited、hover、active

（1）link：设置a对象在未被访问前的样式表属性

（2）visited：设置a对象在其链接地址已被访问过的样式表属性。

（3）hover：设置对象在其鼠标悬停时的样式表属性。

（4）active：设置对象在被用户激活（在鼠标点击与释放之间发生的事件）时的样式表属性。

定义CSS时候的顺序不同，也会直接导致链接显示的效果不同。原因可能在于浏览器解释CSS时遵循的“就近原则”。正确的顺序：<font color="red">a:link、a:visited、a:hover、a:active</font>(便于记忆的“爱恨原则”（LoVe/HAte），即四种伪类的首字母:<font color="red">LVHA</font>)


<font color="red">注意：</font>

1.鼠标经过的“未访问链接”同时拥有a:link、a:hover两种属性，后面的属性会覆盖前面的属性定义；

2.鼠标经过的“已访问链接”同时拥有a:visited、a:hover两种属性，后面的属性会覆盖前面的属性定义；

* 在CSS定义中，a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的。

* 在 CSS 定义中，a:active 必须被置于 a:hover 之后，才是有效的。