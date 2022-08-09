// JS的运行机制
//1. 执行栈最先进入队列的宏任务（一般都是script），执行其同步代码直至结束
//2. 检查是否存在微任务，有则会执行至微任务队列为空
//3. 如果宿主为浏览器。可能会渲染页面
//4. 开始下一轮tick，执行宏任务中的异步代码
// eg：，JavaScript本身没有发起异步请求的能力，也就没有微任务的存在。在ES5之后，JavaScript引入了Promise，这样，不需要浏览器，JavaScript引擎自身也能够发起异步任务了。

// javascript JavaScript是一门单线程语言，即一次只能完成一个任务，若有多个任务要执行，则必须排队按照队列来执行(前一个任务完成,再执行下一个任务)。
setTimeout(() => {
  //宏任务队列1
  console.log("1"); //宏任务队1的任务1 //2

  setTimeout(() => {
    //宏任务队列3(宏任务队列1中的宏任务)
    console.log("2"); ///6
  }, 0);

  new Promise((resolve) => {
    resolve();
    console.log("3"); //宏任务队列1的任务2 //3
  }).then(() => {
    //宏任务队列1中的微任务
    console.log("4"); //4
  });
}, 0);

setTimeout(() => {
  //宏任务队列2
  console.log("5"); //5
}, 0);

console.log("6"); //同步主线程 //1

// 正确答案：6 1 3 4 5 2

// 宏任务指执行栈中待执行的任务，计时器，事件回调，http回调都是宏任务。
// 微任务指执行栈清空后立即执行的任务（VIP通道，贵族就是不一样~），Promise 和 MutationObserver都是微任务。
// 1.先执行同步和立即执行任务，比如说console.log()、new Promise()
// 2.再依次执行微任务，比如说thena ble函数和catchable函数
// 3.当微任务执行完成后开始执行宏任务，比如说定时器、事件回调等
async function async1() {
  console.log("async1 star t"); //2
  await async2();
  console.log("async1 end"); //6
}
async function async2() {
  console.log("async2"); //3
}
console.log("script start"); //1
setTimeout(function () {
  console.log("setTimeout"); //8
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1"); // 4
  resolve();
}).then(function () {
  console.log("promise2"); //7
});
console.log("script end"); //5

//正确答案:
/**
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout

 */

/**
 * 我们说js的引擎是单线程的,首先会执行同步任务或者是立即执行函数(console.log、promise)
 * 然后执行的是微任务队列（promise.then()）
 * 宏任务队列（定时器）
 */
