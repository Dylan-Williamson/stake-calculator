import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDiceRoll, setBalance, resetWin, resetLose, addWin,  addLoss } from '../features/calculatorSlice';

// Roll over 50.5
// Win Chance 49.5

const Calculator = () => {

  const dispatch = useDispatch();
  const balance = useSelector(state => state.calculator.balance);
  const currentBet = useSelector(state => state.calculator.currentBet);
  const currentWinStreak = useSelector(state => state.calculator.currentWinStreak);
  const currentLoseStreak = useSelector(state => state.calculator.currentLoseStreak);

  const resetWinStreak = () => {
    dispatch(resetWin({
      currentWinStreak: 0
    }))
  }

  const resetLoseStreak = () => {
    dispatch(resetLose({
      currentLoseStreak: 0
    }))
  }

  const addOneWin = () => {
    dispatch(addWin({
      currentWinStreak: currentWinStreak + 1
    }))
  }

  const addOneLoss = () => {
    dispatch(addLoss({
      currentLoseStreak: currentLoseStreak + 1
    }))
  }
  
  const rollDice = () => {
    var diceRoll = Math.floor(Math.random() * (100 * 100 - 1 * 100) + 1 * 100) / (1 * 100);
    dispatch(setDiceRoll({
      roll: diceRoll
    }));
    if (diceRoll >= 50.5) {
      addOneWin();
      resetLoseStreak();
    } else {
      addOneLoss();
      resetWinStreak();
    }
  }


  const updateBalance = () => {
    dispatch(setBalance({
      balance: Number(balance - currentBet).toFixed(8)
    }))
  }




  return (
    <div className="calculator">
      <div className="header">
        <img src="https://cryptoshill.com/wp-content/uploads/2019/06/stake.png"/>
        <div className="headerTitle">
          Simulator by Dirty Weed
        </div>
      </div>
      <form>
        <label>
          Starting Balance
        </label><br/>
        <input type="text" value='0.50000000'/><br/>
        <label>
          Initial Bet
        </label>
        <input type="text" value='0.00000001'/>
        <label>
          Multiplier
        </label>
        <input value={2} /><br/>
        <label>
          On Win
        </label>
        <input type="text" value='Double Bet'/>
        <label>
          On Loss
        </label>
        <input type="text" value='Reset Bet'/>
        <div className="buttons">
          <button type="button" onClick={ rollDice }>
            Run Simulator
          </button>
          <button type="button" onClick={ updateBalance }>
            Change Balance
          </button>
        </div>
        <label>
          Balance
        </label>
        <input type="text" value={balance}/>
        <label>
          Total Rolls
        </label>
        <input type="text" value='0'/><br/>
        <label>
          Loss Streak
        </label>
        <input type="text" value={ currentLoseStreak }/>
        <label>
          Win Streak
        </label>
        <input type="text" value={ currentWinStreak }/>
      </form>
    </div>
  )
}

export default Calculator;