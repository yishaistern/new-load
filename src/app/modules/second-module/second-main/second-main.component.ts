import { Component, OnInit } from '@angular/core';
import { SomeLogicService } from '../some-logic/some-logic.service';
@Component({
  selector: 'app-second-main',
  templateUrl: './second-main.component.html',
  styleUrls: ['./second-main.component.scss']
})
export class SecondMainComponent implements OnInit {

  constructor(private ser: SomeLogicService) { }

  ngOnInit(): void {
    this.ser.someFunc();
  }

  wwww(): void {
    console.log(1234567890);
  }
}
