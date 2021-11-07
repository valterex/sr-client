import { AnyAction } from "redux";

import {
  tournaments,
  getTournamentsDispatched,
  getTournamentsErrored,
  getTournamentsSuccessful,
  setTournament,
} from "../../state/tournaments/tournaments.slice";

import { tournaments as tournamentsFixture } from "../fixtures/tournaments";
import { TournamentsState } from "../../types";

const { reducer } = tournaments;

const initialState: TournamentsState = {
  isLoadingTournaments: false,
  loadingTournamentsError: null,
  tournaments: [],
  selectedTournament: null,
};

test("should return the initial state", () => {
  expect(reducer(undefined, {} as AnyAction)).toEqual(initialState);
});

test("should handle dispatch of tournaments", () => {
  const updatedState = { ...initialState, isLoadingTournaments: true };

  expect(reducer(initialState, getTournamentsDispatched())).toEqual(
    updatedState
  );
});

test("should handle successful fetching of tournaments", () => {
  const updatedState = {
    ...initialState,
    tournaments: tournamentsFixture,
  };

  expect(
    reducer(initialState, getTournamentsSuccessful(tournamentsFixture))
  ).toEqual(updatedState);
});

test("should handle selecting a single tournament", () => {
  const updatedState = { ...initialState, selectedTournament: "1" };

  expect(reducer(initialState, setTournament("1"))).toEqual(updatedState);
});

test("should handle errors", () => {
  const error = "Network error";

  const updatedState = {
    ...initialState,
    loadingTournamentsError: error,
  };

  expect(reducer(initialState, getTournamentsErrored(error))).toEqual(
    updatedState
  );
});
