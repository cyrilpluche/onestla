import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBarPage } from './bottom-bar.page';

describe('BottomBarPage', () => {
  let component: BottomBarPage;
  let fixture: ComponentFixture<BottomBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BottomBarPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
