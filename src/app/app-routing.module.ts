import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewPollComponent } from './polls/new-polls/new-poll/new-poll.component';
import { ViewPollComponent } from './polls/view-poll/view-poll/view-poll.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'new',
    component: NewPollComponent,
  },
  {
    path: 'poll/:id',
    component: ViewPollComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
