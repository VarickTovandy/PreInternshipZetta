import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './main/homepage/homepage.component';
import { GundampageComponent } from './main/gundampage/gundampage.component';
import { GundamFormComponent } from './features/gundam-form/gundam-form.component';
import { GundamDetailComponent } from './features/gundam-detail/gundam-detail.component';
import { PilotpageComponent } from './main/pilotpage/pilotpage.component';
import { PilotDetailComponent } from './features/pilot-detail/pilot-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'gundams', component: GundampageComponent },
  { path: 'pilots', component: PilotpageComponent },
  { path: 'gundam-form', component: GundamFormComponent },
  { path: 'gundam-detail/:id', component: GundamDetailComponent },
  { path: 'pilot-detail/:id', component: PilotDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
