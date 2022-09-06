import React, { useState } from "react";

  function CounterButton(){
    const [score, setScore] = useState();
    return (
      <button className="CounterButton">
        You clicked me {score} amount of times
      </button>
    );
  }

  export default CounterButton;
