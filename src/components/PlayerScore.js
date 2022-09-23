import React from "react";

function CounterButton(props) {

  const { player, setPlayer, position, setPosition, games, setGames, playerName, history, setHistory, color, setColor, setOtherColor1, setOtherColor2, setOtherColor3, points, darkMode } = props;

  const handleClick = () => {
    setHistory(history => [...history, playerName]);
    if (position === "First") {
      setPosition("Second");
      setPlayer(player + points[0]);
      setColor('gold');
    }
    if (position === "Second") {
      setPosition("Third");
      setPlayer(player + points[1]);
      setColor('silver');
    }
    if (position === "Third") {
      setPosition("Last");
      setPlayer(player + points[2]);
      setColor('bronze');
    }
    if (position === "Last") {
      setPosition("First");
      setPlayer(player + points[3]);
      setGames(games + 1);
      setColor('last');
      setTimeout(() => {
        setColor(darkMode ? 'btn' : 'btn2');
        setOtherColor1(darkMode ? 'btn' : 'btn2');
        setOtherColor2(darkMode ? 'btn' : 'btn2');
        setOtherColor3(darkMode ? 'btn' : 'btn2');
      }, 1000);
    }
    console.log(history);
  };
  return (
    <button className={color} onClick={handleClick} >
      {playerName} is at ${player}
    </button>
  );
}

export default CounterButton;
