import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event/event.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { EventAnswerComponent } from './event-answer/event-answer.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventListComponent,
    UserComponent,
    UserListComponent,
    EventAnswerComponent,
    EventCalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
