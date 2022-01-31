import { Poll } from 'src/app/core/models/poll.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class PollService {
  constructor(private afs: AngularFirestore) {}

  getEmptyPoll(): Poll {
    return {
      question: '',
      options: [],
    };
  }

  async createPoll(poll: Poll) {
    return this.afs.collection('polls').add(poll);
  }
}
