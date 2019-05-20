import {Component, EventEmitter, Output} from '@angular/core';
import {Club} from "../../models/club/club.class";
import {ClubService} from "../../models/club/club.service";
import * as _ from 'lodash';
import {User} from "../../models/user/user.class";

@Component({
    selector: 'app-map-event',
    templateUrl: 'map-event.page.html',
    styleUrls: ['map-event.page.scss']
})
export class MapEventPage {

    clubs: Club[]
    clubSelected: Club = null
    friendList: User[] = []

    ionViewWillEnter() {
        ClubService.getClubs().then(clubs => {
            for (let club of clubs ) {
                club.iconUrl = 'https://pbs.twimg.com/profile_images/2883144287/d0fcaf6edc8c2886763b8e3b2cc91436_400x400.jpeg'
            }
            this.clubs = clubs
        })
        this.friendList = ClubService.getFriendList()
    }

    retrieveClub(pos: {lat: number, lng: number}) {
        this.clubSelected = _.find(this.clubs, pos)
    }

}
