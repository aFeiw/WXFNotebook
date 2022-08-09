//

let Vue;
class Store {
  constructor(options) {
    this.options = options;
    this.state = new Vue({
      data: options.state,
    });
  }
}

function install(_vue) {
  Vue = _vue;
  //混人挂载在生命周期的各个阶段
  _vue.mixins({
    beforeCreate() {
      if (this.$options.store) {
        _vue.prototype.$store = this.$options.store;
      }
      console.log(this);
    },
  });
}

export default {
  Store,
  install,
};
