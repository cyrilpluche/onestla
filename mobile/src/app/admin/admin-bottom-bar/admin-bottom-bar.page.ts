import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../../store/store";
import {Utility} from "../../../helpers/utility.helper";
import * as fromStore from "../../../store/store";
import {Tabs} from "../../bottom-bar/bottom-bar.page";

@Component({
    selector: 'app-admin-bottom-bar',
    templateUrl: 'admin-bottom-bar.page.html',
    styleUrls: ['admin-bottom-bar.module.scss']
})
export class AdminBottomBarPage {

    tabs: Tabs[] = [
        {url: 'map', icon: 'planet'},
        {url: 'search', icon: 'search'},
        {url: 'users', icon: 'person'},
        {url: 'clubs', icon: 'person'}
    ]

    constructor(public store: Store<State>,
                public _util: Utility) {
    }

}
