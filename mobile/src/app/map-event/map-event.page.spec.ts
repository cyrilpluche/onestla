import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapEventPage } from './map-event.page';

describe('Tab2Page', () => {
  let component: MapEventPage;
  let fixture: ComponentFixture<MapEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapEventPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
