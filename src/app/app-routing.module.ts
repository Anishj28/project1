import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowsComponent } from './shows/shows.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [

 {path:'home',component:HomeComponent},
 {path:'movies', component:MoviesComponent},
 {path:'shows', component: ShowsComponent},
 {path:'watchlist', component: WatchlistComponent},
 {path:'login', component: LoginComponent},
 {path:'', redirectTo:"home", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
