const person = {
    name: 'Abdul',
    age: 25
};

const data = JSON.stringify(person);
const dataParsed = JSON.parse(data);
// console.log(dataParsed);

// local storage
localStorage.setItem('userId', 12345)