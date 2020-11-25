import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondMoreComponent } from './second-more.component';

describe('SecondMoreComponent', () => {
  let component: SecondMoreComponent;
  let fixture: ComponentFixture<SecondMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
