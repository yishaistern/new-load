import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubModuleRoutingModule } from './sub-module-routing.module';
import { SubComponent } from './sub/sub.component';
import { SharedModule } from '../shared/shared.module';
import { TherdComponent } from './therd/therd.component';

@NgModule({
  declarations: [ SubComponent, TherdComponent],
  imports: [
    CommonModule,
    SharedModule,
    FirstModuleRoutingModule,
  ]
})
export class SubModuleModule { }
