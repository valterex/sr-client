import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/rootReducer";
import { MatchesThunks } from "./state/slices/matches/thunks";
import { TournamentsThunks } from "./state/slices/tournaments/thunks";
import { Tournament } from "./types";
import "./App.css";
import { Select } from "./components/Select";
import { setTournament } from "./state/slices/tournaments/slice";

const App = () => {
  const dispatch = useDispatch();

  const tournaments = useSelector(
    (state: RootState) => state.tournaments.tournaments
  ) as Array<Tournament>;

  const matchesThunks = new MatchesThunks();
  const tournamentsThunks = new TournamentsThunks();

  // const getMatchesPerTournament = (id: number) => {
  //   dispatch(matchesThunks.getMatches(id));
  // };

  useEffect(() => {
    dispatch(tournamentsThunks.getTournaments());
    dispatch(matchesThunks.getMatches("29"));
  });

  const onTournamentSelected = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTournament(e.target.value));
  };

  return (
    <div>
      <Select
        label="Select tournament"
        handleSelection={onTournamentSelected}
        items={tournaments}
      />
    </div>
  );
};

export default App;
