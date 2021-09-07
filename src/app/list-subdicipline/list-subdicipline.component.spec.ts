import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubdiciplineComponent } from './list-subdicipline.component';

describe('ListSubdiciplineComponent', () => {
  let component: ListSubdiciplineComponent;
  let fixture: ComponentFixture<ListSubdiciplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubdiciplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubdiciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
