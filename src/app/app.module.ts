import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PhotoUploadComponent } from './photo-upload/photo-upload.component';
import { PhotoAreaComponent } from './photo-upload/photo-area/photo-area.component';
import { StickerLibraryComponent } from './photo-upload/sticker-library/sticker-library.component';
import { ImageHolderComponent } from './photo-upload/photo-area/image-holder/image-holder.component';
import { PhotoUploadFormComponent } from './photo-upload/sticker-library/photo-upload-form/photo-upload-form.component';
import { StickerComponent } from './photo-upload/sticker-library/sticker/sticker.component';

// DIRECTIVE 
import {FileValidator} from './global/directives/file-input.validator';
import {FileValueAccessor} from './global/file-control-vaue-accessor';


//SERVICE
import { UtilityService } from '../app/global/utility.service';

@NgModule({
  declarations: [
    AppComponent,
    PhotoUploadComponent,
    PhotoAreaComponent,
    StickerLibraryComponent,
    ImageHolderComponent,
    PhotoUploadFormComponent,
    StickerComponent,
    FileValueAccessor,
    FileValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
