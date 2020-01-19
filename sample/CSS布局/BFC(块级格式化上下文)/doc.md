BFC：块级格式化上下文，是一个独立的渲染区域

## BFC创建方法
1. **根元素**与包含它的元素
2. **浮动**，（float不为none）
3. **绝对定位**，（position为absolute或fixed）
4. **行内块**，（display: inline-block）
5. **表格单元格** (元素的display: table-cell，HTML表格单元格默认属性)
6. overflow的值不为visible的元素；
7. 弹性盒 flex boxes (元素的display: flex或inline-flex)；

但其中，最常见的就是overflow:hidden、float:left/right、position:absolute。也就是说，每次看到这些属性的时候，就代表了该元素以及创建了一个BFC了。

## BFC特点
1. 内部的盒会在垂直方向一个接一个排列（可以看作BFC中有一个的<font color="red">常规流</font>）；
2. 处于同一个BFC中的元素相互影响，可能会发生<font color="red">margin重叠</font>
3. 每个元素的margin box的左边，与容器块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此；
4. BFC就是页面上的一个<font color="red">隔离的独立容器</font>，容器里面的子元素不会影响到外面的元素，反之亦然；（在不同的BFC中，可以避免margin重叠）
5. 计算BFC的高度时，考虑BFC所包含的所有元素，连浮动元素也参与计算；（可以清除浮动）
6. 浮动盒区域不叠加到BFC上,即BFC的区域不会与float box重叠；(可以阻止元素被浮动元素覆盖和 一侧定宽，一侧自适应) 

## BFC作用
1. 分属于不同的BFC时可以阻止margin重叠
2. BFC可以包含浮动元素——清除内部浮动
3. 可以阻止元素被浮动元素覆盖
3. 两栏布局(一侧定宽，一侧自适应)
