import React from "react";

function GameType(props) {

  const { setScreen, darkMode, setTypeOfGame} = props
  
  const handleBig2 = () => {
    setScreen(1);
    setTypeOfGame('big2')
  }

  const handlePoker = () => {
    setScreen(4);
    setTypeOfGame('poker')
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