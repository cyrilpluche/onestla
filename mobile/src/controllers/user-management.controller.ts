import {Injectable} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user.class";

@Injectable({
    providedIn: 'root'
})
export class UserManagementController {

    constructor(private _userService: UserService) {

    }

    getUsers(): Promise<User[]> {
        let users: User[] = []
        return this._userService.getUsers()
            .then(res => {
                users = res
            })
            .catch(err => {
                // console.log(err)
            })
            .then(() => users as User[])
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
