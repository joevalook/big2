import React from "react";

function NameSetter(props) {

  const setRules = props.setNames
  const playerNames = props.playerNames
  const setPlayerNames = props.setPlayerNames
  const typeOfGame = props.typeOfGame;
  const handleClick = () => {
    setRules(typeOfGame);
  }
  const updateNameChanged = index => e => {
    console.log('index: ' + index);
    console.log('property name: ' + e.target.name);
    let newArr = [...playerNames]; // copying the old datas array
    // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
    newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to

    setPlayerNames(newArr);
  }

  return (
    <main>
      <form className="form-style-4" >
        <label>
          <span>Enter Player 1's name</span><input type="text" name="field1" required="true" placeholder={playerNames[0]} onChange={updateNameChanged(0)} />
        </label>
        <label>
          <span>Enter Player 2's name</span><input type="text" name="field2" required="true" placeholder={playerNames[1]} onChange={updateNameChanged(1)} />
        </label>
        <label>
          <span>Enter Player 3's name</span><input type="text" name="field3" required="true" placeholder={playerNames[2]} onChange={updateNameChanged(2)} />
        </label>
        <label>
          <span>Enter Player 3's name</span><input type="text" name="field3" required="true" placeholder={playerNames[3]} onChange={updateNameChanged(3)} />
        </label>
        <button className={'btnNames'} onClick={handleClick} >
          Set Rules
        </button>
      </form>
    </main>
  );
}

export default NameSetter;