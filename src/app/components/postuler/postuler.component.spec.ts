import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostulerComponent } from './postuler.component';

describe('PostulerComponent', () => {
  let component: PostulerComponent;
  let fixture: ComponentFixture<PostulerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
