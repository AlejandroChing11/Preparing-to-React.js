function Hello() {
    return 'Hola mundo';
};

 const result = Hello()


function Alejo() {
    return function () {
        return 'Hola Mi nombre es Alejandro';
    }
};

console.log(Alejo()()); 


//Let's review parameters:

function Sum(a, b) {
    console.log(a + b);
};

Sum(2, 4);