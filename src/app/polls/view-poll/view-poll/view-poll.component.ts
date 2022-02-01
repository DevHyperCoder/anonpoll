import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Poll} from 'src/app/core/models/poll.model';
import {ViewPollService} from '../view-poll.service';

@Component({
  selector: 'app-view-poll',
  templateUrl: './view-poll.component.html',
})
export class ViewPollComponent implements OnInit {
  poll?: Poll
  loading = false

  constructor(private service: ViewPollService,
             private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      const {id} = params

      this.loading = true;
      this.service.getPoll(id).subscribe(poll => {
        this.poll = poll
      this.loading = false;
      })

    })
  }

}
