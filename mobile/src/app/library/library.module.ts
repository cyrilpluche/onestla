import {NgModule} from '@angular/core';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PageTitleComponent} from "./page-title/page-title.component";

@NgModule({
    declarations: [
        PageTitleComponent
    ],
    imports: [
        IonicModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    ],
    exports: [
        PageTitleComponent
    ]
})
export class LibraryModule {
}
