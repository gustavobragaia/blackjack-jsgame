let cards = []
let sum = 0
let hasBlackJack = false 
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Gustavo",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//gera uma carta aleatória
//math.floor -> gera valores positivos
//math.random -> gera valores aleatorios de 0 a 1
function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 10) + 1 
    if (randomNumber === 1){
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else{
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame()

}

//inicia o game
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
 
    if (sum <= 20) {
        message = ("Do you want to draw a new card?")
        messageEl.textContent = message
        isAlive = true
    }
    else if (sum === 21) {
        message = ("Wohoo! You've got Blackjack")
        messageEl.textContent = message
        hasBlackJack = true
        isAlive = true
    } 
    else{
        message = ("You're ouy of the game")
        messageEl.textContent = message
        isAlive = false
    }

}

function newCard() { 
    if (isAlive === true && hasBlackJack === false){
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard) 
        console.log(cards)
        renderGame()
    }
}



