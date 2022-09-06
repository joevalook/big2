import React, { useState } from "react";

  function CounterButton(props){
    
    const clickAmount = props.player
    const setClickAmount = props.setPlayer
    const position = props.position
    const setPosition = props.setPosition
    const games = props.games
    const setGames = props.setGames
    const playerName = props.playerName


    const handleClick = () => {
      
      if (position === "first") {
        setPosition("second")
        setClickAmount(clickAmount + 2)
      }
      if (position === "second") {
        setPosition("third")
        setClickAmount(clickAmount + 1)
      }
      if (position === "third") {
        setPosition("last")
        setClickAmount(clickAmount - 1)
      }
      if (position === "last") {
        setPosition("first")
        setClickAmount(clickAmount - 2)
        setGames(games+1)
      }
    }
    return (
      <button onClick={handleClick} className="CounterButton">
        {playerName} is at ${clickAmount} 
      </button>
    );
  }

  export default CounterButton;
