import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/user/user.class";

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {

    @Input() user: User = new User()

    constructor() {
    }

    ngOnInit() {
    }

}
