import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roll: 0.00,
  balance: 0.50000000,
  initialBet: 0.00000001,
  currentBet: 0.00000001,
  currentWinStreak: 0,
  currentLoseStreak: 0,
  longestWinStreak: 0,
  longestLoseStreak:0,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setDiceRoll: (state, action) => {
      state.roll = action.payload.roll
    },
    setBalance: (state, action) => {
      state.balance = action.payload.balance
    },
    resetWin: (state) => {
      state.currentWinStreak = 0
    },
    resetLose: (state) => {
      state.currentLoseStreak = 0
    },
    addWin: (state) => {
      state.currentWinStreak += 1
    },
    addLoss: (state) => {
      state.currentLoseStreak += 1
    },
    setBet: (state, action) => {
      state.currentBet = action.payload.currentBet
    },
    setLongestWin: (state, action) => {
      state.longestWinStreak = action.payload.longestWinStreak
    },
    setLongestLoss: (state, action) => {
      state.longestLoseStreak = action.payload.longestLoseStreak
    },
  },
});

export const { setDiceRoll, setBalance, resetWin, resetLose, addWin, addLoss, setBet, setLongestWin, setLongestLoss } = calculatorSlice.actions;


export default calculatorSlice.reducer;
