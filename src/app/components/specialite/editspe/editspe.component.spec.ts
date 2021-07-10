import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditspeComponent } from './editspe.component';

describe('EditspeComponent', () => {
  let component: EditspeComponent;
  let fixture: ComponentFixture<EditspeComponent>;

  beforeEach(async(() => {
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
