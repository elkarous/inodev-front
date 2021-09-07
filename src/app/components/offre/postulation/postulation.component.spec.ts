import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostulationComponent } from './postulation.component';

describe('PostulationComponent', () => {
  let component: PostulationComponent;
  let fixture: ComponentFixture<PostulationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
