import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GundamListComponent } from './gundam-list.component';

describe('GundamListComponent', () => {
  let component: GundamListComponent;
  let fixture: ComponentFixture<GundamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GundamListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GundamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
