import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { LaptopSpec } from '../../shared/interface/laptop-spec';
import { LaptopDataService } from '../../shared/service/laptop-data.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent implements OnInit {
  laptopForm!: FormGroup;
  laptopId: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private laptopService: LaptopDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const idLaptop = params['id'];
      if (idLaptop) {
        this.laptopId = idLaptop;
      }
    });

    this.initForm();

    if (this.laptopId !== '') {
      this.initEditForm();
    } else {
      this.addNewWarranty();
    }

    this.handleFormChanges();
  }

  initForm() {
    this.laptopForm = this.fb.group({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      processor: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      gpu: new FormControl('', [Validators.required]),
      storage: new FormControl('', [Validators.required]),
      ram: new FormControl('', [Validators.required]),
      laptopImg: new FormControl('', [Validators.required]),
      warranty: this.fb.array([]),
    });
  }

  initEditForm() {
    this.laptopService.laptop$.subscribe((laptopData: LaptopSpec) => {
      if (laptopData) {
        this.laptopForm.patchValue({
          id: laptopData.id,
          name: laptopData.name,
          brand: laptopData.brand,
          processor: laptopData.processor,
          gpu: laptopData.gpu,
          price: laptopData.price,
          storage: laptopData.storage,
          ram: laptopData.ram,
          laptopImg: laptopData.laptopImg
        });
        laptopData.warranty.map((warranty: any) => {
          const warrantyForm = this.fb.group({
            type: new FormControl(warranty.type, [Validators.required]),
            duration: new FormControl(warranty.duration, [Validators.required])
          })
          this.Warranties.push(warrantyForm);
        })
      }
    });
  }

  handleFormChanges() {
    this.laptopForm.get('brand')?.valueChanges.subscribe((newValue: string) => {
      if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(newValue)) {
        const sanitizedValue = newValue.replace(/[0-9!@#$%^&*(),.?":{}|<>]/g, '');
        
        this.laptopForm.patchValue({ brand: sanitizedValue }, { emitEvent: false });
      }
    });
    this.laptopForm.get('laptopImg')?.valueChanges.subscribe((laptopImg: string) => {
      this.validateInput(laptopImg, 'laptopImg')
    });
  }

  get Warranties() {
    return this.laptopForm.controls["warranty"] as FormArray
  }

  addNewWarranty() {
    const warranty = this.laptopForm.get('warranty') as FormArray;
    warranty.push(
      this.fb.group({
        type: new FormControl('', [Validators.required]),
        duration: new FormControl('', [Validators.required])
      })
    )
  }

  validateInput(value: string, controlName: string) {
    if (!value) {
      this.laptopForm.controls[controlName].setErrors({ required: true });
    } else {
      const pattern = /\.(jpe?g|tiff|png|webp|bmp)$/i;
      if (!pattern.test(value)) {
        this.laptopForm.controls[controlName].setErrors({
          invalidInput: true,
        })
      } else {
        this.laptopForm.controls[controlName].setErrors(null);
      }
    }
  }

  removeWarranty(index: number) {
    this.Warranties.removeAt(index)
  }

  backToHome() {
    this.router.navigate([''])
  }

  onSubmit() {
    if(this.laptopId === '') {
      this.laptopForm.patchValue({
        id: Math.floor(Math.random() * 10000).toString()
      });
    }
    console.log(this.laptopForm)
    if (this.laptopForm.valid) {
      if (this.laptopId === '') {
        this.laptopService.addLaptop(this.laptopForm.value);
        Swal.fire({
          icon: 'success',
          title: 'Laptop Added!',
          text: 'The laptop has been successfully added.',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/home'])
          }
        });
      } else {
        this.laptopService.updateLaptop(this.laptopForm.value);
        Swal.fire({
          icon: 'success',
          title: 'Laptop Edited!',
          text: 'The laptop has been successfully updated.',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/laptop-detail', this.laptopId])
          }
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all required fields before submitting.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
    }
  }
}