import { Pipe, PipeTransform } from '@angular/core';
import {Document} from '../models/document';

@Pipe({
  name: 'unique',
  pure: false
})
export class UniquePipe implements PipeTransform {


  transform(documents: Document[]): Document[] {
    let repeat=0;
    let unique: Document[]=[];
    for (let i = 0; i < documents.length; i++) {
      for (let j = 0; j < unique.length; j++){
        if(unique[j].type==documents[i].type){
          repeat++;
        }
      }
      if (repeat==0){
        unique[unique.length]=documents[i];
      }
      repeat=0;
    }
    console.log(unique);
    return unique;
  }

}
