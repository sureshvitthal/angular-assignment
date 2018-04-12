import { Injectable } from "@angular/core";

@Injectable()
export class UtilityService{

    public convertFileToBase64(file,callbac){ 
        //console.log(file);
        // let base64Data:string;
        let reader = new FileReader();        
        reader.readAsDataURL(file);


        return reader.onload = function () {         
         return reader.result;
        };
        
        reader.onerror = function (error) {
          console.log('Error: ', error); 
        };       
    }
}