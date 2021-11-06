import { Tournament, Match } from ".";

export interface MatchesState {
  isLoadingTournaments: boolean;
  isLoadingMatches: boolean;
  loadingTournamentsError: string | null;
  loadingMatchesError: string | null;
  tournaments: Array<Tournament> | null;
  selectedTournament: number | null;
  matches: Array<Match> | null;
}
