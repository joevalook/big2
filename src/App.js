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
import ChipValues from "./components/ChipValues";
import Bet from "./components/Bet";
import Call from "./components/Call";
import { nextIndex } from "./components/helpers/PokerNextTurn";
import Fold from "./components/Fold";
import { useEffect } from "react";


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
  const [typeOfGame, setTypeOfGame] = useState('');//poker vs big2 for screen
  const [doubleUp, setDoubleUp] = useState(false);//are point values doubled
  const [darkMode, setDarkMode] = useState(false);// dark mode and light mode
  const [pokerStartingAmount, setPokerStartingAmount] = useState(810);//starting amount of money each player has in poker
  const [pokerNumber, setPokerNumber] = useState(5);//Number of people playing poker
  const [chipValues, setChipValues] = useState([1, 5, 10, 25, 50, 100]); //values for the poker chips
  const [chipHistory, setChipHistory] = useState([[]]); //values for the chip history
  const [blind, setBlind] = useState([5, 10]); //the blind values
  const [pokerScore, setPokerScore] = useState([810, 810, 810, 810, 810]); //the amount in the bank for all players
  const [currentIndex, setCurrentIndex] = useState(3);//current player index
  const [pot, setPot] = useState([0, 0, 0, 0, 0]);////current amount in pot for all players
  const [dealer, setDealer] = useState(0);//dealers index
  const [bigBlindIndex, setBigBlindIndex] = useState(2);//big blind index
  const [smallBlindIndex, setSmallBlindIndex] = useState(1); //small blind index
  const [turn, setTurn] = useState(0); //which turn it is
  const [tempMoney, setTempMoney] = useState(0);//tempMoney used for player page
  const [tempBet, setTempBet] = useState(0);//temp bet used for player page
  const [foldedIndex, setFoldedIndex] = useState([]);
  const [bankruptIndex, setBankruptIndex] = useState([]);
  const [winner, setWinner] = useState('');
  const [stage, setStage] = useState(['Pre Flop', 'Flop', 'Turn', 'River', 'Showdown']);
  const [stageIndex, setStageIndex] = useState(0);
  const [playersLeft, setPlayersLeft] = useState([]);
  const [backgroundAudio, setBackgroundAudio] = useState(new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg'));
  const [turnHistory, setTurnHistory] = useState([0]);

  const handleReset = () => {
    let buttonAudio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/eatpellet.ogg');
    buttonAudio.play();
    setTypeOfGame('');
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
    setPokerStartingAmount(810);
    setPokerNumber(5);
    setChipValues([1, 5, 10, 25, 50, 100]);
    setChipHistory([[]]);
    setBlind([5, 10]);
    setPokerScore([810, 810, 810, 810, 810]);
    setCurrentIndex(2);
    setPot([0, 0, 0, 0, 0]);
    setTurn(0);
    setTempMoney(0);
    setTempBet(0);
    setFoldedIndex([]);
    setBankruptIndex([]);
    setWinner('');
    setStageIndex(0);
    setPlayersLeft([]);
    setTurnHistory([0])
    document.getElementsByTagName("html")[0].style.backgroundColor = "#333";
  };
  
  const handleNewGame = () => {

    setFoldedIndex([]);
    document.getElementsByName(winner)[0].style.color = "white";
    document.getElementsByName(winner)[1].style.color = "white";
    document.getElementsByName(winner)[2].style.color = "white";
    setWinner('');
    setStageIndex(0);
    let a = [...pot];
    let b = [...pokerScore];
    let deal = dealer;
    deal = (deal+1)%pokerNumber;
    while (bankruptIndex.includes(deal)){
      deal = (deal+1)%pokerNumber;
    }
    let small = (deal+1)%pokerNumber;
    while (bankruptIndex.includes(small)){
      small = (small+1)%pokerNumber;
    }
    let big = (small+1)%pokerNumber
    while (bankruptIndex.includes(big)){
      big = (big+1)%pokerNumber;
    }
    let current = (big+1)%pokerNumber
    while (bankruptIndex.includes(current)){
      current = (current+1)%pokerNumber;
    }

    a[small] = blind[0];
    a[big] = blind[1];
    b[small] -= blind[0];
    b[big] -= blind[1];
    setPokerScore([...b]);
    setPot([...a]);
    setCurrentIndex(current);
    document.getElementsByName(current)[0].style.color = "limegreen";
    document.getElementsByName(current)[1].style.color = "limegreen";
    document.getElementsByName(current)[2].style.color = "limegreen";
    setDealer(deal);
    setBigBlindIndex(big);
    setSmallBlindIndex(small);
    setTempBet(0);
    setTempMoney(pokerScore[current]);
    setTurn(0);
    setTurnHistory([0])
    setHistory([current])
    setChipHistory([[]])
    let g = []
    for (let i = 0; i < pokerNumber; i++) {
      if (!bankruptIndex.includes(i)){
        g.push(i)
      }
    }
    setPlayersLeft(g)
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
   // audio.play();
    console.log(turn);
    console.log(history);
    console.log(chipHistory);
    console.log(foldedIndex)
    console.log(turnHistory)
    console.log(bankruptIndex)

  };
  const handleLight = () => {
    setDarkMode(!darkMode);
    setColor1((prev) => (color1 === 'btn' ? 'btn2' : prev));
    setColor2((prev) => (color2 === 'btn' ? 'btn2' : prev));
    setColor3((prev) => (color3 === 'btn' ? 'btn2' : prev));
    setColor4((prev) => (color4 === 'btn' ? 'btn2' : prev));
    document.getElementsByTagName("html")[0].style.backgroundColor = '#333';
   // audio.pause();
    console.log(turn);
    console.log(history);
    console.log(chipHistory);
    console.log(foldedIndex)
    console.log(turnHistory)
    console.log(bankruptIndex)

  };
  const playMusic = () => {
    //audio.play();
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
      document.getElementsByTagName("html")[0].style.backgroundColor = (darkMode ? "black" : "#333");
    }
  };
  const handleClear = () => {
    setTempBet(pot[currentIndex]);
    setTempMoney(pokerScore[currentIndex]);
    let a = chipHistory;
    a[turn] = [];
    setChipHistory(a);
    console.log(tempMoney);
  };
  const handleAllIn = () => {
    setTempBet(pokerScore[currentIndex]);
    let a = chipHistory;
    let b = chipHistory[turn];
    b.push(tempMoney);
    a[turn] = b;
    setChipHistory(a);
    setTempMoney(0);
  };

  const handleWinner = (ind) => {
    setWinner(ind);
    let a = ind;
    console.log(ind);
    for (let i = 0; i < pokerNumber; i++) {
      if (!bankruptIndex.includes(i)) {
        document.getElementsByName(i)[0].style.color = "white";
        document.getElementsByName(i)[1].style.color = "white";
        document.getElementsByName(i)[2].style.color = "white";
      }

      document.getElementsByName(ind)[0].style.color = "gold";
      document.getElementsByName(ind)[1].style.color = "gold";
      document.getElementsByName(ind)[2].style.color = "gold";

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
    for (let i = 0; i < pokerNumber; i++) {
      e.push(0);
    }
    let tempBankruptIndex = [...bankruptIndex]
    setTimeout(() => {
      for (let i = 0; i < pokerNumber; i++) {
        if (pokerScore[i] === 0 && !bankruptIndex.includes(i)) {
          document.getElementsByName(i)[0].style.color = "red";
          document.getElementsByName(i)[1].style.color = "red";
          document.getElementsByName(i)[2].style.color = "red";
          tempBankruptIndex.push(i);
        }
      }
      setBankruptIndex(tempBankruptIndex)
    }, 2001);
    setPot(e);
  };

  return (
    <div className={'App ' + (doubleUp ? 'red ' : ' ') + (darkMode ? 'black ' : 'white ')}>
      {/* Title, Instructions, Light/Dark Mode Button */}
      {(screen !== 6) && <h1>CHIPLESS</h1>}
      {(screen === 0) && <h2 className="cursive"> Gambling Without the Chips</h2>}
      {(screen === 3) && <h2 > Games Played: {games}</h2>}
      {(screen === 1) && <h2>Choose Your Character</h2>}
      {(screen === 2) && <h2>Choose your Rule Set</h2>}
      {(screen === 4) && <h2>Choose your Rule Set</h2>}
      {(screen === 5) && <h2>Choose Your Character</h2>}
      {(screen === 7) && <h2>Choose Your Chip Values</h2>}
      {(screen === 6) && (winner === '') && stageIndex !== 4 && <h2 className='dealer'>{playerNames[dealer]} Deals {stage[stageIndex]}</h2>}
      {(screen === 6) && (winner === '') && stageIndex === 4 && <h2 className='dealer'>🔥🔥🔥 SHOWDOWN 🔥🔥🔥</h2>}
      {(screen === 6) && (winner !== '') && <h2 className='dealer'>🎉 🎉 🎉 🎉 🎉 🎉 🎉 </h2>}
      {(!darkMode) && (screen === 6) && <button className={`lightbulb`} onClick={handleDark}>
        <span className="off"><i>💡</i></span>
      </button>
      }
      {(darkMode) && (screen === 6) && <button className={`lightbulb`} onClick={handleLight}>
        <span ><i>💡</i></span>
      </button>
      }

      {/* Top Nav Bar */}
      <div className={`navRow`}>
        {(screen !== 0) && <Back darkMode={darkMode} player1={player1} setPlayer1={setPlayer1} player2={player2} setPlayer2={setPlayer2} player3={player3} setPlayer3={setPlayer3} player4={player4} setPlayer4={setPlayer4} position={position} setPosition={setPosition} games={games} setGames={setGames} playerNames={playerNames} history={history} setHistory={setHistory} setColor1={setColor1} setColor2={setColor2} setColor3={setColor3} setColor4={setColor4} points={points} setPoints={setPoints} screen={screen} setScreen={setScreen} chipHistory={chipHistory} setChipHistory={setChipHistory} typeOfGame={typeOfGame} setFoldedIndex={setFoldedIndex} foldedIndex={foldedIndex} setBankruptIndex={setBankruptIndex} bankruptIndex={bankruptIndex} tempBet={tempBet} tempMoney={tempMoney} setTempBet={setTempBet} setTempMoney={setTempMoney} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setPot={setPot} pokerScore={pokerScore} pot={pot} setPokerScore={setPokerScore} turn={turn} setTurn={setTurn} stageIndex = {stageIndex} setStageIndex = {setStageIndex} turnHistory={turnHistory} setTurnHistory={setTurnHistory}/>}
        {/* Big 2 only */}
        {(screen === 3) && <button className={`changeRules`} onClick={changeRules}>
          Change Rules
        </button>}
        {/* Poker only */}
        {(screen === 6) && winner === '' && stageIndex !== 4 && <h3 className={darkMode ? 'position2 ' : 'position '} style={{ paddingTop: '0px' }}>{playerNames[currentIndex]}'s Turn</h3>}
        {(screen === 6) && winner === '' && stageIndex === 4 && <h3 className={darkMode ? 'position2 ' : 'position '} style={{ paddingTop: '0px' }}>Who Won?</h3>}
        {/* Poker: When someone wins the pot */}
        {(screen === 6) && winner !== '' && <h3 className='animate-character'>{playerNames[winner]} Wins The Pot</h3>}
        {/* Big 2 double up */}
        {(screen === 3) && <button className={"double "} onClick={double}>
          Double Up
        </button>}
        {/* Both games */}
        {(screen !== 0) && <button className={`reset`} onClick={handleReset}>
          Reset
        </button>}
      </div>
      {(screen === 3) && <h3 className={darkMode ? 'position2 ' : 'position '}>Who Came {position}?</h3>}
      {/* Poker table */}
      {(screen === 6) && <div className="table">
        <table className="outline">
          <thead>
            <tr className="outline">
              <td className="outline">Names:</td>
              {
                playerNames.map((el, index) => {
                  return (
                    <td key={index} name={index} className="outline" style={{}}>{el}</td>
                  );
                })
              }
            </tr>
          </thead>
          <tbody>
            <tr className="outline">
              <td className="outline">Bank:</td>
              {
                playerNames.map((el, index) => {
                  return (
                    <td key={index} name={index} className="outline">${pokerScore[index]}</td>
                  );
                })
              }
            </tr>
          </tbody>
          <tbody>
            <tr className="outline">
              <td className="outline">Pot:</td>
              {
                playerNames.map((el, index) => {
                  return (
                    <td key={index} name={index} className="outline">${pot[index]}</td>
                  );
                })
              }
            </tr>
          </tbody>
        </table>
      </div>}
      {/* Main Screen */}
      {(screen === 0) && <GameType setScreen={setScreen} setTypeOfGame={setTypeOfGame} darkMode={darkMode} />}

      {/* Big 2 Setup */}
      {(screen === 1) && <PlayerName playerNames={playerNames} setPlayerNames={setPlayerNames} setScreen={setScreen} points={points} setPoints={setPoints} typeOfGame={typeOfGame} setTypeOfGame={setTypeOfGame} />}
      {(screen === 2) && <PlayerRules setScreen={setScreen} points={points} setPoints={setPoints} darkMode={darkMode} setColor1={setColor1} setColor2={setColor2} setColor3={setColor3} setColor4={setColor4} />}

      {/* Poker Setup */}
      {(screen === 4) && <PokerRules setPokerNumber={setPokerNumber} startingAmount={pokerStartingAmount} setStartingAmount={setPokerStartingAmount} setScreen={setScreen} setPlayerNames={setPlayerNames} pokerNumber={pokerNumber} chipValues={chipValues} setChipValues={setChipValues} blind={blind} setBlind={setBlind} pokerScore={pokerScore} setPokerScore={setPokerScore} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} pot={pot} setPot={setPot} setDealer={setDealer} setBigBlindIndex={setBigBlindIndex} setSmallBlindIndex={setSmallBlindIndex} setTempMoney={setTempMoney} setTempBet={setTempBet} setHistory={setHistory} playerNames={playerNames} setPlayersLeft={setPlayersLeft} history = {history} />}
      {(screen === 5) && <PokerNames playerNames={playerNames} setPokerNumber={setPokerNumber} setStartingAmount={setPokerStartingAmount} setScreen={setScreen} setPlayerNames={setPlayerNames} pokerNumber={pokerNumber} />}
      {(screen === 7) && <ChipValues setPokerNumber={setPokerNumber} startingAmount={pokerStartingAmount} setStartingAmount={setPokerStartingAmount} setScreen={setScreen} setPlayerNames={setPlayerNames} pokerNumber={pokerNumber} chipValues={chipValues} setChipValues={setChipValues} blind={blind} setBlind={setBlind} pokerScore={pokerScore} setPokerScore={setPokerScore} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} setPot={setPot} />}
      <section className={'section'}>
        {/* Big 2 Game */}
        {(screen === 3) && <PlayerScore darkMode={darkMode} player={player1} setPlayer={setPlayer1} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[0]} history={history} setHistory={setHistory} color={color1} setColor={setColor1} setOtherColor1={setColor2} setOtherColor2={setColor3} setOtherColor3={setColor4} points={points} />}
        {(screen === 3) && <PlayerScore darkMode={darkMode} player={player2} setPlayer={setPlayer2} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[1]} history={history} setHistory={setHistory} color={color2} setColor={setColor2} setOtherColor1={setColor1} setOtherColor2={setColor3} setOtherColor3={setColor4} points={points} />}
        {(screen === 3) && <PlayerScore darkMode={darkMode} player={player3} setPlayer={setPlayer3} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[2]} history={history} setHistory={setHistory} color={color3} setColor={setColor3} setOtherColor1={setColor1} setOtherColor2={setColor2} setOtherColor3={setColor4} points={points} />}
        {(screen === 3) && <PlayerScore darkMode={darkMode} player={player4} setPlayer={setPlayer4} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[3]} history={history} setHistory={setHistory} color={color4} setColor={setColor4} setOtherColor1={setColor1} setOtherColor2={setColor2} setOtherColor3={setColor3} points={points} />}

        {/* Poker Game */}
        <main style={{ marginBottom: "0px" }}>
          {(screen === 6) && winner === '' && stageIndex !== 4 && <h5 className={darkMode ? 'bet2 ' : 'bet '} >Bet: $ {tempBet}</h5>}
          {(screen === 6) && winner === '' && stageIndex !== 4 && <div className="bottom">
            <div className="row">
              <PokerChip amount={chipValues[0]} chipValues={chipValues} darkMode={darkMode} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[0]} chipHistory={chipHistory} setChipHistory={setChipHistory} points={points} setPoints={setPoints} setTempMoney={setTempMoney} setTempBet={setTempBet} turn={turn} tempMoney={tempMoney} history={history}/>
              <PokerChip amount={chipValues[1]} chipValues={chipValues} darkMode={darkMode} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[0]} chipHistory={chipHistory} setChipHistory={setChipHistory} points={points} setPoints={setPoints} setTempMoney={setTempMoney} setTempBet={setTempBet} turn={turn} tempMoney={tempMoney} history={history}/>
              <PokerChip amount={chipValues[2]} chipValues={chipValues} darkMode={darkMode} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[0]} chipHistory={chipHistory} setChipHistory={setChipHistory} points={points} setPoints={setPoints} setTempMoney={setTempMoney} setTempBet={setTempBet} turn={turn} tempMoney={tempMoney} history={history}/>
            </div>
            <div className="row">
              <PokerChip amount={chipValues[3]} chipValues={chipValues} darkMode={darkMode} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[0]} chipHistory={chipHistory} setChipHistory={setChipHistory} points={points} setPoints={setPoints} setTempMoney={setTempMoney} setTempBet={setTempBet} turn={turn} tempMoney={tempMoney} history={history} />
              <PokerChip amount={chipValues[4]} chipValues={chipValues} darkMode={darkMode} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[0]} chipHistory={chipHistory} setChipHistory={setChipHistory} points={points} setPoints={setPoints} setTempMoney={setTempMoney} setTempBet={setTempBet} turn={turn} tempMoney={tempMoney} history={history}/>
              <PokerChip amount={chipValues[5]} chipValues={chipValues} darkMode={darkMode} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[0]} chipHistory={chipHistory} setChipHistory={setChipHistory} points={points} setPoints={setPoints} setTempMoney={setTempMoney} setTempBet={setTempBet} turn={turn} tempMoney={tempMoney} history={history}/>
            </div>

          </div>}
          {(screen === 6) && winner === '' && stageIndex !== 4 && <div className="row">
            <h5 className={darkMode ? 'money2 ' : 'money '}>Money: $ {tempMoney}</h5>
            {Math.max(...pot) > tempBet && <h5 className={darkMode ? 'money2 ' : 'money '}>Call: $ {Math.max(...pot) - tempBet}</h5>}
            {Math.max(...pot) < tempBet && <h5 className={darkMode ? 'money2 ' : 'money '} style={{ color: 'red' }}>Raise: $ {tempBet - Math.max(...pot)}</h5>}
          </div>}
          {(screen === 6) && winner === '' && stageIndex !== 4 && <div className={'column'}>
            <div className={`navRow`}>
              <button className={"pokerButton "} onClick={handleClear}>
                Clear
              </button>
              <Fold chipHistory={chipHistory} tempBet={tempBet} pot={pot} setChipHistory={setChipHistory} setPot={setPot} pokerScore={pokerScore} currentIndex={currentIndex} tempMoney={tempMoney} setPokerScore={setPokerScore} setCurrentIndex={setCurrentIndex} setTempBet={setTempBet} setTempMoney={setTempMoney} foldedIndex={foldedIndex} bankruptIndex={bankruptIndex} turn={turn} setTurn={setTurn} pokerNumber={pokerNumber} setFoldedIndex={setFoldedIndex} setWinner={setWinner} winner={winner} smallBlindIndex={smallBlindIndex} stageIndex={stageIndex} setStageIndex={setStageIndex} playersLeft={playersLeft} setPlayersLeft={setPlayersLeft} history={history} setHistory={setHistory} playerNames={playerNames} turnHistory={turnHistory} setTurnHistory={setTurnHistory}/>

              <Call chipHistory={chipHistory} tempBet={tempBet} pot={pot} setChipHistory={setChipHistory} setPot={setPot} pokerScore={pokerScore} currentIndex={currentIndex} tempMoney={tempMoney} setPokerScore={setPokerScore} setCurrentIndex={setCurrentIndex} setTempBet={setTempBet} setTempMoney={setTempMoney} foldedIndex={foldedIndex} bankruptIndex={bankruptIndex} turn={turn} setTurn={setTurn} pokerNumber={pokerNumber} smallBlindIndex={smallBlindIndex} stageIndex={stageIndex} setStageIndex={setStageIndex}  history={history} setHistory={setHistory} playerNames={playerNames} turnHistory={turnHistory} setTurnHistory={setTurnHistory} />
              
              <button className={`pokerButton`} onClick={handleAllIn}>
                All In
              </button>
            </div>
            {(screen === 6) && <Bet chipHistory={chipHistory} tempBet={tempBet} pot={pot} setChipHistory={setChipHistory} setPot={setPot} pokerScore={pokerScore} currentIndex={currentIndex} tempMoney={tempMoney} setPokerScore={setPokerScore} setCurrentIndex={setCurrentIndex} setTempBet={setTempBet} setTempMoney={setTempMoney} foldedIndex={foldedIndex} bankruptIndex={bankruptIndex} turn={turn} setTurn={setTurn} pokerNumber={pokerNumber} smallBlindIndex={smallBlindIndex} stageIndex={stageIndex} setStageIndex={setStageIndex} history={history} setHistory={setHistory} playerNames={playerNames} turnHistory={turnHistory} setTurnHistory={setTurnHistory}/>}
          </div>}
          {(screen === 6) && winner === '' && stageIndex === 4 && <div className={'column'}>
            <div className={`navRow`}>
              {

                playersLeft.map((el, index) => {
                  return (
                    <button key={index} className={"pokerButton "} onClick={() => handleWinner(el)}>
                      {playerNames[el]}
                    </button>
                  );
                })
              }

            </div>
          </div>}
          {/* Poker next game Screen */}
          {(screen === 6) && winner !== '' && <button className={"pokerButton "} onClick={handleNewGame}>
            Start Next Game
          </button>}
          {/* Light/Dark Mode */}
          {(!darkMode) && (screen !== 6) && <button className={`blackWhite`} onClick={handleDark}>
            Dark Mode <span className="off"><i>💡</i></span>
          </button>
          }
          {(darkMode) && (screen !== 6) && <button className={`whiteBlack`} onClick={handleLight}>
            Light Mode <span ><i>💡</i></span>
          </button>
          }
        </main>
      </section>
    </div>

  );
}

export default App;
