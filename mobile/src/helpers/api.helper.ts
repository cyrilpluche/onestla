import axios from 'axios';
import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";

const BASE_URL = environment.baseUrl;

@Injectable({
    providedIn: 'root'
})
export class Api {

    static config: object = {}

    constructor() {

    }

    static get (url: string, config: object = this.config) {
        return axios.get(BASE_URL + url, config).then(res  => res.data)
    }

    static post (url: string, body) {
        return axios.post(BASE_URL + url, body)
    }

    static put (url: string, body) {
        return axios.put(BASE_URL + url, body)
    }

    static delete (url: string) {
        return axios.delete(BASE_URL + url)
    }
}