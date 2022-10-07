import React from "react";
import { nextTurn } from "./helpers/PokerNextTurn";

function Bet(props) {

  const { chipHistory, tempBet, pot, setChipHistory, setPot, pokerScore, currentIndex, tempMoney, setPokerScore, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, bankruptIndex, turn, setTurn, pokerNumber, smallBlindIndex, setStageIndex, stageIndex, history, setHistory, playerNames, turnHistory, setTurnHistory } = props;

  const handleBet = () => {
    let total = []
    for (let i =0; i<pokerNumber; i++) {
      if (!foldedIndex.includes(i) && !bankruptIndex.includes(i))
      total.push(pokerScore[i] + pot[i])
    }
    if (tempBet >= Math.max(...pot) && tempBet <= Math.min(...total)) {
      let aud = new Audio ('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3')
      aud.play();
      let tempPot = pot;
      tempPot[currentIndex] = tempBet;
      setPot(tempPot);
      let tempBank = pokerScore;
      tempBank[currentIndex] = tempMoney;
      setPokerScore(tempBank);
      nextTurn(chipHistory, pot, setChipHistory, pokerScore, currentIndex, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, bankruptIndex, turn, setTurn, pokerNumber, smallBlindIndex, setStageIndex, stageIndex, history, setHistory, playerNames, turnHistory, setTurnHistory)
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