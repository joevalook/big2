import React from "react";

function PokerNames(props) {
  const setScreen = props.setScreen;
  const playerNames = props.playerNames;
  const setPlayerNames = props.setPlayerNames;
  const handleClick = () => {
    setScreen(7);
  };
  const updateNameChanged = index => e => {
    console.log('index: ' + index);
    console.log('property name: ' + e.target.name);
    let newArr = [...playerNames]; // copying the old datas array
    // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
    newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to

    setPlayerNames(newArr);
  };

  return (
    <main>
      <form className="form-style-4">
        {

          playerNames.map((el,index) => {
          return(
            <label key={index}>
              <span>Enter Player {index+1}'s name</span><input type="text" name="field1"  placeholder={playerNames[index]} onChange={updateNameChanged(index)} />
            </label>
          )})
        }
          <button className={'btnNames'} onClick={handleClick} >
            Set Chip Values
          </button>
      </form>
    </main>
  );
}

export default PokerNames;