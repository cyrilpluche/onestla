import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBottomBarPage } from './bottom-bar.page';

describe('BottomBarPage', () => {
  let component: AdminBottomBarPage;
  let fixture: ComponentFixture<AdminBottomBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBottomBarPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBottomBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
