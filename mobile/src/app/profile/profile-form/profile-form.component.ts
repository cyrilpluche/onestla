import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user.class";
import {ModalController} from "@ionic/angular";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Field, fields, forms} from "../../forms/login.form";

@Component({
    selector: 'app-profile-form',
    templateUrl: './profile-form.component.html',
    styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {

    @Input() user: User

    public formUser: FormGroup
    public fields: Field[]

    constructor(public modalController: ModalController,
                private formBuilder: FormBuilder) {
        this.formUser = formBuilder.group(forms.userUpdate)
        console.log('ok')
    }

    ngOnInit() {
        this.fields = fields.userUpdate
    }

    saveUserInformations() {
        console.log(this.user)
    }

    dismiss() {
        this.modalController.dismiss()
    }

}
