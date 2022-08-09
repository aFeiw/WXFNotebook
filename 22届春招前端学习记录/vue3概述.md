vue2 与 vue3 对比，vue3 发生了什么改变？

1.响应式使用 proxy 代理与 reflect 反射对象完成

2.增加了很多组合 api,例如生命周期的改变：

beforeCreate -> setup()
created -> setup()
beforeMount -> onBeforeMount
mounted -> onMounted
beforeUpdate -> onBeforeUpdate
updated -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed -> onUnmounted
activated -> onActivated
deactivated -> onDeactivated
errorCaptured -> onErrorCaptured
/\*

###### 1.与 vue 相比，使用 proxy 代替了 defineProtypety

###### 2.重写虚拟 dom 和实现 tree-Shaking

##### 新增特性：

###### 1.Composition(组合 API)

###### 2.setup

###### 3.新组件

###### 4.其他 API 更

\*/
