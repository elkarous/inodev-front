import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddoffreComponent } from './addoffre.component';

describe('AddoffreComponent', () => {
  let component: AddoffreComponent;
  let fixture: ComponentFixture<AddoffreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
