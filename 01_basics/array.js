// accesing elements
let colors = ["red", "green", "blue"];
console.log(colors[1]); // green

//Modifying Arrays
let fruits = ["apple", "banana"];
fruits[1] = "mango";   // replace banana
fruits.push("orange"); // add at end
fruits.pop();          // remove from end
fruits.unshift("kiwi"); // add at start
fruits.shift();         // remove from start

console.log(fruits); // ["apple", "mango"]

//Array Methods 
let nums = [1, 2, 3]; // .map() – transform elements
let doubled = nums.map(n => n * 2);
console.log(doubled);
let even = nums.filter(n => n % 2 === 0); // .filter() – select elements that pass a test
console.log(even);
let sum = nums.reduce((acc, val) => acc + val, 0); // .reduce() – reduce to a single value
console.log(sum);
let result = nums.find(n => n > 1); //.find() – find the first match
console.log(result);
let hasTwo = nums.includes(2); // .includes() – check if value exists
console.log(hasTwo);
let pos = nums.indexOf(2);  // .indexOf() – find position
console.log(pos);
let sliced = nums.slice(1, 3); //returns a copy (non-destructive)
console.log(sliced);
let items = [1, 2, 3, 4]; 
items.splice(1, 2); // .splice() – removes/adds elements (destructive)