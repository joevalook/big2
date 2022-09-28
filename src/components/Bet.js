import React from "react";

function Bet(props) {

  const { chipHistory, tempBet, pot, setChipHistory, setPot, pokerScore, currentIndex, tempMoney, setPokerScore, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, bankruptIndex, turn, setTurn, pokerNumber, smallBlindIndex, setStageIndex, stageIndex} = props;

  const handleBet = () => {
    if (tempBet >= Math.max(...pot)) {
      if (turn > (pokerNumber - foldedIndex.length) && pot.every( (val, i, arr) => val === arr[0]) && stageIndex !== 3) {
        setCurrentIndex(smallBlindIndex)
        setStageIndex((prev) => prev+1)
        setTurn(0)
      }
      let tempPot = pot;
      tempPot[currentIndex] = tempBet;
      setPot(tempPot);
      let tempBank = pokerScore;
      tempBank[currentIndex] = tempMoney;
      setPokerScore(tempBank);
      let a = (currentIndex + 1) % pokerNumber;
      while (foldedIndex.includes(a)) {
        a = (a+1) % pokerNumber;
      }
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
    }
    else {
      console.log('invalid bet')
    }
  };
  return (
    <button className={`betButton`} onClick={handleBet}>
      Bet
    </button>
  );
}

export default Bet;