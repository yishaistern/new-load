import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModuleRoutingModule } from './first-module-routing.module';
import { MainComponent } from './main/main.component';
import { SubComponent } from './sub/sub.component';
import { SharedModule } from '../shared/shared.module';
import { TherdComponent } from './therd/therd.component';

@NgModule({
  declarations: [MainComponent, SubComponent, TherdComponent],
  imports: [
    CommonModule,
    SharedModule,
    FirstModuleRoutingModule
  ]
})
export class FirstModuleModule { }
