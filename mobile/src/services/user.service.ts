import {Injectable} from '@angular/core';
import {Api} from "../helpers/api.helper";
import {User} from "../models/user.class";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private _api: Api) {

    }

    log(username: string, password: string): Promise<{token: string, id: string}> {
        let basicAuth = 'Basic ' + btoa(username + ':' + password);

        let config = {
            headers: { 'Authorization': basicAuth }
        }

        return Api.get('/authentication/login', config)
            .then(res => {
                return res as {token: string, id: string}
            })
    }

    sign(user: User): Promise<User> {
        return Api.post('/authentication/signup', user).then(res => new User(res))
    }

    getProfile(id: string): Promise<User> {
        return Api.get('/user/profile?_id=' + id).then(res => {
            console.log(res)
            return new User(res)
        })
    }

    getUsers(): Promise<User[]> {
        return Api.get('/user/find_all').then(res => {
            return res as User[]
        })
    }

    searchUsers(params: string = ''): Promise<User[]> {
        return Api.get('/user/search' + params).then(res => {
            return res as User[]
        })
    }
}
