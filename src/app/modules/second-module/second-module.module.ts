import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondModuleRoutingModule } from './second-module-routing.module';
import { SecondMainComponent } from './second-main/second-main.component';
import { SecondSecondComponent } from './second-second/second-second.component';
import { SecondMoreComponent } from './second-more/second-more.component';
import { SecondAddChunkComponent } from './second-add-chunk/second-add-chunk.component';
import { SecondPageComponent } from './second-page/second-page.component';


@NgModule({
  declarations: [SecondMainComponent, SecondSecondComponent, SecondMoreComponent, SecondAddChunkComponent, SecondPageComponent],
  imports: [
    CommonModule,
    SecondModuleRoutingModule
  ]
})
export class SecondModuleModule { }
