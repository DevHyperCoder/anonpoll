import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HomeModule } from './home/home.module';
import { PollsModule } from './polls/polls.module';
import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFirestoreModule,
  USE_EMULATOR as USE_FIREBASE_EMULATOR,
} from '@angular/fire/compat/firestore';
import {CoreModule} from './core/core.module';

console.log(environment);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    CoreModule,
    HomeModule,
    PollsModule,
  ],
  providers: [
    {
      provide: USE_FIREBASE_EMULATOR,
      useValue: environment.useFirebaseEmulators
        ? ['localhost', 8080]
        : undefined,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
