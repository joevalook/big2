import React from "react";
import { useEffect } from "react";

function Fold(props) {

  const { chipHistory, tempBet, pot, setChipHistory, setPot, pokerScore, currentIndex, tempMoney, setPokerScore, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, setFoldedIndex, bankruptIndex, turn, setTurn, pokerNumber, setWinner, winner } = props;


  const handleFold = () => {
    document.getElementsByName(currentIndex)[0].style.color = "black";
    document.getElementsByName(currentIndex)[1].style.color = "black";
    document.getElementsByName(currentIndex)[2].style.color = "black";
    if (foldedIndex.length < (pot.length - bankruptIndex.length - 2)) {
      let x = foldedIndex;
      x.push(currentIndex);
      setFoldedIndex(x);
      let a = (currentIndex + 1) % pokerNumber;
      setCurrentIndex(a);
      setTempBet(pot[a]);
      setTempMoney(pokerScore[a]);
      while (foldedIndex.includes(a) || bankruptIndex.includes(a)) {
        a = (a + 1) % pokerNumber;
        setCurrentIndex((prev) => ((prev + 1) % pokerNumber));
        setTempBet(pot[a]);
        setTempMoney(pokerScore[a]);
      }
      setTurn((prev => prev + 1));
      let b = chipHistory;
      b.push([]);
      setChipHistory(b);
      console.log(foldedIndex);
    }

    else {
      let x = foldedIndex;
      x.push(currentIndex);
      setFoldedIndex(x);
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
          let tempPokerScore = pokerScore;
          tempPokerScore[a] += 1;
          setPokerScore([...tempPokerScore]);
          console.log(pokerScore);
        }, (2000 * i) / sumPot);
      }
      let e = []
      for (let i = 1; i <= pokerNumber; i++) {
        e.push(0)
      }
      setPot(e)
    }
  };

  return (
    <button className={`pokerButton`} onClick={handleFold}>
      Fold
    </button>
  );
}

export default Fold;