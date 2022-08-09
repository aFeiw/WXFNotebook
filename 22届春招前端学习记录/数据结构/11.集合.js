// 集合;
// 集合最常见的实现方式是哈希表
/**
 * 集合的元素是无序的，且不重复
 *
 */

// ES6中的set类
function Set() {
  //属性
  this.items = {};

  //方法
  Set.prototype.add = function (value) {
    if (this.has(value)) {
      return false;
    } else {
      this.items = { ...value };
    }
  };
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value);
  };
}

let set = new Set();
