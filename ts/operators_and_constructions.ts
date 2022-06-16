// source article:
// https://habr.com/ru/company/ruvds/blog/519136/

// !!, ??, ??=, ? : , ||, ...
// const { a, b } = obj
// constructor( private first_name: string ){}
// const f = () => a + b; //return a+b

// spread + destructuring
const myList = [1,2,3,4,5,6,7]
const myObj = {
  name: "Fernando",
  age: 37,
  country: "Spain",
  gender: "M"
}

const [head, ...tail] = myList
const {name, age, ...others} = myObj

console.log(head) //1
console.log(tail) //[2,3,4,5,6,7]
console.log(name) //Fernando
console.log(age) //37
console.log(others) //{country: "Spain", gender: "M"}

