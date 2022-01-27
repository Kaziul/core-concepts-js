const numbers = [3,2,5,6,7];
const friends = ['Rofiq','Jabbar','Barkat'];
// array of object
const products =[
    {id: 1, name:'laptop', price: 500},
    {id: 2, name:'phone', price: 400},
    {id: 3, name:'watch', price: 100},
    {id: 4, name:'tablet', price: 200}
];

// map 
const names = products.map(product =>product.name);
const prices = products.map(price =>price.price); // jokon single kono kisur dorkar tokon return kora lage na 
const prices2 = products.map(pd =>{ // jokon akadik kono kaj kora lage tahole return kora lage 
   return pd.price; // by defalt return koree na and jodi return koree dei taholee akta notun array create kore
})
console.log(names);
console.log(prices);
console.log(prices2);

// forEach 
products.forEach(product => console.log(product.name)) // return koree autometic 

// filter
const cheaper = products.filter(pd => pd.price < 300); // conditon  fullfill korlee oi full object gulokee return koree dey
console.log(cheaper);
// remove an item usin filter
const remaining = products.filter(pd => pd.id != 3);
console.log(remaining);

// find
const hasWatch = products.find(pd => pd.name === 'watch');
console.log(hasWatch);



// reduce

// push

// pop

// length

// indexOf