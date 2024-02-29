import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleServiceService } from '../../shared/service/article-service.service';
import { Article } from '../../shared/interface/article-interface';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  articleId: number = 0;
  isEditActive: boolean = false;
  articlesData: Article[] = [];
  currentArticle: Article | undefined = {
    id: 0,
    title: '',
    createdAt: '',
    genre: '',
    description: '',
    imgUrl: ''
  };
  articlesSubscription: Subscription | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.articleId = +params['id'];
    });

    

    this.articleService.articles$.subscribe((data: Article[]) => {
      this.articlesData = data;
    });

    if (this.articlesData && this.articleId) {
      this.currentArticle = this.articlesData.find(article => article.id === this.articleId);
    }
  }

  backToHome(): void {
    this.router.navigate(['']);
  }

  toggleEdit(): void {
    this.isEditActive = !this.isEditActive
  }

  ngOnDestroy(): void {
    if (this.articlesSubscription) {
      this.articlesSubscription.unsubscribe();
    }
  }

  onCloseEditArticle(value: boolean) {
    this.isEditActive = false;
  }
}
