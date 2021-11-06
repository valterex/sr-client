interface MatchResult {
  home: number;
  away: number;
  period: "nt";
  winner: "home" | "away";
}

export interface Match {
  id: number;
  time: any;
  result: MatchResult;
  homeTeam: string;
  awayTeam: string;
  events: Array<string>;
}