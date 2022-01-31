export interface Poll {
  question: string;
  totalVotes?: number;
  options: PollOption[];
}

export interface PollOption {
  option: string;
  votes?: number;
}
