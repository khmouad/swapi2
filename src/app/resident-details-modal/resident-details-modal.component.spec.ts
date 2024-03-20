import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentDetailsModalComponent } from './resident-details-modal.component';

describe('ResidentDetailsModalComponent', () => {
  let component: ResidentDetailsModalComponent;
  let fixture: ComponentFixture<ResidentDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentDetailsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResidentDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
