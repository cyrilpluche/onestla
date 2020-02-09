import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfilePage} from './profile.page';
import {StatsComponent} from "./stats/stats.component";
import {ProfileHeaderComponent} from "./profile-header/profile-header.component";
import {LibraryModule} from "../library/library.module";
import {ComponentsModule} from "../components/components.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: ProfilePage}]),
        LibraryModule,
        ReactiveFormsModule,
        ComponentsModule
    ],
    declarations: [
        ProfilePage,
        StatsComponent,
        ProfileHeaderComponent
    ]
})

export class ProfilePageModule {
}
