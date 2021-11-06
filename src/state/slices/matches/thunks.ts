import { Api } from "../../../api";
import { AppThunk } from "../../store";
import { setTournament } from "../tournaments/slice";

import {
  getMatchesDispatched,
  getMatchesErrored,
  getMatchesSuccessful,
} from "./slice";

const api = new Api();

export class MatchesThunks {
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
