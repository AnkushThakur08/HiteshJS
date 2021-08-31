// console.log(this);

// function work() {
//   console.log(this);
// }

// work();

console.log("Line no 9", this);

var user = {
  firstName: "John",
  courseCount: 4,
  getCourseCount: function () {
    console.log("line no 15", this);

    function sayHello() {
      console.log("line 18 Hello");
      console.log("line 19", this);
    }
    sayHello();
  },
};

user.getCourseCount();
