import {Injectable} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user.class";

@Injectable({
    providedIn: 'root'
})
export class UserManagementController {

    constructor(private _userService: UserService) {

    }

    getUsers(admin: boolean = false): Promise<User[]> {
        let users: User[] = []
        return this._userService.getUsers(admin)
            .then(res => {
                users = res
            })
            .catch(err => {
                // console.log(err)
            })
            .then(() => users as User[])
    }

    updateUsers(users: User[]): Promise<Boolean> {
        let success = false
        return this._userService.updateMultiple(users)
            .then(res => {
                console.log(res)
                success = true
            })
            .catch(err => {
                // console.log(err)
            })
            .then(() => success)
    }

    searchUsers(search: string): Promise<User[]> {
        let users: User[] = []
        return this._userService.searchUsers('?search=' + search)
            .then(res => {
                users = res
            })
            .catch(err => {
                // console.log(err)
            })
            .then(() => users as User[])
    }

}
