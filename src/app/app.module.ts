import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { PhotoAreaComponent } from './photo-upload/photo-area/photo-area.component';
import { StickerLibraryComponent } from './photo-upload/sticker-library/sticker-library.component';
import { ImageHolderComponent } from './photo-upload/photo-area/image-holder/image-holder.component';
import { PhotoUploadFormComponent } from './photo-upload/sticker-library/photo-upload-form/photo-upload-form.component';
import { StickerComponent } from './photo-upload/sticker-library/sticker/sticker.component';


@NgModule({
  declarations: [
    AppComponent,
    PhotoUploadComponent,
    PhotoAreaComponent,
    StickerLibraryComponent,
    ImageHolderComponent,
    PhotoUploadFormComponent,
    StickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
