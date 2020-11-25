import { Component, OnInit } from '@angular/core';
import { SomeLogicService } from '../some-logic/some-logic.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  constructor(private som: SomeLogicService) { }
  aa(): void {
    this.som.someFunc2();
  }
  ngOnInit(): void {
  }

}
