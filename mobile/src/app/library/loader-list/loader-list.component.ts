import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/user.class";
import {ModalController} from "@ionic/angular";
import {Utility} from "../../../helpers/utility.helper";

@Component({
    selector: 'oel-loader-list',
    templateUrl: './loader-list.component.html',
    styleUrls: ['./loader-list.component.scss'],
})
export class LoaderListComponent implements OnInit {

    @Input() loading: boolean = false
    @Input() message: string = ''

    constructor(private _utility: Utility) {
    }

    ngOnInit() {
    }

}
