import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProfilePage} from './profile.page';
import {StatsComponent} from "./stats/stats.component";
import {ProfileHeaderComponent} from "./profile-header/profile-header.component";
import {LibraryModule} from "../library/library.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: ProfilePage}]),
        LibraryModule
    ],
    declarations: [
        ProfilePage,
        StatsComponent,
        ProfileHeaderComponent
    ]
})

export class ProfilePageModule {
}
