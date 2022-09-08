import React, { useState } from "react";

  function NameSetter(props){
    
    const names = props.names
    const playGame = props.setNames
    const playerNames = props.playerNames
    const setPlayerNames = props.setPlayerNames
    const handleClick = () => {
      playGame(true);
    }
    const updateFieldChanged = index => e => {
      console.log('index: ' + index);
      console.log('property name: '+ e.target.name);
      let newArr = [...playerNames]; // copying the old datas array
      // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
      newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to
    
      setPlayerNames(newArr);
    }

    return (
    <main>
     <form class="form-style-4" action="" method="post">
    <label for="field1">
    <span>Enter Player 1's name</span><input type="text" name="field1" required="true" onChange={updateFieldChanged(0)} />
    </label>
    <label for="field2">
    <span>Enter Player 2's name</span><input type="text" name="field2" required="true" onChange={updateFieldChanged(1)} />
    </label>
    <label for="field3">
    <span>Enter Player 3's name</span><input type="text" name="field3" required="true" onChange={updateFieldChanged(2)} />
    </label>
    <label for="field4">
    <span>Enter Player 3's name</span><input type="text" name="field3" required="true" onChange={updateFieldChanged(3)} />
    </label>
    <button className={'btnNames'}onClick={handleClick} >
        Start Game
      </button>
    </form>
    </main>
    );
  }

  export default NameSetter;