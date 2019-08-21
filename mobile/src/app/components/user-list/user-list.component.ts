 import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../../../models/user.class";
import {Utility} from "../../../helpers/utility.helper";
 import {ProfileController} from "../../../controllers/profile.controller";
 import {FriendService} from "../../../services/friend.service";
 import {ModalController} from "@ionic/angular";

@Component({
    selector: 'oel-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

    @Input() users: User[] = null
    @Input() init: any = null

    @Output() evClick = new EventEmitter<User>()

    constructor(private _utility: Utility,
                public modalController: ModalController,
                private _friendService: FriendService,
                private _profileController: ProfileController) {
    }

    ngOnInit() {
        if (!this._utility.isNull(this.init)) {
            this.init().then(users => {
                this.users = users
            })
        }
    }


    onClick(user: User) {
        this.evClick.emit(user)
    }

    dismiss() {
        this.modalController.dismiss();
    }

}
