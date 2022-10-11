// function Hello() {
//     return 'Hola mundo';
// };

//  const result = Hello()


// function Alejo() {
//     return function () {
//         return 'Hola Mi nombre es Alejandro';
//     }
// };

// console.log(Alejo()()); 


// //Let's review parameters:

// function Sum(a, b) {
//     console.log(a + b);
// };

// Sum(2, 4);

// //Default Parameters:
// function Mins(x, z = 0) {
//     // if (z === undefined) {
//     //     z = 0;
//     // }
//     return x - z;
// };

// console.log(Mins(2, 20));

//Objetos 

// const user = {
//     name: 'ryan',
//     lastname: 'castro',
//     age: 27,
//     address: {
//         country: 'Colombia',
//         city: 'Medellin',
//         friends: ['Blessed', 'J balvin', 'nicky jam'],
//     }
// }

// console.log(user.address);

// console.log(user.age);

// console.log(user.lastname);

//shorthand and properties names.
// const name = 'laptop';
// const price = 27000;

// const newProduct = {
//     name, //We can name properties like that bc we have the same name of the property in a variable that is called 'name' and 'price'.
//     price,
// };

// console.log(newProduct);

//DOM manipulation. (Document Object Model)
// const title = document.createElement("h1");

// title.innerText = 'Hola mundo desde Js';

// const button = document.createElement('button');
// button.innerText = 'haz click aquí';

// button.addEventListener("click", function (){
//     console.log("Hola mundo");
//     title.innerText = 'Texto actualizado con Js';
//     alert('Se realizó un click');
// })

// document.body.append(button);
// document.body.append(title);

//Objects as an array.
// const user = {
//     name: 'Alejandro',
//     age: 18
// };

// function printInfo(user) {
//     const { name, age } = user

//     console.log(name, age);

//     return '<h1> Hola ' + name + ' </h1>'
// }

// console.log(printInfo(user));

// document.body.innerHTML = printInfo(user);

//Funciones Anonimas.
// function start() {
//     return 'starting ...';
// }

// console.log(function () {
//     return 'Starting...';
// }());


// const button = document.createElement('button');
// button.innerText = 'click me';
// button.addEventListener('click', function () {
//     alert('clicked');
// });

// document.body.append(button);

//Arrow functions <3 
// const sum  = (x, y) => {
//     return x + y
// };

// const button = document.createElement('button');
// button.innerText = 'click me';
// button.addEventListener('click', () => {
//     alert('clicked');
// });

//Inline Arrow Functions.




