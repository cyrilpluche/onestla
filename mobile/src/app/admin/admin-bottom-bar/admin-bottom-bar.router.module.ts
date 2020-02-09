import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBottomBarPage } from './admin-bottom-bar.page';

const routes: Routes = [
  {
    path: '',
    component: AdminBottomBarPage,
    children: [
      {
        path: 'users',
        children: [
          {
            path: '',
            loadChildren: '../club-management/club-management.module#ClubManagementPageModule'
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: '../../map-event/map-event.module#MapEventPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/admin/users',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/admin/users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminBottomBarPageRoutingModule {}
