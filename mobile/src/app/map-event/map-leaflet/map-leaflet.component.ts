import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Map, latLng, tileLayer, Layer, marker} from 'leaflet';
import {Club} from "../../../models/club/club.class";
import * as L from 'leaflet';

@Component({
    selector: 'app-map-leaflet',
    templateUrl: './map-leaflet.component.html',
    styleUrls: ['./map-leaflet.component.scss'],
})
export class MapLeafletComponent implements OnInit {

    map: Map;

    @Input() clubs: Club[] = []
    @Input() lat: number = 43.608688
    @Input() lng: number = 3.880122
    @Output() onClubSelected = new EventEmitter()

    tile: String = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'

    constructor() {
    }

    ngOnInit() {
        this.leafletMap()
        this.onMapReady(this.map)
    }

    leafletMap() {
        // In setView add latLng and zoom
        this.map = new Map('map').setView([this.lat, this.lng], 16);
        tileLayer(this.tile.toString(), {
            attribution: 'edupala.com © ionic LeafLet',
        }).addTo(this.map);
    }

    onMapReady(map: L.Map) {
        setTimeout(() => {
            map.invalidateSize();
            this.leafletMarker()
        }, 0);
    }

    leafletMarker() {
        for (let club of this.clubs) {
            const icon = this.customIcon(club.iconUrl)

            marker([club.lat, club.lng], {icon: icon}).addTo(this.map)
                .on('click', e => {
                    this.onClubSelected.emit(e['latlng'])
                })
                .bindPopup(club.name)
        }
    }

    customIcon(iconUrl: string) {
        return L.icon({
            iconUrl: iconUrl,
            iconSize:     [60, 60], // size of the icon
            iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
        });
    }

}
