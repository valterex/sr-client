import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MatchesThunks } from "./state/slices/matches/thunks";
import { TournamentsThunks } from "./state/slices/tournaments/thunks";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const matchesThunks = new MatchesThunks();
  const tournamentsThunks = new TournamentsThunks();

  const getMatchesPerTournament = (id: number) => {
    dispatch(matchesThunks.getMatches(id));
  };

  useEffect(() => {
    dispatch(tournamentsThunks.getTournaments());
    dispatch(matchesThunks.getMatches(29));
  });

  return <div></div>;
};

export default App;
