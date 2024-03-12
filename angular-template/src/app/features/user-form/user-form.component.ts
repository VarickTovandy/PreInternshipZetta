import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces/user-interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  faArrow = faArrowLeft;
  userForm!: FormGroup;
  userId: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const idUser = params['id'];
      if (idUser) {
        this.userId = idUser;
      }
    });

    this.initForm();

    if (this.userId !== 0) {
      this.initEditForm();
    }
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        suite: ['', Validators.required],
        city: ['', Validators.required],
        zipcode: ['', Validators.required],
        geo: this.formBuilder.group({
          lat: ['', Validators.required],
          lng: ['', Validators.required]
        })
      }),
      phone: ['', Validators.required],
      website: ['', Validators.required],
      company: this.formBuilder.group({
        name: ['', Validators.required],
        catchPhrase: ['', Validators.required],
        bs: ['', Validators.required]
      })
    });
  }

  initEditForm() {
    this.userService.user$.subscribe((userData: User) => {
      if (userData) {
        this.userForm.setValue({
          id: userData.id,
          name: userData.name,
          username: userData.username,
          email: userData.email,
          address: {
            street: userData.address.street,
            suite: userData.address.suite,
            city: userData.address.city,
            zipcode: userData.address.zipcode,
            geo: {
              lat: userData.address.geo.lat,
              lng: userData.address.geo.lng
            }
          },
          phone: userData.phone,
          website: userData.website,
          company: {
            name: userData.company.name,
            catchPhrase: userData.company.catchPhrase,
            bs: userData.company.bs
          }
        });
      }
    });
  }

  backToHome() {
    this.router.navigate([''])
  }

  onSubmit(): void {
    if (this.userId === 0) {
      this.userForm.patchValue({
        id: Math.floor(Math.random() * 10000)
      });
      if (this.userForm.valid) {
        const userData: User = this.userForm.value;
        this.userService.addData(userData).subscribe(
          response => {
            this.router.navigate([''])
          },
          error => {
            console.error('Failed to add data:', error);
          }
        );
      } else {
        console.log("error")
      }
    } else {
      const userData: User = this.userForm.value;
      this.userService.editData(this.userId, userData).subscribe(
        response => {
          this.router.navigate(['']);
        },
        error => {
          console.error('Failed to edit data:', error);
        }
      );
    }
  }
}
