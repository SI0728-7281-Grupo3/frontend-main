import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCotizacionComponent } from './pop-up-cotizacion.component';

describe('PopUpCotizacionComponent', () => {
  let component: PopUpCotizacionComponent;
  let fixture: ComponentFixture<PopUpCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpCotizacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopUpCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
