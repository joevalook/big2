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
    const color = props.color
    const setColor = props.setColor
    const setOtherColor1 = props.setOtherColor1
    const setOtherColor2 = props.setOtherColor2
    const setOtherColor3 = props.setOtherColor3


    const handleClick = () => {
      setHistory(history => [...history, playerName])
      if (position === "first") {
        setPosition("second")
        setClickAmount(clickAmount + 2)
        setColor('gold')
      }
      if (position === "second") {
        setPosition("third")
        setClickAmount(clickAmount + 1)
        setColor('silver')
      }
      if (position === "third") {
        setPosition("last")
        setClickAmount(clickAmount - 1)
        setColor('bronze')
      }
      if (position === "last") {
        setPosition("first")
        setClickAmount(clickAmount - 2)
        setGames(games+1)
        setColor('last')
        const timeoutId = setTimeout(() => {
          setColor('btn')
          setOtherColor1('btn')
          setOtherColor2('btn')
          setOtherColor3('btn')
        }, 5000)
      }
      console.log(history);
    }
    if (position !== 'fourth'){

    }
    return (
      <button className={color}onClick={handleClick} >
        {playerName} is at ${clickAmount} 
      </button>
    );
  }

  export default CounterButton;
