import React, { useState } from "react";

  function CounterButton(props){
    
    const clickAmount = props.player
    const setClickAmount = props.setPlayer
    const position = props.position
    const setPosition = props.setPosition
    const games = props.games
    const setGames = props.setGames
    const playerName = props.playerName
    const history = props.history
    const setHistory = props.setHistory


    const handleClick = () => {
      setHistory(history => [...history, playerName])
      if (position === "first") {
        setPosition("second")
        setClickAmount(clickAmount + 2)
        console.log(history);
      }
      if (position === "second") {
        setPosition("third")
        setClickAmount(clickAmount + 1)
        console.log(history);
      }
      if (position === "third") {
        setPosition("last")
        setClickAmount(clickAmount - 1)
        console.log(history);
      }
      if (position === "last") {
        setPosition("first")
        setClickAmount(clickAmount - 2)
        setGames(games+1)
        console.log(history);
      }
    }
    return (
      <button onClick={handleClick} >
        {playerName} is at ${clickAmount} 

      </button>
    );
  }

  export default CounterButton;
