import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainDialogComponent } from './modules/shared/main-dialog/main-dialog.component';
import { DynamicDialogComponent } from './modules/shared/dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-new-load';
  constructor(public dialog: MatDialog) {}
  aa(): void {
    const dialogRef = this.dialog.open(MainDialogComponent, {
      width: '250px',
      data: {name: 'dasdas', animal: 'dadsa'}
    });
  }

  bb(): void {
    const dialogRef = this.dialog.open(DynamicDialogComponent, {
      width: '250px',
      data: {key: 'aa'}
    });
  }
}
