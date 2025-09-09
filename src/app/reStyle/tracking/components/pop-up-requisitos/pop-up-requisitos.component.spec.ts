import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpRequisitosComponent } from './pop-up-requisitos.component';

describe('PopUpRequisitosComponent', () => {
  let component: PopUpRequisitosComponent;
  let fixture: ComponentFixture<PopUpRequisitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpRequisitosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
