import { Tournament, Match } from ".";

export interface TournamentsState {
  isLoadingTournaments: boolean;
  loadingTournamentsError: string | null;
  tournaments: Array<Tournament> | null;
  selectedTournament: number | null;
}

export interface MatchesState {
  isLoadingMatches: boolean;
  loadingMatchesError: string | null;
  matches: Array<Match> | null;
}
