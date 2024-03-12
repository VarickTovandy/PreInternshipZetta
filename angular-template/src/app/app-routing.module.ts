import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardListComponent } from './main/card-list/card-list.component';
import { UserFormComponent } from './features/user-form/user-form.component';
import { UserDetailsComponent } from './features/user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CardListComponent },
  { path: 'user-form', component: UserFormComponent },
  { path: 'user-detail/:id', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }