import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashSupervisorComponent } from './dash-supervisor.component';

describe('DashSupervisorComponent', () => {
  let component: DashSupervisorComponent;
  let fixture: ComponentFixture<DashSupervisorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashSupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
