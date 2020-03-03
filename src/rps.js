import React from 'react';
import Chance from "chance";

const computerMove = () => {
    let chance = new Chance()
    let bot = chance.pickone(["rock", "paper", "scissors"])
    return bot
}

const gameWinner = (player1, player2) => {
    let result
    switch ([player1, player2]) {
        case ["rock", "paper"]:
            result = "huset vinner"
    }

    return result
}

export { computerMove, gameWinner };

