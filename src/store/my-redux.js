import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counter-slice";
import authSliceReducer from "./auth-slice";

// cela logika je premestena ponaosob za svaki slice
// i iz slice izvozim reducer i actions

const store = configureStore({
  // na ovaj nacin mogu da koristim vise reducera
  reducer: {
    counter: counterSliceReducer,
    authentication: authSliceReducer,
  },
});

export default store;

// provider wrapp je u index.js
