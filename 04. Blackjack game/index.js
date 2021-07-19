
// Declare all variables
let cardsArray = [] // create and card array to store all cards we have
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let author = {
    name: "Hang Nguyen",
    address: "Finland"
}

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// let sumEl = document.querySelector("#sum-el")
let authorEL = document.getElementById("author-el")

authorEL.textContent = author.name + ", " + author.address

function getRandomNumber(){
    // Math.random() give random value between 0 and 1 (not include 1)
    //return a random number between 1 and 13
    // rule of Blackjack Game
    // if 1     -> return 11 
    // if 11-13 -> return 10
    let randomNumber = Math.floor(Math.random() * 12) + 1;
    if (randomNumber > 10)
        return 10
    else if (randomNumber === 1)
        return 11
    else
        return randomNumber 
}

function startGame(){
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    isAlive = true
    sum = firstCard + secondCard  
    cardsArray = [firstCard,secondCard]  //cardsArray.push(firstCard, secondCard)
    renderGame()
}
function renderGame(){
    // print out the list of cards
    let tempCard = " "
    for (let i = 0; i<cardsArray.length; i++) {
        tempCard += cardsArray[i] + ' '
    }
    cardsEl.textContent = "Cards:  " + tempCard

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20 ){ 
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message    
}

function newCard(){
    if (isAlive && !hasBlackJack ){
        let card = getRandomNumber()
        cardsArray.push(card) 
        sum = sum + card
        renderGame()
    }
}

// function restartGame(){
//     document.location.reload()
// }