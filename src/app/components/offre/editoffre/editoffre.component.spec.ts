import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditoffreComponent } from './editoffre.component';

describe('EditoffreComponent', () => {
  let component: EditoffreComponent;
  let fixture: ComponentFixture<EditoffreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
