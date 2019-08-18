import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user.class";
import {ModalController} from '@ionic/angular';
import {ProfileFormComponent} from "../profile-form/profile-form.component";
import {Utility} from "../../../helpers/utility.helper";
import {AuthorizationEnum} from "../../../enums";

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
        switch(this.user.authorization) {
            case AuthorizationEnum.UPDATE:
                this.buttonLabel = 'Modifier Profil'
                this.buttonAction = this.openProfileForm
                break
            case AuthorizationEnum.READONLY:
                this.buttonLabel = 'Devenir Pote'
                this.buttonAction = this.askFriend
                break

            default:
                console.log('nothing')
        }
    }

    askFriend() {
        console.log('become friend')
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
