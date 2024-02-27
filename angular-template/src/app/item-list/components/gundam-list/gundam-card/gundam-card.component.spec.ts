import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GundamCardComponent } from './gundam-card.component';

describe('GundamCardComponent', () => {
  let component: GundamCardComponent;
  let fixture: ComponentFixture<GundamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GundamCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GundamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
