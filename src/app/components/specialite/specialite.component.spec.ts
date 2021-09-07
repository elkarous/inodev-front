import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpecialiteComponent } from './specialite.component';

describe('SpecialiteComponent', () => {
  let component: SpecialiteComponent;
  let fixture: ComponentFixture<SpecialiteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
