import { Component, OnInit } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  MovieList:any;
  Toogle:boolean=true;
  constructor(private M1:MoviedataService,private W1:WatchService) { }
  ngOnInit(): void 
  {
    console.log("ngOnint is called")
    this.M1.getMovieData().subscribe(
      data=>
      {
        this.MovieList=data;
      },
      err=>
      {
        console.log("Error occured ",err);
      },
    )
  }
  sendInfo(p:any)
  {
    this.W1.WatchList.push(p);
    this.Toogle=!this.Toogle;
  }
  DelInfo(ind:any)
  {
    this.W1.WatchList.slice(ind,1);
    this.Toogle=!this.Toogle;
  }
}
