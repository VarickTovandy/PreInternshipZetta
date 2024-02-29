import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { articles } from '../article-data';
import { Article } from '../interface/article-interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  articles: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>(articles);
  articles$ = this.articles.asObservable()

  constructor() { }

  addArticle(article: Article): void {
    const currentArticles = [...this.articles.value];
    currentArticles.unshift(article);
    this.articles.next(currentArticles);
  }

  removeArticle(articleId: number): void {
    const currentArticles = [...this.articles.value];
    const index = currentArticles.findIndex(article => article.id === articleId);
    if (index !== -1) {
      currentArticles.splice(index, 1);
      this.articles.next(currentArticles);
    }
  }

  editArticle(updatedArticle: Article): void {
    const currentArticles = [...this.articles.value];
    const index = currentArticles.findIndex(article => article.id === updatedArticle.id);
    if (index !== -1) {
      currentArticles[index] = updatedArticle;
      this.articles.next(currentArticles);
    }
  }
}
