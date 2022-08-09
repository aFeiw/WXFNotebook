//基于数组实现队列

// 、、封装对象类

function Queue() {
  //属性
  this.itmes = [];
  //方法
  // 1.进入队列
  Queue.prototype.enqueue = function (element) {
    this.itmes.push(element);
  };
  // 2.删除前端元素
  Queue.prototype.delqueue = function () {
    //删除第一个元素
    return this.itmes.shift();
  };
  // 3.返回队列中第一个元素
  Queue.prototype.queueone = function () {
    return this.itmes[0];
  };
  // 4.判断队列是否为空
  Queue.prototype.isEmpty = function () {
    return this.itmes.length == 0;
  };
  // 5.查看队列中元素的个数
  Queue.prototype.size = function () {
    return this.itmes.length;
  };
  // 6.toString()
  Queue.prototype.toString = function () {
    let result = "";
    for (let items of this.itmes) {
      result += items;
    }
    return result;
  };
}

//使用队列

let queue = new Queue();

queue.enqueue(10);
queue.enqueue("10");
queue.enqueue("a");
queue.enqueue("bc");
console.log(queue);
queue.toString();
console.log(queue.toString() instanceof String);
