import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorSidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: ContractorSidebarComponent;
  let fixture: ComponentFixture<ContractorSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractorSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractorSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
