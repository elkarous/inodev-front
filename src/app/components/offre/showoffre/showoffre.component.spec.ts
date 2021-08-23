import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowoffreComponent } from './showoffre.component';

describe('ShowoffreComponent', () => {
  let component: ShowoffreComponent;
  let fixture: ComponentFixture<ShowoffreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowoffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
