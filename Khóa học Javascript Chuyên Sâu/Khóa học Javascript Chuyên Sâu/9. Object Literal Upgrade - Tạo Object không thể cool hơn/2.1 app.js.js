// Object Literals Upgrade
//1. Property value shorthand - Cùng tên bỏ được
//2. Method definition shorthand - hàm ngắn gọn

// var user = {
//   showname: function(name) {},
//   showAge: function(age) {},
//   showAddress: function(address) {}
// };

var user = {
  age: 18,
  showname(name){
    console.log(this)
    console.log(name)
  },
  showAddress(address){
    console.log(address)
  }
}
user.showname('Khoa')