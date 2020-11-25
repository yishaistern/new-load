import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMainComponent } from './second-main.component';

describe('SecondMainComponent', () => {
  let component: SecondMainComponent;
  let fixture: ComponentFixture<SecondMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
