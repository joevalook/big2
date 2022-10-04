import React from "react";
import { nextTurn } from "./helpers/PokerNextTurn";

function Call(props) {

  const { chipHistory, tempBet, pot, setChipHistory, setPot, pokerScore, currentIndex, tempMoney, setPokerScore, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, bankruptIndex, turn, setTurn, pokerNumber, stageIndex, smallBlindIndex, setStageIndex, history, setHistory, playerNames } = props;

  const handleCall = () => {
    let a = chipHistory;
    let b = chipHistory[chipHistory.length-1];
    b.push(Math.max(...pot) - tempBet);
    a[turn] = b;
    setChipHistory(a);
    let tempPot = pot;
    tempPot[currentIndex] = Math.max(...pot);
    setPot(tempPot);
    let tempBank = pokerScore;
    tempBank[currentIndex] = tempMoney - (Math.max(...pot) - tempBet);
    setPokerScore(tempBank);
    nextTurn(chipHistory, pot, setChipHistory, pokerScore, currentIndex, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, bankruptIndex, turn, setTurn, pokerNumber, smallBlindIndex, setStageIndex, stageIndex, history, setHistory, playerNames)

  };

  return (
    <button className={"pokerButton "} onClick={handleCall}>
    {Math.max(...pot) === pot[currentIndex] && "Check"}
    {Math.max(...pot) !== pot[currentIndex] && "Call"}
  </button>
  );
}

export default Call;