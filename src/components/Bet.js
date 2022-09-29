import React from "react";

function Bet(props) {

  const { chipHistory, tempBet, pot, setChipHistory, setPot, pokerScore, currentIndex, tempMoney, setPokerScore, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, bankruptIndex, turn, setTurn, pokerNumber, smallBlindIndex, setStageIndex, stageIndex } = props;

  const handleBet = () => {
    if (tempBet >= Math.max(...pot)) {


      let tempPot = pot;
      tempPot[currentIndex] = tempBet;
      setPot(tempPot);
      let tempBank = pokerScore;
      tempBank[currentIndex] = tempMoney;
      setPokerScore(tempBank);
      let a = (currentIndex + 1) % pokerNumber;
      while (foldedIndex.includes(a)) {
        a = (a + 1) % pokerNumber;
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
      let equalPot = [];
      for (let j = 0; j < pot.length; j++) {
        if (!foldedIndex.includes(j)) {
          equalPot.push(pot[j]);
        }
      }
      console.log(equalPot);
      console.log((turn + 2) > (pokerNumber - foldedIndex.length));
      console.log(stageIndex);
      console.log();
      if ((turn + 2) > (pokerNumber - foldedIndex.length) && equalPot.every((val, i, arr) => val === arr[0]) && stageIndex !== 3) {
        let realCI = smallBlindIndex;
        while (foldedIndex.includes(realCI) || bankruptIndex.includes(realCI)) {
          console.log(realCI);
          realCI = (realCI + 1) % pokerNumber;
        }
        setCurrentIndex(realCI);
        setStageIndex((prev) => prev + 1);
        setTurn(0);
      }
      if ((turn + 2) > (pokerNumber - foldedIndex.length) && equalPot.every((val, i, arr) => val === arr[0]) && stageIndex === 3) {
        setStageIndex((prev) => prev + 1);
      }
    }
    else {
      console.log('invalid bet');
    }
  };
  return (
    <button className={`betButton`} onClick={handleBet}>
      Bet
    </button>
  );
}

export default Bet;