import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashproComponent } from './dashpro.component';

describe('DashproComponent', () => {
  let component: DashproComponent;
  let fixture: ComponentFixture<DashproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
