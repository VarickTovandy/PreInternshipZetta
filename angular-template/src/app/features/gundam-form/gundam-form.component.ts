import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { GundamService } from '../../shared/services/gundam.service';
import { ActivatedRoute, Router } from '@angular/router';
import { gundamData } from '../../shared/data/gundam-data';
import { Gundam } from '../../shared/interfaces/gundam-interface';

@Component({
  selector: 'app-gundam-form',
  templateUrl: './gundam-form.component.html',
  styleUrl: './gundam-form.component.css'
})
export class GundamFormComponent implements OnInit {
  gundamForm!: FormGroup;
  gundamId: number = 0;

  constructor(private fb: FormBuilder, private gundamService: GundamService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const idGundam = params['id'];
      if (idGundam) {
        this.gundamId = idGundam;
      }
    });

    this.createForm();

    if (this.gundamId !== 0) {
      this.initEditForm();
    } else {
      this.addArmaments();
    }
  }

  createForm() {
    this.gundamForm = this.fb.group({
      id: [0, Validators.required],
      name: ['', Validators.required],
      modelNumber: ['', Validators.required],
      series: ['', Validators.required],
      description: [''],
      imageUrl: ['', Validators.required],
      armaments: this.fb.array([])
    });
  }

  initEditForm() {
    this.gundamService.gundam$.subscribe((gundamData: Gundam) => {
      if (gundamData) {
        this.gundamForm.patchValue({
          id: gundamData.id,
          name: gundamData.name,
          modelNumber: gundamData.modelNumber,
          series: gundamData.series,
          description: gundamData.description,
          imageUrl: gundamData.imageUrl
        });

        const armamentForm = this.fb.group({
          fixed: new FormControl(gundamData.armaments.fixed, [Validators.required]),
          handheld: new FormControl(gundamData.armaments.handheld, [Validators.required])
        });
        this.Armaments.push(armamentForm);
      }
    });
  }


  get Armaments() {
    return this.gundamForm.controls["armaments"] as FormArray
  }

  addArmaments() {
    const armaments = this.gundamForm.get('armaments') as FormArray;
    armaments.push(
      this.fb.group({
        fixed: new FormControl('', [Validators.required]),
        handheld: new FormControl('', [Validators.required])
      })
    )
  }

  removeArmaments(index: number) {
    this.Armaments.removeAt(index)
  }

  onSubmit() {
    if (this.gundamId === 0) {
      this.gundamForm.patchValue({
        id: Math.floor(Math.random() * 10000).toString()
      });
      if (this.gundamForm.valid) {
        this.gundamService.addGundam(this.gundamForm.value);
        this.router.navigate(['gundams'])
      }
    } else {
      this.gundamService.updateGundam(this.gundamForm.value)
      this.router.navigate(['gundam-detail', this.gundamId])
    }
  }
}
