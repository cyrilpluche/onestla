import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user/user.class";
import {ModalController} from "@ionic/angular";

@Component({
    selector: 'oel-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {

    @Input() user: User

    constructor(public modalController: ModalController) {
    }

    ngOnInit() {
    }

    saveUserInformations() {
        console.log(this.user)
    }

    dismiss() {
        this.modalController.dismiss()
    }

}
