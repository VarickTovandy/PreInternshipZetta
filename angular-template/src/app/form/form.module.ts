import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArticleEditComponent } from './article-edit/article-edit.component';



@NgModule({
  declarations: [
    AddArticleComponent,
    ArticleDetailComponent,
    ArticleEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    AddArticleComponent,
    ArticleDetailComponent,
    ArticleEditComponent,
  ]
})
export class FormModule { }
