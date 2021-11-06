import { Api } from "../../api";
import { AppThunk } from "../store";

import {
  getTournamentsDispatched,
  getTournamentsErrored,
  getTournamentsSuccessful,
} from "./tournaments.slice";

const api = new Api();

export const getTournaments = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getTournamentsDispatched());

    const data = await api.getTournaments();
    data.sort((a, b) => (a.name > b.name ? 1 : -1));

    dispatch(getTournamentsSuccessful(data));
  } catch (err) {
    if (err instanceof Error) {
      dispatch(getTournamentsErrored(err.message));
    }
  }
};
