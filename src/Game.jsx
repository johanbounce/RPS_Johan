import React, { Component } from "react";
import { botMove, gameWinner } from "./rps";
import { Popup } from "semantic-ui-react";
import "./style.css";

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
        <h1 style={{ fontFamily: "Futura", fontWeight: "lighter" }}>GAME ON</h1>
        <div style={{ margin: 5 }} class=" ui center aligned container">
          <Popup
            trigger={<i class="large question circle outline icon"></i>}
            content="Choose your pick from options below, and try to outsmart the computer!"
            inverted
            size="huge"
            fontFamily="Futura"
          ></Popup>
        </div>
        <div id="buttoncontainer">
          <button
            style={{ fontFamily: "Futura", fontWeight: "lighter" }}
            id="rock"
            onClick={event => this.handleButtonClick(event)}
            value="rock"
          ></button>

          <button
            style={{ fontFamily: "Futura", fontWeight: "lighter" }}
            id="paper"
            onClick={event => this.handleButtonClick(event)}
            value="paper"
          ></button>

          <button
            style={{ fontFamily: "Futura", fontWeight: "lighter" }}
            id="scissors"
            onClick={event => this.handleButtonClick(event)}
            value="scissors"
          ></button>
        </div>

        {this.state.showMessage && (
          <div id="message">
            <>
              <h2 id="you-pick"> {`You picked ${this.state.playerChoice}`}</h2>
              <h2 id="bot-pick">{`Computer picked ${this.state.computerChoice}`}</h2>
              <h1>{this.state.results}</h1>
            </>
          </div>
        )}
      </>
    );
  }
}

export default Game;
