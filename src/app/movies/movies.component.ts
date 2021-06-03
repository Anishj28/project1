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
  check:boolean=true;
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
  sendInfo(p:any,ind:any)
  {
    this.W1.WatchList.push(p);
    this.check=false;
  }
  DelInfo(p:any)
  {
   let ind=this.W1.WatchList.indexOf(p);
   if(ind==-1)
   {
     alert("YOU MUST ADD TO REMOVE IT");
   }
   else
   {
     this.W1.WatchList.splice(ind,1);
   }
  }
  
}
