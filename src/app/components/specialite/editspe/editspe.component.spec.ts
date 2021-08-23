import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditspeComponent } from './editspe.component';

describe('EditspeComponent', () => {
  let component: EditspeComponent;
  let fixture: ComponentFixture<EditspeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditspeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditspeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
