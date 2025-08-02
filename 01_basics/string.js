const name = "ankit"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('himanshu')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

const newString1 = "   ankit    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://www.google.com/search? "

console.log(url.replace('/search', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));






