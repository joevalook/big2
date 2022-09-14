import React from "react";

  function Back(props){
    
    const darkMode = props.darkMode
    const player1 = props.player1
    const setPlayer1 = props.setPlayer1
    const player2 = props.player2
    const setPlayer2 = props.setPlayer2
    const player3 = props.player3
    const setPlayer3 = props.setPlayer3
    const player4 = props.player4
    const setPlayer4 = props.setPlayer4
    const position = props.position
    const setPosition = props.setPosition
    const games = props.games
    const setGames = props.setGames
    const playerNames = props.playerNames
    const history = props.history
    const setHistory = props.setHistory
    const setColor1 = props.setColor1
    const setColor2 = props.setColor2
    const setColor3 = props.setColor3
    const setColor4 = props.setColor4
    const points = props.points
    const names = props.names
    const setNames = props.setNames


    const handleBack = () => {
      
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
            setColor1(darkMode ? 'btn':'btn2');
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
            setColor2(darkMode ? 'btn':'btn2');
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
            setColor3(darkMode ? 'btn':'btn2');//button 3 should have been set back to unmarked
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
            setColor4(darkMode ? 'btn':'btn2');
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
            setColor1(darkMode ? 'btn':'btn2');
          }
          if (history[history.length - 1] === playerNames[1]) {
            setPlayer2((prev) => prev + points[3]);
            setColor2(darkMode ? 'btn':'btn2');
          }
          if (history[history.length - 1] === playerNames[2]) {
            setPlayer3((prev) => prev + points[3]);
            setColor3(darkMode ? 'btn':'btn2');
          }
          if (history[history.length - 1] === playerNames[3]) {
            setPlayer4((prev) => prev + points[3]);
            setColor4(darkMode ? 'btn':'btn2');
          }
  
        }
        if (position === "Third") {
          setPosition("Second");
          console.log(history);
          if (history[history.length - 1] === playerNames[0]) {
            setPlayer1((prev) => prev + points[2]);
            setColor1(darkMode ? 'btn':'btn2');
          }
          if (history[history.length - 1] === playerNames[1]) {
            setPlayer2((prev) => prev + points[2]);
            setColor2(darkMode ? 'btn':'btn2');
          }
          if (history[history.length - 1] === playerNames[2]) {
            setPlayer3((prev) => prev + points[2]);
            setColor3(darkMode ? 'btn':'btn2');
          }
          if (history[history.length - 1] === playerNames[3]) {
            setPlayer4((prev) => prev + points[2]);
            setColor4(darkMode ? 'btn':'btn2');
          }
  
        }
        if (position === "Last") {
          setPosition("Third");
          console.log(history);
          if (history[history.length - 1] === playerNames[0]) {
            setPlayer1((prev) => prev + points[1]);
            setColor1(darkMode ? 'btn':'btn2');
          }
          if (history[history.length - 1] === playerNames[1]) {
            setPlayer2((prev) => prev + points[1]);
            setColor2(darkMode ? 'btn':'btn2');
          }
          if (history[history.length - 1] === playerNames[2]) {
            setPlayer3((prev) => prev + points[1]);
            setColor3(darkMode ? 'btn':'btn2');
          }
          if (history[history.length - 1] === playerNames[3]) {
            setPlayer4((prev) => prev + points[1]);
            setColor4(darkMode ? 'btn':'btn2');
          }
  
        }
        setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
      }
      if (names === 1) {
        setNames(0);
      }
      if (names === 2) {
        setNames(1);
      }
      if (names === 4) {
        setNames(0);
      }
      if (names === 5) {
        setNames(4);
      }
      if (names === 6) {
        setNames(5);
      }
      if (names === 3 && history.length < 1) {
        setNames(2)
      }
    };
    return (
       <button className={`back`} onClick={handleBack}>
          Back
        </button>
    );
  }

  export default Back;
