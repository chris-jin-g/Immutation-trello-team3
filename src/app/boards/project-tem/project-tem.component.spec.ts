import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTemComponent } from './project-tem.component';

describe('ProjectTemComponent', () => {
  let component: ProjectTemComponent;
  let fixture: ComponentFixture<ProjectTemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
