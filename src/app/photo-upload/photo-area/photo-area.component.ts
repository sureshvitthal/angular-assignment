import { Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-photo-area',
  templateUrl: './photo-area.component.html',
  styleUrls: ['./photo-area.component.scss']
})
export class PhotoAreaComponent implements OnInit {
  public selectedFile: any;
  public fileSizeLimit=  2;
  //public testdatatochild:string = 'Test Message';
  public childevent:string;
  //constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  onImageSelect(event) {
    const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (let i = 0; i < files.length; i++) {
      const fileSizeInMB = +(files[i].size / (1024 * 1024)).toFixed(2);
      //files[i]['fileName'] = files[i]['name'];
      const file = files[i];     

      if (this.validate(file)) {
        if (this.isValidType(file)) {
          // to avoid XSS(cross side scripting)           
          if (this.fileSizeLimit >= fileSizeInMB) {
            //file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));         
            this.selectedFile = file;    
            console.log(this.selectedFile);     
          } else {           
            alert("You can Upload image of size 2 MB or less than !!!");
          }
        } else {         
          alert('Only PNG and JPEG are supported !!!');
        }
      }
    }
  }


  validate(file: File): boolean {
    return true;
  }

  isValidType(file: File): boolean {
    const acceptFileTypes = /^image\/(jpe?g|JPE?G|png|PNG)$|^application\/(pdf)$/i;
    return acceptFileTypes.test(file.type);
  }

  public reset: any[] = [{}];

  public resetAll() 
  {
    //var imgpath = this.selectedFile.name;
    //this.selectedFile = {};
   // this.selectedFile.reset();
  }


  onchildtoparent(emittedData)
  {
    this.childevent = emittedData;
  }


}


