import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowoffreComponent } from './showoffre.component';

describe('ShowoffreComponent', () => {
  let component: ShowoffreComponent;
  let fixture: ComponentFixture<ShowoffreComponent>;

  beforeEach(async(() => {
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
