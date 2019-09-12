

// // Arrow Function


// var hi = function(){
//   console.log(this)
// }

// var sayHello = () => {
//   console.log(this)
// }


// // hi()
// // sayHello()

// var firstname = 'Hung'


// var user = {
//   firstname: 'Khoa',
//   showName: function(){
//     console.log(this)
//   },
//   logName: () => {
//     console.log(this)
//   }

// }
// user.showName()
// user.logName()

function User(firstname){
  this.firstname = 'Khoa'
}


User.prototype.showName = function(){
    console.log(this)
    console.log(this.firstname)
}

var khoa = new User()

khoa.showName()






