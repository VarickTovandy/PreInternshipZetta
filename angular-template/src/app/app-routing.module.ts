import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './main/player-list/player-list.component';
import { PlayerDetailComponent } from './main/player-detail/player-detail.component';
import { PlayerFormComponent } from './form/player-form/player-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PlayerListComponent },
  { path: 'player-form', component: PlayerFormComponent },
  { path: 'player-detail/:id', component: PlayerDetailComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
