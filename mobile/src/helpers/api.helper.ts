import axios from 'axios';
import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";

const BASE_URL = environment.baseUrl;

@Injectable({
    providedIn: 'root'
})
export class Api {

    static config = null

    constructor() {

    }

    static get (url: string, config: object = this.config) {
        if (!config) config = { headers: { 'Authorization': localStorage.getItem('token') }}
        return axios.get(BASE_URL + url, config).then(res  => res.data)
    }

    static post (url: string, body, config: object = this.config) {
        if (!config) config = { headers: { 'Authorization': localStorage.getItem('token') }}
        return axios.post(BASE_URL + url, body, config)
    }

    static put (url: string, body, config: object = this.config) {
        if (!config) config = { headers: { 'Authorization': localStorage.getItem('token') }}
        return axios.put(BASE_URL + url, body, config)
    }

    static delete (url: string, config: object = this.config) {
        if (!config) config = { headers: { 'Authorization': localStorage.getItem('token') }}
        return axios.delete(BASE_URL + url, config)
    }
}