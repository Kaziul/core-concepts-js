// array destructuring
const numbers = [54, 92,55,25,77];
const x = numbers[0];
const y = numbers[1];
// console.log(x,y)
// const[a,b] = [54,55];
// console.log(a, b);

// or
// const[a,b] = numbers;

function boxify(num1){
    return [num1, num1 + 5];
}
const [box1, box2] = boxify(8); // array dustructuring 
console.log(box1,box2)

//Object Destructuring

const {id, money, name, age} = { // object Destructuring
    id:2, money:34, name:'Rahim', age: 25
};
console.log(id, age);
console.log(name, money);

// create object shortcut
const h = 25;
const z = 35;
const object1 = {h:h, z:z};
const object2 = {h,z};
console.log(object1)
console.log(object2)

// ...dots new array create koreee 

const newNumbers = [...numbers, 56];
console.log(newNumbers)