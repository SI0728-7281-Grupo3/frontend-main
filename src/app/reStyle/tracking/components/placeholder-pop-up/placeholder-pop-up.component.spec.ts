import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderPopUpComponent } from './placeholder-pop-up.component';

describe('PlaceholderPopUpComponent', () => {
  let component: PlaceholderPopUpComponent;
  let fixture: ComponentFixture<PlaceholderPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceholderPopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceholderPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
