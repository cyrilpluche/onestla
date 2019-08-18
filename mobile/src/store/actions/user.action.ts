import { Store } from '@ngrx/store'
import { Action } from '@ngrx/store'
import {State} from "../store";

export const UserTypes = {
    USERCHANGE: '[User] Change'
}

export class UserAction implements Action {
    constructor(public store: Store<State>,
                public type: string,
                public payload: any) {}

    dispatch() {
        this.store.dispatch({type: this.type, payload: this.payload})
    }
}