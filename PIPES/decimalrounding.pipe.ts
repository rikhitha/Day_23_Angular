import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalroundingpipe'
})
export class DecimalroundingpipePipe implements PipeTransform {

  transform(value:number): number {
    return Math.round(value);
  }

}
