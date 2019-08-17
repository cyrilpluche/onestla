import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user.class";
import {ModalController} from '@ionic/angular';
import {ProfileFormComponent} from "../profile-form/profile-form.component";
import {Utility} from "../../../helpers/utility.helper";

@Component({
    selector: 'app-profile-header',
    templateUrl: './profile-header.component.html',
    styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {

    @Input() user: User

    constructor(public modalController: ModalController,
                public _util: Utility) {
    }

    ngOnInit() {
        console.log(this.user)
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
