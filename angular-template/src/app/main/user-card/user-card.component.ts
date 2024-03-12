import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../shared/interfaces/user-interface';
import { UserService } from '../../shared/services/user.service';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  faUser = faUser;
  @Input() userData: User = {
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
  };

  constructor(private router: Router, private userService: UserService) { }

  navigateToDetail() {
    this.router.navigate(['/user-detail', this.userData.id])
  }

  // triggerDeleteUser() {
  //   this.userService.deleteUser(this.userData.id).subscribe(
  //     () => {
  //       console.log('User deleted successfully');
  //     },
  //     error => {
  //       console.error('Failed to delete user:', error);
  //     }
  //   );
  // }
}
