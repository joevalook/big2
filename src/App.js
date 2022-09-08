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
  return (
    <div className={`App`}>
      <h1>Big 2 Score Keeping</h1>
      <h2> Games Played: {games}</h2>
      <h2>Who came {position}?</h2>

      <button  >
        hello 

      </button>
      
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
