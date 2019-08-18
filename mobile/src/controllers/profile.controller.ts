import {Injectable} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user.class";

@Injectable({
    providedIn: 'root'
})
export class ProfileController {

    constructor(private _userService: UserService) {

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

}
