Promise.all2 = function (promise) {
  let count = 0;
  let len = promise.length;
  let result = [];
  return Promise.resolve((resolve, reject) => {
    for (let val of promise) {
      Promise.resolve(val).then((res) => {
        count++;
        result.push(res);
        if (len === count) {
          resolve[result];
        }
      });
    }
  });
};

let a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("王兴飞");
  }, 1000);
});
let b = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("王兴飞2");
  }, 1000);
});

Promise.all2([a, b])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
