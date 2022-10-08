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

//Default Parameters:
function Mins(x, z = 0) {
    // if (z === undefined) {
    //     z = 0;
    // }
    return x - z;
};

console.log(Mins(2, 20));
