import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLeafletComponent } from './map-leaflet.component';

describe('LeafletComponent', () => {
  let component: MapLeafletComponent;
  let fixture: ComponentFixture<MapLeafletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLeafletComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
