import { Component, OnInit } from '@angular/core';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  myMovies:any[]=[];
  
  constructor(private W1:WatchService) { }

  ngOnInit(): void {
    this.myMovies=this.W1.WatchList;
  }
  DelInfo(p:any)
  {
   let ind=this.W1.WatchList.indexOf(p);
    this.W1.WatchList.splice(ind,1);
  }
}

