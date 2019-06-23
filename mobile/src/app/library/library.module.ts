import {NgModule} from '@angular/core';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {FormsModule} from "@angular/forms";
import {InputTextComponent} from "./input-text/input-text.component";

@NgModule({
    declarations: [
        InputTextComponent
    ],
    imports: [
        IonicModule.forRoot(),
        FormsModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    exports: [
        InputTextComponent
    ]
})
export class LibraryModule {
}
