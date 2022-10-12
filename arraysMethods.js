//Here we will remember the arrays methods.
const names =['ryan', 'joe', 'maria'];
const newNames = ['Alejo', 'cami', 'Sandra'];

// for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     console.log(element);
// };

//For react using methods.

// names.forEach(function (name) {
//     console.log(name);
// });

// const newNames = names.map(function (name) {
//     return `Hola ${name}`;
// });

// console.log(newNames);

//With find for looking for elements 
// const nameFound = names.find(function (name) {
//     if (name === 'joe') {
//         return name;
//     };
// });
// console.log(nameFound);

//With filter create a new array with elements that passed the "filter" function.

// const nameFiltered = names.filter(function (name) {
//     if (name !== 'joe') {
//         return name;
//     };
// });

// console.log(nameFiltered);

//Now using concat to concat 2 different arrays.

// const exp = names.concat(newNames);
// console.log(exp);

//Spreed operator to concat arrays.
// console.log([...newNames, ...names]);

const user = {
    name: "Ryan",
    lastname: "castro",
};

const address = {
    street: 'Main Street',
    city: 'Barranquilla'
};


const UserInfo = {
    ...user,
    ...address,
};

console.log(UserInfo);