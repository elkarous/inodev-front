import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigprofileComponent } from './bigprofile.component';

describe('BigprofileComponent', () => {
  let component: BigprofileComponent;
  let fixture: ComponentFixture<BigprofileComponent>;

  beforeEach(async(() => {
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
