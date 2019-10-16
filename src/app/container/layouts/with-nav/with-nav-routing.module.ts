import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithNavPage } from './with-nav.page';

const routes: Routes = [
  {
    path: '',
    component: WithNavPage,
    data: {
      title: 'Nav layout'
    },
    children: [
      // { path: '', redirectTo: 'tabs', pathMatch: 'full' },
      { path: '', loadChildren: '../../../views/user-tabs/user-tabs.module#UserTabsPageModule' },
    ]
  },
  // { path: 'user-tabs', loadChildren: '../../../views/user-tabs/user-tabs.module#UserTabsPageModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithNavRoutingModule { }
