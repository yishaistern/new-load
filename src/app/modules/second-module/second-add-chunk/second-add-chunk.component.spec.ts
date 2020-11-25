import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAddChunkComponent } from './second-add-chunk.component';

describe('SecondAddChunkComponent', () => {
  let component: SecondAddChunkComponent;
  let fixture: ComponentFixture<SecondAddChunkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondAddChunkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondAddChunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
