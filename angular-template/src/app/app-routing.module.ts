import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './main/article-list/article-list.component';
import { ArticleDetailComponent } from './form/article-detail/article-detail.component';
import { ArticleNotFoundComponent } from './main/article-not-found/article-not-found.component';

const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ArticleListComponent },
  { path: 'article-detail/:id', component: ArticleDetailComponent },
  { path: 'not-found', component: ArticleNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
