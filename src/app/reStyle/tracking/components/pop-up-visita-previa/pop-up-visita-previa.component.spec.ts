import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpVisitaPreviaComponent } from './pop-up-visita-previa.component';

describe('PopUpVisitaPreviaComponent', () => {
  let component: PopUpVisitaPreviaComponent;
  let fixture: ComponentFixture<PopUpVisitaPreviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpVisitaPreviaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpVisitaPreviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
