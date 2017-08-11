var person = {
    firstName: "Bucky",
    lastName: "Roberts",
    age: 28
};

console.log(person);

function addNumber(a, b) {
    return a + b;
};

console.log(addNumber(3, 7));

function worthless() {
}

console.log(worthless());

// 这里的方法签名和平时见到的不一样，是匿名类型的，并且这个方法可以存在一个var中。
// Assign the function to the variables
var printBacon = function() {
    console.log("Bacon is healthy, don't believe the doctors.");
}

printBacon();

// Can use it inside other functions
setTimeout(printBacon, 3000);

