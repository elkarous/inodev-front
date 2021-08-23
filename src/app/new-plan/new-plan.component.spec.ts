import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewPlanComponent } from './new-plan.component';

describe('NewPlanComponent', () => {
  let component: NewPlanComponent;
  let fixture: ComponentFixture<NewPlanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
