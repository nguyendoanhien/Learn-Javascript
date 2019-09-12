

// ES6 - Destructuring
let user = {
    firstname: 'Khoa',
    lastname: 'Nguyen',
    email: 'vankhoa0603@gmail.com',
    address: {
        block: 3,
        number: '22/1'
    }
}


// const firstname = user.firstname
// const lastname = user.lastname

const { firstname: first, lastname:last, email:mail  } = user 

const { address } = user

let { block, number, street = ''} = address


