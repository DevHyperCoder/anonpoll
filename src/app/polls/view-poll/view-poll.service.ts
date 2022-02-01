import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Poll} from 'src/app/core/models/poll.model';

@Injectable({
  providedIn: 'root'
})
export class ViewPollService {

  constructor(private afs: AngularFirestore) { }

  getPoll(id: string) {
    console.log(`polls/${id}`)
    return this.afs.doc<Poll>(`polls/${id}`).valueChanges()
  }
}
