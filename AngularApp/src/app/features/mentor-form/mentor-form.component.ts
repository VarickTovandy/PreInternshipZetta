import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MentorService } from 'src/app/shared/services/mentor.service';


@Component({
  selector: 'app-mentor-form',
  templateUrl: './mentor-form.component.html',
  styleUrls: ['./mentor-form.component.css']
})
export class MentorFormComponent implements OnInit {
  mentorForm: FormGroup;
  mentorId: string = '';

  constructor(
    private fb: FormBuilder,
    private mentorService: MentorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm();

    this.route.queryParams.subscribe((queryParams) => {
      this.mentorId = queryParams['id'];
      if (!this.mentorId) {
        this.mentorForm.reset();
      }
    });

    if (this.mentorId) {
      const mentor = this.mentorService.getMentorById(this.mentorId);
      if (mentor) {
        this.mentorForm.patchValue(mentor)
      }
    }
  }

  initForm(): void {
    this.mentorForm = this.fb.group({
      _id: [''],
      email: ['', Validators.required],
      civility: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      company: this.fb.group({
        name: ['', Validators.required],
        user_type: ['', Validators.required]
      }),
      user_status: ['active', Validators.required],
      count_document: ['', Validators.required]
    })
  }

  onSubmit(): void {
    const formData = this.mentorForm.value;

    if (this.mentorForm.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all required fields with valid values!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    }

    let confirmationMessage: string;
    let successMessage: string;
    let confirmButtonText: string;

    if (!this.mentorId) {
      confirmationMessage = 'Are you sure you want to add new data?';
      successMessage = 'Successfully added new data!';
      confirmButtonText = 'Yes, add it!';
    } else {
      confirmationMessage = 'Are you sure you want to edit this data?';
      successMessage = 'Your data has been edited!';
      confirmButtonText = 'Yes, edit it!';
    }

    Swal.fire({
      title: 'Confirmation',
      text: confirmationMessage,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        if (!this.mentorId) {
          formData._id = '999';
          this.addNewMentor(formData, successMessage);
        } else {
          this.updateMentor(formData, successMessage);
        }
      }
    });
  }

  addNewMentor(formData: any, successMessage: string): void {
    this.mentorService.addNewMentor(formData);
    Swal.fire('Success', successMessage, 'success');
    this.router.navigate(['home']);
  }

  updateMentor(formData: any, successMessage: string): void {
    this.mentorService.updateMentor(formData);
    Swal.fire('Success', successMessage, 'success');
    this.router.navigate(['mentor-detail', this.mentorId]);
  }
}
