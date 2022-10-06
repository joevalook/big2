// the same next turn function is used when you bet, call, or fold
function nextTurn(chipHistory, pot, setChipHistory, pokerScore, currentIndex, setCurrentIndex, setTempBet, setTempMoney, foldedIndex, bankruptIndex, turn, setTurn, pokerNumber, smallBlindIndex, setStageIndex, stageIndex, history, setHistory, playerNames, turnHistory, setTurnHistory) {
  if (document.getElementsByName(currentIndex)[0].style.color === "limegreen") {
    document.getElementsByName(currentIndex)[0].style.color = "white";
    document.getElementsByName(currentIndex)[1].style.color = "white";
    document.getElementsByName(currentIndex)[2].style.color = "white";
  }
  let c = (currentIndex + 1) % pokerNumber;
  while (foldedIndex.includes(c) || bankruptIndex.includes(c)) {
    c = (c + 1) % pokerNumber;
  }
  document.getElementsByName(c)[0].style.color = "limegreen";
  document.getElementsByName(c)[1].style.color = "limegreen";
  document.getElementsByName(c)[2].style.color = "limegreen";
  let a = history;
  a.push(c);
  setHistory([...a]);
  setCurrentIndex(c);
  setTempBet(pot[c]);
  setTempMoney(pokerScore[c]);
  let newTurn = turn + 1
  setTurn(newTurn);
  let tempturn = [...turnHistory]
  tempturn.push(newTurn)
  setTurnHistory(tempturn)
  let d = chipHistory;
  d.push([]);
  setChipHistory(d);
  let equalPot = [];
  for (let j = 0; j < pot.length; j++) {
    if (!foldedIndex.includes(j)) {
      equalPot.push(pot[j]);
    }
  }
  // console.log(equalPot);
  // console.log(turn);
  // console.log(history)
  // console.log(chipHistory)
  // console.log((turn + 2) > (pokerNumber - foldedIndex.length));
  // console.log(stageIndex);
  if ((turn + 2) > (pokerNumber - (foldedIndex.length + bankruptIndex.length)) && equalPot.every((val, i, arr) => val === arr[0]) && stageIndex !== 3) {
    document.getElementsByName(c)[0].style.color = "white";
    document.getElementsByName(c)[1].style.color = "white";
    document.getElementsByName(c)[2].style.color = "white";
    let realCI = smallBlindIndex;
    while (foldedIndex.includes(realCI) || bankruptIndex.includes(realCI)) {
      // console.log(realCI);
      realCI = (realCI + 1) % pokerNumber;
    }
    let a = [...history];
    a.pop();
    a.push(realCI);
    setHistory([...a]);
    document.getElementsByName(realCI)[0].style.color = "limegreen";
    document.getElementsByName(realCI)[1].style.color = "limegreen";
    document.getElementsByName(realCI)[2].style.color = "limegreen";
    setCurrentIndex(realCI);
    setStageIndex((prev) => prev + 1);
    setTurn(0);
    tempturn.pop()
    tempturn.push(0)
    setTurnHistory(tempturn)
  }
  if ((turn + 2) > (pokerNumber - (foldedIndex.length + bankruptIndex.length)) && equalPot.every((val, i, arr) => val === arr[0]) && stageIndex === 3) {
    let a = [...history];
    a.pop();
    setHistory([...a]);
    setStageIndex((prev) => prev + 1);
    setTurn(0);
  }
  console.log(turnHistory)
}

export { nextTurn };