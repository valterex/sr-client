interface MatchResult {
  home: number;
  away: number;
  period: "nt";
  winner: "home" | "away";
}

interface MatchTime {
  _doc: "time";
  time: string;
  date: string;
  tz: "UTC";
  tzoffset: number;
  uts: number;
}

export interface Match {
  id: string;
  time: MatchTime;
  result: MatchResult;
  homeTeam: string;
  awayTeam: string;
  events: string;
}
