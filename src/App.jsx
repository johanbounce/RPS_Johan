import React, { Component } from "react";
import "./App.css";
import { computerMove, gameWinner } from './rps';

class App extends Component {
  state = {
    playerChoice: "",
    computerChoice: "",
    showMessage: false,
    results: "",
    renderGame: false
  }

  handleButtonClick(event) {
    let playerChoice = event.target.value
    let computerChoice = computerMove()
    this.setState({ playerChoice: playerChoice, computerChoice: computerChoice, showMessaage: true, results: gameWinner(playerChoice, computerChoice)})
  }

  render() {
    return (
      <>
          <h1>ROCK PAPER SCISSORS <i class="blind icon"></i></h1> 

          <button onClick={event => this.handleStartGame(event)}></button>

          <button onClick={event => this.handleButtonClick(event)} value="rock"><i class="huge hand scissors outline icon"></i></button>
          <button onClick={event => this.handleButtonClick(event)} value="paper"><i class="huge hand rock outline icon"></i></button>
          <button onClick={event => this.handleButtonClick(event)} value="scissors"><i class="huge hand paper outline icon"></i></button>
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
