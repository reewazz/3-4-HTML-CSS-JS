let a = 2
let b = 7


// a = a+1    //a++

// a = a +5
a+= 5  // a = a+5

b--  //6

b-= 4

// ++b
console.log(b ,'in fifteen')
// const result = a % b
console.log(a)
console.log(b)



let num1 = 21
let num2 = 20
 



const result = num1 <= num2
console.log(result)

c1 = true
c2  = !false

let check  = c1 && c2  //false
let check2 = c1 || c2  //true


// if (condition) {
//     statement
// }

let age  = 8

if (age>18) {
    console.log("can vote")

    if (age>60) {
        console.log("Senior citizen")
    }

}else {
    console.log("cant vote")
    if (age<10) {
        console.log("bachha")
    }
}


let marks = 20
                




if (marks>90) {
    console.log("A+")
}
else if(marks>80) {
    console.log("A")

}
else if (marks>70) {
    console.log("B+")
}
else{
    console.log("F")
}


marks = 60
   
if (marks>30){
console.log("pass")
}else{
    console.log("fail")
}
const res = marks>30 ? "Pass" : "Fail"

console.log(res,"res ko value")

age  = 20
const canVote = age >18 ? true : false

console.log(canVote)
a = 0
if(a%2==0){
    console.log ("Even");
}
else {
    console.log("Odd");
}


const isOddorEven = a%2==0 ? "Even" : "Odd"