var name = "ankush";

console.log(name);

function sayName() {
  var name = "Mr. A";
  console.log("Line no 6", name);

  nameAgain();
  function nameAgain() {
    var name = "Mr. AT";
    console.log("Line no 11", name);
  }
}

sayName();
