// variables related to DOM nodes
const message = document.getElementById('message')
const player1ScoreBoard = document.getElementById('player1Scoreboard')
const player2ScoreBoard = document.getElementById('player2Scoreboard')
const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const rollBtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')
// variables related to game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

function rollDice(){
    return Math.floor(Math.random()*6)+1
}

function showButton(a,b){
    a.style.display = "block"
    b.style.display = "none"
}

rollBtn.addEventListener('click', function(){
    let randomNumber = rollDice()
    if (player1Turn){
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
        message.textContent = "Player 2 Turn"
        player1Score += randomNumber
        player1ScoreBoard.textContent = player1Score
        player1Dice.textContent = randomNumber
    }
    else {
        message.textContent = "Player 1 Turn"
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
        player2Score += randomNumber
        player2ScoreBoard.textContent = player2Score
        player2Dice.textContent = randomNumber
    } 
    // 1. Check if a player has won. If so, change the message to "Player X has won!"
    // 2. Hide the Roll Dice Button and show the Reset Button. Hint: use display none/block
    if (player1Score >= 20){
        message.textContent = "Player 1 WON the game!"
        showButton(resetBtn,rollBtn)
    }
    else if (player2Score >= 20){
        message.textContent = "Player 2 WON the game!"
        showButton(resetBtn,rollBtn)
    }
    player1Turn = !player1Turn
})

resetBtn.addEventListener('click', reset)

function reset(){
    player1Turn = true
    player1Score = 0
    player2Score = 0
    message.textContent = "Player 1 Turn"
    player1Dice.classList.add('active')
    player2Dice.classList.remove("active")
    player1ScoreBoard.textContent = 0
    player1Dice.textContent = "-"
    player2ScoreBoard.textContent = 0
    player2Dice.textContent = "-"
    showButton(rollBtn,resetBtn)
}