import {Injectable} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user.class";
import {FriendService} from "../services/friend.service";

@Injectable({
    providedIn: 'root'
})
export class ProfileController {

    constructor(private _userService: UserService,
                private _friendService: FriendService) {

    }

    getProfile(id: string): Promise<User> {
        let user: User = null
        return this._userService.getProfile(id)
            .then(res => {
                user = res
            })
            .catch(err => {
                console.log(err)
            })
            .then(() => user)
    }

    askFriend(friendId: string): Promise<boolean> {
        let success = true
        return this._friendService.askFriend(friendId)
            .then(res => {
                // nothing
            })
            .catch(err => {
                success = false
            })
            .then(() => success)
    }
}
