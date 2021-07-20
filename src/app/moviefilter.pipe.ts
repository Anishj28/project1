import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviefilter'
})
export class MoviefilterPipe implements PipeTransform {

  transform(MovieList:any[],checkList:any[]):any[] {
    return MovieList.filter(Obj1=>
        checkList.indexOf(Obj1)==-1);
  }

}
