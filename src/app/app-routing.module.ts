import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  // // { path: 'user-tabs', loadChildren: './views/user-tabs/user-tabs.module#UserTabsPageModule' },
  // { path: 'login', loadChildren: './views/auth/login/login.module#LoginPageModule' },
  // { path: 'signup', loadChildren: './views/auth/signup/signup.module#SignupPageModule' },
  { path: '', loadChildren: './container/layouts/default/default.module#DefaultPageModule' },
  { path: 'user', loadChildren: './container/layouts/with-nav/with-nav.module#WithNavPageModule' },
  { path: '**', redirectTo: 'user/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
