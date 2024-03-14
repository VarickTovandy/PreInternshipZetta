import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './main/home-page/home-page.component';
import { MentorFormComponent } from './features/mentor-form/mentor-form.component';
import { MentorDetailComponent } from './features/mentor-detail/mentor-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'mentor-form', component: MentorFormComponent },
  { path: 'mentor-detail/:id', component: MentorDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
