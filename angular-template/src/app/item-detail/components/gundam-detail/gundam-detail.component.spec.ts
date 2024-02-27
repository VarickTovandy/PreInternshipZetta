import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GundamDetailComponent } from './gundam-detail.component';

describe('GundamDetailComponent', () => {
  let component: GundamDetailComponent;
  let fixture: ComponentFixture<GundamDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GundamDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GundamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
