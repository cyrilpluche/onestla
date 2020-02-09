import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user.class";
import {UserManagementController} from "../../../controllers/user-management.controller";
import {Utility} from "../../../helpers/utility.helper";
import {ClubTypeEnum, UserStatusEnum} from "../../../enums";
import {AuthenticationController} from "../../../controllers/authentication.controller";
import {ModalController} from "@ionic/angular";
import {SignupFormComponent} from "../../components/signup-form/signup-form.component";
import {Club} from "../../../models/club.class";
import {ClubManagementController} from "../../../controllers/club-management.controller";

@Component({
    selector: 'app-club-management',
    templateUrl: 'club-management.page.html',
    styleUrls: ['club-management.page.scss']
})
export class ClubManagementPage implements OnInit {

    title: string = 'Clubs'
    clubs: Club[] = []
    loading: boolean = false

    clubType = ClubTypeEnum

    constructor(private _clubManagementCtrl: ClubManagementController,
                public modalController: ModalController,
                private _authenticationCtrl: AuthenticationController,
                private _util: Utility) {
    }

    ngOnInit() {
        this.initClubs()
    }

    initClubs() {
        this.loading = true
        this._clubManagementCtrl.getClubs(true)
            .then(clubs => {
                this.clubs = clubs
                this.loading = false
            })
    }

    async openClubForm() {
        /*const modal = await this.modalController.create({
            component: SignupFormComponent,
            cssClass: 'oel-modal',
            componentProps: {
                submit: this.createClub
            }
        });

        modal.present()

        const { data } = await modal.onWillDismiss();
        if (!this._util.isNull(data)) this.users.push(data)*/
    }

    createClub(user: User) {
        /*this._authenticationCtrl.signup(club)
            .then(createdUser => {
                if (!this._util.isNull(createdUser)) {
                    this.modalController.dismiss(createdUser)
                }
            })*/
    }

    saveChanges() {
        // this.loading = true
        /*this._clubManagementCtrl.updateUsers(this.users)
            .then(success => {
                this.loading = false
            })*/
    }

    capitalize(words: string[]): string {
        return this._util.capitalize(words)
    }

}
