let fruits  = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]);

let user = {username: 'santi', age: 34 };
let { username, age} = user;
console.log(username, age);

//Otro truco para acceder a otros elementos de un arreglo que no sean los primeros es utilizar comas para saltar los lugares:

// arrays destructuring
let fruits2 = ['Apple', 'Banana', 'Orange'];
let [,,fruit] = fruits;

console.log(fruit); /*arroja "Orange"*/

