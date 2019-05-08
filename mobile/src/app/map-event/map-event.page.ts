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
        this.clubs = ClubService.getClubs()
        this.friendList = ClubService.getFriendList()
    }

    retrieveClub(pos: {lat: number, lng: number}) {
        this.clubSelected = _.find(this.clubs, pos)
    }

}
