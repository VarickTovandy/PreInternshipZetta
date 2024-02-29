import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../../shared/interface/article-interface';
import { ArticleServiceService } from '../../shared/service/article-service.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {
  faTrash = faTrash;

  @Input() article: Article = {
    id: 0,
    title: '',
    createdAt: '',
    genre: '',
    description: '',
    imgUrl: ''
  };

  constructor(private router: Router, private articleService: ArticleServiceService) { }

  openArticleDetail(articleId: number): void {
    this.router.navigate(['/article-detail', articleId]);
  }

  removeArticle(articleId: number): void {
    this.articleService.removeArticle(articleId);
  }
}
