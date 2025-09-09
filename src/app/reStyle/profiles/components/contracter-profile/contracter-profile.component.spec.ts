import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContracterProfileComponent } from './contracter-profile.component';

describe('ContracterProfileComponent', () => {
  let component: ContracterProfileComponent;
  let fixture: ComponentFixture<ContracterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContracterProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContracterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
