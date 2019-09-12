

var names = ['Khoa','Hung','Hung','Linh','Ha','Hang']

// var name1 = names[0]
// var name2 = names[1]
// var name3 = names[3]

const [ first, second, third ] = names

// var user = {
//     {name}: 'value'
// }


var students = new Map()

students.set('id1', {  name: 'Khoa', age: 18 })
students.set('id2', {  name: 'Hung' })
students.set('id3', {  name: 'Hung' })

for ( [id,info] of students  ){
    const {name, age = 7 } = info
    console.log(`${name} is ${age} years old and has id: ${id}`)
}

// for ( student of students  ){
//     const id = student[0]
//     const name = student[1].name 
//     const age = student[1].age || 7
//     console.log(`${name} is ${age} years old and has id: ${id}`)
    
// }