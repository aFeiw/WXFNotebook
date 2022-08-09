1.::before 和:after 的双冒号和单冒号有什么区别?作用？
单冒号(:)用于 CSS3 伪类，
双冒号(::)用于 CSS3 伪元素。（伪元素由双冒号和伪元素名称组成）
伪类：一般匹配元素的状态，如 hover、link 等等
伪元素：一般匹配的是特殊位置，after,before
伪类和伪元素是为了修饰文档数中不存在的部分

2.displsy 有哪些值，并说明他们的作用？
displsy：block/inline-block/inline/none/flex/List/table(块级表格)

3.position abloute 成绝对定位的元素(最近的子级的 position 设置为 absolute/releative 父元素的左上角为原点)

4.width:auto 和 100% 有什么区别？
width：100%的宽度会等于父元素 content 的宽度
width：auto 撑满整个父元素(margin,padding,自动分配水平空间)

5.为什么不建议使用通配符初始化 css 样式？
通配符会把所有的标签遍历一般，当网站过大时，由于样式比较多，会加大网络的负载；

5.rem 布局的优缺点
优：只要将 rem 与屏幕分辨率关联起来，就会实现页面缩放
缺：部分设备不支持，在多屏幕上的分配不明确

6.BFC
形成一个独立的渲染区域，保证内部元素的渲染不会影响外界
\*float 元素 \*绝对定位元素\*overflow:hidden\*flex\*inline-nolck
应用场景：清除浮动
