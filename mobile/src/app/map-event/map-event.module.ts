import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MapEventPage} from './map-event.page';
import {MapLeafletComponent} from "./map-leaflet/map-leaflet.component";
import {LibraryModule} from "../library/library.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: MapEventPage}]),
        LibraryModule
    ],
    declarations: [
        MapEventPage,
        MapLeafletComponent
    ]
})
export class MapEventPageModule {
}
