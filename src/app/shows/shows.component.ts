import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { ShowsdataService } from '../showsdata.service';
import { WatchService } from '../watch.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  searchTerm:string;
  MovieList:any[]=[];
  page:number=1;
  totalLength:any;
  constructor(private S1:ShowsdataService,private W1:WatchService) { }
  ngOnInit(): void 
  {
    console.log("ngOnint is called")
   this.S1.getShowsData().subscribe(
    data=>
    {
      this.MovieList=data.items;
      this.totalLength=this.MovieList.length;
    },
    err=>
    {
      console.log("Error occured ",err);
    },
  )
  }

  checkMovie(p:any):boolean
  {
  let idx= this.W1.WatchList.findIndex(function(e)
   {
     return e.id==p.id;
   })
   if(idx==-1)
   return true;
   else
   return false;
  }
  sendInfo(p:any)
  {
    this.W1.WatchList.push(p);
  }
  DelInfo(p:any)
  {
   let ind=this.W1.WatchList.indexOf(p);
    this.W1.WatchList.splice(ind,1);
  }
  
}