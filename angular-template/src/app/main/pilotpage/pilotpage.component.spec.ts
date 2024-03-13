import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotpageComponent } from './pilotpage.component';

describe('PilotpageComponent', () => {
  let component: PilotpageComponent;
  let fixture: ComponentFixture<PilotpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PilotpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PilotpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
