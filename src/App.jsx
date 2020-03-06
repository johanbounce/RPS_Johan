import React, { Component } from "react";
import Game from "./Game";

class App extends Component {
    state = {
      renderGame: false
    }

    handleShowClick(event) {
      this.setState({renderGame: true})
    }

    handleHideClick(event) {
      this.setState({renderGame: false})
    }

  render() {
    return (
      <>
        <div 
        id="maindiv"
        class="ui center aligned container">
          <h1
          style ={{fontFamily: "Futura", fontWeight: "lighter"}} 
          id="fknheader">ROCK PAPER SCISSORS</h1>
          <button
          style ={{fontFamily: "Futura", fontWeight: "lighter"}} 
          id="btn enter"style={{marginBottom: 25}} onClick={event => this.handleShowClick(event)}>
            ENTER GAME
          </button>
          <div class="ui center aligned container">

           {this.state.renderGame && 
            <Game />}
            {this.state.renderGame && 
            <div style={{margin: 25}}>
            <button
            style ={{fontFamily: "Futura", fontWeight: "lighter"}} 
            id="end-game" onClick={event => this.handleHideClick(event)}>END GAME</button>
            </div>
            }
            
            </div>
        </div>
      </>
    );
  }
}

export default App;
