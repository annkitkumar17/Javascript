// stack(primitive) , Heap(Non- primitive)
// stack ke ander copy , heap ke ander refrence 

let hey = "ankit"
let you = hey
you="they"

console.log(you)
console.log(hey)

// heap memory

let user1={
    email: "user@google.com",
    upi : "user@ybl"
}
 
let user2= user1
    user2.email ="ankit@gmai.com"

console.log(user2)
