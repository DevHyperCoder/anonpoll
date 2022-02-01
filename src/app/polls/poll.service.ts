import { Poll } from 'src/app/core/models/poll.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { increment } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(private afs: AngularFirestore) {}

  getEmptyPoll(): Poll {
    return {
      totalVotes: 0,
      question: '',
      options: [],
    };
  }

  async createPoll(poll: Poll) {
    return this.afs.collection('polls').add(poll);
  }

  getPoll(id: string) {
    console.log(`polls/${id}`);
    return this.afs
      .doc<Poll>(`polls/${id}`)
      .valueChanges({ idField: 'pollId' });
  }

  votePoll(poll: Poll, optionIndex: number) {
    if (!poll.pollId) {
      throw new Error('Poll must contain a pollId');
    }

    const newOptions = poll.options.map((opt, i) => {
      if (i !== optionIndex) return opt;

      // Use firebase field value increment
      opt.votes += 1;

      return opt;
    });

    this.afs.doc(`polls/${poll.pollId}`).update({
      totalVotes: increment(1),
      options: newOptions,
    });
  }
}
