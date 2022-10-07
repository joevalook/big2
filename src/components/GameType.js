import React from "react";

function GameType(props) {

  const { setScreen, darkMode, setTypeOfGame} = props

  let buttonAudio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3');
  
  const handleBig2 = () => {
    setScreen(1);
    setTypeOfGame('big2')
    buttonAudio.play()
  }

  const handlePoker = () => {
    setScreen(4);
    setTypeOfGame('poker')
    buttonAudio.play()
  }


  return (
    <div className="big2Poker">
      <button className={(darkMode ? 'fire2 ' : 'fire ')} onClick={handleBig2}>
        Big 2
      </button>
      <button className={(darkMode ? 'ice2 ' : 'ice ')} onClick={handlePoker}>
        Poker
      </button>
    </div>
  );
}

export default GameType;