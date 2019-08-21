import {NgModule} from '@angular/core';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {UserListComponent} from "./user-list/user-list.component";
import {LibraryModule} from "../library/library.module";
import {SignupFormComponent} from "./signup-form/signup-form.component";

const components = [
    UserListComponent,
    SignupFormComponent
]

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        IonicModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        LibraryModule
    ],
    entryComponents: [
        components
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    ],
    exports: components
})
export class ComponentsModule {
}
