import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { PopUpAprovacionComponent } from './pop-up-aprovacion.component';

describe('PopUpAprovacionComponent', () => {
  let component: PopUpAprovacionComponent;
  let fixture: ComponentFixture<PopUpAprovacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpAprovacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpAprovacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
