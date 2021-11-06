import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Api } from "../../api";
import { Tournament, TournamentsState } from "../../types";
import { AppThunk } from "../store";

const initialState: TournamentsState = {
  isLoadingTournaments: false,
  loadingTournamentsError: null,
  tournaments: [],
  selectedTournament: null,
};

export const tournaments = createSlice({
  name: "tournaments",
  initialState: initialState,
  reducers: {
    getTournamentsDispatched: (state: TournamentsState) => {
      state.isLoadingTournaments = true;
    },
    getTournamentsSuccessful: (
      state: TournamentsState,
      action: PayloadAction<Array<Tournament>>
    ) => {
      state.isLoadingTournaments = false;
      state.tournaments = action.payload;
    },
    getTournamentsErrored: (
      state: TournamentsState,
      action: PayloadAction<string>
    ) => {
      state.isLoadingTournaments = false;
      state.loadingTournamentsError = action.payload;
    },
    setTournament: (state: TournamentsState, action: PayloadAction<string>) => {
      state.selectedTournament = action.payload;
    },
  },
});

export const {
  getTournamentsDispatched,
  getTournamentsSuccessful,
  getTournamentsErrored,
  setTournament,
} = tournaments.actions;
