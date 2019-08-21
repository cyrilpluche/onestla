import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './login/login.module#LoginPageModule'},
    {path: 'admin', loadChildren: './admin/user-management/user-management.module#UserManagementPageModule'},
    {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
    {path: 'home', loadChildren: './bottom-bar/bottom-bar.module#BottomBarPageModule'},
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
