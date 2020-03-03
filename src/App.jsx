import React, { Component } from "react";
import "./App.css";
import { computerMove, gameWinner } from './rps'
// import { Form, Radio } from 'semantic-ui-react'

class App extends Component {
  state = {
    playerChoice: "",
    computerChoice: "",
    winnerMessage: false,
    results: ""
  }

  handleButtonClick(event) {
    let playerChoice = event.target.value
    let computerChoice = computerMove()
    this.setState({ playerChoice: playerChoice, computerChoice: computerChoice, showMessaage: true, results: gameWinner()})
  }

  render() {
    return (
      <>
          <h1>ROCK PAPER SCISSORS</h1>
          <button onClick={event => this.handleButtonClick(event)} value="rock">Rock</button>
          <button onClick={event => this.handleButtonClick(event)} value="paper">Paper</button>
          <button onClick={event => this.handleButtonClick(event)} value="scissors">Scissors</button>
          {this.state.showMessaage &&
          <>
          
          <h2>{`You picked ${this.state.playerChoice}, opponent picked ${this.state.computerChoice}`}</h2>
          <h1>{this.state.results}</h1>
        </>
        }
        </>
    );
  }
}

export default App;
