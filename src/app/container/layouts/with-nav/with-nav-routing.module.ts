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
      { path: '', loadChildren: '../../../views/user-tabs/user-tabs.module#UserTabsPageModule' },
      // { path: 'login', loadChildren: '../../../views/auth/login/login.module#LoginPageModule' },
      // { path: 'signup', loadChildren: '../../../views/auth/signup/signup.module#SignupPageModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithNavRoutingModule { }
