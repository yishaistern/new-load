import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainDialogComponent } from '../../shared/main-dialog/main-dialog.component';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title = 'my-new-load';
  doneLoading = false;
  constructor(public dialog: MatDialog, private http: HttpClient) { }
  ngOnInit(): void {
    this.http.post('http://localhost:3000/get-frist-list', {})
    .subscribe((data: any) => {
      this.doneLoading = true;
    });
  }

  aa(): void {
    const dialogRef = this.dialog.open(MainDialogComponent, {
      width: '250px',
      data: {name: 'dasdas', animal: 'dadsa'}
    });
  }

}
