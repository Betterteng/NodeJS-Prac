/**
 * Created by TengShinan on 11/8/17.
 */
var Bucky = {
    printFirstName: function () {
        console.log("My name is Bucky");
        // this references who's calling it
        console.log(this === Bucky);
    }
};

Bucky.printFirstName();

// The default calling context is global
function doSomethingWorthless() {
    console.log("\nI am worthless");
    console.log(this === global);
}

doSomethingWorthless();