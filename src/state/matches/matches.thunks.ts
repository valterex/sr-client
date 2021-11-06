import { Api } from "../../api";
import { AppThunk } from "../store";
import { setTournament } from "../tournaments/tournaments.slice";

import {
  getMatchesDispatched,
  getMatchesErrored,
  getMatchesSuccessful,
} from "./matches.slice";

const api = new Api();

export const getMatches =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getMatchesDispatched());

      const data = await api.getMatches(id);

      dispatch(setTournament(id));
      dispatch(getMatchesSuccessful(data));
    } catch (err) {
      if (err instanceof Error) {
        dispatch(getMatchesErrored(err.message));
      }
    }
  };
