const money = 150;
const active = true;
let food;
if(money > 100){
    food = 'biryani';
}
else{
    food = 'alur borta';
}

let food2 = money > 100 ? 'biryani':'alur vorta'; // tarnary operator shortcut if else lekhar jonno

const cssClass = active ? 'active':'inactive';
active ? displayUser() : hideUser() // function call shortcut alternative

//
active && displayUser() // true
active || displayUser() // false

// string to number
const num = +'45';
console.log(num)

// number to string
const numTax = 45 +'';
console.log(numTax)


// default 
function add(num1, num2){
    num2 = num2 ||5;
    return num1 + num2;
}
add(45)