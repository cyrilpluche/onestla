import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {BottomBarPageRoutingModule} from './bottom-bar.router.module';

import {BottomBarPage} from './bottom-bar.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        BottomBarPageRoutingModule
    ],
    declarations: [BottomBarPage]
})
export class BottomBarPageModule {
}
