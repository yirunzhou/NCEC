import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './/app-routing.module';
import { DiscussionsComponent } from './discussions/discussions.component';
import { DiscussionComponent } from './discussions/discussion/discussion.component';
import { HeaderComponent } from './header/header.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

/* Services */
import { DiscussionsService } from './discussions/discussions.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DiscussionsComponent,
    DiscussionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [DiscussionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
