import Chance from "chance";

const botMove = () => {
    let chance = new Chance()
    let bot = chance.pickone(["rock", "paper", "scissors"])
    return bot
}

const gameWinner = (player1, player2) => {
    let result
    switch ([player1, player2].join()) {
        case ["rock", "paper"].join():
        case ["paper", "scissors"].join():
        case ["scissors", "rock" ].join():    
            result = "Computer win"
          break
        case ["rock", "scissors"].join():
        case ["paper", "rock"].join():
        case ["scissors", "paper"].join():
            result = "You win"
          break
        default:
            result = "Oavgjort"
          break    

    }

    return result
}

export { botMove, gameWinner };

