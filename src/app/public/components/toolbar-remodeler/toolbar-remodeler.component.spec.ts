import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarRemodelerComponent } from './toolbar-remodeler.component';

describe('ToolbarRemodelerComponent', () => {
  let component: ToolbarRemodelerComponent;
  let fixture: ComponentFixture<ToolbarRemodelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarRemodelerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolbarRemodelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
