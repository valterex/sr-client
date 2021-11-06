import { combineReducers } from "@reduxjs/toolkit";
import { matches } from "./slices/matches/slice";
import { tournaments } from "./slices/tournaments/slice";

const rootReducer = combineReducers({
  matches: matches.reducer,
  tournaments: tournaments.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
