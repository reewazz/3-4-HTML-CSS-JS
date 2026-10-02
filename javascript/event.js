




const h1 = document.querySelector('#heading')

function changeColor() {
h1.style.color = "red"

}

function makeAlert() {
alert("hello world")

}

function buttonclick() {
    const btn = document.getElementById("btn")
    btn.innerText = "Clickedd!!!"
    makeAlert()
}

function keypress() {
    console.log("key up")
}

 
    const btn = document.getElementById("btn")

    btn.addEventListener('click',buttonclick)



h1.addEventListener('mouseover',()=>{
    h1.style.color = "yellow"
})

h1.addEventListener('mouseout',()=>{
    h1.style.color = "black"
})


let count = 0
let num = 1
const countmsg = document.getElementById('countmsg')

function decrease() {
  count--
    countmsg.textContent =count
    
}





document.getElementById('inc').addEventListener('click' , ()=> {
    count++
    countmsg.textContent = count
})

function reset () {
    count = 0
    countmsg.textContent = "0" 
}