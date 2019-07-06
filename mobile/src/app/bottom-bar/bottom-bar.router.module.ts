import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomBarPage } from './bottom-bar.page';

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
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: '../map-event/map-event.module#MapEventPageModule'
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
export class BottomBarPageRoutingModule {}
