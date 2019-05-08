import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user/user.class";
import {ModalController} from '@ionic/angular';
import {ProfileFormComponent} from "../profile-form/profile-form.component";

@Component({
    selector: 'app-profile-header',
    templateUrl: './profile-header.component.html',
    styleUrls: ['./profile-header.component.scss'],
})
export class ProfileHeaderComponent implements OnInit {

    @Input() user: User = new User()

    followDetails: { number: Number, label: String }[]

    constructor(public modalController: ModalController) {
    }

    ngOnInit() {
        this.followDetails = [
            {number: this.user.followerSum, label: 'sauces'},
            {number: this.user.followSum, label: 'idoles'}
        ]
    }

    async openProfileForm() {
        const modal = await this.modalController.create({
            component: ProfileFormComponent,
            componentProps: {
                user: this.user
            }
        });
        return await modal.present();
    }

}
