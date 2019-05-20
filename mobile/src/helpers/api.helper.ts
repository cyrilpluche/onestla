import axios from 'axios';
import {Injectable} from "@angular/core";

const BASE_URL = 'http://localhost:3000/api';

@Injectable({
    providedIn: 'root'
})
export class ApiHelper {

    constructor() {

    }

    static get (url) {
        return axios.get(BASE_URL + url).then(res  => res.data)
    }

    static post (url, body) {
        return axios.post(BASE_URL + url, body)
    }

    static put (url, body) {
        return axios.put(BASE_URL + url, body)
    }

    static delete (url) {
        return axios.delete(BASE_URL + url)
    }
}