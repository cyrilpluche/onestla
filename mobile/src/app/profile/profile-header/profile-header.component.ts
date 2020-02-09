import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user.class";
import {ModalController} from '@ionic/angular';
import {ProfileFormComponent} from "../profile-form/profile-form.component";
import {Utility} from "../../../helpers/utility.helper";
import {AuthorizationEnum} from "../../../enums";
import {ProfileController} from "../../../controllers/profile.controller";
import {UserListComponent} from "../../components/user-list/user-list.component";

@Component({
    selector: 'app-profile-header',
    templateUrl: './profile-header.component.html',
    styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {

    @Input() user: User
    @Input() notifications: User[] = []

    buttonLabel: string
    buttonAction: any

    constructor(public modalController: ModalController,
                public _profileController: ProfileController,
                public _util: Utility) {
    }

    ngOnInit() {
        this.initActions()
    }

    test() {
        console.log(this.notifications)
    }

    initActions() {
        switch(this.user.authorization) {
            case AuthorizationEnum.UPDATE:
                this.buttonLabel = 'Modifier Profil'
                this.buttonAction = this.openProfileForm
                break
            case AuthorizationEnum.READONLY:
                this.buttonLabel = 'Devenir Pote'
                this.buttonAction = this.askFriend
                break
            case AuthorizationEnum.PENDING:
                this.buttonLabel = 'Suspense'
                this.buttonAction = this.cancelFriend
                break
            case AuthorizationEnum.WAITING:
                this.buttonLabel = 'Waiting'
                this.buttonAction = this.cancelFriend
                break
            case AuthorizationEnum.FRIEND:
                this.buttonLabel = 'My Men'
                this.buttonAction = this.removeFriend
                break
            default:
                // nothing
        }
    }

    becomeFriend(friend: User) {
        this._profileController.acceptFriend(friend._id)
            .then(success => {
                this.removeNotification(friend)
                this.user.friendsSum += 1
            })
    }

    refuseFriend(friend: User) {
        this._profileController.removeFriend(friend._id)
            .then(success => {
                this.removeNotification(friend)
            })
    }

    removeNotification(friend: User) {
        this.notifications = this._util.removeFromArray(this.notifications, friend)
        console.log(this.notifications)
    }

    askFriend() {
        this._profileController.askFriend(this.user._id)
            .then(success => {
                if (success) {
                    this.user.authorization = AuthorizationEnum.PENDING
                    this.initActions()
                }
            })
    }

    removeFriend() {
        this._profileController.removeFriend(this.user._id)
            .then(success => {
                if (success) {
                    this.user.authorization = AuthorizationEnum.READONLY
                    this.user.friendsSum -= 1
                    this.initActions()
                }
            })
    }

    cancelFriend() {
        this._profileController.removeFriend(this.user._id)
            .then(success => {
                if (success) {
                    this.user.authorization = AuthorizationEnum.READONLY
                    this.initActions()
                }
            })
    }

    async openProfileForm() {
        const modal = await this.modalController.create({
            component: ProfileFormComponent,
            cssClass: 'oel-modal',
            componentProps: {
                user: this.user
            }
        });
        return await modal.present();
    }

    async openUserList() {
        const modal = await this.modalController.create({
            component: UserListComponent,
            cssClass: 'oel-modal',
            componentProps: {
                user: this.user,
                init: this._profileController.getFriends
            }
        });
        return await modal.present();
    }


}
