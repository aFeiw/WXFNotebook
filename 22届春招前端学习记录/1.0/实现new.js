/**
 * new
 * 1.创建一个新对象
 * 2.this指向新对象，执行构造函数的代码
 * 3.设置原型链,_proto_指向prototype对象
 * 4.判断：如果你传回的对象类型是一个新对象，它会返回一个新对象；
 *   (返回新对象 or 直接返回)
 */

console.log(obj2);
function myNew() {
  //创建一个新对象
  let obj = new Object();
  //新对象的prototype特性被赋值为构造函数的prototype
  //取出第一个参数，获取构造函数
  let constructor = Array.prototype.shift.call(arguments);
  //连接原型，新对象可以访问原型链的属性
  obj._proto_ = constructor.prototype;
  //执行构造函数，绑定this,并且为这个新对象添加属性
  let resut = constructor.apply(obj, arguments);

  return typeof resut === "object" ? resut : obj;
}

// --------------测试---------------
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log("I am " + this.name);
  };
}
// let person1 = new Person("Star", 20);
// console.log(person1.name);
// console.log(person1.age);
// person1.say();

let person2 = myNew(Person, "Star", 20);
console.log(person2.name);
console.log(person2.age);
person2.say();

function fn(a, c) {
  console.log(a); //a=1
  var a = 123;
  console.log(a); //a =123
  console.log(c); //c= 2
  if (false) {
    var d = 678;
  }
  console.log(d); //underfind
  console.log(b); //underfind
  var b = function () {};
  console.log(b); //functionb
  function c() {}
  console.log(c); //function c
}
fn(1, 2);

// function myNew22() {
//   let obj = {};
//   let constructor = [].shift.call(arguments);
//   obj._proto_ = constructor.prototype;
//   //执行构造函数，绑定this,并且为这个新对象添加属性
//   let res = constructor.apply(obj, arguments);
// }
