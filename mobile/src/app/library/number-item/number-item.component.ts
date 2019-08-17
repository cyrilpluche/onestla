import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Utility} from "../../../helpers/utility.helper";

@Component({
    selector: 'oel-number-item',
    templateUrl: './number-item.component.html',
    styleUrls: ['./number-item.component.scss'],
})
export class NumberItemComponent implements OnInit {

    @Input() number: number = 0
    @Input() label: string = ''

    @Output() evClick = new EventEmitter<any>()

    constructor(private _utility: Utility) {
    }

    ngOnInit() {
    }

    capitalize(words: string[]): string {
        return this._utility.capitalize(words)
    }

    onClick() {
        this.evClick.emit()
    }

}
