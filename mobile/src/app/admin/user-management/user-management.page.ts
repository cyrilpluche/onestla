import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user.class";
import {UserManagementController} from "../../../controllers/user-management.controller";
import {Utility} from "../../../helpers/utility.helper";
import {UserStatusEnum} from "../../../enums";

@Component({
    selector: 'app-profile',
    templateUrl: 'user-management.page.html',
    styleUrls: ['user-management.page.scss']
})
export class UserManagementPage implements OnInit {

    title: string = 'Users'
    users: User[] = []

    userStatus = UserStatusEnum

    constructor(private _userManagementCtrl: UserManagementController,
                private _utility: Utility) {
    }

    ngOnInit() {
        this.initUsers()
    }

    initUsers() {
        this._userManagementCtrl.getUsers(true)
            .then(users => {
                this.users = users
            })
    }

    saveChanges() {
        console.log('go buddy')
        this._userManagementCtrl.updateUsers(this.users)
            .then(success => {
                console.log(success)
            })
    }

    capitalize(words: string[]): string {
        return this._utility.capitalize(words)
    }

}
