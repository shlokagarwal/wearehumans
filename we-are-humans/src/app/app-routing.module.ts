import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContributeComponent } from './contribute/contribute.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: LandingpageComponent },
  { path: 'contribute', component: ContributeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
