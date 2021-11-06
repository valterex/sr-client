import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tournament, Match, MatchesState } from "../../../types";

const initialState: MatchesState = {
  isLoadingTournaments: false,
  isLoadingMatches: false,
  loadingTournamentsError: null,
  loadingMatchesError: null,
  tournaments: null,
  selectedTournament: null,
  matches: null,
};

export const matches = createSlice({
  name: "matches",
  initialState: initialState,
  reducers: {
    getTournamentsDispatched: (state: MatchesState) => {
      state.isLoadingTournaments = true;
    },
    getTournamentsSuccessful: (
      state: MatchesState,
      action: PayloadAction<Array<Tournament>>
    ) => {
      state.isLoadingTournaments = false;
      state.tournaments = action.payload;
    },
    getTournamentsErrored: (
      state: MatchesState,
      action: PayloadAction<string>
    ) => {
      state.isLoadingTournaments = false;
      state.loadingTournamentsError = action.payload;
    },
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
    setTournament: (state: MatchesState, action: PayloadAction<number>) => {
      state.selectedTournament = action.payload;
    },
  },
});

export const {
  getTournamentsDispatched,
  getTournamentsSuccessful,
  getTournamentsErrored,
  getMatchesDispatched,
  getMatchesSuccessful,
  getMatchesErrored,
  setTournament,
} = matches.actions;
