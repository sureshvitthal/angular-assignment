import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerLibraryComponent } from './sticker-library.component';

describe('StickerLibraryComponent', () => {
  let component: StickerLibraryComponent;
  let fixture: ComponentFixture<StickerLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickerLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
