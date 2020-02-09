import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubManagementPage } from './club-management.page';

describe('Tab1Page', () => {
  let component: ClubManagementPage;
  let fixture: ComponentFixture<ClubManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClubManagementPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
