import React from "react";

function GameType(props) {

  const setNames = props.setNames
  const setTypeOfGame = props.setTypeOfGame

  const handleBig2 = () => {
    setTypeOfGame(2)
    setNames(1);
  }

  const handlePoker = () => {
    setTypeOfGame(4)
    setNames(1);
  }


  return (
    <div className="big2Poker">
      <button className={`fire`} onClick={handleBig2}>
        Big 2
      </button>
      <button className={`ice`} onClick={handlePoker}>
        Poker
      </button>
    </div>
  );
}

export default GameType;