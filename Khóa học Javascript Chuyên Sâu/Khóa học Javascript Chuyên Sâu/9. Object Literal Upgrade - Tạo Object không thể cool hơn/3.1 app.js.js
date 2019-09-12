// Object Literals Upgrade
//1. Property value shorthand - Cùng tên bỏ được
//2. Method definition shorthand - hàm ngắn gọn
//3. Computed property keys 

let objKey = 'name'
// abb = abbreviate
var country = {
  [objKey]: 'Vietnam',
  [objKey+'Abb']: 'VN'
}
