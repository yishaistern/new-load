import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MainDialogComponent } from './main-dialog/main-dialog.component';
import { SubDialogComponent } from './sub-dialog/sub-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DynamicDialogComponent } from './dynamic-dialog/dynamic-dialog.component';
import { HostDynamicDirective } from './host-dynamic.directive';

@NgModule({
  declarations: [MainDialogComponent, SubDialogComponent, DynamicDialogComponent, HostDynamicDirective],
  exports: [MainDialogComponent, SubDialogComponent, MatTableModule, DynamicDialogComponent],
  entryComponents: [MainDialogComponent, SubDialogComponent, DynamicDialogComponent],
  imports: [
    MatTableModule,
    CommonModule,
    MatDialogModule,
  ]
})
export class SharedModule { }
