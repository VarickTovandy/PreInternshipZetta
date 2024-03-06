import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../../shared/interface/player-interface';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { PlayerService } from '../../shared/service/player.service';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  faXmark = faXmark;
  faArrow = faArrowLeft;
  playerForm!: FormGroup;
  playerId: number = 0;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const playerId = params['id'];
      if (playerId) {
        this.playerId = playerId;
      }
    });

    this.initForm();

    if (this.playerId) {
      this.playerService.player$.subscribe((playerData: Player | null) => {
        if (playerData) {
          playerData.playerAddresses.map((address: any) => {
            const addressForm = this.fb.group({
              address: new FormControl(address.address, [
                Validators.required,
              ]),
              zipCode: new FormControl(address.zipCode, [
                Validators.required,
              ]),
              city: new FormControl(address.city, [
                Validators.required,
              ]),
              country: new FormControl(address.country, [
                Validators.required,
              ]),
            })
            this.Addresses.push(addressForm)
          })

          playerData.contactPerson.map((contact: any) => {
            const contactForm = this.fb.group({
              name: new FormControl(contact.name, [
                Validators.required,
              ]),
              phoneNumber: new FormControl(contact.phoneNumber, [
                Validators.required,
              ]),
            })
            this.Contacts.push(contactForm)
          })

          this.playerForm.patchValue({
            id: playerData.id,
            name: playerData.name,
            age: playerData.age,
            gender: playerData.gender,
            email: playerData.email,
            nationality: playerData.nationality,
            chessTitle: playerData.chessTitle,
            chessElo: playerData.chessElo,
          });
        }
        else {
          console.log('Player data not found');
        }
      });
    } else {
      this.addNewAddress();
      this.addNewContact();
    }
  }

  initForm() {
    this.playerForm = this.fb.group({
      id: new FormControl(0, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      age: new FormControl(0, [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      nationality: new FormControl('', [Validators.required]),
      chessTitle: new FormControl('', [Validators.required]),
      chessElo: new FormControl(0, [Validators.required, Validators.min(2000)]),
      playerAddresses: this.fb.array([]),
      contactPerson: this.fb.array([])
    });
  }

  get Addresses() {
    return this.playerForm.controls["playerAddresses"] as FormArray
  }

  get Contacts() {
    return this.playerForm.controls['contactPerson'] as FormArray
  }

  addNewAddress() {
    const address = this.playerForm.get('playerAddresses') as FormArray;
    console.log(address)
    address.push(
      this.fb.group({
        address: new FormControl('', [
          Validators.required,
        ]),
        zipCode: new FormControl(0, [
          Validators.required,
        ]),
        city: new FormControl('', [
          Validators.required,
        ]),
        country: new FormControl('', [
          Validators.required,
        ]),
      })
    )
  }

  addNewContact() {
    const contacts = this.playerForm.get('contactPerson') as FormArray;
    contacts.push(
      this.fb.group({
        name: new FormControl('', [
          Validators.required,
        ]),
        phoneNumber: new FormControl('', [
          Validators.required,
        ]),
      })
    )
  }

  removeAddress(index: number) {
    this.Addresses.removeAt(index);
  }

  removeContact(index: number) {
    this.Contacts.removeAt(index)
  }

  onSubmit() {
    if (!this.playerId) {
      this.playerForm.patchValue({
        id: Math.floor(Math.random() * 1000)
      });
      this.playerService.addPlayer(this.playerForm.value);
    } else {
      this.playerService.updatePlayer(this.playerForm.value);
    }
    this.router.navigate([''])
  }

  backToHome() {
    this.router.navigate([''])
  }
}
