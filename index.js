let washBtn = document.getElementById("wash-btn")
let mowBtn = document.getElementById("mow-btn")
let weedBtn = document.getElementById("weed-btn")
let taskName = document.getElementById("task")
let sendBtn = document.getElementById("send")
let amountTask = document.getElementById("task-amount")
let amountTotal = document.getElementById("total-amt")
const washAmt = 10
const mowAmt = 20
const weedAmt = 30
totalCost = 0
let taskList = []
let taskPrice = []

washBtn.addEventListener("click", addWash)

function addWash(){
    
    let washText = `<ul>Wash Car</ul>`
    taskList += washText
    taskName.innerHTML = taskList
    taskPrice += `<ul>$${washAmt}</ul>`
    amountTask.innerHTML = taskPrice
    totalCost += washAmt
    amountTotal.innerHTML = `$${totalCost}`
    washBtn.removeEventListener("click", addWash)

    }
    

mowBtn.addEventListener("click", addMow)

function addMow(){
    let mowText = `<ul>Mow Lawn</ul>`
    taskList += mowText
    taskName.innerHTML = taskList
    taskPrice += `<ul>$${mowAmt}</ul>`
    amountTask.innerHTML = taskPrice
    totalCost += mowAmt
    amountTotal.innerHTML = `$${totalCost}`
    mowBtn.removeEventListener("click", addMow)
    }
   
   
    
weedBtn.addEventListener("click", addWeed)

function addWeed(){
    let weedText = `<ul>Pull Weeds</ul>`
    taskList += weedText
    taskName.innerHTML = taskList
    taskPrice += `<ul>$${weedAmt}</ul>`
    amountTask.innerHTML = taskPrice
    totalCost += weedAmt
    amountTotal.innerHTML = `$${totalCost}`
    weedBtn.removeEventListener("click", addWeed)
    
    }
    
    
sendBtn.addEventListener("dblclick", function (){
    taskName.textContent = ""
    amountTask.textContent = ""
    amountTotal.textContent = ""
})


