// // Create an h1 element
// var h1 = document.createElement('h1');
// h1.innerText = "Type into the input to make this text change";

// // Create an input element
// var input = document.createElement('input');
// input.setAttribute('type', 'text');

// // Clear the existing content of the document body
// document.body.innerText = '';

// // Append the h1 and input elements to the document body
// document.body.appendChild(h1);
// document.body.appendChild(input);

// // Add an event listener to the input element
// input.addEventListener('change', function() {
//     // Update the text content of the h1 with the input value
//     h1.innerText = input.value;
// });

// let h1 = document.querySelector("h1");
// let arr = ["Example Domain", "First Click", "Second Click", "Third Click"];
// // Task 4: Write a click-handling function
// function handleClicks() {
//   switch (h1.innerText) {
//     case arr[0]:
//       h1.innerText = arr[1];
//       break;
//     case arr[1]:
//       h1.innerText = arr[2];
//       break;
//     case arr[2]:
//       h1.innerText = arr[3];
//       break;
//     default:
//       h1.innerText = arr[0];
//   }
// }
// // Example: Add click event listener to call handleClicks function
// h1.addEventListener("click", handleClicks);

// function scopeTest() {
//   var y = 44;

//   console.log(x);
// }

// var x = 33;
// scopeTest();

// class Cake {
//   constructor(lyr) {
//     this.layers = lyr;
//   }

//   getLayers() {
//     return this.layers;
//   }
// }

// class WeddingCake extends Cake {
//   constructor() {
//     super(2);
//   }

//   getLayers() {
//     return super.getLayers() * 5;
//   }
// }

// var result = new WeddingCake();
// console.log(result.getLayers());

// function count(...food) {
//   console.log(food.length);
// }

// count("Burgers", "Fries", null);

/*Assignment*/
const dishData = [
  {
    name: "Italian pasta",
    price: 9.55,
  },
  {
    name: "Rice with veggies",
    price: 8.65,
  },
  {
    name: "Chicken with potatoes",
    price: 15.55,
  },
  {
    name: "Vegetarian Pizza",
    price: 6.45,
  },
];
const tax = 1.2;

// Implement getPrices()
function getPrices(taxBoolean) {
  for (let i = 0; i < dishData.length; i++) {
    let finalPrice;
    if (taxBoolean == true) {
      finalPrice = dishData[i].price * tax;
    } else if (taxBoolean == false) {
      finalPrice = dishData[i].price;
    } else {
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }
    console.log("Dish:", dishData[i].name, "Price:$", finalPrice);
  }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);

  if (typeof guests === "number" && guests > 0 && guests < 30) {
    let discount = 0;
    if (guests < 5) {
      discount = 5;
    } else if (guests >= 5) {
      discount = 10;
    }
    console.log("Discount is $" + discount);
  } else {
    console.log("The second argument must be a number between 0 and 30");
  }
}

getDiscount(true, 2);
