* clientHeight: （当前元素的可见高度）包括padding但不包括border、水平滚动条、margin的元素的高度。对于inline的元素这个属性一直是0，单位px，只读元素。
* offsetHeight: （当前元素的可见高度）包括padding、border、水平滚动条，但不包括margin的元素的高度。对于inline的元素这个属性一直是0，单位px，只读元素。
* scrollHeight: （包括了当前元素的可见和不可见高度），包括padding,不包括border和margin。而可见部分的高度其实就是clientHeight，也就是scrollHeight>=clientHeight恒成立。在有滚动条时讨论scrollHeight才有意义，在没有滚动条时scrollHeight==clientHeight恒成立。单位px，只读元素。
* scrollTop: 在有滚动条时，元素顶部被遮住部分（滚出顶部的部分）的高度（也就是滚动条向下滚动的距离）。在没有滚动条时scrollTop==0恒成立。单位px，可读可设置。
* offsetTop: 当前元素顶部距离该元素最近的position不为static的祖先元素（如果没有则指向body元素）的距离,和有没有滚动条没有关系。单位px，只读元素。
* window.innerWidth, window.innerHeight：只读。视口（viewport）的尺寸，包含滚动条
* Element.getBoundingClientRect()：只读，返回浮点值。这个方法非常有用，常用于确定元素相对于视口的位置。该方法会返回一个DOMRect对象，包含left, top, width, height, bottom, right六个属性：
   1. left, right, top, bottom：都是元素（不包括margin）相对于视口的原点（视口的上边界和左边界）的距离。
   2. height, width：元素的整体尺寸，包括被滚动隐藏的部分；padding和border参与计算。另外，heigth=bottom-top, width=right-left。

页面上一个没有滚动条的元素，他的clientHeight、offsetHeight、scrollHeight三个值是相等的