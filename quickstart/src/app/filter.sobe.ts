import {Pipe, PipeTransform} from '@angular/core';
import {Soba} from './app.soba';

@Pipe({name:'filterSoba'})
export class FilterSobaPipe implements PipeTransform{

    transform(value:Array,
      brojKreveta:string,
      brojKvadrata:string){

      if (!brojKreveta && !brojKvadrata){
        return value;
      }
      else if(value){
          return value.filter((i:any) =>{  return (!brojKreveta || i["broj_kreveta"]==brojKreveta) &&
           (!brojKvadrata || i["broj_kvadrata"]==brojKvadrata) ;});
      }
    }
}
