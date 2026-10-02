console.log("hello world!!!")
console.log("hello world!!!")
console.log("hello world!!!")
console.log("hello world!!!")
console.log("hello world!!!")


for(let i=0;i<21;i++){
    console.log(i)
}


let a = 1



// let b = 1
// do {
//   console.log("b ko value",b)
//     b++ 
// }
// while(b<5)


    
//     while(b<5) {
//     console.log("a ko value",a)
//     b++ 
// }


for(let i=0; i<=20; i=i+2){
    console.log(i) 
 }

for(let i=0; i<=20; i++){
    
if (i%2==0) {
        console.log(i) 
}
 }





//  for(let i=0; i<=20; i++){
//     if(i%3==0 && i%5==0){
//             console.log(i,"fizzbuzz")
//     }
//     else if(i%5==0){
//         console.log(i,"buzz")
        
//     }
//     else if (i%3==0){
//     console.log(i,"fizz")
   
//     }else{
//         console.log("NOTHING")
     
//     }
// }


let num = 5

for ( num = 0; num<=20; num++) {
    if(num%3==0){
        if(num%5==0){
            console.log("fizzbuzz")
        } else{
            console.log("fizz")
        }
        
    }else if(num%5==0){
        if(num%3==0){
            console.log("fizzbuzz")
        } else{
            console.log("buzz")
        }
    }else{
        console.log(num)
    }

    
}


// 9  ->fizz   if
// 10 - >buzz   else if 
// 15 -> fizzbuzz else if 
//                 else