 import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/user.class";
import {Utility} from "../../../helpers/utility.helper";
 import {ProfileController} from "../../../controllers/profile.controller";
 import {FriendService} from "../../../services/friend.service";
 import {ModalController} from "@ionic/angular";
 import {FormBuilder, FormGroup} from "@angular/forms";
 import {Field, fields, forms} from "../../forms/login.form";
 import {AuthenticationController} from "../../../controllers/authentication.controller";

@Component({
    selector: 'oel-user-list',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {


    private signupForm: FormGroup
    public signupFields: Field[]

    @Input() submit: any = null

    constructor(private formBuilder: FormBuilder,
                private _util: Utility,
                private _authenticationCtrl: AuthenticationController,
                public modalController: ModalController) {
        this.signupForm = formBuilder.group(forms.signin)
    }

    ngOnInit() {
        this.signupFields = fields.signin
    }

    onSubmit() {
        const user: User = this.signupForm.value

        if (user.password !== user.passwordConfirmation) {
            this.signupForm.controls['passwordConfirmation'].setErrors({ incorrect: true})
        } else if (!this._util.isNull(this.submit)) {
            this.submit(user)
        } else {
            this.dismiss()
        }
    }

    dismiss() {
        this.modalController.dismiss();
    }

}
