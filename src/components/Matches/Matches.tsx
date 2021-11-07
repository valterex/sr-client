import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatches } from "../../state/matches/matches.thunks";
import { RootState } from "../../state/rootReducer";
import { getTournaments } from "../../state/tournaments/tournaments.thunks";
import { Match } from "../../types";
import { Select } from "../Select";
import { Spinner } from "../Spinner";
import "./Matches.scss";

export const Matches = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTournaments());
    dispatch(getMatches("29"));
  }, [dispatch]);

  const {
    tournaments,
    loadingTournamentsError,
    isLoadingTournaments,
    selectedTournament,
  } = useSelector((state: RootState) => state.tournaments);

  const { loadingMatchesError, isLoadingMatches } = useSelector(
    (state: RootState) => state.matches
  );

  // matches must be casted explicitly
  const matches = useSelector(
    (state: RootState) => state.matches.matches
  ) as Array<Match>;

  const onTournamentSelected = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    // prevent re-fetching of initially loaded tournament matches
    if (selectedTournament === value) {
      return;
    }

    dispatch(getMatches(value));
  };

  return (
    <>
      {loadingTournamentsError ? (
        <p className="text-center">
          An error occurred while loading tournaments, please try again later.
        </p>
      ) : isLoadingTournaments ? (
        <Spinner id="matches__spinner" />
      ) : (
        <>
          <Select
            items={tournaments}
            label="Select tournament"
            handleSelection={onTournamentSelected}
            id="matches__select"
          />
          {loadingMatchesError ? (
            <p className="text-center">
              An error occurred while loading matches, please try again later.
            </p>
          ) : isLoadingMatches ? (
            <p className="text-center">Loading matches ...</p>
          ) : (
            <>
              {matches.length > 0 ? (
                matches.map((match) => (
                  <div
                    className="card text-center matches__match"
                    key={match.id}
                  >
                    <div className="card-body">
                      <p className="card-text matches__date">
                        <span>{match.time.date ? match.time.date : null} </span>{" "}
                        <span>
                          {match.time.time ? "/ " + match.time.time : null}{" "}
                        </span>
                      </p>
                      <h5 className="card-title matches__teams">
                        <span>
                          {match.homeTeam} - {match.awayTeam}{" "}
                        </span>
                        {!match.result
                          ? null
                          : "(" +
                            match.result.home +
                            ":" +
                            match.result.away +
                            ")"}
                      </h5>
                      {match.events ? (
                        <p className="card-text matches__events">
                          {match.events}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">
                  No matches found for {selectedTournament}.
                </p>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
