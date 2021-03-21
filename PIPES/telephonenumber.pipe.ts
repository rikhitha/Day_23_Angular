import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephonepipe'
})
export class TelephonepipePipe implements PipeTransform {

  transform(num:any,countryselect:any): any 
  {
    let regexpNumber = new RegExp('^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$');
    if(countryselect=="US")
    {
      
      let h=regexpNumber.test(num);
      if(h==true)
      {
        let g="proceed";
        return g;

      }
      else{
        let g="WRONG COUNTRY CODE";
      }
    }
  }

}
