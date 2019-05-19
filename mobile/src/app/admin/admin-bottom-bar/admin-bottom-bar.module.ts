import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdminBottomBarPageRoutingModule} from './admin-bottom-bar.router.module';

import {AdminBottomBarPage} from './admin-bottom-bar.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        AdminBottomBarPageRoutingModule
    ],
    declarations: [AdminBottomBarPage]
})
export class AdminBottomBarPageModule {
}
