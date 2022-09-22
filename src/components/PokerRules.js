import React from "react";

function PokerRules(props) {

  const { setPokerNumber, startingAmount, setStartingAmount, setScreen, setPlayerNames, pokerNumber, chipValues, setChipValues, blind, setBlind, pokerScore, setPokerScore, currentIndex, setCurrentIndex, pot, setPot, setBigBlindIndex, setSmallBlindIndex, setDealer } = props;
  const handleClick = () => {
    let a = [];
    let e = []
    let f = []
    for (let i = 1; i <= pokerNumber; i++) {
      a.push(`Player ${i}`);
      e.push(0)
      f.push(startingAmount)
    }
    setPlayerNames(a);
    setScreen(5);
    let b = Math.floor(Math.random() * pokerNumber)
    setCurrentIndex(b)
    setDealer((pokerNumber+b-3)%pokerNumber);
    setBigBlindIndex((pokerNumber+b-1)%pokerNumber);
    setSmallBlindIndex((pokerNumber+b-2)%pokerNumber);
    e[((pokerNumber+b-1)%pokerNumber)] = blind[1]
    e[((pokerNumber+b-2)%pokerNumber)] = blind[0]
    f[((pokerNumber+b-1)%pokerNumber)] = f[((pokerNumber+b-1)%pokerNumber)] - blind[1]
    f[((pokerNumber+b-2)%pokerNumber)] = f[((pokerNumber+b-2)%pokerNumber)] - blind[0]
    setPokerScore(f)
    setPot(e)
  };
  const updateNumber = () => e => {

    setPokerNumber(Number(e.target.value));


  };
  const updateStart = () => e => {
    setStartingAmount(Number(e.target.value));
  };
  const updateChipsChanged = index => e => {
    let newArr = [...chipValues]; // copying the old datas array
    // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
    newArr[index] = Number(e.target.value); // replace e.target.value with whatever you want to change it to

    setChipValues(newArr);
  };
  const updateblindChanged = index => e => {
    let newArr = [...blind]; // copying the old datas array
    // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
    newArr[index] = Number(e.target.value); // replace e.target.value with whatever you want to change it to

    setBlind(newArr);
  };
  return (
    <main className="longForm">
      <form className="form-style-4">
        <label>
          <span>Enter Number of Players</span><input type="text" name="field1" onChange={updateNumber()} placeholder={pokerNumber} />
        </label>
        <label>
          <span>Enter Starting Amount</span><input type="text" name="field2" onChange={updateStart()} placeholder={startingAmount} />
        </label>
        <label>
          <span>Enter the Big Blind value</span><input type="text" name="field3" placeholder={blind[1]} onChange={updateblindChanged(1)} />
        </label>
        <label>
          <span>Enter the Small Blind value</span><input type="text" name="field3" placeholder={blind[0]} onChange={updateblindChanged(0)} />
        </label>
        <button className={'btnNames'} onClick={handleClick} >
          Set Names
        </button>
      </form>
    </main>
  );
}

export default PokerRules;