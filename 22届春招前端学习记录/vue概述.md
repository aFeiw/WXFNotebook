1.阐述一下你所理解的 mvvm？
vue 是采用数据劫持，配合发布-订阅模式的方式,通过 Object.definerproperty()来劫持各个属性的 setter 和 getter，在数据变动时，发布消息给依赖收集器，去通知观察者更新，做出对应的回调函数去更新视图；

<!--

Object.defineprotoptye()

class dep{
  依赖收集  []
  addSub(
    //添加订阅者方法
  )

  notify(
    发布通知的方法(通知到每个订阅者)
  )

}

class wather{
   //通知订阅者更新
}



当监听到数据变化的时候，我们会调用dep.noyify()方法去通知wather进行update()

 -->

2.什么是虚拟 dom？
虚拟 dom 就是用 js 模拟我们的 dom;
diff 算法是比较 dom 树的同一级,比较标签名，比较 key

2.vue 的生命周期？vue 生命周期的执行顺序：
vue 的实例从创建到销毁就是生命周期，主要分为八个阶段：创建前后，载入前后，更新前后，销毁前后，以及一些 keeplive 的两个生命周期：组件激活与组件停用

3.Vnode 是什么，它们又是怎么渲染的？
当我们在做 diff 算法的时候，新老节点，就叫做 vnode;

4.keepalive 生命周期？原理？
.activated 和 deactivated
原理： created 时将需要缓存的 VNode 节点保存在 this.cache 中／在 render 时,如果 VNode 的 name 符合在缓存条件（可以用 include 以及 exclude 控制），则会从 this.cache 中取出之前缓存的 VNode 实例进行渲染。
5.computed 和 watch 监听的区别？

computed 支持缓存，只有依赖数据发生改变，才会重新进行计算
不支持异步，当 computed 内有异步操作时无效，无法监听数据的变化
computed 属性值会默认走缓存，计算属性是基于它们的响应式依赖进行缓存的，也就是基于 data 中声明过或者父组件传递的 props 中的数据通过计算得到的值
如果一个属性是由其他属性计算而来的，这个属性依赖其他属性，是一个多对一或者一对一，一般用 computed
如果 computed 属性值是函数，那么默认会走 get 方法；函数的返回值就是属性的属性值；在 computed 中的，属性都有一个 get 和一个 set 方法，当数据变化时，调用 set 方法

watch 支持异步；
监听的函数接收两个参数，第一个参数是最新的值；第二个参数是输入之前的值；
当一个属性发生变化时，需要执行对应的操作；一对多；
监听数据必须是 data 中声明过或者父组件传递过来的 props 中的数据

## vue 的双向绑定原理

它的实现是基于 Object.defineProperty(),对 data 的每个属性进行了 set、get 的拦截
