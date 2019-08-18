import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from '@ngrx/store'
import * as fromStore from '../../store/store'
import {State} from "../../store/store";
import {UserState} from "../../store/reducers/user.reducer";
import {Utility} from "../../helpers/utility.helper";
import {Router} from "@angular/router";

interface Tabs {
    url: string
    icon: string
}

@Component({
    selector: 'app-bottom-bar',
    templateUrl: 'bottom-bar.page.html',
    styleUrls: ['bottom-bar.module.scss']
})
export class BottomBarPage implements OnInit {

    private id$$: string

    tabs: Tabs[] = [
        {url: 'map', icon: 'planet'},
        {url: 'search', icon: 'search'},
        {url: 'profile/     ', icon: 'person'}
    ]

    constructor(public store: Store<State>,
                public _util: Utility) {
        store.select(fromStore.getUser).subscribe(value => {
            this.buildUrl(value.id)
        })
    }

    ngOnInit() {

    }

    buildUrl(id) {
        if (!this._util.isStrEmpty(id)) this.tabs[2].url = 'profile/' + id
        else this.tabs[2].url = 'profile/'
    }

    test() {
        // console.log(this.tabs)
    }

}
