//使用栈，进行十进制转二进制的转换
//10->2
function stack() {
  //数组 or 链表
  this.items = [];
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
function turnNum(numOf10) {
  //传入十进制
  let stacks = new stack();
  //循环操作
  while (numOf10 > 0) {
    //获取余数放入栈中
    stacks.push(numOf10 % 2);
    //获取整除之后的结果，作为下一次运算
    numOf10 = Math.floor(numOf10 / 2);
  }
  //从栈中取出0.1
  let numString = "";
  while (!stacks.isEmpty()) {
    numString += stacks.pop();
  }
  return numString;
}

//测试
// 十进制转二进制
console.log(turnNum(100));
console.log(turnNum(1000));
console.log(turnNum(100000));
