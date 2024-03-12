// FUNCTIONS
// function square(number) {
//     return number * number;
// }

// Object as function
function myFunc(theObject) {
    theObject.make = "Toyota";
}

const myCar = {
    make: "Honda",
    model: "Accord",
    Year: "1998",
};

console.log(myCar.make); // Honda
myFunc(myCar)
console.log(myCar.make); // Toyota

function myFunc2(theArr) {
    theArr[0] = 30;
}

const arr = [45];
console.log(arr[0]); //45
myFunc2(arr);
console.log(arr[0]);



const square = function(number) {
    return number * number;
}
console.log(square(4));

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
}

console.log(factorial(3));


// map function
function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.lenth; i++){
        result[i] = f(a[i]);
    }
    return result
}

const cube = function (x) {
    return x * x *x;
};

const numbers = [0,1,2,3,4,5,10];
console.log(map(cube, numbers));