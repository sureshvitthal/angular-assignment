import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAreaComponent } from './photo-area.component';

describe('PhotoAreaComponent', () => {
  let component: PhotoAreaComponent;
  let fixture: ComponentFixture<PhotoAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
