import React from "react";

  function PokerRules(props){
    
    const {setPokerNumber, setStartingAmount, setScreen, setPlayerNames, pokerNumber}  = props
    const handleClick = () => {
      let a =[]
      for (let i=1; i<=pokerNumber; i++) {
        a.push(`Player ${i}`)
      }
      setPlayerNames(a)
      setScreen(5);
    }
    const updateNumber = () => e => {
      
      setPokerNumber(Number(e.target.value)); 
      
    }
    const updateStart = () => e => {
      setStartingAmount(Number(e.target.value)); 
    }

    return (
    <main>
     <form className="form-style-4">
    <label>
    <span>Enter Number of Players</span><input type="text" name="field1"  onChange={updateNumber()} placeholder = "5"/>
    </label>
    <label>
    <span>Enter Starting Amount</span><input type="text" name="field2"  onChange={updateStart()} placeholder = "810"/>
    </label>
    <button className={'btnNames'}onClick={handleClick} >
        Set Names
      </button>
    </form>
    </main>
    );
  }

  export default PokerRules;