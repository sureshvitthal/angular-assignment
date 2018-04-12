import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.scss']
})
export class StickerComponent implements OnInit, OnChanges {

  @Input() stickers = [];

  @Input('imagethumb') imagethumb;
  public base64Datafunc = '';

  constructor() { }

  ngOnInit() {
    /// this.getBase64func(this.imagethumb);
  }

  ngOnChanges() {
    //console.log('Name', this.stickers);
    //this.getBase64func(this.imagethumb);
  }

  getBase64DAta(file) {
    //console.log('file', file);
    var reader = new FileReader();
    var self = this;
    reader.readAsDataURL(file);
    return reader.onload = function () {
      return self.base64Datafunc = reader.result;
    };
    // reader.onerror = function (error) {
    //   console.log('Error: ', error);
    // };
  }


}
