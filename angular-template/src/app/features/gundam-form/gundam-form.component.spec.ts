import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GundamFormComponent } from './gundam-form.component';

describe('GundamFormComponent', () => {
  let component: GundamFormComponent;
  let fixture: ComponentFixture<GundamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GundamFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GundamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
