import {Injectable} from '@angular/core';
import {Api} from "../helpers/api.helper";
import {User} from "../models/user.class";
import {Utility} from "../helpers/utility.helper";

@Injectable({
    providedIn: 'root'
})
export class FriendService {

    constructor(private _api: Api,
                private _util: Utility) {

    }

    askFriend(friendId): Promise<boolean> {
        return Api.post('/friend/create', {idReceiver: friendId}).then(res => {
            return !this._util.isNull(res)
        })
    }

    getPending(): Promise<User[]> {
        return Api.get('/friend/find_pending').then(res => {
            return res as User[]
        })
    }

    getFriends(): Promise<User[]> {
        return Api.get('/friend/list').then(res => {
            return res as User[]
        })
    }

    accept(friendId: string): Promise<boolean> {
        return Api.put('/friend/accept?idAsker=' + friendId, null).then(res => {
            return !this._util.isNull(res)
        })
    }

    removeFriend(friendId): Promise<boolean> {
        return Api.delete('/friend/delete?idReceiver=' + friendId).then(res => {
            return !this._util.isNull(res)
        })
    }
}
