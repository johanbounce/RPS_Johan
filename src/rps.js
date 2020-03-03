import Chance from "chance";

const computerMove = () => {
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
            result = "huset vinner"
          break
        case ["rock", "scissors"].join():
        case ["paper", "rock"].join():
        case ["scissors", "paper"].join():
            result = "du vinner"
          break
        default:
            result = "Oavgjort"
          break    

    }

    return result
}

export { computerMove, gameWinner };

