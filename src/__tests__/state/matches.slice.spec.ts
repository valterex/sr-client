import { AnyAction } from "redux";

import {
  matches,
  getMatchesDispatched,
  getMatchesSuccessful,
  getMatchesErrored,
} from "../../state/matches/matches.slice";

import { MatchesState } from "../../types";
import { match } from "../fixtures/matches";

const { reducer } = matches;

const initialState: MatchesState = {
  isLoadingMatches: false,
  loadingMatchesError: null,
  matches: [],
};

test("should return the initial state", () => {
  expect(reducer(undefined, {} as AnyAction)).toEqual(initialState);
});

test("should handle dispatch of matches", () => {
  const updatedState = { ...initialState, isLoadingMatches: true };

  expect(reducer(initialState, getMatchesDispatched())).toEqual(updatedState);
});

test("should handle successful fetching of matches", () => {
  const updatedState = { ...initialState, matches: match };

  expect(reducer(initialState, getMatchesSuccessful(match))).toEqual(
    updatedState
  );
});

test("should handle errors", () => {
  const error = "Network error";

  const updatedState = {
    ...initialState,
    loadingMatchesError: error,
  };

  expect(reducer(initialState, getMatchesErrored(error))).toEqual(updatedState);
});
