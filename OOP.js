/* Classes in JvaScript*/
// class Bird {
//   useWings() {
//     console.log("Flying!");
//   }
// }
// class Eagle extends Bird {
//   useWings() {
//     super.useWings();
//     console.log("Barely flapping!");
//   }
// }
// class Penguin extends Bird {
//   useWings() {
//     console.log("Diving!");
//   }
// }
// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"

/* Constructors in JavaScript*/
// function Icecream(flavor) {
//   this.flavor = function () {
//     console.log("the flavor is", flavor);
//   };
//   this.meltIt = function () {
//     console.log(`The ${this.flavor} icecream has melted`);
//   };
// }

// let kiwiIcecream = new Icecream("kiwi");
// let appleIcecream = new Icecream("apple");
// kiwiIcecream.flavor();

/* Inheritanve in JavaScript*/
// var man = {
//   legs: true,
//   beard: true,
//   chest: true,
// };

// var slimbro = Object.create(man);
// console.log("slimbro has beard:", slimbro);
// slimbro.beard = false;
// console.log("slimbro has beard:", slimbro.beard);

/* Default parameter*/
// class WithDefaultParams {
//   constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
//     this.num1 = num1;
//     this.num2 = num2;
//     this.num3 = num3;
//     this.string1 = string1;
//     this.bool1 = bool1;
//   }
//   calculate() {
//     if (this.bool1) {
//       console.log(this.string1, this.num1 + this.num2 + this.num3);
//       return;
//     }
//     return "The value of bool1 is incorrect";
//   }
// }
// var better = new WithDefaultParams();
// better.calculate();

/* Designing an OOP program*/
// class Animal {
//   constructor(color = "yellow", energy = 100) {
//     this.color = color;
//     this.energy = energy;
//   }
//   isActive() {
//     if (this.energy > 0) {
//       this.energy -= 20;
//       console.log("Energy is decreasing, currently at:", this.energy);
//     } else if (this.energy == 0) {
//       this.sleep();
//     }
//   }
//   sleep() {
//     this.energy += 20;
//     console.log("Energy is increasing, currently at:", this.energy);
//   }
//   getColor() {
//     console.log(this.color);
//   }
// }

// class Cat extends Animal {
//   constructor(
//     sound = "purr",
//     canJumpHigh = true,
//     canClimbTrees = true,
//     color,
//     energy
//   ) {
//     super(color, energy);
//     this.sound = sound;
//     this.canClimbTrees = canClimbTrees;
//     this.canJumpHigh = canJumpHigh;
//   }
//   makeSound() {
//     console.log(this.sound);
//   }
// }

// class Bird extends Animal {
//   constructor(sound = "chirp", canFly = true, color, energy) {
//     super(color, energy);
//     this.sound = sound;
//     this.canFly = canFly;
//   }
//   makeSound() {
//     console.log(this.sound);
//   }
// }

// class HouseCat extends Cat {
//   constructor(
//     houseCatSound = "meow",
//     sound,
//     canJumpHigh,
//     canClimbTrees,
//     color,
//     energy
//   ) {
//     super(sound, canJumpHigh, canClimbTrees, color, energy);
//     this.houseCatSound = houseCatSound;
//   }
//   makeSound(option) {
//     if (option) {
//       super.makeSound();
//     }
//     console.log(this.houseCatSound);
//   }
// }

// class Tiger extends Cat {
//   constructor(
//     tigerSound = "Roar!",
//     sound,
//     canJumpHigh,
//     canClimbTrees,
//     color,
//     energy
//   ) {
//     super(sound, canJumpHigh, canClimbTrees, color, energy);
//     this.tigerSound = tigerSound;
//   }
//   makeSound(option) {
//     if (option) {
//       super.makeSound();
//     }
//     console.log(this.tigerSound);
//   }
// }

// class Parrot extends Bird {
//   constructor(canTalk = false, sound, canFly, color, energy) {
//     super(sound, canFly, color, energy);
//     this.canTalk = canTalk;
//   }
//   makeSound(option) {
//     if (option) {
//       super.makeSound();
//     }
//     if (this.canTalk) {
//       console.log("I'm a talking parrot!");
//     }
//   }
// }

// var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
// var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

// fiji.makeSound(); // undefined
// fiji.makeSound(true); // chirp

// polly.makeSound(); // I'm a talking parrot!
// polly.makeSound(true); // chirp, I'm a talking parrot!

// polly.color; // yellow
// polly.energy; // 100

// polly.isActive(); // Energy is decreasing, currently at: 80

// var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
// penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

// penguin.sound; // 'shriek'
// penguin.canFly; // false
// penguin.color; // 'black and white'
// penguin.energy; // 200
// penguin.isActive(); // Energy is decreasing, currently at: 180

// var leo = new HouseCat();

// // leo, no purring please:
// leo.makeSound(false); // meow
// // leo, both purr and meow now:
// leo.makeSound(true); // purr, meow

// var cuddles = new Tiger();
// cuddles.makeSound(false); // Roar!
// cuddles.makeSound(true); // purr, Roar!

// class Animal {}

// class Cat extends Animal {
//   constructor() {
//     super();
//     this.noise = "meow";
//   }
// }

// var result = new Animal();
// console.log(result.noise);

// var clothingItem = {
//   price: 50,
//   color: "beige",
//   material: "cotton",
//   season: "autumn",
// };

// for (const key of Object.keys(clothingItem)) {
//   console.log(key, ":", clothingItem[key]);
// }

/* Rest operator in functions */
// function addTaxToPrices(taxRate, ...itemsBought) {
//   return itemsBought.map((item) => taxRate * item);
// }

// let shoppingcart = addTaxToPrices(1.1, 46, 89, 35, 79);
// console.log(shoppingcart);

// /*Here's how to copy an object into a completely separate object, using the spread operator*/
// const car1 = {
//   speed: 200,
//   color: "yellow",
// };
// const car2 = { ...car1 };

// car1.speed = 201;

// console.log(car1.speed, car2.speed);

/*You can copy an array into a completely separate array, also using the spread operator, like this:*/
// const fruits1 = ["apples", "pears"];
// const fruits2 = [...fruits1];
// fruits1.pop();
// console.log(fruits1, "not", fruits2);

// const meal = ["soup", "steak", "ice cream"];
// let [starter] = meal;
// console.log(starter);

// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// console.log(set);

// let obj = {
//   key: 1,
//   value: 4,
// };

// let output = { ...obj };
// output.value -= obj.key;

// console.log(output.value);

// function count(...basket) {
//   console.log(basket.length);
// }

// count(10, 9, 8, 7, 6);
