import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviedataService {
  constructor(private hc:HttpClient) { }
  getMovieData():Observable<any>
  {
    return this.hc.get<any>("https://imdb-api.com/en/API/MostPopularMovies/k_apk52fnh");
  }
}
