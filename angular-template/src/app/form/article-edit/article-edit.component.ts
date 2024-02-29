import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../../shared/interface/article-interface';
import { ArticleServiceService } from '../../shared/service/article-service.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.css'
})
export class ArticleEditComponent implements OnInit {
  faXmark = faXmark;
  editArticle: Article = {
    id: 0,
    title: '',
    createdAt: '',
    genre: '',
    description: '',
    imgUrl: ''
  } ?? {};

  @Input() isEditActice: boolean = false;
  @Input() currentArticle: Article | undefined = {
    id: 0,
    title: '',
    createdAt: '',
    genre: '',
    description: '',
    imgUrl: ''
  };
  @Output() editArticleActiveChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private articleService: ArticleServiceService) { }

  ngOnInit(): void {
    this.editArticle = this.currentArticle ?? {
      id: 0,
      title: '',
      createdAt: '',
      genre: '',
      description: '',
      imgUrl: ''
    };
  }

  closeEditArticle() {
    this.isEditActice = !this.isEditActice;
    this.editArticleActiveChange.emit(this.isEditActice);
  };

  onEditArticle() {
    if (this.editArticle) {
      this.articleService.editArticle(this.editArticle);
      this.closeEditArticle();
    }
  }
}
