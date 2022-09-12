import React from "react";

  function GameType(props){
    
    const setName = props.setName
    const points = props.points
    const setPoints = props.setPoints
    const handleClick = () => {
      playGame(3);
    }
    const updateRuleChanged = index => e => {
      
      let newArr = [...points]; // copying the old datas array
      // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
      newArr[index] = Number(e.target.value); // replace e.target.value with whatever you want to change it to
    
      setPoints(newArr);
    }

    return (
    <main>
     <form class="form-style-4" action="" method="post">
    <label for="field1">
    <span>Enter Winners Points</span><input type="text" name="field1" placeholder = "+2" required="true" onChange={updateRuleChanged(0)} />
    </label>
    <label for="field2">
    <span>Enter Second Place's Points</span><input type="text" name="field2" required="true" onChange={updateRuleChanged(1)} placeholder = "+1"/>
    </label>
    <label for="field3">
    <span>Enter Third Place's Points</span><input type="text" name="field3" required="true" onChange={updateRuleChanged(2)} placeholder = "-1"/>
    </label>
    <label for="field4">
    <span>Enter Last Place's Points</span><input type="text" name="field3" required="true" onChange={updateRuleChanged(3)} placeholder = "-2"/>
    </label>
    <button className={'btnNames'}onClick={handleClick} >
        Start Game
      </button>
    </form>
    </main>
    );
  }

  export default GameType;