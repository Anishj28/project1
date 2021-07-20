import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(MovieList:any[],searchTerm:string): any[] {
    if(!MovieList || !searchTerm)
    return MovieList;
    else
    {
      return MovieList.filter(Obj1=>
          Obj1.title.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
   
  }

}
