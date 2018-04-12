import { Component, Input, Output, EventEmitter} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { FileValidator } from '../../../global/directives/file-input.validator';


@Component({
  selector: 'app-photo-upload-form',
  templateUrl: './photo-upload-form.component.html',
  styleUrls: ['./photo-upload-form.component.scss']
})
export class PhotoUploadFormComponent {

  @Output('stickerName') stickerName = new EventEmitter<any>();

  public stickers = [];

  frm: FormGroup;
  sticker_name: string = '';
  file: any;
  errormessage: string = 'This field is required';
  fileerrormessage: string = 'Please upload a file';


  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.frm = this.fb.group({
      sticker_name: [null, Validators.required],
      file: ["", FileValidator.validate],
    })

  }

  onFormSubmit() {
    let eachItem = {
      'sticker_name': this.frm.value.sticker_name,
      'sticker': this.frm.value.file
    }
    
    this.stickers.push(eachItem);
    //console.log(this.stickers); 

    this.stickerName.emit(this.stickers);
  }


}  