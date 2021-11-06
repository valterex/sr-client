import { combineReducers } from "@reduxjs/toolkit";
import { matches } from "./slices/matches/slice";

const rootReducer = combineReducers({
  matches: matches.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
