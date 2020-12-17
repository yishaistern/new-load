import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstModuleRoutingModule } from './first-module-routing.module';
import { MainComponent } from './main/main.component';
import { SubComponent } from './sub/sub.component';
import { SharedModule } from '../shared/shared.module';
import { TherdComponent } from './therd/therd.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [MainComponent, SubComponent, TherdComponent],
  imports: [
    CommonModule,
    SharedModule,
    FirstModuleRoutingModule,
    NgxPaginationModule
  ]
})
export class FirstModuleModule { }
