import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user/user.class";
import {ModalController} from "@ionic/angular";

@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {

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
