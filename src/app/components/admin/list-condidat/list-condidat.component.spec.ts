import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListCondidatComponent } from './list-condidat.component';

describe('ListCondidatComponent', () => {
  let component: ListCondidatComponent;
  let fixture: ComponentFixture<ListCondidatComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCondidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCondidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
