import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/user.class";
import {ModalController} from "@ionic/angular";
import {Utility} from "../../../helpers/utility.helper";

@Component({
    selector: 'oel-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

    @Input() label: string = ''

    @Output() evClick = new EventEmitter<any>()

    constructor(private _utility: Utility) {
    }

    ngOnInit() {
    }

    onClick() {
        this.evClick.emit()
    }

}
