/**
 * Created by TengShinan on 11/8/17.
 */
function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function (targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}

var Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Wendy);

console.log("Bucky:", Bucky.life);
console.log("Wendy:", Wendy.life);

// Use prototype to add an additional method or function to class
// Now every instance of the User Class now has access to the prototype method
User.prototype.uppercut = function (targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name);
};

Wendy.uppercut(Bucky);
console.log("Bucky:", Bucky.life);
console.log("Wendy:", Wendy.life);

// You can add property to all objects
User.prototype.magic = 60;
console.log(Bucky.magic);
console.log(Wendy.magic);