function greet() {
  console.log("Hello world!!!")  
}

greet()
greet()
greet()

function sayName(nam) {   //parameters
  console.log("Hello user "+ nam)
}

sayName("ram") //arguments
sayName("amosh")

// function add(a,b){
//   console.log(a+b)
//   return a+b
  
// }

  const add = (a,b)=>  a+b
  




function sub(a,b){

  return a-b
}
function mul(a,b){
  console.log(a*b)
}
function div(a,b){
  console.log(a/b)
}





// const sum =  function add(a,b){
//   console.log(a+b)
// }


const result = add(900,100)
const minus = sub(100,10)

console.log(result,"result")
console.log(minus,"minus")



function isOddOrEven(a){

  if (a%2===0) {
    return "Even"
  }
  else {
    return "Odd"
  }

}


function fullName(f,s) {

  return f + " " + s
}

const mwdajhsgdtafs = isOddOrEven(5)
console.log(mwdajhsgdtafs)

function printTable(num) {
    for (let i=1;i<=10;i++) {
      console.log(num*i)
    }
}


printTable(5)


function check(num){
    if(num==0){
        return "zero"
    }
    else if(num>=0){
        return "positive"
    }
    else {
        return "negative"
    }
}



console.log(check(-2))



function sumofsquares (a,b){
     function sq(num){
     return num*num
    }

    return sq(a) + sq(b)


}




console.log(sumofsquares(2,3))


const calculate = (a,b) =>{
  return a+b
}

console.log(calculate(99909,327654627854))



function checkOddOrEven(num) {
  // if(num%2===0) {
  //   return "Even"
  // }
  // else{
  //   return "Odd"
  // }

  return num%2===0 ? "Even" : "Odd"
}


const jjjj = checkOddOrEven(5)
console.log(jjjj)




// 5
// 10
// 15
// 20

