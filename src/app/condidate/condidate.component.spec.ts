import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidateComponent } from './condidate.component';

describe('CondidateComponent', () => {
  let component: CondidateComponent;
  let fixture: ComponentFixture<CondidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
