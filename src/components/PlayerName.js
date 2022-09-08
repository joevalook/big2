import React, { useState } from "react";

  function NameSetter(props){
    
    const setNames = props.setNames
    const playerNames = props.playerNames
    const setPlayerNames = props.setPlayerNames
    const handleClick = () => {
      setNames(true);
    }

    return (
      <button className={'btnNames'}onClick={handleClick} >
        Start Game
      </button>
    );
  }

  export default NameSetter;