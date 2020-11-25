import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-second',
  templateUrl: './second-second.component.html',
  styleUrls: ['./second-second.component.scss']
})
export class SecondSecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cccc(): void {
    console.log(123);
  }
  aaaa(): void {
    this.cccc();
  }
  bbbb(): void {
    this.cccc();
  }
}
