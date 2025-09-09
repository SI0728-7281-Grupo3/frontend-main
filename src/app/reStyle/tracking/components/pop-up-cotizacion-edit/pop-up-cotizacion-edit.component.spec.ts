import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCotizacionEditComponent } from './pop-up-cotizacion-edit.component';

describe('PopUpCotizacionEditComponent', () => {
  let component: PopUpCotizacionEditComponent;
  let fixture: ComponentFixture<PopUpCotizacionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpCotizacionEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpCotizacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
