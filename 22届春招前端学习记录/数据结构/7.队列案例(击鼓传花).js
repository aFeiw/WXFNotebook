//基于数组实现队列

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

//淘汰制

function gamePeople(peopleTotal, num) {
  //1.创建一个队列
  let queue = new Queue();
  //2.将所有人加入队列
  for (let people of peopleTotal) {
    queue.enqueue(people);
  }

  while (queue.size() > 1) {
    //3.开始数数，当对应num，淘汰
    //不是num的时候，重新加入队列的末尾
    for (let i = 0; i < num - 1; i++) {
      //num之前的人重新加入队列
      queue.enqueue(queue.delqueue());
    }
    //num对应的人，直接删除；
    queue.delqueue();
  }
  //4.获取剩余的人
  let endNum = queue.queueone();
  console.log("获胜者：" + endNum);
  return peopleTotal.indexOf(endNum);
}

// 测试
let name = ["王兴飞", "娄永成", "彭思远", "冰敦敦", "憨憨额"];
console.log(gamePeople(name, 3));
