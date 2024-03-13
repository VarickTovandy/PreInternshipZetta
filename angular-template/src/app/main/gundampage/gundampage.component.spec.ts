import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GundampageComponent } from './gundampage.component';

describe('GundampageComponent', () => {
  let component: GundampageComponent;
  let fixture: ComponentFixture<GundampageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GundampageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GundampageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
