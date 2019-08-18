import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user.class";
import {ModalController} from '@ionic/angular';
import {ProfileFormComponent} from "../profile-form/profile-form.component";
import {Utility} from "../../../helpers/utility.helper";
import {AuthorizationEnum} from "../../../enums";
import {ProfileController} from "../../../controllers/profile.controller";

@Component({
    selector: 'app-profile-header',
    templateUrl: './profile-header.component.html',
    styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {

    @Input() user: User

    buttonLabel: string
    buttonAction: any

    constructor(public modalController: ModalController,
                private _profileController: ProfileController,
                public _util: Utility) {
    }

    ngOnInit() {
        this.initActions()
    }

    test() {
        console.log(this.user)
        console.log(this.buttonLabel)
        console.log(this.buttonAction)
    }

    initActions() {
        console.log('auth : ', this.user.authorization)
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
                this.buttonAction = this.destroyFriend
                break
            case AuthorizationEnum.FRIEND:
                this.buttonLabel = 'My Men'
                this.buttonAction = this.destroyFriend
                break
            default:
                // nothing
        }
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

    destroyFriend() {
        console.log('destroy')
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

}
