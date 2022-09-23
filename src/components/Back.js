import React from "react";

function Back(props) {

  const { darkMode, setPlayer1, setPlayer2, setPlayer3, setPlayer4, position, setPosition, games, setGames, playerNames, history, setHistory, setColor1, setColor2, setColor3, setColor4, points, screen, setScreen, typeOfGame} = props;

  const handleBack = () => {

    if (typeOfGame === 'big2') {
      const highestTimeoutId = setTimeout(";");
      for (var i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
      }
      if (history.length >= 1) {
        if (position === "First") {
          setPosition("Last");
          console.log(history);
          setGames(games - 1);
          if (history[history.length - 1] === playerNames[0]) {
            setPlayer1((prev) => prev + points[0]);
            setColor1(darkMode ? 'btn' : 'btn2');
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
            setPlayer2((prev) => prev + points[0]);
            setColor2(darkMode ? 'btn' : 'btn2');
            if (history[history.length - 2] === playerNames[0]) {
              setColor1('bronze');
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
          if (history[history.length - 1] === playerNames[2]) { //last
            setPlayer3((prev) => prev + points[0]);
            setColor3(darkMode ? 'btn' : 'btn2');//button 3 should have been set back to unmarked
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
              setColor1('bronze');
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
            setPlayer4((prev) => prev + points[0]);
            setColor4(darkMode ? 'btn' : 'btn2');
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
              setColor1('bronze');
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
        if (position === "Second") {
          setPosition("First");
          console.log(history);
          if (history[history.length - 1] === playerNames[0]) {
            setPlayer1((prev) => (prev + points[3]));
            setColor1(darkMode ? 'btn' : 'btn2');
          }
          if (history[history.length - 1] === playerNames[1]) {
            setPlayer2((prev) => prev + points[3]);
            setColor2(darkMode ? 'btn' : 'btn2');
          }
          if (history[history.length - 1] === playerNames[2]) {
            setPlayer3((prev) => prev + points[3]);
            setColor3(darkMode ? 'btn' : 'btn2');
          }
          if (history[history.length - 1] === playerNames[3]) {
            setPlayer4((prev) => prev + points[3]);
            setColor4(darkMode ? 'btn' : 'btn2');
          }

        }
        if (position === "Third") {
          setPosition("Second");
          console.log(history);
          if (history[history.length - 1] === playerNames[0]) {
            setPlayer1((prev) => prev + points[2]);
            setColor1(darkMode ? 'btn' : 'btn2');
          }
          if (history[history.length - 1] === playerNames[1]) {
            setPlayer2((prev) => prev + points[2]);
            setColor2(darkMode ? 'btn' : 'btn2');
          }
          if (history[history.length - 1] === playerNames[2]) {
            setPlayer3((prev) => prev + points[2]);
            setColor3(darkMode ? 'btn' : 'btn2');
          }
          if (history[history.length - 1] === playerNames[3]) {
            setPlayer4((prev) => prev + points[2]);
            setColor4(darkMode ? 'btn' : 'btn2');
          }

        }
        if (position === "Last") {
          setPosition("Third");
          console.log(history);
          if (history[history.length - 1] === playerNames[0]) {
            setPlayer1((prev) => prev + points[1]);
            setColor1(darkMode ? 'btn' : 'btn2');
          }
          if (history[history.length - 1] === playerNames[1]) {
            setPlayer2((prev) => prev + points[1]);
            setColor2(darkMode ? 'btn' : 'btn2');
          }
          if (history[history.length - 1] === playerNames[2]) {
            setPlayer3((prev) => prev + points[1]);
            setColor3(darkMode ? 'btn' : 'btn2');
          }
          if (history[history.length - 1] === playerNames[3]) {
            setPlayer4((prev) => prev + points[1]);
            setColor4(darkMode ? 'btn' : 'btn2');
          }

        }
        setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
      }
      if (screen === 1) {
        setScreen(0);
      }
      if (screen === 2) {
        setScreen(1);
      }
      if (screen === 4) {
        setScreen(0);
      }
      if (screen === 5) {
        setScreen(4);
      }
      if (screen === 6) {
        setScreen(5);
      }
      if (screen === 3 && history.length < 1) {
        setScreen(2);
      }
    }
  };
  return (
    <button className={`back`} onClick={handleBack}>
      Undo
    </button>
  );
}

export default Back;
