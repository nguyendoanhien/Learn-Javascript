// Object Literals Upgrade
// Property value shorthand - Cùng tên bỏ được

var first = "Khoa";
var last = "Nguyen";

var user = {
  firstName: first,
  last,
  age: 18
};

function logInfo({ address }) {
  console.log(address);
}

let address = "HCM"; // download from web service

var user1 = {
  address
};

logInfo(user1);
