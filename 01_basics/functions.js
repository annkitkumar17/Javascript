function greet() {
  console.log("Ankit :)");
}

greet(); // 

//Function with Parameters
function multiply(a, b) {
  return a * b;
}
let result = multiply(4, 5);
console.log(result); 

//Default Parameters
function greet(name) {
  console.log("Hello, " + name);
}
greet();         
greet("Himanshu");  

//Rest Parameters :- Collect multiple arguments into an array:
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// Return values ;- Functions can return values or be void:
function calculateArea(radius) {
    return Math.PI * radius * radius;
}
// Function Hoisting:-Function declarations are hoisted, expressions are not
console.log(hoistedFunction()); 

function hoistedFunction() {
    return "I'm hoisted!";
}

//Callback Functions :-Functions passed to other functions to be executed later:
function fetchData(callback) {
    //async operation
    setTimeout(() => {
        const data = { id: 1, name: "User Data" };
        callback(data);
    }, 1000);
}

fetchData(function(result) {
    console.log("Received:", result);
});

// Array methods use callbacks
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);
const squared = numbers.map(n => n * n);

// Recursive Function
function countdown(n) {
  if (n <= 0) return;
  console.log(n);
  countdown(n - 1);
}

countdown(3); 
