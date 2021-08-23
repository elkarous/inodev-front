import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListoffComponent } from './listoff.component';

describe('ListoffComponent', () => {
  let component: ListoffComponent;
  let fixture: ComponentFixture<ListoffComponent>;

  beforeEach(waitForAsync(() => {
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
