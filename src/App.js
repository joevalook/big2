import PlayerScore from "./components/PlayerScore";
import './App.css';
import React, { useState } from "react";

function App() {
  const [position, setPosition] = useState('first');
  const [games, setGames] = useState(0);
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [player3, setPlayer3] = useState(0);
  const [player4, setPlayer4] = useState(0);
  const playerNames = ["player 1", "player 2","player 3","player 4"]
  const [history, setHistory] = useState([])


  const handleReset = () => {
    setGames(0)
    setPosition('first')
    setPlayer1(0)
    setPlayer2(0)
    setPlayer3(0)
    setPlayer4(0)
    setHistory([])

  }
  const handleBack = () => {
    if (history.length >= 1) {
      if (position === "first") {
        setPosition("last")
        setGames(games-1)
        if (history[history.length -1] === playerNames[0]){
          setPlayer1(player1 + 2)
        }
        if (history[history.length -1] === playerNames[1]){
          setPlayer2(player2 + 2)
        }
        if (history[history.length -1] === playerNames[2]){
          setPlayer3(player3 + 2)
        }
        if (history[history.length -1] === playerNames[3]){
          setPlayer4(player4 + 2)
        }
      }
      if (position === "second") {
        setPosition("first")
        if (history[history.length -1] === playerNames[0]){
          setPlayer1(player1 - 2)
        }
        if (history[history.length -1] === playerNames[1]){
          setPlayer2(player2 - 2)
        }
        if (history[history.length -1] === playerNames[2]){
          setPlayer3(player3 - 2)
        }
        if (history[history.length -1] === playerNames[3]){
          setPlayer4(player4 - 2)
        }

      }
      if (position === "third") {
        setPosition("second")
        if (history[history.length -1] === playerNames[0]){
          setPlayer1(player1 -1)
        }
        if (history[history.length -1] === playerNames[1]){
          setPlayer2(player2 -1)
        }
        if (history[history.length -1] === playerNames[2]){
          setPlayer3(player3 -1)
        }
        if (history[history.length -1] === playerNames[3]){
          setPlayer4(player4 -1)
        }

      }
      if (position === "last") {
        setPosition("third")
        if (history[history.length -1] === playerNames[0]){
          setPlayer1(player1 + 1)
        }
        if (history[history.length -1] === playerNames[1]){
          setPlayer2(player2 + 1)
        }
        if (history[history.length -1] === playerNames[2]){
          setPlayer3(player3 + 1)
        }
        if (history[history.length -1] === playerNames[3]){
          setPlayer4(player4 + 1)
        }

      }
      setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
    }
  }
  return (
    <div className={`App`}>
      <h1>Big 2 Score Keeping</h1>
      <h2> Games Played: {games}</h2>
      <h2>Who came {position}?</h2>
      <div className={`row`}>
        <button className={`back`} onClick={handleBack}>
          back 
        </button>
        <button className={`reset`} onClick={handleReset}>
          reset
        </button>
      </div>
      <section>
        <PlayerScore player = {player1} setPlayer = {setPlayer1} position = {position} setPosition={setPosition} games={games} setGames={setGames} playerName= {playerNames[0]} history={history} setHistory={setHistory}/>
        <PlayerScore player = {player2} setPlayer = {setPlayer2} position = {position} setPosition={setPosition} games={games} setGames={setGames} playerName= {playerNames[1]} history={history} setHistory={setHistory}/>
        <PlayerScore player = {player3} setPlayer = {setPlayer3} position = {position} setPosition={setPosition} games={games} setGames={setGames} playerName= {playerNames[2]} history={history} setHistory={setHistory}/>
        <PlayerScore player = {player4} setPlayer = {setPlayer4} position = {position} setPosition={setPosition} games={games} setGames={setGames} playerName= {playerNames[3]} history={history} setHistory={setHistory}/>
      </section>
    </div>
  );
}

export default App;
