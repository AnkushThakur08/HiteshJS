// var states = ["Delhi", "Himachal Pradesh", "Chandigarh", "UP", 1968];

// console.log(states[0]);
// console.log(states[1]);
// console.log(states[2]);

var states = new Array("Delhi", "HP", "UP", 1968, "Chandigarh", false);
// console.log(states);

states[0] = "Assam";
console.log(states);

states.pop();
states.pop();
states.push("Tamil Nadu");
console.log(states);

states.unshift("Goa");
states.unshift("Maharashtra");

states.shift();
console.log(states);

console.log(states.indexOf("ankush"));

console.log(Array.from("123456"));
