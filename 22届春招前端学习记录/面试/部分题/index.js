// 1.手写promise
const PENDING = "pending";
const RESOLVE = "resolve";
const REJECT = "reject";

class MyPromise {
  constructor(callBackPromise) {
    this.state = PENDING;
    this.data = undefined;
    this.errData = undefined;
    this.dataList = [];
    this.errDatalist = [];
    const resolve = (data) => {
      if (this.state == PENDING) {
        this.state = RESOLVE;
        this.data = data;
        this.dataList.forEach((fn) => fn());
      }
    };
    const reject = (errData) => {
      if (this.state == PENDING) {
        this.state = REJECT;
        this.errData = errData;
        this.errDataList.forEach((fn) => fn());
      }
    };

    try {
      callBackPromise(resolve, reject);
    } catch (error) {
      reject(err);
    }
  }
  then(res, err) {
    if (this.state == RESOLVE) {
      res(this.data);
    }
    if (this.state == REJECT) {
      err(this.errData);
    }
    if (this.state == PENDING) {
      this.dataList.push(() => {
        res(this.data);
      });
      this.errDatalist.push(() => {
        err(this.errData);
      });
    }
  }
}

let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  });
});

promise.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
// 1.手写promise.all

Promise.Myall = function (promise) {
  let count = 0;
  let res = [];
  let len = promise.length;
  return new Promise((resolve, reject) => {
    for (const key in promise) {
      res.push(promise[key]);
      count++;
      if ((count = len)) {
        resolve(res);
      }
    }
  });
};

let a = new Promise((resolve, reject) => {
  resolve("S");
});
let b = new Promise((resolve, reject) => {
  resolve("B");
});

Promise.Myall([a, b])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//2.手写防抖节流
//只执行最后一次
function deBunce(fn, dealy) {
  let timer = null;
  return function () {
    if (timer != null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, dealy);
  };
}
//事件结束之后再执行下一个事件，由几次变为一次
function declaer(fn, delay = 500) {
  let flag = true;
  return function () {
    if (flag) {
      setTimeout(() => {
        fn();
        flag = true;
      }, delay);
    }
    flag = false;
  };
}

//3.手写深拷贝
let myFriend = {
  name: "王兴飞",
  son: {
    name: "刘某某",
  },
};
// 1.JSon
let deepClone = function (myFriend) {
  let str = JSON.stringify(myFriend);
  let res = JSON.parse(str);
  return res;
};
//2.遍历赋值
let deepClone2 = function (myFriend) {
  if (typeof myFriend !== "object" || myFriend == null) {
    return myFriend;
  }
  let result;
  if (myFriend instanceof Array) {
    result = [];
  }
  if (Object.prototype.toString.call(myFriend) == "[object Object]") {
    result = {};
  }
  for (const key in myFriend) {
    result[key] = deepClone2(myFriend[key]);
  }
  return result;
};
let his = deepClone(myFriend);
his.son.name = "刘明辉";
console.log(his);
let he = deepClone2(myFriend);
he.son.name = "还是刘明辉";
console.log(he);

//4.settimeout实现setInterval

function myInterval(dealy) {
  let a = 0;
  // let interval = function () {
  //   setTimeout(() => {
  //     interval();
  //    console.log(a++);
  //   }, dealy);
  // };
  function interval() {
    setTimeout(interval, dealy);
    // console.log(1);
  }
  interval();
}

myInterval(1000);

//5.实现new的原理
/**
 * 1.创建了一个新对象
 * 2.把新对象的原型绑定到构造函数的原型上
 * 3.构造函数被执行,this绑定到新的对象上
 * 4.返回新对象
 */
function Person() {
  this.name = "0000";
}
function Mynew() {
  let obj = {};
  let constructor = [].shift.call(arguments);
  obj._proto_ = constructor.prototype;
  let result = constructor.apply(obj, arguments);
  return typeof result === "object" ? result : obj;
}
let wxf = Mynew(Person);
console.log(wxf.name);
//6.实现Ajax
let url = "./json.json";
function ajax(url) {
  let xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.send();
  xhr.onload = function () {
    if (xhr.readyState == 4) {
      console.log(xhr.responseText);
    }
  };
}
//promise封装ajax
function axios(url) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.send();
    xhr.onload = function () {
      if (xhr.readyState == 4) {
        resolve(xhr.responseText);
      }
    };
  });
}
axios(url).then((data) => {
  console.dir(data);
});

//7.简单实现一下vue2的响应式
//8.简单实现一下vue3的响应式
