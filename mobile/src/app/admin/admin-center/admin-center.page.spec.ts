import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCenterPage } from './admin-center.page';

describe('Tab1Page', () => {
  let component: AdminCenterPage;
  let fixture: ComponentFixture<AdminCenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCenterPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
