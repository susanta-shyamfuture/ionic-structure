import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithNavPage } from './with-nav.page';

import { WithNavRoutingModule } from './with-nav-routing.module';

import { CoreModule } from '../../../core/modules/core.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithNavRoutingModule,
    CoreModule
  ],
  declarations: [WithNavPage]
})
export class WithNavPageModule {}
