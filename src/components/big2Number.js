import React from "react";

function big2Number(props) {

  const { setPokerNumber, startingAmount, setStartingAmount, setScreen, setPlayerNames, pokerNumber, chipValues, setChipValues, blind, setBlind, pokerScore, setPokerScore, currentIndex, setCurrentIndex, pot, setPot, setBigBlindIndex, setSmallBlindIndex, setDealer, setTempBet, setTempMoney, setHistory, setPlayersLeft, history } = props;

  
  
  const handleClick = () => {
    let buttonAudio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3');
    buttonAudio.play();
    let a = [];
    let e = []
    let f = []
    let g = []
    for (let i = 1; i <= pokerNumber; i++) {
      a.push(`Player ${i}`);
      e.push(0)
      f.push(startingAmount)
      g.push(i-1)
    }
    setPlayerNames(a);
    setPlayersLeft(g);
    setScreen(1);
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
    setTempMoney(startingAmount)
    let hist = history
    hist.push(b)
    setHistory(hist)

  };
  const updateNumber = () => e => {

    setPokerNumber(Number(e.target.value));


  return (
    <main className="longForm">
      <form className="form-style-4">
        <label>
          <span>Enter Number of Players</span><input type="text" name="field1" onChange={updateNumber()} placeholder={pokerNumber} />
        </label>
        <button className={'btnNames'} onClick={handleClick} >
          Set Player Names
        </button>
      </form>
    </main>
  );
}

export default big2Number;