import React from "react";
import { nextTurn } from "./helpers/PokerNextTurn";

function Bet(props) {

  const { chipHistory, tempBet, pot, setChipHistory, setPot, pokerScore, currentIndex, tempMoney, setPokerScore, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, bankruptIndex, turn, setTurn, pokerNumber, smallBlindIndex, setStageIndex, stageIndex, history, setHistory, playerNames } = props;

  const handleBet = () => {
    if (tempBet >= Math.max(...pot)) {


      let tempPot = pot;
      tempPot[currentIndex] = tempBet;
      setPot(tempPot);
      let tempBank = pokerScore;
      tempBank[currentIndex] = tempMoney;
      setPokerScore(tempBank);
      nextTurn(chipHistory, pot, setChipHistory, pokerScore, currentIndex, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, bankruptIndex, turn, setTurn, pokerNumber, smallBlindIndex, setStageIndex, stageIndex, history, setHistory, playerNames)
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