import React from "react";

  function PokerChip(props){
    const amount = props.amount
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
    const points = props.points
    const setPoints = props.setPoints
    const darkMode = props.darkMode


    const handleClick = () => {
      setHistory(history => [...history, playerName])
      
    }
    return (
      <button className={color}onClick={handleClick} >
        ${amount} 
      </button>
    );
  }

  export default PokerChip;


