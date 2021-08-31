import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSocietyComponent } from './list-society.component';

describe('ListSocietyComponent', () => {
  let component: ListSocietyComponent;
  let fixture: ComponentFixture<ListSocietyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSocietyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
