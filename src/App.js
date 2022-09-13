import PlayerScore from "./components/PlayerScore";
import PlayerName from "./components/PlayerName";
import PlayerRules from "./components/PlayerRules"
import Back from "./components/Back";
import GameType from "./components/GameType";
import './App.css';
import React, { useState } from "react";

function App() {
  const [position, setPosition] = useState('First');//current position 
  const [games, setGames] = useState(0);//number of games played
  const [player1, setPlayer1] = useState(0);//number of points for player 1
  const [player2, setPlayer2] = useState(0);//number of points for player 2
  const [player3, setPlayer3] = useState(0);//number of points for player 3
  const [player4, setPlayer4] = useState(0);//number of points for player 4
  const [playerNames, setPlayerNames] = useState(["Player 1", "Player 2", "Player 3", "Player 4"]);//player names
  const [points, setPoints] = useState([2, 1, -1, -2]);//number of points you win (1st, 2nd, 3rd, 4th)
  const [history, setHistory] = useState([]);//player names in order of click 
  const [color1, setColor1] = useState('btn');//color of player 1 button
  const [color2, setColor2] = useState('btn');//color of player 2 button
  const [color3, setColor3] = useState('btn');//color of player 3 button
  const [color4, setColor4] = useState('btn');//color of player 4 button
  const [names, setNames] = useState(0);//which screen you are on
  const [typeOfGame, setTypeOfGame] = useState(2)//poker vs big2 for setNames
  const [doubleUp, setDoubleUp] = useState(false)//are point values doubled
  const [darkMode, setDarkMode] = useState(false)// dark mode and light mode

  const handleReset = () => {
    setGames(0);
    setPosition('First');
    setPlayer1(0);
    setPlayer2(0);
    setPlayer3(0);
    setPlayer4(0);
    setHistory([]);
    setColor1('btn');
    setColor2('btn');
    setColor3('btn');
    setColor4('btn');
    setNames(0);
    setPlayerNames(["Player 1", "Player 2", "Player 3", "Player 4"]);
    setPoints([2, 1, -1, -2]);
    setDoubleUp(false);

  };

  const changeRules = () => {
    setNames(2)
  }

  const handleDark = () => {
    setDarkMode(!darkMode)
  }
  const double = () => {
    if (doubleUp === false) {
      const doublePoints = points.map(x => x * 2);
      setPoints(doublePoints)
      setDoubleUp(true);
    }
    else{
      const halfPoints = points.map(x => x / 2);
      setPoints(halfPoints)
      setDoubleUp(false);
    }
  }
  
  return (
    <div className={'App ' + (doubleUp ? 'red ' : ' ') + (darkMode ? 'black ' : 'white ') }>
      <h1>CHIPLESS</h1>
      {(names === 0) && <h2 className="cursive"> Gambling Without the Chips</h2>}
      {(names === 3) && <h2 > Games Played: {games}</h2>}
      {(names === 1) && <h2>Choose Your Character</h2>}
      {(names === 2) && <h2>Choose your Rule Set</h2>}
      {(names === 3) && <h3 className="position">Who Came {position}?</h3>}
      <div className={`row`}>
        {(names !== 0) && <Back player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2} player3={player3} setPlayer3={setPlayer3} player4={player4} setPlayer4={setPlayer4} position={position} setPosition={setPosition} games={games} setGames={setGames} playerNames={playerNames} history={history} setHistory={setHistory}  setColor1={setColor1} setColor2={setColor2} setColor3={setColor3} setColor4={setColor4} points={points} setPoints={setPoints} names = {names} setNames={setNames}/>}
        {(names === 3) && <button className={`changeRules`} onClick={changeRules}>
          Change Rules
        </button>}
        {(names === 3) && <button className={"double "} onClick={double}>
          Double Up
        </button>}
        {(names !== 0) && <button className={`reset`} onClick={handleReset}>
          Reset
        </button>}
      </div>
      

      {(names === 0) && <GameType setNames={setNames} setTypeOfGame={setTypeOfGame} />}
      {(names === 1) && <PlayerName playerNames={playerNames} setPlayerNames={setPlayerNames} setNames={setNames} points={points} setPoints={setPoints} typeOfGame={typeOfGame} setTypeOfGame={setTypeOfGame} />}
      {(names === 2) && <PlayerRules setNames={setNames} points={points} setPoints={setPoints} />}
      <section>
        {(names === 3) && <PlayerScore player={player1} setPlayer={setPlayer1} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[0]} history={history} setHistory={setHistory} color={color1} setColor={setColor1} setOtherColor1={setColor2} setOtherColor2={setColor3} setOtherColor3={setColor4} points={points} setPoints={setPoints} />}
        {(names === 3) && <PlayerScore player={player2} setPlayer={setPlayer2} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[1]} history={history} setHistory={setHistory} color={color2} setColor={setColor2} setOtherColor1={setColor1} setOtherColor2={setColor3} setOtherColor3={setColor4} points={points} setPoints={setPoints} />}
        {(names === 3) && <PlayerScore player={player3} setPlayer={setPlayer3} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[2]} history={history} setHistory={setHistory} color={color3} setColor={setColor3} setOtherColor1={setColor1} setOtherColor2={setColor2} setOtherColor3={setColor4} points={points} setPoints={setPoints} />}
        {(names === 3) && <PlayerScore player={player4} setPlayer={setPlayer4} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[3]} history={history} setHistory={setHistory} color={color4} setColor={setColor4} setOtherColor1={setColor1} setOtherColor2={setColor2} setOtherColor3={setColor3} points={points} setPoints={setPoints} />}
      </section>
      {(!darkMode) && <button className={`blackWhite`} onClick={handleDark}>
          Dark Mode
        </button>
      }
      {(darkMode) && <button className={`whiteBlack`} onClick={handleDark}>
          Light Mode
        </button>
      }
    </div>
  );
}

export default App;
