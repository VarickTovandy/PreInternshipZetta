import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces/user-interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit {
  users: User[] = []

  constructor(private userService: UserService, private router: Router, private translate: TranslateService) { }

  ngOnInit(): void {
    this.userService.users$.subscribe((users: User[]) => {
      this.users = users
    })
  }

  addNewUser():void {
    this.router.navigate(['/user-form'])
  }

  switchLang(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      const lang = target.value;
      this.translate.use(lang);
    }
  }
}
