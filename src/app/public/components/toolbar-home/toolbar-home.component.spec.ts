import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarHomeComponent } from './toolbar-home.component';

describe('ToolbarHomeComponent', () => {
  let component: ToolbarHomeComponent;
  let fixture: ComponentFixture<ToolbarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolbarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
