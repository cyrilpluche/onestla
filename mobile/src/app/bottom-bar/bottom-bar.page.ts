import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import { Store } from '@ngrx/store'
import * as fromStore from '../../store/store'
import {State} from "../../store/store";
import {UserState} from "../../store/reducers/user.reducer";
import {Utility} from "../../helpers/utility.helper";

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

    public user$: Observable<UserState>

    tabs: Tabs[] = [
        { url: 'map', icon: 'planet'},
        { url: 'search', icon: 'search'},
        { url: 'profile', icon: 'person'}
    ]

    constructor(public store: Store<State>,
                public _util: Utility) {
        this.user$ = store.select(fromStore.getUser)
        this.user$.subscribe(value => {
            if (!_util.isStrEmpty(value.id)) this.tabs[2].url += '/' + value.id
        })
    }

    ngOnInit() {

    }

}
