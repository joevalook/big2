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
      console.log(foldedIndex)
    }

    else {
      let x = foldedIndex;
      x.push(currentIndex);
      setFoldedIndex(x);
      console.log(x)
      let a = 0
      for (let i = 0; i < pokerScore.length; i++) {
        if (!x.includes(i)) {
          setWinner(i);
          a = i
        }        
      }
      let sumPot = [...pot].reduce((a, b) => a + b, 0)
      console.log(sumPot)
      let tempPokerScore =  pokerScore
      tempPokerScore[a] += sumPot
      setPokerScore(tempPokerScore)
      // for(let i = 0; i < sumPot; i++){
      //   setTimeout(() => {
      //     let tempPokerScore = pokerScore 
      //     tempPokerScore[a] += 1
      //     setPokerScore(tempPokerScore)
      //     console.log(pokerScore)
      //     ;
      //   }, 100*i)
        
      // }
     
    }
  };

  return (
    <button className={`pokerButton`} onClick={handleFold}>
      Fold
    </button>
  );
}

export default Fold;