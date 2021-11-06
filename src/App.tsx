import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MatchesThunks } from "./state/slices/matches/thunks";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const matchesThunks = new MatchesThunks();

  const getMatchesPerTournament = (id: number) => {
    dispatch(matchesThunks.getMatches(id));
  };

  useEffect(() => {
    dispatch(matchesThunks.getTournaments());
    dispatch(matchesThunks.getMatches(29));
  });

  return <div></div>;
};

export default App;
