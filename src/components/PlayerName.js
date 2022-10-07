import React from "react";

function NameSetter(props) {

  const { setScreen, playerNames, setPlayerNames, typeOfGame } = props
  
  const handleClick = () => {
    setScreen(2);
    let buttonAudio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3');
    buttonAudio.play();
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
          <span>Enter Player 1's name</span><input type="text" name="field1" placeholder={playerNames[0]} onChange={updateNameChanged(0)} />
        </label>
        <label>
          <span>Enter Player 2's name</span><input type="text" name="field2" placeholder={playerNames[1]} onChange={updateNameChanged(1)} />
        </label>
        <label>
          <span>Enter Player 3's name</span><input type="text" name="field3" placeholder={playerNames[2]} onChange={updateNameChanged(2)} />
        </label>
        <label>
          <span>Enter Player 3's name</span><input type="text" name="field3" placeholder={playerNames[3]} onChange={updateNameChanged(3)} />
        </label>
        <button className={'btnNames'} onClick={handleClick} >
          Set Rules
        </button>
      </form>
    </main>
  );
}

export default NameSetter;