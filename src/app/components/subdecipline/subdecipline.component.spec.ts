import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdeciplineComponent } from './subdecipline.component';

describe('SubdeciplineComponent', () => {
  let component: SubdeciplineComponent;
  let fixture: ComponentFixture<SubdeciplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubdeciplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdeciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
