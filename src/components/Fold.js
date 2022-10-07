import React from "react";
import { useEffect } from "react";
import { nextTurn } from "./helpers/PokerNextTurn";

function Fold(props) {

  const { chipHistory, tempBet, pot, setChipHistory, setPot, pokerScore, currentIndex, tempMoney, setPokerScore, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, setFoldedIndex, bankruptIndex, turn, setTurn, pokerNumber, setWinner, winner, stageIndex, smallBlindIndex, setStageIndex, playersLeft, setPlayersLeft, history, setHistory, playerNames, turnHistory, setTurnHistory } = props;


  const handleFold = () => {
    if (pokerScore[currentIndex] !== 0) {
      let buttonAudio = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/Crumble%20Sound.mp3');
      buttonAudio.play();
      const index = playersLeft.indexOf(currentIndex);
      // console.log(index);
      let remaining = [...playersLeft];
      remaining.splice(index, 1);
      setPlayersLeft(remaining);
      document.getElementsByName(currentIndex)[0].style.color = "black";
      document.getElementsByName(currentIndex)[1].style.color = "black";
      document.getElementsByName(currentIndex)[2].style.color = "black";
      let x = foldedIndex;
      x.push(currentIndex);
      setFoldedIndex(x);
      if (x.length < (pot.length - bankruptIndex.length - 1)) {
        let a = chipHistory;
        a.pop();
        a.push('fold');
        setChipHistory([...a]);
        setFoldedIndex(x);
        setTurn((prev => prev - 1)); // correction for next round to correctly commence
        nextTurn(chipHistory, pot, setChipHistory, pokerScore, currentIndex, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, bankruptIndex, turn, setTurn, pokerNumber, smallBlindIndex, setStageIndex, stageIndex, history, setHistory, playerNames, turnHistory, setTurnHistory);
      }

      else {
        console.log(x);
        let a = 0;
        for (let i = 0; i < pokerScore.length; i++) {
          if (!x.includes(i)) {
            setWinner(i);
            a = i;
          }
        }
        for (let i = 0; i < pokerNumber; i++) {
          if (!bankruptIndex.includes(i) && x.includes(i)) {
            document.getElementsByName(i)[0].style.color = "white";
            document.getElementsByName(i)[1].style.color = "white";
            document.getElementsByName(i)[2].style.color = "white";
          }
          if (!bankruptIndex.includes(i) && !x.includes(i)) {
            document.getElementsByName(i)[0].style.color = "gold";
            document.getElementsByName(i)[1].style.color = "gold";
            document.getElementsByName(i)[2].style.color = "gold";
          }
        }
        let sumPot = [...pot].reduce((a, b) => a + b, 0);
        console.log(sumPot);
        let tempPokerScore = pokerScore;
        for (let i = 0; i < sumPot; i++) {
          setTimeout(() => {
            let aud = new Audio ('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav')
            aud.play();
            let tempPokerScore = pokerScore;
            tempPokerScore[a] += 1;
            setPokerScore([...tempPokerScore]);
            console.log(pokerScore);
          }, (2000 * i) / sumPot);
        }
        let e = [];
        for (let i = 1; i <= pokerNumber; i++) {
          e.push(0);
        }
        setPot(e);
      }
    }
    else {
      console.log('Cannot fold or else you are bankrupt');
    }
  };

  return (
    <button className={`pokerButton`} onClick={handleFold}>
      Fold
    </button>
  );
}

export default Fold;