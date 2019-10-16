import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTabsPage } from './user-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: UserTabsPage,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home.module#HomePageModule' },
      { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
      { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule' },
      { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTabsRoutingModule { }
