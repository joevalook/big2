import React from "react";

function Fold(props) {

  const { chipHistory, tempBet, pot, setChipHistory, setPot, pokerScore, currentIndex, tempMoney, setPokerScore, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, setFoldedIndex, bankruptIndex, turn, setTurn, pokerNumber} = props;

  const handleFold = () => {
    document.getElementsByName(currentIndex)[0].style.color = "black"
    document.getElementsByName(currentIndex)[1].style.color = "black"
    document.getElementsByName(currentIndex)[2].style.color = "black"
    let x = foldedIndex
    x.push(currentIndex)
    setFoldedIndex(x)
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
  };

  return (
    <button className={`pokerButton`} onClick={handleFold}>
      Fold
    </button>
  );
}

export default Fold;