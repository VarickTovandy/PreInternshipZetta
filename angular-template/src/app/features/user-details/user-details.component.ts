import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces/user-interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  faArrow = faArrowLeft;
  faUSer = faUser;
  userData: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  }
  userId: number = 0;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id']
    })
    this.userService.getUserById(this.userId)
    this.userService.user$.subscribe((user: User) => {
      this.userData = user
    })
  }

  backToHome() {
    this.router.navigate([''])
  }

  navigateToEdit() {
    this.router.navigate(['user-form'], { queryParams: { id: this.userId } })
  }

  triggerDeleteUser() {
    this.userService.deleteUser(this.userData.id).subscribe(
      (response) => {
        this.backToHome()
      },
      error => {
        console.error('Failed to delete user:', error);
      }
    );
  }
}
