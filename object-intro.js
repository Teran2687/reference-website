/* When the script file is loaded, execution automatically begins at the top of the file */

console.log("hello");

//player object definition
var player = {
  name: "Steve",
  health: 100,
  inventory: "axe",
  showInfo: function () {
    console.log(this.name + " has " + this.health + " health and an " + this.inventory);
  },
  takeDamage: function () {
    this.health -= 15;
  }
}

//example property and method acces
player.showInfo();
player.health = 85;
player.showInfo();
player.takeDamage();
player.showInfo();
console.log(player["inventory"]);
console.log(player.health);

//Pizza object definition
var pizza = {
  size: "Large",
  topping: "pepporoni and jalapenos",
  price: 11.95,
  showInfo: function () {
    console.log("A " + this.size + " pizza with " + this.topping + " is $" + this.price);
  }
}

pizza.showInfo();
pizza.size = "medium";
pizza.price = 8.99
pizza.topping = "mushrooms";
pizza.showInfo();
pizza.size = "small";
pizza.price = 5.00
pizza.topping = "cheese";
pizza.showInfo();