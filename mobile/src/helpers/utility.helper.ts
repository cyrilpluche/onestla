import axios from 'axios';
import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class Utility {

    static config = null

    constructor() {

    }

    capitalize(words: string[]): string {
        let sentence = ''
        words.map(w => sentence += w[0].toUpperCase() + w.substring(1, w.length) + ' ')
        return sentence.substring(0, sentence.length - 1)
    }

    isStrEmpty(str: string): boolean {
        return str === undefined || str === null || str.trim() === ''
    }

    isNull(o: object): boolean {
        return o === undefined || o === null
    }

    clone(o: any) {
        return JSON.parse(JSON.stringify(o))
    }

    removeFromArray(array: any[], element: any) {
        let arrayCopy = this.clone(array)
        const index = array.indexOf(element)
        arrayCopy.splice(index, 1)
        return arrayCopy
    }
}