import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-more',
  templateUrl: './second-more.component.html',
  styleUrls: ['./second-more.component.scss']
})
export class SecondMoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getsomea(): void {
    for (let index = 0; index < 5; index++) {
      console.log(index);
    }
  }

  getsomeb(): void {
    for (let index = 0; index < 5; index++) {
      console.log(index);
    }
  }

  getsomec(): void {
    for (let index = 0; index < 5; index++) {
      console.log(index);
    }
  }

  getsomed(): void {
    for (let index = 0; index < 5; index++) {
      console.log(index);
    }
  }

  getsomee(): void {
    for (let index = 0; index < 5; index++) {
      console.log(index);
    }
  }

  getsomef(): void {
    for (let index = 0; index < 5; index++) {
      console.log(index);
    }
  }

}
