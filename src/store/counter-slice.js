import { createSlice } from "@reduxjs/toolkit";

// svaki slice predstavlja odredjeni state
// svaki slice mora da ima name prop i initialState prop
// reducers prop prima sve metode potrebne da bi ovaj konkretan slice
// funkcionisao, ne postoji opasnost da mutriam state
// kao ni obaveza da reducer vraca potpuno nov objekat state-a
// moze se menjati samo potreban deo state-a
// takodje nije potrebno da prosledim action reduceru
// ali po potrebi mogu i to da koristim
// ukoliko mi je potreban neki spoljni parametar

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increasebynum(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
