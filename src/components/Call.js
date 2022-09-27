import React from "react";

function Call(props) {

  const { chipHistory, tempBet, pot, setChipHistory, setPot, pokerScore, currentIndex, tempMoney, setPokerScore, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, bankruptIndex, turn, setTurn, pokerNumber } = props;

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
      setTempBet(pot(c));
      setTempMoney(pokerScore[c]);
    }
    setTurn((prev => prev + 1));
    let d = chipHistory;
    d.push([]);
    setChipHistory(d);

  };

  return (
    <button className={"pokerButton "} onClick={handleCall}>
    {Math.max(...pot) === pot[currentIndex] && "Check"}
    {Math.max(...pot) !== pot[currentIndex] && "Call"}
  </button>
  );
}

export default Call;