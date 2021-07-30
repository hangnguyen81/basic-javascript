const dice = document.querySelector('.dice')

function rollDice(){
    // remove all div of class .dice before rolling another dice
    while (dice.hasChildNodes()){
        dice.removeChild(dice.firstChild)
    }
    
    let tempDiceValue = Math.floor(Math.random()*6)+1

    for (let i = 1; i <= tempDiceValue; i++){
        let div = document.createElement('div')
        div.classList.add('dot')
        dice.appendChild(div)
    }       
}

dice.addEventListener('click', rollDice)