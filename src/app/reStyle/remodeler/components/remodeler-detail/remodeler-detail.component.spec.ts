import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemodelerDetailComponent } from './remodeler-detail.component';

describe('RemodelerDetailComponent', () => {
  let component: RemodelerDetailComponent;
  let fixture: ComponentFixture<RemodelerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemodelerDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemodelerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
