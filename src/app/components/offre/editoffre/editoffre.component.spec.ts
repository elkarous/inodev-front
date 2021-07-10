import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditoffreComponent } from './editoffre.component';

describe('EditoffreComponent', () => {
  let component: EditoffreComponent;
  let fixture: ComponentFixture<EditoffreComponent>;

  beforeEach(async(() => {
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
