// 自定义指令也像组件那样存在钩子函数：
// （注册指令：derective：{}）
// bind()：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置

// inserted(el,binding)：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)

// update()：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新

// componentUpdated()：指令所在组件的 VNode 及其子 VNode 全部更新后调用

// unbind()：只调用一次，指令与元素解绑时调用

// 例子：
// 输入框防抖
// 防抖这种情况设置一个v-throttle自定义指令来实现：

// 设置v-throttle自定义指令
Vue.directive("throttle", {
  bind: (el, binding) => {
    let throttleTime = binding.value; // 防抖时间
    if (!throttleTime) {
      // 用户若不设置防抖时间，则默认2s
      throttleTime = 2000;
    }
    let cbFun;
    el.addEventListener(
      "click",
      (event) => {
        if (!cbFun) {
          // 第一次执行
          cbFun = setTimeout(() => {
            cbFun = null;
          }, throttleTime);
        } else {
          event && event.stopImmediatePropagation();
        }
      },
      true
    );
  },
});
// 为button标签设置v-throttle自定义指令
{
  /* <button @click="sayHello" v-throttle>提交</button> */
}
