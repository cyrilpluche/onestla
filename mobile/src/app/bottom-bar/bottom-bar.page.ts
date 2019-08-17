import {Component, OnInit} from '@angular/core';

interface Tabs {
    url: string
    icon: string
}

@Component({
    selector: 'app-bottom-bar',
    templateUrl: 'bottom-bar.page.html',
    styleUrls: ['bottom-bar.module.scss']
})
export class BottomBarPage implements OnInit {

    tabs: Tabs[] = [
        { url: 'map', icon: 'planet'},
        { url: 'search', icon: 'search'},
        { url: 'profile', icon: 'person'}
    ]


    constructor() {}

    ngOnInit() {

    }

}
