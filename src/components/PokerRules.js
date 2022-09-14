import React from "react";

function PokerRules(props) {

  const { setPokerNumber, startingAmount, setStartingAmount, setScreen, setPlayerNames, pokerNumber, chipValues, setChipValues } = props;
  const handleClick = () => {
    let a = [];
    for (let i = 1; i <= pokerNumber; i++) {
      a.push(`Player ${i}`);
    }
    setPlayerNames(a);
    setScreen(5);
  };
  const updateNumber = () => e => {

    setPokerNumber(Number(e.target.value));

  };
  const updateStart = () => e => {
    setStartingAmount(Number(e.target.value));
  };
  const updateChipsChanged = index => e => {
    console.log('index: ' + index);
    console.log('property name: ' + e.target.name);
    let newArr = [...chipValues]; // copying the old datas array
    // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
    newArr[index] = Number(e.target.value); // replace e.target.value with whatever you want to change it to

    setChipValues(newArr);
  };
  return (
    <main>
      <form className="form-style-4">
        <label>
          <span>Enter Number of Players</span><input type="text" name="field1" onChange={updateNumber()} placeholder={pokerNumber} />
        </label>
        <label>
          <span>Enter Starting Amount</span><input type="text" name="field2" onChange={updateStart()} placeholder={startingAmount} />
        </label>
        <label>
          <span>Enter the White chip's value</span><input type="text" name="field1" placeholder={chipValues[0]} onChange={updateChipsChanged(0)} />
        </label>
        <label>
          <span>Enter the Red chip's value</span><input type="text" name="field2" placeholder={chipValues[1]} onChange={updateChipsChanged(1)} />
        </label>
        <label>
          <span>Enter the Blue chip's value</span><input type="text" name="field3" placeholder={chipValues[2]} onChange={updateChipsChanged(2)} />
        </label>
        <label>
          <span>Enter the Green chip's value</span><input type="text" name="field3" placeholder={chipValues[3]} onChange={updateChipsChanged(3)} />
        </label>
        <label>
          <span>Enter the Black chip's value</span><input type="text" name="field3" placeholder={chipValues[4]} onChange={updateChipsChanged(4)} />
        </label>
        <label>
          <span>Enter the Purple chip's value</span><input type="text" name="field3" placeholder={chipValues[5]} onChange={updateChipsChanged(5)} />
        </label>
        <button className={'btnNames'} onClick={handleClick} >
          Set Names
        </button>
      </form>
    </main>
  );
}

export default PokerRules;