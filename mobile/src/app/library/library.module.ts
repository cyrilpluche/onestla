import {NgModule} from '@angular/core';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PageTitleComponent} from "./page-title/page-title.component";
import {UserItemComponent} from "./user-item/user-item.component";
import {NumberItemComponent} from "./number-item/number-item.component";
import {ButtonComponent} from "./button/button.component";
import {CommonModule} from "@angular/common";
import {LoaderListComponent} from "./loader-list/loader-list.component";

const components = [
    PageTitleComponent,
    UserItemComponent,
    NumberItemComponent,
    ButtonComponent,
    LoaderListComponent
]

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    ],
    exports: components
})
export class LibraryModule {
}
