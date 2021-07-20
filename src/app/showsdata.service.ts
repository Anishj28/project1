import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShowsdataService {

  constructor(private hc:HttpClient) { }
  getShowsData():Observable<any>
  {
    return this.hc.get<any>("https://imdb-api.com/en/API/Top250TVs/k_y4se40g3");
  }
}
