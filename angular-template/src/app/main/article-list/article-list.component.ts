import { Component, ViewEncapsulation } from '@angular/core';
import { Article } from '../../shared/interface/article-interface';
import { ArticleServiceService } from '../../shared/service/article-service.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ArticleListComponent {
  isAddArticleActice: boolean = false;
  articlesData:Article[] = [];

  constructor(private articleService: ArticleServiceService) { }

  ngOnInit(): void {
    this.articleService.articles$.subscribe((data: Article[]) => {
      this.articlesData = data;
    });
  }

  toggleAddArticle() {
    this.isAddArticleActice = !this.isAddArticleActice
  }

  onCloseAddArticle(value: boolean):void {
    this.isAddArticleActice = value
  }
}
