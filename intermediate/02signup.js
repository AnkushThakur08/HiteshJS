/*
Define a function that can answer the role of a user. 
A user can be on following roles:
admin - with all access
subadmin - with acccess to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is a Admin with FULL ACCESS`;

    case "subadmin":
      return `${name} is a subadmin which can create and delet course`;

    case "testprep":
      return `${name} is a testprep which can create and delete test`;

    case "user":
      return `${name} is a user which can consume content`;

    default:
      return `${name} is a TRAIL USER`;
  }
};

console.log(getUserRole("ANkush", "admin"));
var res = getUserRole("Yash", "subadmin");

console.log(res);
