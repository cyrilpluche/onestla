import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user.class";
import {UserManagementController} from "../../../controllers/user-management.controller";
import {Utility} from "../../../helpers/utility.helper";
import {UserStatusEnum} from "../../../enums";
import {AuthenticationController} from "../../../controllers/authentication.controller";
import {ModalController} from "@ionic/angular";
import {SignupFormComponent} from "../../components/signup-form/signup-form.component";

@Component({
    selector: 'app-profile',
    templateUrl: 'user-management.page.html',
    styleUrls: ['user-management.page.scss']
})
export class UserManagementPage implements OnInit {

    title: string = 'Users'
    users: User[] = []
    loading: boolean = false

    userStatus = UserStatusEnum

    constructor(private _userManagementCtrl: UserManagementController,
                public modalController: ModalController,
                private _authenticationCtrl: AuthenticationController,
                private _util: Utility) {
    }

    ngOnInit() {
        this.initUsers()
    }

    initUsers() {
        this.loading = true
        this._userManagementCtrl.getUsers(true)
            .then(users => {
                this.users = users
                this.loading = false
            })
    }

    async openSignupForm() {
        const modal = await this.modalController.create({
            component: SignupFormComponent,
            cssClass: 'oel-modal',
            componentProps: {
                submit: this.createUser
            }
        });

        modal.present()

        const { data } = await modal.onWillDismiss();
        if (!this._util.isNull(data)) this.users.push(data)
    }

    createUser(user: User) {
        this._authenticationCtrl.signup(user)
            .then(createdUser => {
                if (!this._util.isNull(createdUser)) {
                    this.modalController.dismiss(createdUser)
                }
            })
    }

    saveChanges() {
        this.loading = true
        this._userManagementCtrl.updateUsers(this.users)
            .then(success => {
                this.loading = false
            })
    }

    capitalize(words: string[]): string {
        return this._util.capitalize(words)
    }

}
