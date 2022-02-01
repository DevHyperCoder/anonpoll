export interface Poll {
  pollId?: string;
  question: string;
  totalVotes: number;
  options: PollOption[];
}

export interface PollOption {
  option: string;
  votes: number;
}
