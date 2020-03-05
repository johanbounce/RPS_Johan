import React, { Component } from "react";
import { botMove, gameWinner } from "./rps";
import { playerChoice, computerChoice} from "./Game";

class Message extends Component {
  render() {
  return (
    <>
    <h2 id="you-pick"> {`You picked ${this.state.playerChoice}`}</h2>
    <h2 id="bot-pick">{`Computer picked ${this.state.computerChoice}`}</h2>
    <h1>{this.state.results}</h1>
    </>
    )
  }
}

export default Message;