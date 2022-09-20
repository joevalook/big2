import React from "react";

  function PokerChip(props){
    const amount = props.amount
    const chipValues = props.chipValues
    const clickAmount = props.player
    const setClickAmount = props.setPlayer
    const position = props.position
    const setPosition = props.setPosition
    const games = props.games
    const setGames = props.setGames
    const playerName = props.playerName
    const history = props.history
    const setHistory = props.setHistory
    const setColor = props.setColor
    const setOtherColor1 = props.setOtherColor1
    const setOtherColor2 = props.setOtherColor2
    const setOtherColor3 = props.setOtherColor3
    const points = props.points
    const setPoints = props.setPoints
    const darkMode = props.darkMode
    
    let chipColor = ""
    let whiteChipFont = ""
    if (amount === chipValues[0]) {
      chipColor = "white"
      whiteChipFont = "black"
    }
    if (amount === chipValues[1]) {
      chipColor = "red"
    }
    if (amount === chipValues[2]) {
      chipColor = "blue"
    }
    if (amount === chipValues[3]) {
      chipColor = "green"
    }
    if (amount === chipValues[4]) {
      chipColor = "rgb(235, 122, 57)"
    }
    if (amount === chipValues[5]) {
      chipColor = "black"
    }


    const handleClick = () => {
      setHistory(history => [...history, playerName])
      
    }
    return (
      <button className='pokerChip' style={{backgroundColor: chipColor, color: whiteChipFont }} onClick={handleClick} >
        ${amount} 
      </button>
    );
  }

  export default PokerChip;


