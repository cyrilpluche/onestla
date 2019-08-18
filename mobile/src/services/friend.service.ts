import {Injectable} from '@angular/core';
import {Api} from "../helpers/api.helper";
import {User} from "../models/user.class";

@Injectable({
    providedIn: 'root'
})
export class FriendService {

    constructor(private _api: Api) {

    }

    askFriend(friendId): Promise<boolean> {
        return Api.post('/friend/create', {idReceiver: friendId}).then(res => {
            return res as boolean
        })
    }
}
