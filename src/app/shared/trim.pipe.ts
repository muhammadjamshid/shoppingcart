import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim',
})
export class TrimPipe implements PipeTransform {

  transform(value : any): any {
    var trimmedString;
    console.log(value)
    if(value.length>20)
    {
      trimmedString= value.substring(0, 20)+"...";
    }
    else{
      trimmedString= value;
    }
    return trimmedString;
  }

}
