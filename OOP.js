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
class WithDefaultParams {
  constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }
  calculate() {
    if (this.bool1) {
      console.log(this.string1, this.num1 + this.num2 + this.num3);
      return;
    }
    return "The value of bool1 is incorrect";
  }
}
var better = new WithDefaultParams();
better.calculate();
