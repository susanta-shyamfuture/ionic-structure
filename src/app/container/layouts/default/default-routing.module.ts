import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultPage } from './default.page';

const routes: Routes = [
  {
    path: '',
    component: DefaultPage,
    data: {
      title: 'Default layout'
    },
    children: [
      { path: 'login', loadChildren: '../../../views/auth/login/login.module#LoginPageModule' },
      { path: 'signup', loadChildren: '../../../views/auth/signup/signup.module#SignupPageModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
