import React from "react";

function GameType(props) {

  const setNames = props.setNames
  const darkMode = props.darkMode

  const handleBig2 = () => {
    setNames(1);
  }

  const handlePoker = () => {
    setNames(4);
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