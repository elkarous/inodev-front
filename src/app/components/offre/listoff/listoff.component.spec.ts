import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoffComponent } from './listoff.component';

describe('ListoffComponent', () => {
  let component: ListoffComponent;
  let fixture: ComponentFixture<ListoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
