import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpecialityComponent } from './list-speciality.component';

describe('ListSpecialityComponent', () => {
  let component: ListSpecialityComponent;
  let fixture: ComponentFixture<ListSpecialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSpecialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
