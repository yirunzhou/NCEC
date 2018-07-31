import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent }  from './landing/landing.component';
import { DiscussionsComponent } from './discussions/discussions.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'discussions', component: DiscussionsComponent },
  { path: '', redirectTo :'/discussions', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
