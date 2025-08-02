const welcome= document.getElementById("welcome_msg");
welcome.textContent="hey there"
welcome.style.color= "blue";
welcome.style.background ="yellow";
welcome.style.textAlign= "center";
console.log(welcome);

const fruits = document.getElementsByClassName("fruits");
Array.from(fruits).forEach(fruits=> {
    fruits.style.backgroundColor ="yellow";
});

const playertags =document.getElementsByTagName("h4");
const playernames= document.getElementsByTagName("li");

for(let playertag of playertags){
    playertag.style.backgroundColor = "yellow"; 
}

const info = document.querySelector(".fruits")
info.style.backgroundColor= "yellow";
console.log(info);

const game= document.querySelectorAll(".fruits")
game[1].style.backgroundColor= "yellow";
console.log(game);


