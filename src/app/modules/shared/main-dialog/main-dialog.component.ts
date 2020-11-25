import { Component, OnInit, Inject } from '@angular/core';
import * as moment from 'moment';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-main-dialog',
  templateUrl: './main-dialog.component.html',
  styleUrls: ['./main-dialog.component.scss']
})
export class MainDialogComponent implements OnInit {
  someVar: moment.Moment;
  cc: string;
  constructor(
    public dialogRef: MatDialogRef<MainDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    const a = moment.utc('2016-01-01');
    const b = a.add(1, 'week');
    a.format();
    this.someVar = moment('someDate');
    this.cc = this.someVar.toString();
  }

}
