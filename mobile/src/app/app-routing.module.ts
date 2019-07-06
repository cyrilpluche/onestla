import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './login/login.module#LoginPageModule'},
    {path: 'admin', loadChildren: './admin/admin-bottom-bar/admin-bottom-bar.module#AdminBottomBarPageModule'},
    {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
    {path: 'home', loadChildren: './bottom-bar/bottom-bar.module#BottomBarPageModule'}

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
