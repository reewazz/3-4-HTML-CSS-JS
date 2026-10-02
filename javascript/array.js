let fruit = "apple"
let fruitarray = ["apple","watermelon","cherry","banana"]


console.log(fruitarray.sort())
let cars = new Array ("bmw","lambo")

console.log(fruitarray.length)
console.log(cars)

console.log(fruitarray)
console.log(fruitarray[fruitarray.length-1])
console.log(fruitarray.indexOf("banana"))
console.log(cars.includes("bmw"))

// fruitarray.push("coconut")
// fruitarray.pop()

fruitarray.unshift("avocado")
fruitarray.shift()
fruitarray.shift()
console.log(fruitarray)


const user = {
    name : "aron",
    address : "sankhamul",
    isLoggedIn : true
}

console.log(user.isLoggedIn)


let numbers = [2,11,33,5,6,74,8]


let total = 0
    for(let i=0;i<numbers.length;i++){
        total +=   numbers[i]
        console.log(numbers[i])
    }

numbers.sort()
    console.log(numbers)

    numbers.sort(function(a, b){return a - b});

    console.log(numbers)


let names = ["roshan","aron","manish","anjali","nishan"]   

//  let newnames =  names.slice(0,4)


console.log(names)








