import React from "react";

  function NameSetter(props){
    
    const { setScreen, points, setPoints, darkMode, setColor1, setColor2, setColor3, setColor4 } = props
    
    const handleClick = () => {
      let buttonAudio = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/explosion.mp3');
      buttonAudio.play();
      if (darkMode === false) {
        setColor1('btn2')
        setColor2('btn2')
        setColor3('btn2')
        setColor4('btn2')
      } 
      setScreen(3);
    }
    const updateRuleChanged = index => e => {
      
      let newArr = [...points]; // copying the old datas array
      // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
      newArr[index] = Number(e.target.value); // replace e.target.value with whatever you want to change it to
    
      setPoints(newArr);
      
    }

    return (
    <main>
     <form className="form-style-4" >
    <label>
    <span>Enter Winners Points</span><input type="text" name="field1" onChange={updateRuleChanged(0)} placeholder = {(points[0]<0?"":"+") + points[0]}/>
    </label>
    <label>
    <span>Enter Second Place's Points</span><input type="text" name="field2" onChange={updateRuleChanged(1)} placeholder = {(points[1]<0?"":"+") + points[1]}/>
    </label>
    <label>
    <span>Enter Third Place's Points</span><input type="text" name="field3" onChange={updateRuleChanged(2)} placeholder = {(points[2]<0?"":"+") + points[2]}/>
    </label>
    <label>
    <span>Enter Last Place's Points</span><input type="text" name="field3" onChange={updateRuleChanged(3)} placeholder = {(points[3]<0?"":"+") + points[3]}/>
    </label>
    <button className={'btnNames'}onClick={handleClick} >
        Start Game
      </button>
    </form>
    </main>
    );
  }

  export default NameSetter;