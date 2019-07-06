import {Injectable} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user.class";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationController {

    constructor(private _userService: UserService) {

    }

    login(username: string, password: string): Promise<boolean> {
        let success = false
        return this._userService.log(username, password)
            .then(res => {
                success = true
                localStorage.setItem('token', res.token)
            })
            .catch(err => {
                localStorage.removeItem('token')
                // console.log(err)
            })
            .then(() => success)
    }

    signup(user: User): Promise<boolean> {
        let success = false
        return this._userService.sign(user)
            .then(res =>{
                success = true
            })
            .catch(err => {
                console.log(err)
            })
            .then(() => success)
    }
}
