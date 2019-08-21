import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UserManagementPage} from './user-management.page';
import {LibraryModule} from "../../library/library.module";
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        LibraryModule,
        ComponentsModule,
        RouterModule.forChild([{path: '', component: UserManagementPage}])
    ],
    declarations: [
        UserManagementPage
    ]
})

export class UserManagementPageModule {
}
