import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Match, MatchesState } from "../../../types";

const initialState: MatchesState = {
  isLoadingMatches: false,
  loadingMatchesError: null,
  matches: [],
};

export const matches = createSlice({
  name: "matches",
  initialState: initialState,
  reducers: {
    getMatchesDispatched: (state: MatchesState) => {
      state.isLoadingMatches = true;
    },
    getMatchesSuccessful: (
      state: MatchesState,
      action: PayloadAction<Array<Match>>
    ) => {
      state.isLoadingMatches = false;
      state.matches = action.payload;
    },
    getMatchesErrored: (state: MatchesState, action: PayloadAction<string>) => {
      state.isLoadingMatches = false;
      state.loadingMatchesError = action.payload;
    },
  },
});

export const { getMatchesDispatched, getMatchesSuccessful, getMatchesErrored } =
  matches.actions;
