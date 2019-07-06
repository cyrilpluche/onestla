import {Injectable} from '@angular/core';
import {Api} from "../helpers/api.helper";
import {User} from "../models/user.class";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private _api: Api) {

    }

    log(username: string, password: string): Promise<{token: string}> {
        let basicAuth = 'Basic ' + btoa(username + ':' + password);

        let config = {
            headers: { 'Authorization': basicAuth }
        }

        return Api.get('/authentication/login', config)
            .then(res => {
                return res as {token: string}
            })
    }

    sign(user: User): Promise<User> {
        return Api.post('/authentication/signup', user).then(res => new User(res))
    }
}
