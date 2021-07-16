let count = 0
let countEL = document.getElementById("count-el")
let numberEl = document.getElementById('number-el')
let totalEl = document.getElementById('total-el')

let total = 0
function increment(){
    count += + 1
    countEL.textContent = count
}

function reset(){
    countEL.textContent = 0
    numberEl.textContent = 0
    totalEl.textContent = 0
    count = 0
    total = 0
}

function save(){
    let countStr = count + ' + '
    total += count
    numberEl.textContent += countStr
    totalEl.textContent = total
    count = 0
    countEL.textContent = 0
}
