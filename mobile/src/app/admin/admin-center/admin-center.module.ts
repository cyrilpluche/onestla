import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminCenterPage} from './admin-center.page';
import {LibraryModule} from "../../library/library.module";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: AdminCenterPage}]),
        LibraryModule,
        ReactiveFormsModule,
        ComponentsModule,
    ],
    declarations: [
        AdminCenterPage,
    ]
})

export class AdminCenterPageModule {
}
