// console.log('Hello World')
// var Me= "Dera"
// console.log(Me)
// var housemate = "bere"
// console.log(Me, housemate)
// housemate = "max"
// console.log(Me, housemate)
// var petDog = 'Rex'; 
// console.log(petDog);
// var a = 6;
// console.log(a>5 || a>10);
// console.log(!(a>5));
// console.log(a>5 && a<10);
// console.log(4-2);
// var petHungry = true;
// console.log("Pet is hungry: ", !petHungry);
// console.log(22 % 5); 
// var score = "8";
// console.log("mid-level skills:", score>0 && score<10);


// var age= "10"; 
// if (age >= 65) {
//     console.log("You get your income from your pension")
// }
// else if (age<65 || age>=18){
//     console.log("Each month you get a salary")
// }
// else if (age<18) {
//     console.log("You get an allowance")
// }
// else{
//     console.log("The value of the age variable is not numerical")
// }

// var day= "sunday"
// switch (day) {
//     case "monday":
//         console.log("do something");
//         break;
//     case "tuesday":
//         console.log("do something");
//         break;
//     case "wednesday":
//         console.log ("do something");
//         break;
//     case "thursday":
//         console.log ("do something");
//         break;
//     case "friday":
//         console.log ("do something");
//         break;
//     case "saturday":
//         console.log ("do something");
//         break;
//     case "sunday":
//         console.log ("do something");
//         break;
//     default:
//         console.log ("sleep")    ;
//         break;
// } 

// for (var i = 0; i <= 3; i++) {
//     console.log("This is line ", i)
// }

// for (i=1; i<=5; i++) {
//     console.log(i);
// }
// console.log('Conting completed')

// var i=2018
// while (i<=2022) {
//     console.log(i);
//     i++
// }
// console.log('Counting completed')


// for (i=1; i<=10; i++) {
//     if (i==1){
//         console.log("Gold medal");
//     }
//     else if (i==2){
//         console.log("Silver Medal");
//     }
//     else if (i==3){
//         console.log("Bronze Medal");
//     }
//     else{
//         console.log(i);
//     }
// }

// for (i=1; i<=10; i++) {
//     switch (i) {
//         case 1:
//             console.log("Gold medal");
//             break;
//         case 2:
//             console.log("Silver Medal");
//             break;
//         case 3:
//             console.log("Bronze Medal");
//             break;
//         default:
//             console.log(i);
//         }
//     }


// for (i = 0; i < 2; i++) {
//     console
//     for (var j = 0; j < 3; j++) {
//         console.log("Hello");
//     }
// }

// function older(age){
//         if (age<=17) {
//             console.log("You are a child");
//         }
//         else if (age<=30){
//             console.log("you are a youth");
//         }
//         else{
//             console.log("You are an adult");
//         }
// }
// older(100);

// function letterfinder(word, match){
//     for (i=0; i<word.length; i++){
//         if (word[i]==match){
//             console.log("found the", match, "at", i);
//         }
//         else{
//             console.log("--No match found at", i)
//         }
//     }
// }
// letterfinder("test", "t");

// var housemates ={}
// housemates.max = 24;
// housemates.damian= 23;
// housemates.dera = 19;
// housemates.chris = 19;
// console.log(housemates)
// housemates.dera = 20;
// console.log(housemates)

// var housemates = {
//     max:24,
//     damian: 23,
//     dera: 19,
//     chris: 19
// }
// console.log(housemates)

// var names =['dera', 'me', 'us'];
// console.log(names.length);
// console.log(names[0]);

// var greet = "Hello";
// console.log(greet.length);

// var clothes =[];
// clothes.push("shirt");
// clothes.push("pants");
// clothes.push("shoes");
// clothes.push("Necklace");
// clothes.push("socks");
// clothes.pop("socks");
// clothes.push("earrings");
// console.log(clothes[2]);
// var favCar ={}
// favCar.color ='green';
// favCar.convertible =true;
// console.log(favCar);

// try{
//     console.log(c+d);
// }catch(err){
//     console.log("Error:", err.message);
// }
// console.log('I am a guy')

// try{
//     throw new SyntaxError();
// }catch(err){
//     console.log('error:', err.message);
// }

// function addTwoNums(a, b){
//     try{
//         if (typeof (a) != 'number'){
//             throw new Error('First argument must be a number');
//         }
//         else if (typeof (b) != 'number'){
//             throw new Error('Second argument must be a number');
//         }
//         console.log(a+b);
//     }
//     catch(err){
//         console.log("Error!", err);
//     }
// }
// addTwoNums(5, "5");
// console.log("It still works");

// var even = "2";
// var number_type = Number(even)
// console.log(typeof even);

// function letterFinder(word, match) {
//     var condition1 = typeof(word) == 'string' && word.length >= 2;
//     var condition2 = typeof(match) == 'string' && match.length ==1;
//     if (condition1 == true & condition2 == true){
//         for(var i = 0; i < word.length; i++) {
//             if(word[i] == match) {
//                 //if the current character at position i in the word is equal to the match
//                 console.log('Found the', match, 'at', i)
//             } else {
//                 console.log('---No match found at', i)
//             }
//         }
//     }
//     else{
//         console.log("Please pass correct arguments to the function.")
//     }
// }
// letterFinder("cat", "c");

try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }