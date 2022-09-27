import React from "react";

function Bet(props) {

  const { chipHistory, tempBet, pot, setChipHistory, setPot, pokerScore, currentIndex, tempMoney, setPokerScore, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, bankruptIndex, turn, setTurn, pokerNumber } = props;

  const handleBet = () => {
    let tempPot = pot;
    tempPot[currentIndex] = tempBet;
    setPot(tempPot);
    let tempBank = pokerScore;
    tempBank[currentIndex] = tempMoney;
    setPokerScore(tempBank);
    let a = (currentIndex + 1) % pokerNumber;
    setCurrentIndex(a);
    setTempBet(pot[a]);
    setTempMoney(pokerScore[a]);
    while (foldedIndex.includes(a) || bankruptIndex.includes(a)) {
      a = (a + 1) % pokerNumber;
      setCurrentIndex((prev) => ((prev + 1) % pokerNumber));
      setTempBet(pot(a));
      setTempMoney(pokerScore[a]);
    }
    setTurn((prev => prev + 1));
    let b = chipHistory;
    b.push([]);
    setChipHistory(b);
  };

  return (
    <button className={`betButton`} onClick={handleBet}>
      Bet
    </button>
  );
}

export default Bet;