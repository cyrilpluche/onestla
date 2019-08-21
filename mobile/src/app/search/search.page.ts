import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.class";
import {UserManagementController} from "../../controllers/user-management.controller";
import {Utility} from "../../helpers/utility.helper";
import {Router} from "@angular/router";

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    users: User[]
    loading: boolean = false

    constructor(private _userManagementCtrl: UserManagementController,
                private _router: Router) {
    }

    ngOnInit() {
    }

    load() {
        this.loading = true
    }

    search(event) {
        let value = (event.detail.value)
        if (value !== '') {
            this._userManagementCtrl.searchUsers(value)
                .then(users => {
                    this.users = users
                    this.loading = false
                })
        } else {
            this.users = []
            this.loading = false
        }
    }

    openProfile(user: User) {
        this._router.navigate(['home/search/profile/' + user._id])
    }

}
