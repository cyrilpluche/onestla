import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBottomBarPage } from './admin-bottom-bar.page';

const routes: Routes = [
  {
    path: '',
    component: AdminBottomBarPage,
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../../profile/profile.module#ProfilePageModule'
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
        redirectTo: '/admin/map',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/admin/map',
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
