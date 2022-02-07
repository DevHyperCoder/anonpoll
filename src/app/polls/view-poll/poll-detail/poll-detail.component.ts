import { Component, Input } from '@angular/core';
import { Poll, PollOption } from 'src/app/core/models/poll.model';
import { PollService } from '../../poll.service';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
})
export class PollDetailComponent {
  @Input()
  poll!: Poll;

  voted = false;
  showResults = false;

  get canVote() {
    return !this.voted && !this.showResults
  }

  selectedOption?: PollOption;

  constructor(private service: PollService) {}

  get totalVotes() {
    let { totalVotes } = this.poll;
    return totalVotes ? totalVotes : 0;
  }

  flipShowResults() {
    this.showResults = !this.showResults;
  }

  get isVoted() {
    return this.totalVotes > 0;
  }

  getPollOptionVotes(idx: number) {
    let { votes } = this.poll.options[idx];
    return votes ? votes : 0;
  }

  getPollOptionPercentage(idx: number) {
    if (this.totalVotes === 0) {
      return 0;
    }

    return (this.getPollOptionVotes(idx) / this.totalVotes) * 100;
  }

  voteOption(idx: number) {
    if (!this.canVote) return

    this.voted = true;
    this.service.votePoll(this.poll, idx);
  }
}
