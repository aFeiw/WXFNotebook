//封装我们的栈类
function stack() {
  //数组 or 链表
  this.items = [];
  //栈的相关操作:
  //1.将元素压入到栈
  stack.prototype.push = function (element) {
    this.items.push(element);
  };
  //2.从栈中取出元素
  stack.prototype.pop = function () {
    return this.items.pop();
  };
  //3.查看一下栈顶元素
  stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  };
  //4.判断栈是否为空
  stack.prototype.isEmpty = function () {
    return this.items.length == 0;
  };
  //5.获取战场中元素的个数
  stack.prototype.size = function () {
    return this.items.length;
  };
  //6.toString方法
  stack.prototype.toString = function () {
    let resultString = "";
    for (let item of this.items) {
      resultString += item;
    }
    return resultString;
  };
}
//栈的使用
let s = new stack();
s.push(20);
s.push(320);
s.push(100);
console.table(s);
s.toString();
console.log(s.toString());
console.table(s);
