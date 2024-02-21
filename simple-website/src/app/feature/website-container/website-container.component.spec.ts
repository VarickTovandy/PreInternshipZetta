import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteContainerComponent } from './website-container.component';

describe('WebsiteContainerComponent', () => {
  let component: WebsiteContainerComponent;
  let fixture: ComponentFixture<WebsiteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebsiteContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
