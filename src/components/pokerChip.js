import React from "react";

  function PokerChip(props){
    const { amount, chipValues, position, setPosition, games, setGames, playerName, chipHistory, setChipHistory, points, setPoints, darkMode, setTempBet, setTempMoney, turn, tempMoney, history} = props
    
    let chipColor = ""
    let whiteChipFont = ""
    let borderColor = ""
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
    if (amount === chipValues[0] ) {
      borderColor = "black"
    }
    if (amount === chipValues[5]) {
      borderColor = "white"
    }
    if ((amount !== chipValues[0] && amount !== chipValues[5]) && darkMode === true) {
      borderColor = "white"
    }
    if ((amount !== chipValues[0] && amount !== chipValues[5]) && darkMode === false) {
      borderColor = "black"
    }
    


    const handleClick = () => {
      if ((tempMoney-amount) >= 0){
        let a = chipHistory
        let b = chipHistory[chipHistory.length-1]
        b.push(amount)
        a[chipHistory.length-1] = b
        setChipHistory(a)
        console.log(turn);
        // console.log(chipHistory)
        // console.log(history)
        setTempBet((prev) => (prev + amount))     
        setTempMoney((prev) => (prev - amount)) 
      }
    }
    return (
      <button className='pokerChip' style={{backgroundColor: chipColor, color: whiteChipFont, borderColor: borderColor }} onClick={handleClick} >
        ${amount} 
      </button>
    );
  }

  export default PokerChip;


