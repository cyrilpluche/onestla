import {Injectable} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user.class";
import {ClubService} from "../services/club.service";
import {Club} from "../models/club.class";

@Injectable({
    providedIn: 'root'
})
export class ClubManagementController {

    constructor(private _clubService: ClubService) {

    }

    getClubs(admin: boolean = false): Promise<Club[]> {
        let clubs: Club[] = []
        return this._clubService.getClubs(true)
            .then(res => {
                clubs = res
            })
            .catch(err => {
                // console.log(err)
            })
            .then(() => clubs as Club[])
    }

    /*updateClubs(users: User[]): Promise<Boolean> {
        let success = false
        return this._clubService.updateMultiple(users)
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
        return this._clubService.searchUsers('?search=' + search)
            .then(res => {
                users = res
            })
            .catch(err => {
                // console.log(err)
            })
            .then(() => users as User[])
    }*/

}
