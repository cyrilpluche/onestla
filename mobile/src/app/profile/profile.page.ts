import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/user.class";
import {ProfileController} from "../../controllers/profile.controller";
import {ActivatedRoute, Router} from "@angular/router";
import {Utility} from "../../helpers/utility.helper";
import {Store} from "@ngrx/store";
import {State} from "../../store/store";
import * as fromStore from "../../store/store";
import {Observable} from "rxjs";
import {UserState} from "../../store/reducers/user.reducer";
import {ProfileHeaderComponent} from "./profile-header/profile-header.component";
import {AuthorizationEnum} from "../../enums";

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.page.html',
    styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {

    private id$$: string

    title: string = 'Profile'
    user: User
    notifications: User[] = []

    constructor(private _profileCtrl: ProfileController,
                private _store: Store<State>,
                private _util: Utility,
                private _router: Router,
                private _route: ActivatedRoute) {
        _store.select(fromStore.getUser).subscribe(value => {
            this.id$$ = value.id
        })
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.initUser()
    }

    initUser() {
        const id = this._route.snapshot.paramMap.get('id')

        if (!this._util.isStrEmpty(id)) {
            this._profileCtrl.getProfile(id)
                .then(user => {
                    if (user) {
                        this.user = user
                        this.fetchNotifications(this.user)
                    }
                    else this._router.navigate(['home/search'])
                })
        } else {
            this._router.navigate(['home/search'])
        }
    }

    fetchNotifications(user: User) {
        switch(user.authorization) {
            case AuthorizationEnum.UPDATE:
                this.getNotifications()
                break
            default:
            // nothing
        }
    }

    getNotifications() {
        this._profileCtrl.getPending()
            .then(users => {
                this.notifications = users
            })
    }

}
