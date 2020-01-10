import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Part1Component } from './part1.component';

describe('Part1Component', () => {
  let component: Part1Component;
  let fixture: ComponentFixture<Part1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Part1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Part1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
