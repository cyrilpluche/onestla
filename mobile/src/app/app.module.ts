import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProfileFormComponent} from "./profile/profile-form/profile-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LibraryModule} from "./library/library.module";
import {reducers} from "../store/reducers";
import { StoreModule } from '@ngrx/store'

@NgModule({
    declarations: [
        AppComponent,
        ProfileFormComponent
    ],
    entryComponents: [
        ProfileFormComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        StoreModule.forRoot(reducers),
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
        ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
