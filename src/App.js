import PlayerScore from "./components/PlayerScore";
import PlayerName from "./components/PlayerName";
import PlayerRules from "./components/PlayerRules"
import './App.css';
import React, { useState } from "react";

function App() {
  const [position, setPosition] = useState('First');
  const [games, setGames] = useState(0);
  const [player1, setPlayer1] = useState(0);
  const [player2, setPlayer2] = useState(0);
  const [player3, setPlayer3] = useState(0);
  const [player4, setPlayer4] = useState(0);
  const [playerNames, setPlayerNames] = useState(["Player 1", "Player 2", "Player 3", "Player 4"]);
  const [points, setPoints] = useState([2, 1, -1, -2]);
  const [history, setHistory] = useState([]);
  const [color1, setColor1] = useState('btn');
  const [color2, setColor2] = useState('btn');
  const [color3, setColor3] = useState('btn');
  const [color4, setColor4] = useState('btn');
  const [names, setNames] = useState(1);

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
    setNames(1);
    setPlayerNames(["Player 1", "Player 2", "Player 3", "Player 4"]);
    setPoints([2, 1, -1, -2]);

  };
  const handleBack = () => {
    const highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }
    if (history.length >= 1) {
      if (position === "First") {
        setPosition("last");
        setGames(games - 1);
        if (history[history.length - 1] === playerNames[0]) {
          setPlayer1(player1 + points[0]);
          setColor1('btn');
          if (history[history.length - 2] === playerNames[1]) {
            setColor2('bronze');
            if (history[history.length - 3] === playerNames[2]) {
              setColor3('silver');
              setColor4('gold');
            }
            if (history[history.length - 3] === playerNames[3]) {
              setColor4('silver');
              setColor3('gold');
            }
          }
          if (history[history.length - 2] === playerNames[2]) {
            setColor3('bronze');
            if (history[history.length - 3] === playerNames[1]) {
              setColor2('silver');
              setColor4('gold');
            }
            if (history[history.length - 3] === playerNames[3]) {
              setColor4('silver');
              setColor2('gold');
            }
          }
          if (history[history.length - 2] === playerNames[3]) {
            setColor4('bronze');
            if (history[history.length - 3] === playerNames[1]) {
              setColor2('silver');
              setColor3('gold');
            }
            if (history[history.length - 3] === playerNames[2]) {
              setColor3('silver');
              setColor2('gold');
            }
          }
        }
        if (history[history.length - 1] === playerNames[1]) {
          setPlayer2(player2 + points[0]);
          setColor2('btn');
          if (history[history.length - 2] === playerNames[0]) {
            setColor2('bronze');
            if (history[history.length - 3] === playerNames[2]) {
              setColor3('silver');
              setColor4('gold');
            }
            if (history[history.length - 3] === playerNames[3]) {
              setColor4('silver');
              setColor3('gold');
            }
          }
          if (history[history.length - 2] === playerNames[2]) {
            setColor3('bronze');
            if (history[history.length - 3] === playerNames[0]) {
              setColor1('silver');
              setColor4('gold');
            }
            if (history[history.length - 3] === playerNames[3]) {
              setColor4('silver');
              setColor1('gold');
            }
          }
          if (history[history.length - 2] === playerNames[3]) {
            setColor4('bronze');
            if (history[history.length - 3] === playerNames[0]) {
              setColor1('silver');
              setColor3('gold');
            }
            if (history[history.length - 3] === playerNames[2]) {
              setColor3('silver');
              setColor1('gold');
            }
          }
        }
        if (history[history.length - 1] === playerNames[2]) {
          setPlayer3(player3 + points[0]);
          setColor3('btn');
          if (history[history.length - 2] === playerNames[1]) {
            setColor2('bronze');
            if (history[history.length - 3] === playerNames[0]) {
              setColor1('silver');
              setColor4('gold');
            }
            if (history[history.length - 3] === playerNames[3]) {
              setColor4('silver');
              setColor1('gold');
            }
          }
          if (history[history.length - 2] === playerNames[0]) {
            setColor3('bronze');
            if (history[history.length - 3] === playerNames[1]) {
              setColor2('silver');
              setColor4('gold');
            }
            if (history[history.length - 3] === playerNames[3]) {
              setColor4('silver');
              setColor2('gold');
            }
          }
          if (history[history.length - 2] === playerNames[3]) {
            setColor4('bronze');
            if (history[history.length - 3] === playerNames[0]) {
              setColor1('silver');
              setColor2('gold');

            }
            if (history[history.length - 3] === playerNames[1]) {
              setColor2('silver');
              setColor1('gold');
            }
          }
        }
        if (history[history.length - 1] === playerNames[3]) {
          setPlayer4(player4 + points[0]);
          setColor4('btn');
          if (history[history.length - 2] === playerNames[1]) {
            setColor2('bronze');
            if (history[history.length - 3] === playerNames[0]) {
              setColor1('silver');
              setColor3('gold');
            }
            if (history[history.length - 3] === playerNames[2]) {
              setColor3('silver');
              setColor1('gold');
            }
          }
          if (history[history.length - 2] === playerNames[2]) {
            setColor3('bronze');
            if (history[history.length - 3] === playerNames[0]) {
              setColor1('silver');
              setColor2('gold');
            }
            if (history[history.length - 3] === playerNames[1]) {
              setColor2('silver');
              setColor1('gold');
            }
          }
          if (history[history.length - 2] === playerNames[0]) {
            setColor4('bronze');
            if (history[history.length - 3] === playerNames[1]) {
              setColor2('silver');
              setColor3('gold');
            }
            if (history[history.length - 3] === playerNames[2]) {
              setColor3('silver');
              setColor2('gold');
            }
          }
        }
      }
      if (position === "second") {
        setPosition("First");
        if (history[history.length - 1] === playerNames[0]) {
          setPlayer1(player1 + points[3]);
          setColor1('btn');
        }
        if (history[history.length - 1] === playerNames[1]) {
          setPlayer2(player2 + points[3]);
          setColor2('btn');
        }
        if (history[history.length - 1] === playerNames[2]) {
          setPlayer3(player3 + points[3]);
          setColor3('btn');
        }
        if (history[history.length - 1] === playerNames[3]) {
          setPlayer4(player4 + points[3]);
          setColor4('btn');
        }

      }
      if (position === "third") {
        setPosition("second");
        if (history[history.length - 1] === playerNames[0]) {
          setPlayer1(player1 + points[2]);
          setColor1('btn');
        }
        if (history[history.length - 1] === playerNames[1]) {
          setPlayer2(player2 + points[2]);
          setColor2('btn');
        }
        if (history[history.length - 1] === playerNames[2]) {
          setPlayer3(player3 + points[2]);
          setColor3('btn');
        }
        if (history[history.length - 1] === playerNames[3]) {
          setPlayer4(player4 + points[2]);
          setColor4('btn');
        }

      }
      if (position === "last") {
        setPosition("third");
        if (history[history.length - 1] === playerNames[0]) {
          setPlayer1(player1 + points[1]);
          setColor1('btn');
        }
        if (history[history.length - 1] === playerNames[1]) {
          setPlayer2(player2 + points[1]);
          setColor2('btn');
        }
        if (history[history.length - 1] === playerNames[2]) {
          setPlayer3(player3 + points[1]);
          setColor3('btn');
        }
        if (history[history.length - 1] === playerNames[3]) {
          setPlayer4(player4 + points[1]);
          setColor4('btn');
        }

      }
      setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
    }
    if (names === 2) {
      setNames(1);
    }
    if(names === 3 && history.length<1) {
      setNames(2)
    }
  };
  return (
    <div className={`App`}>
      <h1>Big 2 Score Keeping</h1>
      <h2> Games Played: {games}</h2>
      {(names === 1) && <h2>Choose Your Character</h2>}
      {(names === 2) && <h2>Choose your Rule Set</h2>}
      {(names === 3) && <h2>Who Came {position}?</h2>}
      <div className={`row`}>
        <button className={`back`} onClick={handleBack}>
          BACK
        </button>
        <button className={`reset`} onClick={handleReset}>
          RESET
        </button>
      </div>
      {(names === 1) && <PlayerName playerNames={playerNames} setPlayerNames={setPlayerNames} setNames={setNames} points={points} setPoints={setPoints} />}
      {(names === 2) && <PlayerRules setNames={setNames} points={points} setPoints={setPoints} />}
      <section>
        {(names === 3) && <PlayerScore player={player1} setPlayer={setPlayer1} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[0]} history={history} setHistory={setHistory} color={color1} setColor={setColor1} setOtherColor1={setColor2} setOtherColor2={setColor3} setOtherColor3={setColor4} points={points} setPoints={setPoints} />}
        {(names === 3) && <PlayerScore player={player2} setPlayer={setPlayer2} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[1]} history={history} setHistory={setHistory} color={color2} setColor={setColor2} setOtherColor1={setColor1} setOtherColor2={setColor3} setOtherColor3={setColor4} points={points} setPoints={setPoints} />}
        {(names === 3) && <PlayerScore player={player3} setPlayer={setPlayer3} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[2]} history={history} setHistory={setHistory} color={color3} setColor={setColor3} setOtherColor1={setColor1} setOtherColor2={setColor2} setOtherColor3={setColor4} points={points} setPoints={setPoints} />}
        {(names === 3) && <PlayerScore player={player4} setPlayer={setPlayer4} position={position} setPosition={setPosition} games={games} setGames={setGames} playerName={playerNames[3]} history={history} setHistory={setHistory} color={color4} setColor={setColor4} setOtherColor1={setColor1} setOtherColor2={setColor2} setOtherColor3={setColor3} points={points} setPoints={setPoints} />}
      </section>
    </div>
  );
}

export default App;
