// {
//     // background-color
//     color:"red"
// border-radius : "8px"
// }


// my_name
// my-name
// myName
// MyName 

// my_name //snakecase
// my-name // kebabcase
// myName //camelcase
// MyName //pascalcase

const myh1 = document.getElementById('heading')

console.log(myh1)
myh1.innerText = "Text changed from js"


const mydiv = document.getElementById('division')
// mydiv.innerHTML = "<h1>Adding inner html</h1>"

// const mybox = document.getElementsByClassName('box')
// console.log(mybox)


// for (let i =0;i<mybox.length;i++) {

//     mybox[i].style.backgroundColor = "red"
//     mybox[i].style.borderRadius = "8px"
// }


const btn = document.getElementsByTagName("button")


// for (let i =0;i<mybox.length;i++) {

//     btn[i].style.backgroundColor = "red"
// }


const p1 = document.querySelectorAll(".box")

for(let i =0;i<p1.length;i++) {
    p1[i].style.backgroundColor = "purple"
}


//change box backgroundcolor with queryselectorall
//change h1 innertext with id
//chaange p color with tagname (3)