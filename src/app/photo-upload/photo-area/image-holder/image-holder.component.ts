import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-image-holder',
  templateUrl: './image-holder.component.html',
  styleUrls: ['./image-holder.component.scss']
})
export class ImageHolderComponent implements OnInit, OnChanges {

  @Input('image') image;
  @Input() 
  testdata: string;

  
  //@Output('childtoparent') childtoparent = new EventEmitter<any>();
  //childtoparent.emit('Test Message');

  // @Output() value: EventEmitter<any> = new EventEmitter();
  // this.value.emit({ message: 'data'});


  public base64Data = '';
  constructor() { }

  ngOnInit() {
    // console.log('app-image-holder')
  }

  ngOnChanges() {    
    this.getBase64(this.image);
  }

  private getBase64(file) {
    var reader = new FileReader();
    var self = this;
  
      //debugger;
      reader.readAsDataURL(file);
      reader.onload = function () {      
        self.base64Data =  reader.result;
      };
    reader.onerror = function (error) {
      console.log('Error: ', error); 
    };
 }

}
