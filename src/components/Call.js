import React from "react";

function Call(props) {

  const { chipHistory, tempBet, pot, setChipHistory, setPot, pokerScore, currentIndex, tempMoney, setPokerScore, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, bankruptIndex, turn, setTurn, pokerNumber, stageIndex, smallBlindIndex, setStageIndex } = props;

  const handleCall = () => {
    let a = chipHistory;
    let b = chipHistory[turn];
    b.push(Math.max(...pot) - tempBet);
    a[turn] = b;
    setChipHistory(a);
    let tempPot = pot;
    tempPot[currentIndex] = Math.max(...pot);
    setPot(tempPot);
    let tempBank = pokerScore;
    tempBank[currentIndex] = tempMoney - (Math.max(...pot) - tempBet);
    setPokerScore(tempBank);
    let c = (currentIndex + 1) % pokerNumber;
    setCurrentIndex(c);
    setTempBet(pot[c]);
    setTempMoney(pokerScore[c]);
    while (foldedIndex.includes(c) || bankruptIndex.includes(c)) {
      c = (c + 1) % pokerNumber;
      setCurrentIndex((prev) => ((prev + 1) % pokerNumber));
      setTempBet(pot[c]);
      setTempMoney(pokerScore[c]);
    }
    setTurn((prev => prev + 1));
    let d = chipHistory;
    d.push([]);
    setChipHistory(d);
    let equalPot = []
    for (let j =0; j < pot.length; j++){
      if (!foldedIndex.includes(j)) {
        equalPot.push(pot[j])
      }
    }
    console.log(equalPot)
    console.log((turn + 2) > (pokerNumber - foldedIndex.length))
    console.log(stageIndex)
    if ((turn + 2) > (pokerNumber - foldedIndex.length) && equalPot.every((val, i, arr) => val === arr[0]) && stageIndex !== 3) {
      let realCI = smallBlindIndex
      while(foldedIndex.includes(realCI) || bankruptIndex.includes(realCI)) {
        console.log(realCI)
        realCI = (realCI+1)%pokerNumber
      }
      setCurrentIndex(realCI)
      setStageIndex((prev) => prev + 1);
      setTurn(0);
    }
    if ((turn + 2) > (pokerNumber - foldedIndex.length) && equalPot.every((val, i, arr) => val === arr[0]) && stageIndex === 3) {
      setStageIndex((prev) => prev + 1);
    }

  };

  return (
    <button className={"pokerButton "} onClick={handleCall}>
    {Math.max(...pot) === pot[currentIndex] && "Check"}
    {Math.max(...pot) !== pot[currentIndex] && "Call"}
  </button>
  );
}

export default Call;