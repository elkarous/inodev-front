import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BigprofileComponent } from './bigprofile.component';

describe('BigprofileComponent', () => {
  let component: BigprofileComponent;
  let fixture: ComponentFixture<BigprofileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BigprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
