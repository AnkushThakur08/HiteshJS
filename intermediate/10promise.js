let promise = new Promise((resolve, reject) => {
  //  executor
  // main work is know as executor

  let val = 50;
  if (val === 50) {
    resolve(val);
  } else {
    reject("this is not the desired value");
  }
});

console.log(promise);

promise
  .then((response) => {
    console.log(response);
    let myanotherPromise = new Promise((resolve, reject) => {
      //  executor
      // main work is know as executor

      let val = 20;
      if (val === 10) {
        resolve(val);
      } else {
        reject("this is not the desired value");
      }
    });

    return myanotherPromise;
  })
  .then((res) => {
    console.log(res);
    let myanotherPromise = new Promise((resolve, reject) => {
      //  executor
      // main work is know as executor

      let val = 10;
      if (val === 10) {
        resolve(val);
      } else {
        reject("this is not the desired value");
      }
    });

    return myanotherPromise;
  })
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
