import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/rootReducer";
import { getMatches } from "./state/matches/matches.slice";

import {
  getTournaments,
  setTournament,
} from "./state/tournaments/tournaments.slice";

import { Select } from "./components/Select";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTournaments());
    dispatch(getMatches("29"));
  }, [dispatch]);

  const { tournaments, loadingTournamentsError, isLoadingTournaments } =
    useSelector((state: RootState) => state.tournaments);

  const { matches, loadingMatchesError, isLoadingMatches } = useSelector(
    (state: RootState) => state.matches
  );

  const onTournamentSelected = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    dispatch(setTournament(value));
    dispatch(getMatches(value));
  };

  return (
    <div>
      {loadingTournamentsError ? (
        <p>An error occurred, please try again later.</p>
      ) : isLoadingTournaments ? (
        <p>Loading ...</p>
      ) : (
        <>
          <Select
            items={tournaments}
            label="Select tournament"
            handleSelection={onTournamentSelected}
          />
          {loadingMatchesError ? (
            <p>An error occurred, please try again later.</p>
          ) : isLoadingMatches ? (
            <p>Loading matches ...</p>
          ) : (
            <p>Matches</p>
          )}
        </>
      )}
    </div>
  );
};

export default App;
