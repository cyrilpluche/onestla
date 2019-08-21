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

    logged() {
        return Api.get('/authentication/logged')
            .then(res => {
                return res as {token: string, id: string}
            })
    }

    sign(user: User): Promise<User> {
        return Api.post('/authentication/signup', user).then(res => new User(res))
    }

    getProfile(id: string): Promise<User> {
        return Api.get('/user/profile?_id=' + id).then(res => {
            return new User(res)
        })
    }

    getUsers(admin: boolean): Promise<User[]> {
        let url = '/user/find_all'
        if (admin) url = '/user/admin/find_all'
        return Api.get(url).then(res => {
            return res as User[]
        })
    }

    updateMultiple(body: User[] = []): Promise<any> {
        return Api.put('/user/admin/update_many', body).then(res => {
            return res
        })
    }

    searchUsers(params: string = ''): Promise<User[]> {
        return Api.get('/user/search' + params).then(res => {
            return res as User[]
        })
    }
}
