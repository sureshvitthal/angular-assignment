import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticker-library',
  templateUrl: './sticker-library.component.html',
  styleUrls: ['./sticker-library.component.scss']
})
export class StickerLibraryComponent implements OnInit {

  public example: string;
  public stickers =[];

  constructor() { }


  ngOnInit() {
  }

  onStickerCreate(emittedData){
    // console.log('DATA', emittedData);
    this.stickers = emittedData;
  }

}
