/**
 * Created by TengShinan on 11/8/17.
 */
var Oscar = {
    favFood: "bacon",
    favMovie: "Lala"
};

var Oscar2 = function () {
    return {
        favFood: "bacon",
        favMovie: "Lala"
    }
};

// At this stage, Person doesn't copy Oscar. Oscar just shared the reference with Person
var Person = Oscar;
// So the result won't be "bacon"
Person.favFood = "salad";
console.log(Oscar.favFood);

var Person2 = Oscar2;
Person2.favFood = "salad";
console.log(Oscar2.favFood);

console.log(18 == '18'); // True -> Compare the value
console.log(18 == "18");
console.log(22 === '22'); // False -> Compare the value & Type