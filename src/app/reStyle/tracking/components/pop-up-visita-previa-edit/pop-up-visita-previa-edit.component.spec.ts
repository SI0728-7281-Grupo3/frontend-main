import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpVisitaPreviaEditComponent } from './pop-up-visita-previa-edit.component';

describe('PopUpVisitaPreviaEditComponent', () => {
  let component: PopUpVisitaPreviaEditComponent;
  let fixture: ComponentFixture<PopUpVisitaPreviaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpVisitaPreviaEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpVisitaPreviaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
