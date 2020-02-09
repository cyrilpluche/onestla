import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {State} from "../../../store/store";
import {Utility} from "../../../helpers/utility.helper";
import {Tabs} from "../../bottom-bar/bottom-bar.page";

@Component({
    selector: 'app-profile',
    templateUrl: 'admin-center.page.html',
    styleUrls: ['admin-center.page.scss']
})
export class AdminCenterPage implements OnInit {


    title = 'Admin Center'

    tabs: Tabs[] = [
        {url: '/home/admin/users', label: 'Users', icon: 'person'},
        {url: '/home/admin/clubs', label: 'Clubs', icon: 'planet'},
    ]

    constructor(private _store: Store<State>,
                private _util: Utility,
                private _router: Router,
                private _route: ActivatedRoute) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
    }

    navigate(url: string) {
        console.log(url)
        this._router.navigate([url])
    }
}
