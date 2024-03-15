import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { PlayerService } from 'src/app/shared/services/player.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  playerForm: FormGroup;
  civilities: string[] = ['Mr.', 'Ms.', 'Mrs.'];
  genders: string[] = ['Male', 'Female'];
  editMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private playerService: PlayerService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialogRef<PlayerFormComponent>,
    private translate: TranslateService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.initForm();
    if (this.data) {
      this.editMode = true;
      this.setFormValues(this.data.player);
    }
  }

  initForm(): void {
    this.playerForm = this.fb.group({
      _id: [''],
      civility: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      position: ['', Validators.required],
      team: ['', Validators.required],
      birthDate: ['', Validators.required],
      playerImg: ['', Validators.required],
    })
  }

  setFormValues(playerData: any): void {
    this.playerForm.patchValue({
      _id: playerData._id,
      civility: playerData.civility,
      firstName: playerData.firstName,
      lastName: playerData.lastName,
      gender: playerData.gender,
      position: playerData.position,
      team: playerData.team,
      birthDate: playerData.birthDate,
      playerImg: playerData.playerImg
    });
  }

  onSubmit() {
    const formData = this.playerForm.value;

    if (this.playerForm.invalid) {
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

    if (!this.editMode) {
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
        if (!this.editMode) {
          formData._id = String(Math.floor(Math.random() * 1000) + 1);
          this.addNewPlayer(formData, successMessage);
        } else {
          this.updatePlayer(formData, successMessage);
        }
      }
    });
  }

  addNewPlayer(formData: any, successMessage: string): void {
    this.playerService.addNewPlayer(formData);
    Swal.fire('Success', successMessage, 'success');
    this.router.navigate(['home']);
    this.dialog.close();
  }

  updatePlayer(formData: any, successMessage: string): void {
    this.playerService.updatePlayer(formData);
    Swal.fire('Success', successMessage, 'success');
    this.router.navigate(['home']);
    // this.router.navigate(['mentor-detail', this.mentorId]);
  }

  switchLang(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) {
      const lang = target.value;
      this.translate.use(lang);
      console.log(lang)
    }
  }

  closePopup() {
    this.dialog.close();
  }
}
