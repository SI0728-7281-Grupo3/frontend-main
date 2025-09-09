import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemodelerProfileComponent } from './remodeler-profile.component';

describe('RemodelerProfileComponent', () => {
  let component: RemodelerProfileComponent;
  let fixture: ComponentFixture<RemodelerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemodelerProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemodelerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
