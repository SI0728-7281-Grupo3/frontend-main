import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemodelerSearchComponent } from './remodeler-search.component';

describe('RemodelerSearchComponent', () => {
  let component: RemodelerSearchComponent;
  let fixture: ComponentFixture<RemodelerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemodelerSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemodelerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
