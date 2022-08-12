/**
 * 一、手写ajax
 * */
Object.p;

function myAjax(url) {
  let xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.send();
  xhr.onload = () => {
    // 0	UNSENT	代理被创建，但尚未调用 open() 方法。
    // 1	OPENED	open() 方法已经被调用。
    // 2	HEADERS_RECEIVED	send() 方法已经被调用，并且头部和状态已经可获得。
    // 3	LOADING	下载中； responseText 属性已经包含部分数据。
    // 4	DONE	下载操作已完成
    if (xhr.readyState === 4) {
      let data = xhr.responseText;
      JSON.parse(JSON.stringify(data));
      // document.write(data);
      console.dir(data);
    }
  };
}
/**
 * 二、手写promise
 * */
const PENDING = "pending";
const RESOLVE = "resolve";
const REJECT = "reject";
class myPromise {
  constructor(callBack) {
    this.state = PENDING;
    this.data = undefined;
    this.data2 = undefined;
    this.dataList = [];
    this.data2List = [];

    const resolve = (data2) => {
      if (this.state == PENDING) {
        this.state = RESOLVE;
        this.data = data2;
        this.data2List.forEach((fn) => fn());
      }
    };
    const reject = (data) => {
      if (this.state == PENDING) {
        this.state = REJECT;
        this.data2 = data;
        this.dataList.forEach((fn) => fn());
      }
    };
    try {
      callBack(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(res, err) {
    if (this.state === RESOLVE) {
      console.log("resolve...");
      res(this.data);
    }
    if (this.state === REJECT) {
      console.log("reject...");
      err(this.data2);
    }
    if (this.state === PENDING) {
      this.dataList.push(() => {
        res(this.data);
      });
      this.data2List.push(() => {
        err(this.data2);
      });
    }
  }
}

let promise = new myPromise((resolve, reject) => {
  reject("daied");
});
promise.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);

/**
 * 三、手写promise.all
 *
 * */
Promise.myAll = function (promise) {
  let cont = 0;
  let len = promise.length;
  let result = [];
  return new Promise((resolve, reject) => {
    for (const val of promise) {
      cont++;
      result.push(val);
      if (len === cont) {
        return resolve(result);
      }
    }
  }).catch((error) => {
    return reject(error);
  });
};

let a = new Promise((resolve, reject) => {
  resolve("success");
});
let b = new Promise((resolve, reject) => {
  resolve("success2");
});
Promise.myAll([a, b]).then((data) => console.log(data));
/**
 * 四、手写vue2的响应式原理
 * */
let show = {
  name: "王兴飞",
  age: 18,
  wife: {
    name: "girl",
  },
};
//数据劫持
obsolve(show);
function obsolve(target) {
  if (typeof target !== "object" || target === null) {
    return target;
  }
  for (const key in target) {
    defineActive(target, key, target[key]);
  }
  function defineActive(target, key, value) {
    obsolve(value);
    Object.defineProperty(target, key, {
      get: function () {
        return value;
      },
      set: function (newValue) {
        obsolve(newValue);
        if (value !== newValue) {
          value = newValue;
        }
        console.log("object+更新视图了");
      },
    });
  }
}
show.name = "独孤小刁";
show.wife.name = "lady";
console.log(show);
/**
 * 五、手写vue3的响应式原理
 * */
//采用proxy代理和Reflect反射实现响应式
let show2 = {
  name: "独孤小刁",
  age: 18,
  wife: {
    name: "the girl",
  },
  daughter: "阿飞",
};

let proxyDate = new Proxy(show2, {
  get(target, prop) {
    console.log("get.......");
    return Reflect.get(target, prop);
  },
  set(target, prop, val) {
    console.log("set.......");
    return Reflect.set(target, prop, val);
  },
  deleteProperty(target, prop) {
    console.log("delete.......");
    return Reflect.deleteProperty(target, prop);
  },
});
console.log(proxyDate.name);
proxyDate.age = 22;
proxyDate.wife.name = "that lady";
delete proxyDate.daughter;
console.log(show2);
/**
 * 六、手写settimetout实现setinterval
 * */
function myInterval(fn, dealy) {
  function interval() {
    setTimeout(interval, dealy);
    fn();
  }
  // interval();
  // setTimeout(interval, dealy);
}

/**
 * 七、手写new
 * */
// 作用:将构造函数生成它的实例
// 新生成一个对象
// 将构造函数的作用域赋值给新对象（即绑定新对象的 this）
// 执行构造函数中的代码（即为这个新对象添加属性）
// 返回新对象
function myNew() {
  let obj = {};
  // 1.获取构造函数，并删除arguments中的第一项
  let constructor = [].shift.call(arguments);
  obj._proto_ = constructor.prototype;
  // 3.使用apply改变构造函数中this的指向实现继承，使obj能够访问到构造函数中的属性
  let result = constructor.apply(obj, arguments);

  return typeof result === "object" ? result : obj;
}
function Person() {
  this.name = "S";
  this.age = 88800088;
}

let newPerson = myNew(Person);
console.log(newPerson.age);
/**
 * 八、手写深拷贝
 * */
let obj = {
  name: "王兴飞",
  age: 1888888,
  wife: {
    name: "girl",
  },
};

function deepClone(obj) {
  if (typeof obj !== "object" || obj == null) {
    return obj;
  }
  let result;
  if (obj instanceof Array) {
    result = [];
  } else {
    result = {};
  }
  for (const key in obj) {
    result[key] = deepClone(obj[key]);
  }

  return result;
}
function deepClone2(obj) {
  //变成一个json字符
  let str = JSON.stringify(obj);
  //转化成一个json.parse对象
  let newObjs = JSON.parse(str);
  return newObjs;
}
let newObj = deepClone2(obj);
obj.age = 99999999;
//互不影响
console.log(obj);
console.log(newObj);
/**
 * 九、手写浅拷贝
 * */
let haha = {
  name: "小王",
  ass: 857,
};

let by = haha;
by.name = "小钱";
//影响了原对象，指向同一个对象，一变则变
console.log(by);
console.log(haha);
/**
 * 十、手写防抖节流
 * */

// 防抖：用户触发事件过于频繁（只执行最后一次）
// (比如：按钮的频繁点击，需要限制触发频率)
function deBounce(fn, delay = 500) {
  let timer = null;
  return function () {
    if (timer != null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

// 节流：（控制执行次数）
//一段时间后,只执行一次某个操作，过了一段时间，还有操作的话，继续执行新的操作；
function throttle(fn, delay = 2000) {
  return function () {
    let flag = true;
    if (flag) {
      setTimeout(() => {
        fn();
        flag = true;
      }, delay);
    }
    flag = false;
  };
}
/**
 * 十一、手写reduce
 * */
