import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './main/player-list/player-list.component';
import { PlayerDetailComponent } from './main/player-detail/player-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PlayerListComponent },
  { 
    path: 'player-form', 
    loadChildren: () => import('./form/form.module').then(m => m.FormModule)
  },
  { path: 'player-detail/:id', component: PlayerDetailComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
