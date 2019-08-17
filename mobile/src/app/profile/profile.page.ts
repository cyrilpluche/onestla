import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.class";
import {ProfileController} from "../../controllers/profile.controller";
import {ActivatedRoute} from "@angular/router";
import {Utility} from "../../helpers/utility.helper";

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {

    title: string = 'Profile'
    user: User

    constructor(private _profileCtrl: ProfileController,
                private _util: Utility,
                private _route: ActivatedRoute) {}

    ngOnInit() {
        this.initUser()
    }

    initUser() {
        const id = this._route.snapshot.paramMap.get('id')

        if (!this._util.isStrEmpty(id)) {
            this._profileCtrl.getUser(id)
                .then(user => {
                    this.user = user
                })
        }
    }

}
