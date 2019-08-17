import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user.class";
import {UserManagementController} from "../../../controllers/user-management.controller";

@Component({
    selector: 'app-profile',
    templateUrl: 'user-management.page.html',
    styleUrls: ['user-management.page.scss']
})
export class UserManagementPage implements OnInit {

    title: string = 'Users'
    users: User[] = []

    constructor(private _userManagementCtrl: UserManagementController) {}

    ngOnInit() {
        this.initUsers()
    }

    initUsers() {
        this._userManagementCtrl.getUsers()
            .then(users => {
                this.users = users
                console.log(this.users)
            })
    }

}
