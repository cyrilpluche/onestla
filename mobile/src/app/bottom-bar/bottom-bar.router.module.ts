import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BottomBarPage} from './bottom-bar.page';

const routes: Routes = [
    {
        path: '',
        component: BottomBarPage,
        children: [
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: '../profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: 'profile/:id',
                children: [
                    {
                        path: '',
                        loadChildren: '../profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: 'search/profile/:id',
                children: [
                    {
                        path: '',
                        loadChildren: '../profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: 'map',
                children: [
                    {
                        path: '',
                        loadChildren: '../map-event/map-event.module#MapEventPageModule'
                    }
                ]
            },
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren: '../search/search.module#SearchPageModule'
                    }
                ]
            },
            {
                path: 'admin',
                children: [
                    {
                        path: '',
                        loadChildren: '../admin/admin-center/admin-center.module#AdminCenterPageModule'
                    }
                ]
            },
            {
                path: 'admin/users',
                children: [
                    {
                        path: '',
                        loadChildren: '../admin/user-management/user-management.module#UserManagementPageModule'
                    }
                ]
            },
            {
                path: 'admin/clubs',
                children: [
                    {
                        path: '',
                        loadChildren: '../admin/club-management/club-management.module#ClubManagementPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/home/map',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/home/map',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class BottomBarPageRoutingModule {
}
