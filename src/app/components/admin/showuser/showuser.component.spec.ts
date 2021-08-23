import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowuserComponent } from './showuser.component';

describe('ShowuserComponent', () => {
  let component: ShowuserComponent;
  let fixture: ComponentFixture<ShowuserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
