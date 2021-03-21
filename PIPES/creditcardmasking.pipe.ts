import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creitmasking'
})
export class CreitmaskingPipe implements PipeTransform {

  transform(value:string): any {
    
    var first4 = value.substring(0, 4);
    var last5 = value.substring(value.length - 5);

    let mask = value.substring(4, value.length - 5).replace(/\d/g,"*");
    let s=first4 + mask + last5;
    return s;
    
  }

}
