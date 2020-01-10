import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratepartComponent } from './collaboratepart.component';

describe('CollaboratepartComponent', () => {
  let component: CollaboratepartComponent;
  let fixture: ComponentFixture<CollaboratepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaboratepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
