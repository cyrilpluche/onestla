import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/user.class";
import {ModalController} from "@ionic/angular";
import {Utility} from "../../../helpers/utility.helper";

@Component({
    selector: 'oel-user-item',
    templateUrl: './user-item.component.html',
    styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {

    @Input() user: User = new User()

    @Output() evClick = new EventEmitter<User>()

    constructor(private _utility: Utility) {
    }

    ngOnInit() {
    }

    capitalize(words: string[]): string {
        return this._utility.capitalize(words)
    }

    onClick(user: User) {
        this.evClick.emit(user)
    }

}
