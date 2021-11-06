import { Api } from "../../../api";
import { AppThunk } from "../../store";

import {
  getMatchesDispatched,
  getMatchesErrored,
  getMatchesSuccessful,
  getTournamentsDispatched,
  getTournamentsErrored,
  getTournamentsSuccessful,
  setTournament,
} from "./slice";

const api = new Api();

export class MatchesThunks {
  getTournaments = (): AppThunk => async (dispatch) => {
    try {
      dispatch(getTournamentsDispatched());
      const data = await api.getTournaments();
      dispatch(getTournamentsSuccessful(data));
    } catch (err) {
      if (err instanceof Error) {
        dispatch(getTournamentsErrored(err.message));
      }
    }
  };

  getMatches =
    (id: number): AppThunk =>
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
}
