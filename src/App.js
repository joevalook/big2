import PlayerScore from "./components/PlayerScore";
import './App.css';
import React, { useState } from "react";

function App() {
  const [position, setPosition] = useState('first');
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [player3, setPlayer3] = useState(0);
  const [player4, setPlayer4] = useState(0);
  return (
    <div className={`App`}>
      <h1>Big 2 Score Keeping</h1>
      <h2>Who came {position}?</h2>
      <section>
        <PlayerScore player = {player1} setPlayer = {setPlayer1} position = {position} setPosition={setPosition}/>
        <PlayerScore player = {player2} setPlayer = {setPlayer2} position = {position} setPosition={setPosition}/>
        <PlayerScore player = {player3} setPlayer = {setPlayer3} position = {position} setPosition={setPosition}/>
        <PlayerScore player = {player4} setPlayer = {setPlayer4} position = {position} setPosition={setPosition}/>
      </section>
    </div>
  );
}

export default App;
