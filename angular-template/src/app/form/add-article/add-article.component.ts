import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../shared/interface/article-interface';
import { ArticleServiceService } from '../../shared/service/article-service.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent {
  faXmark = faXmark;

  @Input() isAddArticleActice: boolean = false;
  @Output() addArticleActiveChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  newArticle: Article = {
    id: 0,
    title: '',
    createdAt: '',
    imgUrl: '',
    description: '',
    genre: ''
  };

  constructor(private articleService: ArticleServiceService) { }

  onAddArticle(): void {
    this.newArticle.id = Math.floor(Math.random() * 1000);
    this.articleService.addArticle(this.newArticle);
    this.closeAddArticle();
  }

  closeAddArticle() {
    this.isAddArticleActice = !this.isAddArticleActice;
    this.addArticleActiveChange.emit(this.isAddArticleActice);
  }
}
