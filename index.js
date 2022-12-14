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
// const showText = () => {
//     return 'Hola mundo';
// };

// console.log(showText());

//Inline Way to Use Arrow Functions.

// const showText = () => 'Hola Mundo';

// console.log(showText())

//For Objects
// const showObject = () => ({
//     name: 'Alejandro',
//     apellido: 'Ching',
//     ciudad: 'Barranquilla'
// });

// console.log(showObject());

//Review with Return.

// const button = document.createElement('button');
// button.innerText = 'click me';

// const isAuthorized = true;

// button.addEventListener('click', () => {
//     if (isAuthorized) {
//        return alert('Esta autorizado'); //Return lo que hace es acabar con la ejecucion de la funcion.
//     };

//     alert("no esta autorizado"); 

// });

// document.body.append(button)

//String Literals.

// const background = 'green';
// const color = 'white';


// const button = document.createElement('button');
// button.innerText = 'click me';
// button.style = `background: ${background}; color: ${color}`;

// const isAuthorized = true;

// button.addEventListener('click', () => {
//     if (isAuthorized) {
//        return alert('Esta autorizado'); //Return lo que hace es acabar con la ejecucion de la funcion.
//     };

//     alert("no esta autorizado"); 

// });

// document.body.append(button)

//NOW WE ARE GOING TO REVIEW ECMASCRIPT MODULES AND IMPORTING FUNCTIONS FROM OTHER MODULES.
// import {sum, multiply, title } from './add.js';
// console.log(sum(20, 10));
// console.log(multiply(20, 20));
// console.log(title);

//Now we are going to study optional chaining.
// const person = {
//     name: 'Ryan',
//     address: {
//         city: 'quilla'
//     },
//     location: {}
// };

// console.log(person.location?.city);

//Now we are going to review Async and Await.
const ul = document.createElement('ul');


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function (reponse) {
//         return reponse.json()
//     }).then(function (data){
//         console.log(data)
//         data.forEach(function (post) {
//             const li = document.createElement('li');
//             li.innerText = post.title
//             ul.appendChild(li);
//         });
//         document.body.append(ul);
//     })


async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
    data.forEach(function (post) {
        const li = document.createElement('li');
        li.innerText = post.title
        ul.appendChild(li);
    });
    document.body.append(ul);
}

loadData();








