import React, { Component } from "react";
import { botMove, gameWinner } from "./rps";
import Message from "./Message"

class Game extends Component {
  state = {
    playerChoice: "",
    computerChoice: "",
    showMessage: false,
    results: ""
  };

  handleButtonClick(event) {
    let playerChoice = event.target.value;
    let computerChoice = botMove();
    this.setState({
      playerChoice: playerChoice,
      computerChoice: computerChoice,
      showMessage: true,
      results: gameWinner(playerChoice, computerChoice)
    });
  }

  handleWinnerClick(event) {
    this.setState({
      showMessage: true
    });
  }

  render() {
    return (
      <>
        <button
          id="btn"
          onClick={event => this.handleButtonClick(event)}
          value="rock"
        >
          ROCK
        </button>

        <button
          id="btn"
          onClick={event => this.handleButtonClick(event)}
          value="paper"
        >
          PAPER
        </button>

        <button
          id="btn"
          onClick={event => this.handleButtonClick(event)}
          value="scissors"
        >
          SCISSORS
        </button>

        {this.state.showMessage && (
          <>
            <h2 id="you-pick"> {`You picked ${this.state.playerChoice}`}</h2>
            <h2 id="bot-pick">{`Computer picked ${this.state.computerChoice}`}</h2>
            <h1>{this.state.results}</h1>
          </>
        )}
      </>
    );
  }
}

export default Game;
