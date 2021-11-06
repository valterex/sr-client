import { Api } from "../../../api";
import { AppThunk } from "../../store";

import {
  getTournamentsDispatched,
  getTournamentsErrored,
  getTournamentsSuccessful,
} from "./slice";

const api = new Api();

export class TournamentsThunks {
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
}
