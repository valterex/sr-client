import { Match, Tournament } from ".";

export interface TournamentsState {
  isLoadingTournaments: boolean;
  loadingTournamentsError: string | null;
  tournaments: Array<Tournament> | [];
  selectedTournament: string | null;
}

export interface MatchesState {
  isLoadingMatches: boolean;
  loadingMatchesError: string | null;
  matches: Array<Match> | [];
}
