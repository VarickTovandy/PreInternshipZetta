import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { FormModule } from '../form/form.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleNotFoundComponent } from './article-not-found/article-not-found.component';



@NgModule({
  declarations: [
    ArticleCardComponent,
    ArticleListComponent,
    ArticleNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    FontAwesomeModule
  ],
  exports: [
    ArticleCardComponent,
    ArticleListComponent,
    ArticleNotFoundComponent
  ]
})
export class MainModule { }
