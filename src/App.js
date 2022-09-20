import PlayerScore from "./components/PlayerScore";
import PlayerName from "./components/PlayerName";
import PlayerRules from "./components/PlayerRules";
import Back from "./components/Back";
import GameType from "./components/GameType";
import PokerRules from "./components/PokerRules";
import PokerNames from "./components/PokerNames";
import PokerChip from "./components/pokerChip";
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
  const [screen, setScreen] = useState(0);//which screen you are on
  const [typeOfGame, setTypeOfGame] = useState(2);//poker vs big2 for screen
  const [doubleUp, setDoubleUp] = useState(false);//are point values doubled
  const [darkMode, setDarkMode] = useState(false);// dark mode and light mode
  const [pokerStartingAmount, setPokerStartingAmount] = useState(810)//starting amount of money each player has in poker
  const [pokerNumber, setPokerNumber] = useState(5)//Number of people playing poker
  const [chipValues, setChipValues] = useState([1, 5, 10, 25, 50, 100]); //values for the poker chips
  const [chipHistory, setChipHistory] = useState([]); //values for the chip history
  const [blind, setBlind] = useState([5,10])

  const handleReset = () => {
    setGames(0);
    setPosition('First');
    setPlayer1(0);
    setPlayer2(0);
    setPlayer3(0);
    setPlayer4(0);
    setHistory([]);
    setColor1('btn2');
    setColor2('btn2');
    setColor3('btn2');
    setColor4('btn2');
    setScreen(0);
    setPlayerNames(["Player 1", "Player 2", "Player 3", "Player 4"]);
    setPoints([2, 1, -1, -2]);
    setDoubleUp(false);
    setDarkMode(false);
    document.getElementsByTagName("html")[0].style.backgroundColor = "#333";
  };

  const changeRules = () => {
    setScreen(2);
  };

  const handleDark = () => {
    setDarkMode(!darkMode);
    setColor1((prev) => (color1 === 'btn2' ? 'btn' : prev));
    setColor2((prev) => (color2 === 'btn2' ? 'btn' : prev));
    setColor3((prev) => (color3 === 'btn2' ? 'btn' : prev));
    setColor4((prev) => (color4 === 'btn2' ? 'btn' : prev));
    document.getElementsByTagName("html")[0].style.backgroundColor = 'black';
    console.log(playerNames);
    console.log(chipValues);
  };
  const handleLight = () => {
    setDarkMode(!darkMode);
    setColor1((prev) => (color1 === 'btn' ? 'btn2' : prev));
    setColor2((prev) => (color2 === 'btn' ? 'btn2' : prev));
    setColor3((prev) => (color3 === 'btn' ? 'btn2' : prev));
    setColor4((prev) => (color4 === 'btn' ? 'btn2' : prev));
    document.getElementsByTagName("html")[0].style.backgroundColor = '#333';
  };
  const double = () => {
    if (doubleUp === false) {
      const doublePoints = points.map(x => x * 2);
      setPoints(doublePoints);
      setDoubleUp(true);
      document.getElementsByTagName("html")[0].style.backgroundColor = "red";
    }
    else {
      const halfPoints = points.map(x => x / 2);
      setPoints(halfPoints);
      setDoubleUp(false);
      document.getElementsByTagName("html")[0].style.backgroundColor = (darkMode ? "black" : "#333")
    }
  };

  return (
    <div className={'App ' + (doubleUp ? 'red ' : ' ') + (darkMode ? 'black ' : 'white ')}>
      {/* Title and Instructions */}
      <h1>CHIPLESS</h1>
      {(screen === 0) && <h2 className="cursive"> Gambling Without the Chips</h2>}
      {(screen === 3) && <h2 > Games Played: {games}</h2>}
      {(screen === 1) && <h2>Choose Your Character</h2>}
      {(screen === 2) && <h2>Choose your Rule Set</h2>}

      {/* Top Nav Bar */}
      <div className={`navRow`}>
        {(screen !== 0) && <Back darkMode={darkMode} player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2} player3={player3} setPlayer3={setPlayer3} player4={player4} setPlayer4={setPlayer4} position={position} setPosition={setPosition} games={games} setGames={setGames} playerNames={playerNames} history={history} setHistory={setHistory} setColor1={setColor1} setColor2={setColor2} setColor3={setColor3} setColor4={setColor4} points={points} setPoints={setPoints} names={screen} setNames={setScreen} />}
        {(screen === 3) && <button className={`changeRules`} onClick={changeRules}>
          Change Rules
        </button>}
        {(screen === 3) && <button className={"double "} onClick={double}>
          Double Up
        </button>}
        {(screen !== 0) && <button className={`reset`} onClick={handleReset}>
          Reset
        </button>}
      </div>
      {(screen === 3) && <h3 className={darkMode ? 'position2 ' : 'position '}>Who Came {position}?</h3>}

      {/* Main Screen */}
      {(screen === 0) && <GameType setNames={setScreen} setTypeOfGame={setTypeOfGame} darkMode={darkMode} />}

      {/* Big 2 Setup */}
      {(screen === 1) && <PlayerName playerNames={playerNames} setPlayerNames={setPlayerNames} setNames={setScreen} points={points} setPoints={setPoints} typeOfGame={typeOfGame} setTypeOfGame={setTypeOfGame} />}
      {(screen === 2) && <PlayerRules setNames={setScreen} points={points} setPoints={setPoints} />}

      {/* Poker Setup */}
      {(screen === 4) && <PokerRules setPokerNumber={setPokerNumber} startingAmount={pokerStartingAmount} setStartingAmount={setPokerStartingAmount} setScreen={setScreen} setPlayerNames={setPlayerNames} pokerNumber={pokerNumber} chipValues={chipValues} setChipValues={setChipValues} blind={blind} setBlind={setBlind}/>}
      {(screen === 5) && <PokerNames playerNames={playerNames} setPokerNumber={setPokerNumber} setStartingAmount={setPokerStartingAmount} setScreen={setScreen} setPlayerNames={setPlayerNames} pokerNumber={pokerNumber} />}
      <section>
        {/* Big 2 Game */}
        {(screen === 3) && <PlayerScore darkMode={darkMode} player={player1} setPlayer={setPlayer1} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[0]} history={history} setHistory={setHistory} color={color1} setColor={setColor1} setOtherColor1={setColor2} setOtherColor2={setColor3} setOtherColor3={setColor4} points={points} setPoints={setPoints} />}
        {(screen === 3) && <PlayerScore darkMode={darkMode} player={player2} setPlayer={setPlayer2} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[1]} history={history} setHistory={setHistory} color={color2} setColor={setColor2} setOtherColor1={setColor1} setOtherColor2={setColor3} setOtherColor3={setColor4} points={points} setPoints={setPoints} />}
        {(screen === 3) && <PlayerScore darkMode={darkMode} player={player3} setPlayer={setPlayer3} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[2]} history={history} setHistory={setHistory} color={color3} setColor={setColor3} setOtherColor1={setColor1} setOtherColor2={setColor2} setOtherColor3={setColor4} points={points} setPoints={setPoints} />}
        {(screen === 3) && <PlayerScore darkMode={darkMode} player={player4} setPlayer={setPlayer4} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[3]} history={history} setHistory={setHistory} color={color4} setColor={setColor4} setOtherColor1={setColor1} setOtherColor2={setColor2} setOtherColor3={setColor3} points={points} setPoints={setPoints} />}

        {/* Poker Game */}
        {(screen === 6) && <div className="bottom">
          <div className="row"> 
            <PokerChip amount={chipValues[0]} chipValues={chipValues} darkMode={darkMode} player={player1} setPlayer={setPlayer1} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[0]} history={history} setHistory={setHistory} points={points} setPoints={setPoints} />
            <PokerChip amount={chipValues[1]} chipValues={chipValues} darkMode={darkMode} player={player2} setPlayer={setPlayer2} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[1]} history={history} setHistory={setHistory}  points={points} setPoints={setPoints} />
            <PokerChip amount={chipValues[2]} chipValues={chipValues} darkMode={darkMode} player={player3} setPlayer={setPlayer3} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[2]} history={history} setHistory={setHistory}  points={points} setPoints={setPoints} />
          </div>
          <div className="row">
            <PokerChip amount={chipValues[3]} chipValues={chipValues} darkMode={darkMode} player={player4} setPlayer={setPlayer4} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[3]} history={history} setHistory={setHistory}  points={points} setPoints={setPoints} />
            <PokerChip amount={chipValues[4]} chipValues={chipValues} darkMode={darkMode} player={player4} setPlayer={setPlayer4} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[3]} history={history} setHistory={setHistory}  points={points} setPoints={setPoints} />
            <PokerChip amount={chipValues[5]} chipValues={chipValues} darkMode={darkMode} player={player4} setPlayer={setPlayer4} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[3]} history={history} setHistory={setHistory}  points={points} setPoints={setPoints} />
          </div>
        </div>}

        {/* Light/Dark Mode */}
        {(!darkMode) && <button className={`blackWhite`} onClick={handleDark}>
          Dark Mode <span className="off"><i>💡</i></span>
        </button>
        }
        {(darkMode) && <button className={`whiteBlack`} onClick={handleLight}>
          Light Mode <span ><i>💡</i></span>
        </button>
        }
      </section>
    </div>

  );
}

export default App;
