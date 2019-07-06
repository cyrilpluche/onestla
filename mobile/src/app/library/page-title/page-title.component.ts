import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user.class";
import {ModalController} from "@ionic/angular";

@Component({
    selector: 'oel-page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent implements OnInit {

    @Input() text: string = ''

    constructor() {
    }

    ngOnInit() {
    }

}
